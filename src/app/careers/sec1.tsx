import React from "react";
import Image from "next/image";

const Careers = () => {
  return (
    <div className="relative w-full mt-[60px]">
      <div className="flex flex-wrap gap-x-16 gap-y-10 justify-center items-center">
        <div className="w-[80%] md:w-[400px]">
          <div>
            <h5 className="text-cgreen-300 dark:text-cgreen-200">CAREERS</h5>
            <h3>Explore Exciting Career Opportunities and Build Your Future with Us</h3>
          </div>
          <p>
            At Huduma Insurance, we believe in fostering a culture of growth, innovation, and collaboration. Whether
            you're an experienced professional or just starting out, we offer exciting career and internship
            opportunities that will challenge and inspire you. Join us and be part of a team that's making a difference
            in the insurance industry!
          </p>
        </div>

        <div>
          <Image
            src="/careers/job1.jpeg"
            className="w-[350px] h-[400px] rounded-xl object-cover"
            width={0}
            height={0}
            alt="jobs"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Careers;
