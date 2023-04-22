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
            <div className="bg-white bottom-0 fixed h-11 max-lg:w-full select-none">
              <div className="items-center px-7 relative top-2.5">
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