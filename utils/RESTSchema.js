export default function RESTSchema(response, status, success, result, code) {
  code = code || status;
  response.status(status).json({success, code, result});
};