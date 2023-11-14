import Link from "next/link";
import Image from "next/image";
import ToggleMenu from "./toggleMenu";

import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@nextui-org/react";

import { NavbarItem } from "@nextui-org/react";

const Navbar = () => {
  return (
    <>
      <nav className=" fixed top-0 left-0 right-0 flex justify-between px-14 py-2 items-center  z-10">
        <div className = "ml-[-40px]">
          <Link href="/">
            <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="logo"
            className="rounded-3xl"
            />
          </Link>
        </div>
        <div className="lg:ml-[-1200px] ml-[-90px]">
          <Button className="rounded-full bg-orange-950 text-yellow-400 font-bold">Order It</Button>
        </div>

        <div className=" gap-6 sm:flex hidden items-center">
          <Link className="hover:bg-gray-300 rounded-full px-3 py-1" href="#">
            Home
          </Link>
          <Link
            className="hover:bg-gray-300 rounded-full px-3 py-1"
            href="/about"
          >
            About
          </Link>
          <Link className="hover:bg-gray-300 rounded-full px-3 py-1" href="/menu">
            Contact
          </Link>
          <Link className="hover:bg-gray-300 rounded-full px-3 py-1" href="#">
            Services
          </Link>
          <Link className="mt-[8px]" href="#">
            <div>
              <ThemeSwitch />
            </div>
          </Link>
        </div>
        

        <div className="sm:hidden mr-[-30px]">
          <ToggleMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
