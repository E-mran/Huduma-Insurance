"use client";
import React, { useState } from "react";
import Private from "./private";
import Public from "./public";

const Tips = () => {
  const [dropdown, setToggleDropdown] = useState(false);

  const [type, setType] = useState("Private");

  const handleDropdownToggle = () => {
    setToggleDropdown(!dropdown);
  };

  const handleSetType = (t: string) => {
    setType(t);
    setToggleDropdown(false);
  };

  return (
    <div className="relative flex justify-center items-center w-full mt-[50px] md:mt-[100px]">
      <div>
        <div className="text-center space-y-4">
          <div className="w-[90%] md:w-[400px] ml-auto mr-auto">
            <h3>insurance guide</h3>
            <p>Essential Insurance Tips for Private Vehicle Owners and PSV Operators</p>
          </div>

          <div
            id="dropdownDefaultButton"
            className="w-[400px] bg-cgray-100 dark:bg-cblack-200 hover:cursor-pointer px-5 py-2.5 flex justify-between ml-auto mr-auto"
            onClick={handleDropdownToggle}
          >
            <p>{type}</p>
            <p>{dropdown ? "▲" : "▼"}</p>
          </div>

          {dropdown ? (
            <div
              id="dropdown"
              className="z-10 w-[400px] bg-cgray-100  divide-gray-100 shadow dark:bg-cblack-200 ml-auto mr-auto"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    onClick={() => handleSetType("Private")}
                    href="#"
                    className="block px-4 py-2 hover:bg-cgray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Private
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleSetType("Public")}
                    href="#"
                    className="block px-4 py-2 hover:bg-cgray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Public
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        {type.toLocaleLowerCase() == "private" ? <Private /> : ""}
        {type.toLocaleLowerCase() == "public" ? <Public /> : ""}
      </div>
    </div>
  );
};

export default Tips;
