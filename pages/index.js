import { useState, useEffect } from "react";
import Head from "next/head"; 
import NextjsLogo from "../components/NextjsLogo.js";

var config = {
  "title": "Quick Next.js Project",
  "description": "It is a project to build a faster Next.js application."
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
        <meta name="robots" content="index, follow"/>
        <meta name="revisit-after" content="7 days"/>
      </Head>

      <header></header>
      <main className="flex justify-center">
        <div className="w-full max-w-4xl px-6 pt-24 pb-24 my-24 whitespace-normal">
          <span className="text-4xl font-bold flex justify-center">Welcome to Quick Next.js Project</span>
          <span className="text-2xl flex justify-center">It is a project to build a faster Next.js application.</span>
          <NextjsLogo/>
        </div>
      </main>
      <footer></footer>
    </>
  )
};