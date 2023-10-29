/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import AOS from "aos"; // Import AOS

import "aos/dist/aos.css"; // Import AOS CSS

// css
import "./header1.css";

// logo
import logo from "../../assets/images/logo.png";
const Header1 = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  });
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="hidden md:pl-0 sticky top-0 w-full bg-black gap-2 lg:flex justify-between items-center z-[9999]">
        <NavHashLink to="/#">
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            width="40"
            height="30"
            decoding="async"
            data-nimg="1"
            className="hidden lg:block ml-4 sm:ml-12"
            style={{ color: "transparent" }}
          />
        </NavHashLink>
        <nav>
          <div>
            <button
              data-aos="fade-down-left"
              data-aos-once="true"
              type="button"
              className={
                toggle
                  ? "relative invisible flex-row items-center right-0 justify-center p-2 h-16 w-36 text-sm text-black focus:outline-none bg-white py-2 px-5"
                  : "relative flex flex-row items-center right-0 justify-center p-2 h-16 w-36 text-sm text-black focus:outline-none bg-white py-2 px-5"
              }
              onClick={() => setToggle(!toggle)}
            >
              <span className="sr-only">Open main menu</span>
              ++ MENU
            </button>

            {toggle && (
              <div className="hidden lg:block">
                <div className="absolute right-0 top-0 block animate-fade-left animate-duration-[300ms] animate-ease-in">
                  <div className="bg-[#292929D9] flex justify-between rounded-bl-lg rounded-br-lg w-full">
                    <button
                      type="button"
                      className="relative flex flex-row items-center right-0 justify-center ml-20 p-2 h-16 w-36 text-sm text-white focus:outline-none bg-transparent py-2 px-5 order-last"
                      onClick={() => setToggle(!toggle)}
                    >
                      <span className="sr-only">Close main menu</span>-- CLOSE
                    </button>
                    <ul className="flex font-medium gap-x-10 p-8 text white text-xs py-4 text-white">
                      <li className="flex flex-col">
                        <NavHashLink
                          className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium opacity-90"
                          aria-current="page"
                          to="/#"
                          onClick={() => setToggle(!toggle)}
                        >
                          HOME
                        </NavHashLink>
                      </li>
                      <li className="flex flex-col">
                        <span className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium">
                          ABOUT NYT
                        </span>
                        <NavHashLink
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          to="/get-started-vsc#what-is-vsc"
                          onClick={() => setToggle(!toggle)}
                        >
                          What is NYT
                        </NavHashLink>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          href="/get-started-vsc#data-nfts"
                          onClick={() => setToggle(!toggle)}
                        >
                          Data-NFTs
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          href="/get-started-vsc#pose"
                          onClick={() => setToggle(!toggle)}
                        >
                          PoSe
                        </a>
                        <NavHashLink
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          to="/get-started-vsc#tokenomics"
                          onClick={() => setToggle(!toggle)}
                        >
                          Tokenomics
                        </NavHashLink>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          href="/get-started-vsc#ddh-platform"
                          onClick={() => setToggle(!toggle)}
                        >
                          DDH Platform
                        </a>
                      </li>
                      <li className="flex flex-col">
                        <span className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium">
                          CONNECT
                        </span>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          target="_blank"
                          rel="noreferrer"
                          href="https://linktr.ee/nyoton"
                          onClick={() => setToggle(!toggle)}
                        >
                          Socials
                        </a>
                        {/* <NavHashLink
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          to="/press"
                          onClick={() => setToggle(!toggle)}>
                          Press
                        </NavHashLink> */}
                        <NavHashLink
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          to="/contact-us#"
                          onClick={() => setToggle(!toggle)}
                        >
                          Contact
                        </NavHashLink>
                        <NavHashLink
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          to="/business-inquiries#"
                          onClick={() => setToggle(!toggle)}
                        >
                          Business Inquiries
                        </NavHashLink>
                      </li>
                      <li className="flex flex-col">
                        <span className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium">
                          FUNCTIONS
                        </span>
                        <NavLink
                          className="py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Wallet'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"
                        ></NavLink>
                        <NavLink
                          className="py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Bridge'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"
                        ></NavLink>
                        <a
                          className="py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Stake'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"
                        ></a>
                        <a
                          className="py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Faucet'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"
                        ></a>
                      </li>
                      <li className="flex flex-col">
                        <span className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium uppercase">
                          Nyoton Backoffice <br /> (legacy users only)
                        </span>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          href="https://masterrit.com/login"
                        >
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header1;
