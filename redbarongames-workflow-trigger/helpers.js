const response = (statusCode, body) => {
  return {
    statusCode,
    body
  }
}

module.exports = { response };
