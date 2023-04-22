import { useState, useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "~/styles/global.css";
import "nprogress/nprogress.css";

NProgress.configure({"showSpinner": true});

export default function __App__({ Component, pageProps }) {
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
  
  return (
    <>
      <style>{`
        #nprogress .bar {
          background: #0096FF !important;
          height: 2px;
        }
        
        #nprogress .peg {
          box-shadow: 0px 0px 0px;
        }
        
        #nprogress .spinner-icon {
          border-top-color: #0096FF;
          border-left-color: #0096FF;
        }
      `}</style>
      <Component {...pageProps}/>
    </>
  )
};