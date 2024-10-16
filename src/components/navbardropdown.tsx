import React from "react";
import { GetLinks } from "./navbar";
import ThemeToggleButton from "./atoms/themetogglebutton";
import { AccountIcon, SupportIcon } from "./atoms/icons";

interface DropdownMenuProps {
  isOpen: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-cgray-200 dark:bg-cblack-200 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex-nowrap items-center mt-[250px] h-full">
          <div className="p-5 space-y-4">
            <GetLinks />
          </div>
          {/* <div className="flex flex-wrap gap-2 p-5">
            <a href="/#contactus">
              <div className="flex gap-x-1 h-[40px] w-[150px] items-center text-cgray-400">
                <ThemeToggleButton className={`h-8 w-8 text-cgray-400 dark:text-white`} />
                <p>theme</p>
              </div>
            </a>
            <a href="/#contactus">
              <div className="flex gap-x-1 h-[40px] w-[150px] items-center text-cgray-400">
                <AccountIcon className={`h-8 w-8 text-cgray-400 dark:text-white`} />
                <p>accounts</p>
              </div>
            </a>

            <a href="/#contactus">
              <div className="flex gap-x-1 h-[40px] w-[150px] items-center text-cgray-400">
                <SupportIcon className={`h-8 w-8 text-cgray-400 dark:text-white`} />
                <p>contact us</p>
              </div>
            </a>
          </div> */}
        </div>
        <div className="absolute flex gap-x-3 p-4 bottom-0">
          <ThemeToggleButton className={`h-8 w-8 text-cgray-400 dark:text-white`} />
          <a href="/signin">
            <AccountIcon className={`h-8 w-8 text-cgray-400 dark:text-white`} />
          </a>
          <a href="/support">
            <SupportIcon className={`h-8 w-8 text-cgray-400 dark:text-white`} />
          </a>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
