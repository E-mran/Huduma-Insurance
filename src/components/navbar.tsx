"use client";
import { useState, useEffect } from "react";
import DropdownMenu from "./navbardropdown";
import ThemeToggleButton from "./atoms/themetogglebutton";
import PrimaryButton from "./atoms/button";
import Image from "next/image";
import { AccountIcon, SupportIcon } from "./atoms/icons";

interface LinksProps {
  icon?: boolean;
  className?: string;
}

export function GetLinks({ icon, className }: LinksProps) {
  return (
    <>
      <div>
        <a
          href="/"
          className={`link ${icon ? "block px-4 py-2" : ""} ${className ? className : ""}`}
        >
          home
        </a>
      </div>
      <div>
        <a
          href="/about-us"
          className={`link ${icon ? "block px-4 py-2" : ""} ${className ? className : ""}`}
        >
          about us
        </a>
      </div>
      <div>
        <a
          href="/insurance"
          className={`link ${icon ? "block px-4 py-2" : ""} ${className ? className : ""}`}
        >
          insurance
        </a>
      </div>
      <div>
        <a
          href="/quote"
          className={`link ${icon ? "block px-4 py-2" : ""} ${className ? className : ""}`}
        >
          quote
        </a>
      </div>
      <div>
        <a
          href="/claims"
          className={`link ${icon ? "block px-4 py-2" : ""} ${className ? className : ""}`}
        >
          claims
        </a>
      </div>
      <div>
        <a
          href="/resources"
          className={`link ${icon ? "block px-4 py-2" : ""} ${className ? className : ""}`}
        >
          resources
        </a>
      </div>
      <div>
        <a
          href="/careers"
          className={`link ${icon ? "block px-4 py-2" : ""} ${className ? className : ""}`}
        >
          careers
        </a>
      </div>
    </>
  );
}

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`z-20 w-full h-16 flex items-center justify-center fixed top-0 ${
        isScrolled || isMenuOpen
          ? "border-b-2 border-cgray-300 dark:border-cblack-100 h-16 bg-cgray-100 dark:bg-cblack-300"
          : transparent
          ? "bg-transparent"
          : "bg-cgray-100 dark:bg-cblack-300"
      }`}
    >
      <div className="flex justify-between w-[90%]">
        <div className="flex">
          <a href="/" className="flex justify-center items-center">
            <img src="/logo.svg" alt="" className="mr-[100px] h-[50px] object-contain" />
          </a>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <GetLinks
            className={`${transparent ? "text-white" : "text-black dark:text-white"} ${
              isScrolled ? "md:text-black" : ""
            }`}
          />
        </div>

        <div className="flex md:gap-4 items-center text-white">
          <div className="hidden md:flex gap-2">
            <ThemeToggleButton
              className={`h-6 w-6 ${
                transparent
                  ? isScrolled
                    ? "text-cblack-100 dark:text-white"
                    : "text-white"
                  : "text-white dark:text-black"
              }`}
            />
            <a href="/signin">
              <AccountIcon
                className={`h-7 w-7 ${
                  transparent
                    ? isScrolled
                      ? "text-cblack-100 dark:text-white"
                      : "text-white"
                    : "text-white dark:text-black"
                }`}
              />
            </a>
            <a href="/support">
              <SupportIcon
                className={`h-7 w-7 ${
                  transparent
                    ? isScrolled
                      ? "text-cblack-100 dark:text-white"
                      : "text-white"
                    : "text-white dark:text-black"
                }`}
              />
            </a>
          </div>

          <div className="flex">
            {/* Toggle Menu icon */}
            <div
              className={`md:hidden flex items-center ${
                transparent
                  ? isScrolled || isMenuOpen
                    ? "text-cblack-100 dark:text-white"
                    : "text-white"
                  : "text-white dark:text-black"
              }`}
            >
              {isMenuOpen ? (
                <svg
                  onClick={toggleMenu}
                  className="h-8 w-8"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" /> <line x1="18" y1="6" x2="6" y2="18" />{" "}
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  onClick={toggleMenu}
                  className="h-8 w-8 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <DropdownMenu isOpen={isMenuOpen} />
        {isMenuOpen && <div className="fixed right-0 h-full w-[50%]" onClick={toggleMenu}></div>}
      </div>
    </nav>
  );
}
