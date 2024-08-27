import { useState, useEffect } from "react";
import Head from "~/components/Head.js";

export default function Page() {
  return (
    <>
      <Head
        title="Error 500: Internal Server Error"
        description="Something went wrong."
        meta={{
          robots: "noindex, nofollow",
          "revisit-after": "7 days",
          google: "notranslate"
        }}
      />
      
      <div className="flex justify-center">
        <div className="max-w-4xl my-24 pb-24 pt-24 px-6 select-none w-full whitespace-normal">
          <p className="flex font-bold justify-center text-4xl">Error 500 - Internal Server Error</p>
          <p className="flex justify-center text-2xl">Something went wrong. Don&apos;t worry, this is our problem.</p>
        </div>
      </div>
    </>
  )
};