import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cgray-100 dark:bg-cblack-300 py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="md:flex gap-2">
          <Image
            src="/logo.svg"
            className="ml-auto mr-auto md:ml-0 md:mr-0 w-12 h-12 md:w-16 md:h-16"
            width={0}
            height={0}
            alt="logo"
          />
          <div className="text-center md:text-left">
            <h5>HUDUMA</h5>
            <h5>INSURANCE LIMITED</h5>
          </div>
        </div>
        <div className="md:flex gap-4 text-center md:text-left">
          <div className="p-1 md:p-0">
            <a href="/about-us" className="text-cgreen-300 dark:text-cgreen-200">
              about us
            </a>
          </div>
          <div className="p-1 md:p-0">
            <a href="/claims" className="text-cgreen-300 dark:text-cgreen-200">
              claims
            </a>
          </div>
          <div className="p-1 md:p-0">
            <a href="/quote" className="text-cgreen-300 dark:text-cgreen-200">
              get quote
            </a>
          </div>
          <div className="p-1 md:p-0">
            <a href="/resources" className="text-cgreen-300 dark:text-cgreen-200">
              resources
            </a>
          </div>
          <div className="p-1 md:p-0">
            <a href="/support" className="text-cgreen-300 dark:text-cgreen-200">
              support
            </a>
          </div>
          <div className="p-1 md:p-0">
            <a href="/careers" className="text-cgreen-300 dark:text-cgreen-200">
              careers
            </a>
          </div>
        </div>
        <div className="w-full border-b-2 border-stone-400" />
        <p className="text-sm">
          <span className="text-base font-semibold">Huduma Insurance</span> &copy; {currentYear} All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
