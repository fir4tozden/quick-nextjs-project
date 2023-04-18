import { useState, useEffect } from "react";
import Head from "next/head";
import ExampleComponent from "../components/ExampleComponent.js";

let config = {
  "title": "Ready Nextjs Project",
  "description": "It is a project to build a faster Nextjs application."
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
      <main>
        <span>Welcome to Ready Nextjs Project.</span>
        <ExampleComponent/>
      </main>
      <footer></footer>
    </>
  )
};