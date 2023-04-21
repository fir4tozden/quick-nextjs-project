import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import Head from "~/components/Head.js";
import PostsHeader from "~/components/PostsHeader.js";
import posts from "~/EXAMPLE_DB_posts.json";

export default function Page({ params, query, props }) {
  return (
    <>
      <Head
        title={(props.post.content.length < 64 ? props.post.content : props.post.content.slice(0, 64) + "...") + " | " + props.post.author.name + " (@" + props.post.author.username + ")"}
        description={props.post.content.length < 64 ? props.post.content : props.post.content.slice(0, 64) + "..."}
        meta={{
          "robots": "index, follow",
          "revisit-after": "7 days",
          "google": "notranslate"
        }}
      />
      
      <div className="pb-24 flex justify-center">
        <div className="w-full max-w-4xl px-6 pb-4 select-none border whitespace-normal">
          <PostsHeader title={props.post.author.name + "'s post"}/>
          <hr/>
          <div className="mt-4 flex items-center">
            <Image src={props.post.author.avatar_url} alt="" width={256} height={256} className="w-10 h-10 rounded-full"/>
            <div className="ml-4 truncate">
              <span className="text-1xl font-semibold">{props.post.author.name}</span>
              <span className="text-gray-500 ml-2">{"@" + props.post.author.username}</span>
            </div>
          </div>
          <p className="mt-4 mr-14 select-text">{props.post.content}</p>
          <div className="relative">
            <div className="absolute bottom-0 right-0 flex items-center cursor-pointer">
              <span className="mr-2">{props.post.likes}</span>
              {props.post.is_liked === true ? <FaHeart className="text-red-500"/> : <FaRegHeart/>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export async function getServerSideProps({ params, query, req, res }) {
  let post = posts.find(post => post.id === params.post_id);
  if (!post) return {"notFound": true};

  return {
    "props": {"params": params || null, "query": query || null, "props": {
      post
    }}
  }
};