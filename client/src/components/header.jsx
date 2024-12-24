import React, { useState } from "react";
import darkModeImg from "../assets/darkMode.svg";
import { FaXmark, FaBars } from "react-icons/fa6";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const clickBtn = () => {
    setOpenMenu(!openMenu);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Blog", path: "blog" },
    { link: "Support", path: "support" },
  ];
  return (
    <>
      <header className="bg-[#1e232e] md:px-24 px-16 py-8 fixed top-0 right-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-32">
            <img
              className="h-8 cursor-pointer"
              src="https://startup.nextjstemplates.com/images/logo/logo.svg"
            />
            <ul className="xl:flex space-x-12 hidden text-2xl text-[#ffffffb3]">
              {navItems.map(({ link, path }) => (
                <a key={link} href={path} className="block  hover:text-white">
                  {link}
                </a>
              ))}
            </ul>
            {/* <nav className="hidden xl:flex items-center gap-16  text-2xl text-[#ffffffb3] ">
              <a className="hover:text-white" href="/">
                Home
              </a>
              <a className="hover:text-white" href="/">
                About
              </a>
              <a className="hover:text-white" href="/">
                Blog
              </a>
              <a className="hover:text-white" href="/">
                Support
              </a>
              
            </nav> */}
          </div>

          <div className="flex items-center gap-5 font-semibold text-xl">
            <button className="hover:text-[#ffffffb3] hidden md:flex text-white font-semibold tracking-wider">
              Sing In
            </button>
            <button className="text-white hover:bg-[#4a6df7c7] hidden md:flex font-semibold bg-[#4A6CF7] px-8 py-4 tracking-wider">
              Sing Up
            </button>
            <img className="w-8 cursor-pointer " src={darkModeImg} alt="" />
          </div>

          <div className="md:hidden">
            <button
              onClick={clickBtn}
              className="text-white border-2 border-blue-600 px-2 py-1 rounded-md focus:outline-none focus:text-gray-300"
            >
              {openMenu ? (
                <FaXmark className="w-6 h-6 text-white" />
              ) : (
                <FaBars className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

      </header>

      <div
        className={`space-y-4 px-4 pt-4 mt-24 pb-4 transition-all duration-300 ease-in-out bg-[#1e232ef1] text-[#ffffffb3]
      ${
        openMenu
          ? "opacity-100 translate-y-0 fixed top-0 right-20 w-40"
          : "opacity-0 -translate-y-10 pointer-events-none fixed top-0 right-20 w-40"
      }`}
      >
        {navItems.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:text-white">
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
