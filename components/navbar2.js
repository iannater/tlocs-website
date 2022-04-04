import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavItem = (props) => (
  <a
    className="text-lg px-5 md:text-lg font-bold text-nmr-lightBrown py-1 hover:bg-red-900 rounded transition-colors duration-300"
    href={props.href}
  >
    {props.text}
  </a>
);

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="w-full bg-no-repeat bg-cover bg-redBg md:px-2 md:flex ">
      <nav className="flex justify-between items-center py-3 md:px-10">
        <Link href="/">
          <a className="pl-3 md:0">
            <Image src="/white-logo.png" alt="Logo" width={69} height={69} />
          </a>
        </Link>
        <div className="ml-auto flex items-center p-3 md:p-0 gap-2">
          <a
            className="md:hidden text-xs px-1 bg-[#333333] md:text-lg font-bold text-nmr-lightBrown md:px-3 py-2 hover:bg-nmr-lightBrown hover:text-[#333333] rounded transition-colors duration-300"
            href="https://tlocs-hotdogs-103892-107872.square.site"
          >
            ORDER NOW
          </a>
          <button
            className=" inline-flex p-3 hover:bg-nmr-black rounded md:hidden text-white ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`${
          active ? "bg-nmr-black md:bg-transparent p-5 md:p-0" : "hidden"
        }   w-full md:inline-flex md:flex-grow md:w-auto`}
      >
        <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full gap-3 md:items-center items-start flex flex-col md:h-auto">
          <NavItem href="/about" text="About" />
          <NavItem href="/catering" text="Catering" />
          <NavItem href="/contact" text="Contact" />
          <a
            className="hidden md:block text-xs px-1 bg-[#333333] md:text-lg font-bold text-nmr-lightBrown md:px-3 py-2 hover:bg-nmr-lightBrown hover:text-[#333333] rounded transition-colors duration-300"
            href="https://tlocs-hotdogs-103892-107872.square.site"
          >
            ORDER NOW
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
