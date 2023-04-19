// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import RESTSchema from "/utils/RESTSchema.js";

var posts = [
  {
    "id": 0,
    "content": "This is the first post!"
  },
  {
    "id": 1,
    "content": "Whoa! I'm late."
  }
];

export default function REST(request, response) {
  if (request.method === "GET") {
    let post = posts.find(post => post.id == request.query.post_id);
    if (!post) return RESTSchema(response, 404, false, "Post not found.");
    RESTSchema(response, 200, true, post);
  } else if (request.method === "DELETE") {
    let post = posts.find(post => post.id == request.query.post_id);
    if (!post) return RESTSchema(response, 404, false, "Post not found.");
    RESTSchema(response, 500, false, "I can't delete this. Because we do not use database.", 10002);
  }
};