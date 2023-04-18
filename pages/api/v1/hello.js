import RESTSchema from "/utils/RESTSchema.js";

export default function REST(request, response) {
  RESTSchema(response, 200, true, {"name": "John Doe"});
};