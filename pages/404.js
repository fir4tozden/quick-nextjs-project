import { useState, useEffect } from "react";
import Head from "~/components/Head.js";

export default function Page() {
  return (
    <>
      <Head
        title="Error 404: Not Found"
        description="We explain how the sample API in this project works."
        meta={{
          "robots": "noindex, nofollow",
          "revisit-after": "7 days",
          "google": "notranslate"
        }}
      />
      
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-6 pt-24 pb-24 my-24 select-none whitespace-normal">
          <p className="text-4xl font-bold flex justify-center">Error 404 - Not Found</p>
          <p className="text-2xl flex justify-center">The page you are looking for could not be found.</p>
        </div>
      </div>
    </>
  )
};