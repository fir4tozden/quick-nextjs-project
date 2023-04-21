import Document, { Html, Head, Main, NextScript } from "next/document";

export const config = {
  "lang": "en"
};

export default class Schema extends Document {
  render() {
    return (
      <Html lang={config.lang}>
        <Head/>
        <body>
          <Main/>
          {/* If you want to remove the credit section at the bottom of the page, delete it. */}
            <div className="fixed max-lg:w-full h-11 bottom-0 bg-white select-none">
              <div className="relative top-2.5 px-7 items-center">
                <p>Made with ❤ by <a href="https://github.com/fir4tozden" target="_blank" className="underline">Fırat Özden</a></p>
              </div>
            </div>
          {/* ------------------------------------------------------------------------------ */}
          <NextScript/>
        </body>
      </Html>
    );
  }
};