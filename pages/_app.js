import { useState, useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "~/styles/global.css";

NProgress.configure({showSpinner: true}); // CSS settings are in ./styles/global.css

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on("routeChangeStart", NProgress.start);
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);

    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    }
  }, [])

  return <Component {...pageProps}/>
};