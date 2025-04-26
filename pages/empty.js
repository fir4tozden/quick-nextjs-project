import { useState, useEffect } from "react";
import Head from "../components/Head.js";

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

export const getServerSideProps = async ({ params = null, query = null, request, response }) => {
  return {
    props: {params, query, props: {

    }}
  }
};