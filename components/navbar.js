import Image from "next/image";
import Link from "next/link";

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
  <div className="absolute w-full bg-no-repeat bg-cover">
    <nav className="flex justify-between py-4 px-3">
      <div className="flex items-center ">
        <div className="inline-block h-6 w-6 rounded-full px-3 py-2 " />
        <Link href="/">
          <a>
            <Image src="/white-logo.png" alt="Logo" width={69} height={69} />{" "}
          </a>
        </Link>
      </div>
      <div>
        <ul className="flex space-x-2 pt-5 font-nmr">
          <NavItem href="/about" text="About" />
          <NavItem href="/catering" text="Catering" />
          <NavItem href="/contact" text="Contact" />
        </ul>
      </div>
    </nav>
  </div>
);

export default navbar;
