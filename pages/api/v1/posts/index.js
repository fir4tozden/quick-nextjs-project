// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import RESTSchema from "/utils/RESTSchema.js";

export default function REST(request, response) {
  if (request.method === "POST") {
    RESTSchema(response, 500, true, "It's nice that you want to share a post! But I am not connected to a database. :(", 10001);
  } else RESTSchema(response, 405, false, "Method Not Allowed");
};