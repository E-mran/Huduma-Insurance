import React from "react";
import Line from "../components/atoms/line";
import PrimaryButton from "../components/atoms/button";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center h-[85vh] w-full heroBackground">
      <div className="text-center w-[300px] md:w-[550px] z-10 mt-[-150px] lg:mt-[-70px]">
        <h1
          className="text-cwhite-200 dark:text-cwhite-200 text-[1.8em] md:text-[3em] no-font font-bold capitalize"
          style={{ lineHeight: "1" }}
        >
          Affordable & Reliable PSV and Private Vehicle Insurance in Kenya
        </h1>
        <p className="text-cgreen-100 dark:text-cgreen-100 w-[300px] md:w-[350px] ml-auto mr-auto mt-4 lg:mt-8 font-semibold text-xl">
          Protecting what drives you, every mile of the way{" "}
        </p>
        <Line className="mt-3 border-cwhite-300 w-full ml-auto mr-auto" />
        <div className="flex gap-4 justify-center mt-4">
          <a href="/about-us">
            <PrimaryButton label="about us" className="bg-corange-200 text-white" />
          </a>
          <a href="/quote">
            <PrimaryButton label="get quote" className="bg-corange-300 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
