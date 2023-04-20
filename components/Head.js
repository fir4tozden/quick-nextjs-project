import Head from "next/head";

export default function __Head__({ title, description, robots = "index, follow", revisitAfter = "7 days", initialScale = "1.0" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="robots" content={robots}/>
        <meta name="revisit-after" content={revisitAfter}/>
        <meta name="google" content="notranslate"/>
        <meta name="viewport" content={"width=device-width, initial-scale=" + initialScale + ", user-scalable=no"}/>
      </Head>
    </>
  )
};