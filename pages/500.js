import { useState, useEffect } from "react";
import Head from "~/components/Head.js";

export default function Page() {
  return (
    <>
      <Head
        title="Error 500: Internal Server Error"
        description="Something went wrong."
        robots="noindex, nofollow"
        revisitAfter="7 days"
        initialScale="1.0"
      />
      
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-6 pt-24 pb-24 my-24 select-none whitespace-normal">
          <span className="text-4xl font-bold flex justify-center">Error 500 - Internal Server Error</span>
          <span className="text-2xl flex justify-center">Something went wrong. Don&apos;t worry, this is our problem.</span>
        </div>
      </div>
    </>
  )
};