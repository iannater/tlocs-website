import Footer from "./footer";
import Head from "next/head";
import Navbar2 from "./navbar2";

const Layout2 = ({ children }) => {
  return (
    <>
      <div>
        <Navbar2 />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout2;
