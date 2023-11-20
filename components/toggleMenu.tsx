"use client";
import React from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";

const ToggleMenu = () => {
  return (
    <Dropdown>
      <DropdownTrigger className="bg-blue-600">
        <Button className=" bg-black text-white list-none block w-[1%] rounded-full">
          <li className=" ml-2 w-[60%] h-[5%] bg-white"></li>
          <li className=" ml-2 w-[40%] h-[5%] bg-white mt-1"></li>
          <li className=" ml-2 w-[60%] h-[5%] bg-white mt-1"></li>
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Dynamic Actions">
        <DropdownItem className="text-center block font-bold ">
          <Link href="/">
            <li className="text-xl">Home</li>
          </Link>
        </DropdownItem>

        <DropdownItem className="text-center block">
          <Link href="/menu">
            <li className="text-xl">Menu</li>
          </Link>
        </DropdownItem>

        <DropdownItem className="text-center block">
          <Link href="/ourstory">
            <li className="text-xl">Our Story</li>
          </Link>
        </DropdownItem>

        <DropdownItem className="text-center block">
          <Link href="/contact">
            <li className="text-xl">Contact</li>
          </Link>
        </DropdownItem>

        <DropdownItem className="text-center block">
          <Link href="#">
            <li className="text-xl">
              <ThemeSwitch />
            </li>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ToggleMenu;
