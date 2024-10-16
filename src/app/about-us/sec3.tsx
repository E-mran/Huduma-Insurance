import React from "react";
import Button from "@/components/atoms/button";

const Careers = () => {
  return (
    <div className="relative w-full mt-[100px]">
      <div className="flex flex-wrap gap-x-24 w-full justify-center text-center md:text-left">
        <div className="w-fit">
          <h5 className="text-cgreen-300 dark:text-cgreen-200">JOB</h5>
          <h3 className="pb-2">join us today</h3>
        </div>
        <div className="w-[90%] md:w-[600px]">
          <p className="pb-4">
            Huduma Insurance is hiring! Join our team and grow your career in customer service,
            claims, underwriting, and more. Explore exciting opportunities and make an impact in the
            insurance industry today.
          </p>
          <a href="/careers">
            <Button label="careers" className="w-[120px] h-[50px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
