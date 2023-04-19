export default function RESTSchema(response, status, success, result, code) {
  code = code || status;
  if (success === true) {
    response.status(status).json({success, code, result});
  } else response.status(status).json({success, code, "message": result});
};