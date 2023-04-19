import { useState, useEffect } from "react";
import Head from "next/head"; 
import NextjsLogo from "~/components/NextjsLogo.js";

export default function Page() {
  return (
    <>
      <Head>
        <title>Quick Next.js Project</title>
        <meta name="description" content="It is a project to build a faster Next.js application."/>
        <meta name="google" content="notranslate"/>
        <meta name="robots" content="index, follow"/>
        <meta name="revisit-after" content="7 days"/>
      </Head>
      
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-6 pt-24 pb-24 my-24 select-none whitespace-normal">
          <span className="text-4xl font-bold flex justify-center">Welcome to Quick Next.js Project</span>
          <span className="text-2xl flex justify-center">It is a project to build a faster Next.js application.</span>
          <NextjsLogo/>
        </div>
      </div>
    </>
  )
};