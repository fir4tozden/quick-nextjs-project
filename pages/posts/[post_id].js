import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Head from "~/components/Head.js";
import Image from "next/image";
import posts from "~/EXAMPLE_DB_posts.json";

export default function Page({ params, query, props }) {
  let router = useRouter();
  
  return (
    <>
      <Head
        title={props.post.content + " | " + props.post.author.name + " (@" + props.post.author.username + ")"}
        description={props.content}
        meta={{
          "robots": "index, follow",
          "revisit-after": "7 days",
          "google": "notranslate"
        }}
      />
      
      <div className="flex justify-center pb-24">
        <div className="w-full max-w-4xl px-6 pb-4 select-none border whitespace-normal">
          <div className="static px-0">
            <div className="flex my-2">
              <button onClick={() => router.back()}>
                <FaArrowLeft size={24} className="pt-1"/>
              </button>
              <span className="text-lg ml-2">{props.post.author.name + "'s post"}</span>
            </div>
            <hr/>
          </div>
          <div className="mt-4 flex items-center">
            <Image src={props.post.author.avatar_url} alt={props.post.author.username} width={1000} height={1000} className="w-10 h-10 rounded-full"/>
            <div className="ml-4">
              <span className="text-1xl font-semibold">{props.post.author.name}</span>
              <span className="text-gray-500 ml-2">{"@" + props.post.author.username}</span>
            </div>
          </div>
          <p className="mt-4 select-text">{props.post.content}</p>
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