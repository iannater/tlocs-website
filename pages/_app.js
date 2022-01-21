import "../styles/globals.css";
import Layout1 from "../components/layout";
import Layout2 from "../components/layoutSd";

import React from "react";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
