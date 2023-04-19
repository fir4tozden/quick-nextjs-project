import { useState, useEffect } from "react";
import Head from "next/head";

let config = {
  "title": "",
  "description": ""
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
      <main></main>
      <footer></footer>
    </>
  )
};