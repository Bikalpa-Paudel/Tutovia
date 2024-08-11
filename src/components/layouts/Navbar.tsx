"use client";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between px-[5%] ">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={140} height={38} />
      </Link>
      <nav className="laptop:block hidden">
        <ul className="flex items-center gap-10 font-semibold text-lg">
          <li className="relative inline cursor-pointer before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
            <a href="#home">Home</a>
          </li>
          <li>
            <Options />
          </li>
          <li className="relative inline cursor-pointer before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
            <a href="#work">How it works</a>
          </li>
        </ul>
      </nav>
      <div className="laptop:flex items-center gap-[10px] hidden">
        <PrimaryButton>Login</PrimaryButton>
        <SecondaryButton>Register</SecondaryButton>
      </div>
      <div
        className="laptop:hidden block cursor-pointer"
        onClick={() => setShowMenu(true)}
      >
        <RiMenu3Fill size={30} />
      </div>
      <div
        className={`fixed z-[99999] bg-[#fff] w-full space-y-8 top-0 border-secondary border py-[8%] left-0 laptop:hidden block transition-transform h-[100vh] overflow-hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-[5%]">
          <Image src={Logo} alt="Logo" width={140} height={38} />
          <LiaTimesSolid
            size={30}
            className="hover:text-red-500"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <nav className="">
          <ul className="font-semibold text-lg flex flex-col items-center justify-center gap-[50px]">
            <li onClick={() => setShowMenu(false)}>
              <a href="#home">Home</a>
            </li>
            <Options />
            <li onClick={() => setShowMenu(false)}>
              <a href="#work">How it works</a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center w-full items-center gap-1">
          <PrimaryButton>Login</PrimaryButton>
          <SecondaryButton>Register</SecondaryButton>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

export function Options() {
  return (
    <div className="group relative z-[99999999]">
      <button type="button" className="inline-flex items-center ">
        Our Services
        <FaCaretDown size={20} className="ml-1" />
      </button>

      <div className="absolute left-0 w-40 origin-top-left bg-[rgba(248,249,250,1)] divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
        <div className="py-1 text-[#505050] text-lg">
          <a
            href="#services"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(231,231,231,1)]"
          >
            Research Paper
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(231,231,231,1)]"
          >
            Case Studies
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(231,231,231,1)]"
          >
            Team Paper
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(231,231,231,1)]"
          >
            Report Writing
          </a>
        </div>
        <div className="w-full h-[6px] bg-tertiary"></div>
      </div>
    </div>
  );
}
