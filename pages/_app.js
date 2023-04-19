import Head from "next/head";
import config from "~/config.json";
import "~/styles/global.css";

export default function App({ Component, PageProps }) {
  return (
    <>
      <Head>
        <meta property="og:url" content={config.host}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
      </Head>
      <Component {...PageProps}/>
    </>
  )
};