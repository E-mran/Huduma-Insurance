import React from "react";
import Button from "@/components/atoms/button";
import { InputField } from "@/components/atoms/input";

const Careers = () => {
  return (
    <div className="relative w-full mt-[60px]">
      <div className="space-y-10">
        <div className="w-[80%] md:w-[400px] text-center ml-auto mr-auto">
          <div>
            <h5 className="text-cgreen-300 dark:text-cgreen-200">CLAIMS</h5>
            <h3>file a claim</h3>
          </div>
          <p>Easily file, track, and manage your insurance claims with our streamlined process.</p>
        </div>

        <div className="w-[95%] md:w-[900px] bg-cgray-100 dark:bg-cblack-300 ml-auto mr-auto">
          <div className="w-full md:w-[85%] space-y-6 p-10 ml-auto mr-auto">
            <div>
              <h3 className="pb-3">required documents</h3>
              <ul className="list-disc ml-5 text-cgray-500 dark:text-cgray-300">
                <li>Logbook copy</li>
                <li>Abstract</li>
                <li>Accident picture</li>
                <li>Insurance Certificate Copy</li>
              </ul>
            </div>

            <form className="space-y-8" action="">
              <h3 className="-mb-4">claim details</h3>
              <div className="flex flex-wrap gap-x-10 gap-y-8">
                <InputField
                  type="text"
                  className="w-[300px] border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px]"
                  name="id-number"
                  id="id-number"
                  label={"ID Number"}
                />
                <InputField
                  type="text"
                  className="w-[300px] border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px]"
                  name="kra-pin"
                  id="kra-pin"
                  label={"KRA Pin"}
                />
              </div>

              <div className="w-full h-[200px] bg-transparent border-[1px] border-cgray-300 dark:border-cgray-400">
                <p className="p-3 text-cgray-400">upload your documents</p>
              </div>
              <Button label="submit" className="w-[150px] h-[50px]" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
