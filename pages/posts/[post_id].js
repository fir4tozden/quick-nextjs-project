import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import Head from "../../components/Head.js";
import PostsHeader from "../../components/PostsHeader.js";
import posts from "../../EXAMPLE_DB_posts.json";

export default function Page({ params, query, props }) {
  return (
    <>
      <Head
        title={(props.post.content.length < 64 ? props.post.content : props.post.content.slice(0, 64) + "...") + " | " + props.post.author.name + " (@" + props.post.author.username + ")"}
        description={props.post.content}
        meta={{
          robots: "index, follow",
          "revisit-after": "7 days",
          google: "notranslate"
        }}
      />

      <div className="flex justify-center pb-24">
        <div className="border max-w-4xl select-none w-full whitespace-normal">
          <PostsHeader title={props.post.author.name + "'s post"}/>
          <hr/>

          <div className="px-6 py-4">
            <div className="flex items-center">
              <Image src={props.post.author.avatar_url} alt="" width={256} height={256} className="h-10 rounded-full w-10"/>

              <div className="ml-4 truncate">
                <span className="font-semibold text-1xl">{props.post.author.name}</span>
                <span className="ml-2 text-gray-500">{"@" + props.post.author.username}</span>
              </div>
            </div>

            <p className="mr-14 mt-4 select-text">{props.post.content}</p>

            <div className="relative">
              <div className="absolute bottom-0 cursor-pointer flex items-center right-0">
                <span className="mr-2">{props.post.likes}</span>
                {props.post.is_liked === true ? <FaHeart className="text-red-500"/> : <FaRegHeart/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export const getServerSideProps = async ({ params, query, request, response }) => {
  let post = posts.find(post => post.id === params.post_id);
  if (!post) return {not_found: true};

  return {
    props: {params: params || null, query: query || null, props: {
      post
    }}
  }
};