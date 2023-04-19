import Head from "next/head";
import "~/styles/global.css";

export default function __App__({ Component, props }) {
  return (
    <>
      <Head></Head>
      <Component {...PageProps}/>
    </>
  )
};