import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "~/components/Head.js";
import NextjsLogo from "~/public/assets/nextjs-logo.svg";

export default function Page({ params, query, props }) {
  return (
    <>
      <Head
        title="Quick Next.js Project"
        description="It is a project to build a faster Next.js application."
        meta={{
          robots: "index, follow",
          "revisit-after": "7 days",
          google: "notranslate"
        }}
      />

      <div className="flex justify-center">
        <div className="max-w-4xl my-24 pb-24 pt-24 px-6 select-none w-full whitespace-normal">
          <p className="flex font-bold justify-center text-4xl">Welcome to Quick Next.js Project!</p>
          <p className="flex justify-center text-2xl">It is a project to build a faster Next.js application.</p>

          <div className="flex justify-center">
            <Image src={NextjsLogo} alt="" className="mt-24"></Image>
          </div>

          <div className="flex justify-center mt-24">
            <div>
              <Link href="/posts">
                <button className="bg-gray-500 border hover:bg-gray-600 px-4 py-2 rounded text-white">GO TO POSTS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export async function getServerSideProps({ params, query, request, response }) {
  return {
    props: {params: params || null, query: query || null, props: {
      
    }}
  }
};