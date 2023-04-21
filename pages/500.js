import { useState, useEffect } from "react";
import Head from "~/components/Head.js";

export default function Page() {
  return (
    <>
      <Head
        title="Error 500: Internal Server Error"
        description="Something went wrong."
        meta={{
          "robots": "noindex, nofollow",
          "revisit-after": "7 days",
          "google": "notranslate"
        }}
      />
      
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-6 pt-24 pb-24 my-24 select-none whitespace-normal">
          <p className="text-4xl font-bold flex justify-center">Error 500 - Internal Server Error</p>
          <p className="text-2xl flex justify-center">Something went wrong. Don&apos;t worry, this is our problem.</p>
        </div>
      </div>
    </>
  )
};