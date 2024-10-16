"use client";
import React, { useState } from "react";
import SignUp from "./signup";
import SignIn from "./signin";

const Form = () => {
  const [signup, setSignUp] = useState(true);

  const typeHandler = (enabled: boolean) => {
    setSignUp(enabled);
  };

  return (
    <div className="relative h-fit w-full mt-[70px] space-y-10 min-h-[60vh]">
      <div className="w-[95%] md:w-[700px] bg-cgray-100 dark:bg-cblack-300 space-y-7 pt-14 pb-14 ml-auto mr-auto">
        <div className="flex w-[70%] ml-auto mr-auto">
          <div
            className="w-[50%] hover:cursor-pointer text-center border-r-black border-r-[1px]"
            onClick={() => typeHandler(true)}
          >
            <h3 className={`${signup ? "text-cgreen-300 dark:text-cgreen-200" : ""}`}>SIGN UP</h3>
          </div>
          <div
            className="w-[50%] hover:cursor-pointer text-center"
            onClick={() => typeHandler(false)}
          >
            <h3 className={`${!signup ? "text-cgreen-300 dark:text-cgreen-200" : ""}`}>SIGN IN</h3>
          </div>
        </div>

        <div className="w-[90%] md:w-full ml-auto mr-auto">{signup ? <SignUp /> : <SignIn />}</div>
      </div>
    </div>
  );
};

export default Form;
