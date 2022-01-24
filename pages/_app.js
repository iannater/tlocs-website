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
        <title>T-locs</title>
        <meta name="title" content="T-locs" />
        <meta
          name="description"
          content="T-locs website description goes here"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://t-loc-s-website.vercel.app/" />
        <meta property="og:title" content="T-locs" />
        <meta
          property="og:description"
          content="T-locs website description goes here"
        />
        <meta property="og:image" content="/thumbnail.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://t-loc-s-website.vercel.app/"
        />
        <meta property="twitter:title" content="T-locs" />
        <meta
          property="twitter:description"
          content="T-locs website description goes here"
        />
        <meta property="twitter:image" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
