import Head from "next/head";
import "~/styles/global.css";

export default function __App__({ Component, PageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
      </Head>
      <Component {...PageProps}/>
    </>
  )
};