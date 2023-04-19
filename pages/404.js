import { useState, useEffect } from "react";
import Head from "next/head";

let config = {
  "title": "Error 404: Not Found",
  "description": "We explain how the sample API in this project works."
};

export default function Page() {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description}/>
        <meta property="og:title" content={config.title}/>
        <meta property="og:description" content={config.description}/>
        <meta property="og:image" content="/favicon.ico"/>
        <meta name="google" content="notranslate"/>
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
      
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-6 pt-24 pb-24 my-24 select-none whitespace-normal">
          <span className="text-4xl font-bold flex justify-center">Error 404 - Not Found</span>
          <span className="text-2xl flex justify-center">The page you are looking for could not be found.</span>
        </div>
      </div>
    </>
  )
};