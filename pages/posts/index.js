import { useState, useEffect } from "react";
import { FaArrowLeft, FaHeart, FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/router";
import Head from "~/components/Head.js";
import Image from "next/image";
import posts from "~/EXAMPLE_DB_posts.json";
import Link from "next/link";

export default function Page({ params, query, props }) {
  let router = useRouter();
  
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
          <div className="my-2 flex items-center">
            <button onClick={() => router.back()}>
              <FaArrowLeft size={24}/>
            </button>
            <span className="text-lg ml-2">POSTS</span>
          </div>
          <hr/>
          {props.posts.length !== 0 ? props.posts.map((post, index) => (
            <div key={index}>
              {index !== 0 && <hr className="mt-2"/>}
              <Link href={"/posts/" + post.id}>
                <div className="hover:bg-gray-100">
                  <div className="mt-4 flex items-center">
                    <Image src={post.author.avatar_url} alt={post.author.username} width={256} height={256} className="w-10 h-10 rounded-full"/>
                    <div className="ml-4">
                      <span className="text-1xl font-semibold">{post.author.name}</span>
                      <span className="text-gray-500 ml-2">{"@" + post.author.username}</span>
                    </div>
                  </div>
                  <p className="mt-4 select-text">{post.content}</p>
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