import Button from "@/components/atoms/button";
import React from "react";

const SignIn = () => {
  return (
    <form action="" className="w-[95%] md:w-[65%] space-y-4 ml-auto mr-auto">
      <div className="space-y-1">
        <p>Email</p>
        <input
          type="text"
          className="w-full h-[45px] bg-transparent border-cgray-300 border-[1px] indent-4"
          placeholder="email"
        />
      </div>
      <div className="space-y-1">
        <p>Password</p>
        <input
          type="password"
          className="w-full h-[45px] bg-transparent border-cgray-300 border-[1px] indent-4"
          placeholder="password"
        />
      </div>
      <div>
        <a href="" className="text-cgreen-300 dark:text-cgreen-200">
          Forgot password?
        </a>
      </div>
      <Button label="submit" className="text-white bg-cgreen-200 w-full h-[50px]" />
    </form>
  );
};

export default SignIn;
