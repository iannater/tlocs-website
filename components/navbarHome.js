import Image from "next/image";
import HomeHero from "./homeHero";

const NavItem = (props) => (
  <li>
    <a
      className="text-lg font-bold text-white px-2 py-1 hover:bg-red-900 rounded transition-colors duration-300"
      href={props.href}
    >
      {props.text}
    </a>
  </li>
);

const navbar = () => (
  <div className="bg-redBg bg-no-repeat bg-cover min-h-screen">
    <nav className="flex justify-between py-4 px-3">
      <div className="flex items-center ">
        <div className="inline-block h-6 w-6 rounded-full px-3 py-2 " />
        <Image src="/white-logo.png" alt="Logo" width={69} height={69} />{" "}
        {/* <Image src="/arrow.png" alt="arrow" width={30} height={50} /> */}
      </div>
      <div>
        <ul className="flex space-x-2 pt-5 font-nmr">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/catering" text="Catering" />
          <NavItem href="/contact" text="Contact" />
        </ul>
      </div>
    </nav>
    <HomeHero />
  </div>
);

export default navbar;
