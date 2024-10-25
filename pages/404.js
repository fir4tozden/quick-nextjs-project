import { useState, useEffect } from "react";
import Head from "~/components/Head.js";

export default () => {
  return (
    <>
      <Head
        title="Error 404: Not Found"
        description="We explain how the sample API in this project works."
        meta={{
          robots: "noindex, nofollow",
          "revisit-after": "7 days",
          google: "notranslate"
        }}
      />

      <div className="flex justify-center">
        <div className="max-w-4xl my-24 pb-24 pt-24 px-6 select-none w-full whitespace-normal">
          <p className="flex font-bold justify-center text-4xl">Error 404 - Not Found</p>
          <p className="flex justify-center text-2xl">The page you are looking for could not be found.</p>
        </div>
      </div>
    </>
  )
};