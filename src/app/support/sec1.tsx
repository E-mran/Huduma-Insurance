"use client";
import React, { useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/atoms/button";
import { CopyTextDiv } from "@/components/atoms/copyText";
import { sendContactEmail } from "@/components/handler/contact";
import { ErrorAlert, RequirementAlert, SuccessAlert } from "@/components/atoms/alerts";
import { InputField, TextAreaField } from "@/components/atoms/input";

const WhoWeAre = () => {
  const [requirements, setRequirements] = useState<React.ReactNode[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async () => {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
    const secondName = (document.getElementById("second-name") as HTMLInputElement).value;
    const subject = (document.getElementById("subject") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLInputElement).value;

    const newRequirements: React.ReactNode[] = [];

    if (!email) newRequirements.push(<li key="email">Email is required</li>);
    if (!phone) newRequirements.push(<li key="phone">Phone is required</li>);
    if (!firstName) newRequirements.push(<li key="firstName">First name is required</li>);
    if (!secondName) newRequirements.push(<li key="secondName">Second name is required</li>);
    if (!subject) newRequirements.push(<li key="subject">Subject is required</li>);
    if (!message) newRequirements.push(<li key="message">Message is required</li>);

    if (newRequirements.length > 0) {
      setRequirements(newRequirements);
      return;
    }

    const responseCode = await sendContactEmail({
      details: { email, phone, firstName, secondName, subject, message },
    });

    if (responseCode == 200) {
      setSuccess(true);
      const submitButton = window.document.getElementById("submit") as HTMLButtonElement;
      submitButton.disabled = true;
    } else if (responseCode == 500) {
      setError("An internal error has occured");
      return;
    } else if (responseCode == 503) {
      setError("An error occured, please try again.");
      return;
    }
  };

  return (
    <div className="relative w-full mt-8">
      <div className="w-[95%] md:w-[70%] py-8 space-y-10 text-center mx-auto">
        <div>
          <h5 className="text-cgreen-300 dark:text-cgreen-200">SUPPORT</h5>
          <h3>need assistance with anything?</h3>
        </div>

        <div className="w-[80%] md:w-[60%] space-y-2 mx-auto">
          <CopyTextDiv
            text="support@hudumainsurance.com"
            className="flex items-center gap-x-2 w-fit"
          >
            <div className="bg-cgray-100 dark:bg-cblack-300 w-12 h-12 rounded-full flex justify-center items-center drop-shadow-lg">
              <Image src="/email.svg" className="w-6 h-6" width={0} height={0} alt="Email" />
            </div>
            <p className="font-semibold">support@hudumainsurance.com</p>
          </CopyTextDiv>

          <CopyTextDiv text="+2547 2960 002" className="flex items-center gap-x-2 w-fit">
            <div className="bg-cgray-100 dark:bg-cblack-300 w-12 h-12 rounded-full flex justify-center items-center drop-shadow-lg">
              <Image src="/phone.svg" className="w-6 h-6" width={0} height={0} alt="Phone" />
            </div>
            <p className="font-semibold">+2547 2960 002</p>
          </CopyTextDiv>

          <a href="/" className="flex items-center gap-x-2 w-fit">
            <div className="bg-cgray-100 dark:bg-cblack-300 w-12 h-12 rounded-full flex justify-center items-center drop-shadow-lg">
              <Image src="/whatsapp.svg" className="w-6 h-6" width={0} height={0} alt="WhatsApp" />
            </div>
            <p className="font-semibold">contact us via WhatsApp</p>
          </a>
        </div>

        <div className="w-[95%] md:w-[80%] bg-cgray-100 dark:bg-cblack-300 text-left mx-auto drop-shadow-lg">
          <div className="space-y-6 pt-6 w-[80%] mx-auto">
            <h3>Contact Us</h3>
            {requirements.length > 0 && <RequirementAlert>{requirements}</RequirementAlert>}
            {error && <ErrorAlert message={error} />}
            {error && <SuccessAlert message="Email sent successfully!" />}
            <div className="space-y-8 w-fit pb-8">
              <div className="flex flex-wrap gap-x-10 gap-y-8">
                <InputField
                  type="text"
                  className="w-[300px] border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px]"
                  name="email"
                  id="email"
                  label={"email"}
                />
                <InputField
                  type="text"
                  className="w-[300px] border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px]"
                  name="phone"
                  id="phone"
                  label={"phone"}
                />
              </div>

              <div className="flex flex-wrap gap-x-10 gap-y-8">
                <InputField
                  type="text"
                  className="w-[300px] border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px]"
                  name="first-name"
                  id="first-name"
                  label={"first name"}
                />
                <InputField
                  type="text"
                  className="w-[300px] border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px]"
                  name="second-name"
                  id="second-name"
                  label={"second name"}
                />
              </div>

              <div className="flex">
                <InputField
                  type="text"
                  className="w-[300px] border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px]"
                  name="subject"
                  id="subject"
                  label={"subject"}
                />
              </div>

              <div className="flex">
                {/* <textarea
                  className="w-full border-transparent bg-transparent border-b-[1px] border-b-black dark:border-b-cgray-400"
                  rows={5}
                  placeholder="Message"
                  id="message"
                ></textarea> */}
                <TextAreaField
                  className="w-full border-transparent bg-transparent border-b-[1px] border-b-black dark:border-b-cgray-400"
                  name="message"
                  id="message"
                  rows={5}
                  label={"message"}
                />
              </div>

              <PrimaryButton
                label="Submit"
                className="w-[150px] h-[50px]"
                onClick={handleSubmit}
                id="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
