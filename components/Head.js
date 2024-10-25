import Head from "next/head";

export default function Component({ title, description, meta = {robots: "index, follow", "revisit-after": "7 days", google: "notranslate"} }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        {
          Object.entries(meta).map(([name, content]) => (
            <meta key={name + ":" + content} name={name} content={content}/>
          ))
        }
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
      </Head>
    </>
  )
};