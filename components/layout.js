import Footer from "./footer";
import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  );
}
