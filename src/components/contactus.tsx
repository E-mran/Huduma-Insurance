import PrimaryButton from "@/components/atoms/button";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="relative mt-[100px] w-full">
      <div className="flex flex-wrap w-fit justify-center items-center ml-auto mr-auto">
        <div className="md:mr-[100px] text-center md:text-left">
          <h3>contact us</h3>
          <p className="w-[300px]">we'll be with you every step of the way</p>
          <div className="mt-4 flex space-x-4 justify-center md:justify-start">
            <a href="tel:+254783930283">
              <div className="bg-cgray-100 dark:bg-cblack-300 w-14 h-14 rounded-4xl flex justify-center items-center drop-shadow-lg">
                <Image src="/phone.svg" className="w-8 h-8" width={0} height={0} alt="phone" />
              </div>
            </a>
            <a href="tel:+254783930283">
              <div className="bg-cgray-100 dark:bg-cblack-300 w-14 h-14 rounded-4xl flex justify-center items-center drop-shadow-lg">
                <Image
                  src="/whatsapp.svg"
                  className="w-8 h-8"
                  width={0}
                  height={0}
                  alt="whatsapp"
                />
              </div>
            </a>
            <a href="mailto:support@hudumacredit.com">
              <div className="bg-cgray-100 dark:bg-cblack-300 w-14 h-14 rounded-4xl flex justify-center items-center drop-shadow-lg">
                <Image src="/email.svg" className="w-8 h-8" width={0} height={0} alt="email" />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-9">
          <p className="py-2 text-center md:text-left">join us today</p>
          <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center md:justify-start">
            <input
              type="text"
              className=" bg-cgray-100 dark:bg-cblack-300 w-[300px] h-[50px] indent-2 drop-shadow-lg"
              placeholder="Enter your email here"
            />
            <PrimaryButton label="subscribe" className="bg-corange-200 text-black" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
