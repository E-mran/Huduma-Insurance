"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/atoms/button";
import { InputField } from "@/components/atoms/input";
import Select from "@/components/atoms/select";
import SelectMotor from "./selectMotor";

const make = [];
const model = [];

const WhoWeAre = () => {
  const [type, setType] = useState("private");

  return (
    <div className="relative h-fit w-full mt-[30px]">
      <div className="w-[95%] md:w-[70%] pt-8 pb-8 space-y-10 text-center ml-auto mr-auto">
        <div>
          <h5 className="text-cgreen-300 dark:text-cgreen-200">INSURANCE</h5>
          <h3>select insurance type</h3>
        </div>
        <div className="flex justify-center items-center gap-x-10 w-[90%] md:w-full ml-auto mr-auto">
          <div
            className={`w-[150px] h-[150px] flex justify-center items-center bg-cgray-100 dark:bg-cblack-300 drop-shadow-lg hover:cursor-pointer ${
              type == "private" && "scale-110"
            }`}
            onClick={() => setType("private")}
          >
            <div>
              <Image
                src="/quote/car.svg"
                className="w-16 h-16 ml-auto mr-auto"
                width={0}
                height={0}
                alt="private motor"
              />
              <h6>motor private</h6>
            </div>
          </div>
          <div
            className={`w-[150px] h-[150px] flex justify-center items-center bg-cgray-100 dark:bg-cblack-300 drop-shadow-lg hover:cursor-pointer ${
              type == "public" && "scale-110"
            }`}
            onClick={() => setType("public")}
          >
            <div className="space-y-2">
              <Image
                src="/quote/bus.svg"
                className="w-16 h-16 ml-auto mr-auto"
                width={0}
                height={0}
                alt="commerical motor"
              />
              <h6>commerical motor</h6>
            </div>
          </div>
        </div>

        <div className="w-[90%] bg-cgray-100 dark:bg-cblack-300 drop-shadow-lg ml-auto mr-auto text-left">
          <div className="w-full md:w-[85%] p-10 ml-auto mr-auto">
            <h3 className="pb-8">vehicle details</h3>

            <form className="space-y-8" action="">
              <SelectMotor />

              <div className="flex flex-wrap gap-x-10 gap-y-8">
                <InputField
                  type="text"
                  className="w-[300px] border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px]"
                  name="reg_number"
                  id="reg_number"
                  label={"registration number"}
                />
                <InputField
                  type="text"
                  className="w-[300px] border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px]"
                  name="chassis_number"
                  id="chassis_number"
                  label={"chassis number"}
                />
              </div>
              <div className="flex">
                <InputField
                  type="text"
                  className="w-[300px] border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px]"
                  name="year_of_manufacture"
                  id="year_of_manufacture"
                  label={"year of manufacture"}
                />
              </div>

              <Button label="get quote" className="w-[150px] h-[50px]" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
