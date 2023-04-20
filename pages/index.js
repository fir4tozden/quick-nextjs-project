import { useState, useEffect } from "react";
import Head from "~/components/Head.js";
import NextjsLogo from "~/components/NextjsLogo.js";

export default function Page() {
  return (
    <>
      <Head
        title="Quick Next.js Project"
        description="It is a project to build a faster Next.js application."
        robots="index, follow"
        revisitAfter="7 days"
        initialScale="1.0"
      />
      
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-6 pt-24 pb-24 my-24 select-none whitespace-normal">
          <span className="text-4xl font-bold flex justify-center">Welcome to Quick Next.js Project!</span>
          <span className="text-2xl flex justify-center">It is a project to build a faster Next.js application.</span>
          <NextjsLogo/>
        </div>
      </div>
    </>
  )
};