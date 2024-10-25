// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import RESTSchema from "~/utils/RESTSchema.js";
import posts from "~/EXAMPLE_DB_posts.json";

export default async function Handler(request, response) {
  if (request.method === "GET") {
    let post = posts.find(post => post.id === request.query.post_id);

    if (!post) return RESTSchema(response, 404, false, "Post not found.");

    RESTSchema(response, 200, true, post);
  } else if (request.method === "DELETE") {
    let post = posts.find(post => post.id === request.query.post_id);

    if (!post) return RESTSchema(response, 404, false, "Post not found.");

    RESTSchema(response, 500, false, "I can't delete this. Because we do not use database.", 10002);
  } else RESTSchema(response, 405, false, "Method Not Allowed");
};