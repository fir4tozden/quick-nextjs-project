import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "~/components/Head.js";

export default function Page({ params, query, props }) {
  return (
    <>
      <Head
        title="Quick Next.js Project"
        description="It is a project to build a faster Next.js application."
        meta={{
          "robots": "index, follow",
          "revisit-after": "7 days",
          "google": "notranslate"
        }}
      />
      
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-6 pt-24 pb-24 my-24 select-none whitespace-normal">
          <p className="text-4xl font-bold flex justify-center">Welcome to Quick Next.js Project!</p>
          <p className="text-2xl flex justify-center">It is a project to build a faster Next.js application.</p>
          <div className="flex justify-center">
            <Image src={NextjsIcon} alt="" className="mt-24"></Image>
          </div>
          <div className="mt-24 flex justify-center">
            <div>
              <Link href="/posts">
                <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded border">GO TO POSTS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export async function getServerSideProps({ query, req, res }) {
  return {
    "props": {query, "props": {

    }}
  }
};