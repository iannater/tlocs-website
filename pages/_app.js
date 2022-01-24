import "../styles/globals.css";
import Layout1 from "../components/layout";
import Layout2 from "../components/layoutSd";

import React from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <Layout>
      <Head>
        <title>T-loc</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="T-locs website description goes here"
        />
        <meta property="og:images" content="/thumbnail.png" />
        <link rel="icon" href="/blklogo.png" />
        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary" key="twcard" /> */}
        {/* <meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}

        {/* Open Graph */}
        {/* <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta property="og:site_name" content={siteName} key="ogsitename" />
          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" /> */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
