import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Head from "~/components/Head.js";
import PostsHeader from "~/components/PostsHeader.js";
import posts from "~/EXAMPLE_DB_posts.json";

export default function Page({ params, query, props }) {
  return (
    <>
      <Head
        title="Posts" 
        description=""
        meta={{
          "robots": "index, follow",
          "revisit-after": "7 days",
          "google": "notranslate"
        }}
      />
      
      <div className="pb-24 flex justify-center">
        <div className="w-full max-w-4xl px-6 pb-4 select-none border whitespace-normal">
          <PostsHeader title={"POSTS"}/>
          <hr/>
          {props.posts.length !== 0 ? props.posts.map((post, index) => (
            <div key={index}>
              {index !== 0 && <hr className="mt-2"/>}
              <Link href={"/posts/" + post.id}>
                <div className="hover:bg-gray-100">
                  <div className="mt-4 flex items-center">
                    <Image src={post.author.avatar_url} alt="" width={256} height={256} className="w-10 h-10 rounded-full"/>
                    <div className="ml-4 truncate">
                      <span className="text-1xl font-semibold">{post.author.name}</span>
                      <span className="text-gray-500 ml-2">{"@" + post.author.username}</span>
                    </div>
                  </div>
                  <p className="mt-4 mr-14 select-text">{post.content}</p>
                  <div className="relative">
                    <div className="absolute bottom-0 right-0 flex items-center cursor-pointer">
                      <span className="mr-2">{post.likes}</span>
                      {post.is_liked === true ? <FaHeart className="text-red-500"/> : <FaRegHeart/>}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )) : (
            <div className="flex justify-center">
              <span className="mt-4">No posts yet.</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
};

export async function getServerSideProps({ params, query, req, res }) {
  return {
    "props": {"params": params || null, "query": query || null, "props": {
      posts
    }}
  }
};