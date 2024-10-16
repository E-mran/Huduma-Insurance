import React from "react";
import Line from "@/components/atoms/line";

const Vision = () => {
  return (
    <div className="relative flex justify-center items-center w-full bg-cgray-100 dark:bg-cblack-300 mt-[100px]">
      <div className="w-[90%] md:w-[55%] pt-14 pb-14 text-left space-y-6">
        <div className="flex justify-between">
          <h3 className="text-cgreen-300 dark:text-cgreen-200">Vision</h3>
          <p className="w-[75%]">
            To be the leading provider of innovative and customer-centric insurance solutions in
            Kenya, setting the standard for accessibility, transparency, and trust in the industry.
          </p>
        </div>
        <Line className="mt-3 border-cgray-400 w-full ml-auto mr-auto" />
        <div className="flex justify-between">
          <h3 className="text-cgreen-300 dark:text-cgreen-200">Mission</h3>
          <p className="w-[75%]">
            Our mission is to empower individuals and businesses with comprehensive coverage options
            tailored to their unique needs. We pride ourselves on exceptional service, transparency,
            and reliability, ensuring our clients have the support they need when it matters most.
          </p>
        </div>
        <Line className="mt-3 border-cgray-400 w-full ml-auto mr-auto" />
        <div className="flex justify-between">
          <h3 className="text-cgreen-300 dark:text-cgreen-200">Goal</h3>
          <p className="w-[75%]">
            To redefine the insurance experience by making it more accessible, understandable, and
            beneficial for all, while fostering a secure and thriving community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
