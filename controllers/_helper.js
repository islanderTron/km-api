/**
 * Create a Sucess Response
 */

module.exports.createSuccessResponse = (statusCode, body) => {
  return {
    statusCode: statusCode || 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8080',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  };
};

/**
 * Create a Error Response
 */
module.exports.createErrorResponse = (statusCode, message) => {
  return {
    statusCode: statusCode || 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"message": message}),
  }
}