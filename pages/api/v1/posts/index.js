// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import RESTSchema from "~/utils/RESTSchema.js";
import posts from "~/EXAMPLE_DB_posts.json";

export default async function Handler(request, response) {
  if (request.method === "GET") {
    RESTSchema(response, 200, true, posts);
  } else if (request.method === "POST") {
    RESTSchema(response, 500, true, "It's nice that you want to share a post! But I am not connected to a database. :(", 10001);
  } else RESTSchema(response, 405, false, "Method Not Allowed");
};