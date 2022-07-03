'use strict';

const axios = require('axios')
const { verifyWebhookSignature } = require('@graphcms/utils');

module.exports.trigger = async (event) => {
  const { SECRET_KEY } = process.env;
  const { body, headers } = event;
  const signature = headers['gcms-signature'];

  const isValidRequest = verifyWebhookSignature({ body, signature, secret: SECRET_KEY });

  if(!isValidRequest) {
    return {
      statusCode: 401,
      body: 'Unauthorized - Invalid Request'
    }
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
    return {
      statusCode: 200,
      body: 'GitHub API called'
    }
  }

  return {
    statusCode: 400
  }
}
