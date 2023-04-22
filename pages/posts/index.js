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
      
      <div className="flex justify-center pb-24">
        <div className="border max-w-4xl select-none w-full whitespace-normal">
          <PostsHeader title={"POSTS"}/>
          <hr/>
          {props.posts.length !== 0 ? props.posts.map((post, index) => (
            <div key={index}>
              {index !== 0 && <hr/>}
              <Link href={"/posts/" + post.id}>
                <div className="hover:bg-gray-100">
                  <div className="px-6 py-4">
                    <div className="flex items-center">
                      <Image src={post.author.avatar_url} alt="" width={256} height={256} className="h-10 rounded-full w-10"/>
                      <div className="ml-4 truncate">
                        <span className="font-semibold text-1xl">{post.author.name}</span>
                        <span className="ml-2 text-gray-500">{"@" + post.author.username}</span>
                      </div>
                    </div>
                    <p className="mr-14 mt-4 select-text">{post.content}</p>
                    <div className="relative">
                      <div className="absolute bottom-0 cursor-pointer flex items-center right-0">
                        <span className="mr-2">{post.likes}</span>
                        {post.is_liked === true ? <FaHeart className="text-red-500"/> : <FaRegHeart/>}
                      </div>
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