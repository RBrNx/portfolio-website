'use strict';

const axios = require('axios')
const { verifyWebhookSignature } = require('@graphcms/utils');
const { response } = require('./helpers.js')

let lastExecuted = null;

module.exports.trigger = async (event) => {
  const { SECRET_KEY } = process.env;
  const { body, headers } = event;
  const signature = headers['gcms-signature'];

  const validExecutionTime = new Date();
  validExecutionTime.setMinutes(validExecutionTime.getMinutes() - 1);
  if(lastExecuted && lastExecuted > validExecutionTime) {
    return response(200, 'Already processing request')
  }

  if(!body || !signature){
    return response(401, 'Unauthorized - Invalid Request')
  }

  const isValidRequest = verifyWebhookSignature({ rawPayload: body, signature, secret: SECRET_KEY });

  if(!isValidRequest) {
    return response(401, 'Unauthorized - Invalid Request')
  }

  const { status } = await axios.post(
    'https://api.github.com/repos/RBrNx/portfolio-website/actions/workflows/deploy-gatsby-site.yml/dispatches',
    { ref: 'master' },
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      }
    }
  )

  if (status === 204) {
    lastExecuted = new Date();
    return response(200, 'GitHub API called')
  }

  return response(400)
}
