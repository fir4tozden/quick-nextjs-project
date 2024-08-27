import { useState, useEffect } from "react";
import Head from "~/components/Head.js";

export default function Page({ params, query, props }) {
  return (
    <>
      <Head
        title=""
        description=""
        meta={{
          robots: "index, follow",
          "revisit-after": "7 days",
          google: "notranslate"
        }}
      />
      
      <div></div>
    </>
  )
};

export async function getServerSideProps({ params, query, request, response }) {
  return {
    props: {params: params || null, query: query || null, props: {
      
    }}
  }
};