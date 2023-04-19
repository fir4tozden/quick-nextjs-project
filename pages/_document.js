import Document, { Html, Head, Main, NextScript } from "next/document";
import config from "~/config.json";

export default class Schema extends Document {
  render() {
    return (
      <Html lang={config.lang}>
        <Head/>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
};