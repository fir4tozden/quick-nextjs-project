import { useState, useEffect } from "react";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Error 500: Internal Server Error</title>
        <meta name="description" content="Something went wrong."/>
        <meta name="google" content="notranslate"/>
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
      
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-6 pt-24 pb-24 my-24 select-none whitespace-normal">
          <span className="text-4xl font-bold flex justify-center">Error 500 - Internal Server Error</span>
          <span className="text-2xl flex justify-center">Something went wrong. Don&apos;t worry, this is our problem.</span>
        </div>
      </div>
    </>
  )
};