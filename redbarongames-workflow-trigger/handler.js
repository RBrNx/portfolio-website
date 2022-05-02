'use strict';

const axios = require('axios')

module.exports.trigger = async (event) => {
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
