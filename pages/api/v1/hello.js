import RESTSchema from "/utils/RESTSchema.js";

export default function REST(request, response) {
  if (request.method === "GET") {
    RESTSchema(response, 200, true, {"message": "Hello, Client! You made this request with the GET method."});
  } else if (request.method === "POST") {
    RESTSchema(response, 200, true, {"message": "Hello, Client! You made this request with the POST method."});
  } else if (request.method === "PUT") {
    RESTSchema(response, 200, true, {"message": "Hello, Client! You made this request with the PUT method."});
  } else if (request.method === "PATCH") {
    RESTSchema(response, 200, true, {"message": "Hello, Client! You made this request with the PATCH method."});
  } else if (request.method === "DELETE") {
    RESTSchema(response, 200, true, {"message": "Hello, Client! You made this request with the DELETE method."});
  } else RESTSchema(response, 200, true, {"message": "Hello, Client! You made this request with the " + request.method + " method."});
};