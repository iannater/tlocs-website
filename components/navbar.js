import Image from "next/image";
import Link from "next/link";

const NavItem = (props) => (
  <li>
    <a
      className="md:text-lg font-bold text-white px-2 py-1 hover:bg-red-900 rounded transition-colors duration-300"
      href={props.href}
    >
      {props.text}
    </a>
  </li>
);

const navbar = () => (
  <div className="absolute w-full bg-no-repeat bg-cover z-10">
    <nav className="flex justify-between items-center py-4 px-3 md:px-10">
      <div className="flex items-center ">
        <Link href="/">
          <a>
            <Image src="/white-logo.png" alt="Logo" width={69} height={69} />{" "}
          </a>
        </Link>
      </div>
      <div>
        <ul className="flex space-x-2 font-nmr">
          <NavItem href="/about" text="About" />
          <NavItem href="/catering" text="Catering" />
          <NavItem href="/contact" text="Contact" />
          <NavItem
            href="https://tlocs-hotdogs-103892-107872.square.site"
            text="Order Now"
          />
        </ul>
      </div>
    </nav>
  </div>
);

export default navbar;
