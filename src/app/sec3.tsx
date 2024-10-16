import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="relative w-full bg-cgray-100 dark:bg-cblack-300">
      <div className="mt-[80px] md:w-fit space-y-10 p-6 md:p-14 ml-auto mr-auto">
        <div className="flex flex-wrap w-full justify-center lg:gap-x-[150px] gap-y-[50px] text-left items-center">
          <div className="text-center md:text-left">
            <h3 className="pb-2">why choose us?</h3>
            <p className="lg:w-[600px]">
              We prioritize your peace of mind and financial security. Our diverse range of
              insurance plans is designed to protect what matters most to you—be it your health,
              home, or vehicle. With personalized solutions and expert guidance, we ensure that you
              can focus on living your life fully while we handle your future needs.
              <br />
              Join us on a journey towards a secure and prosperous future. With our commitment to
              excellent customer service and flexible plans, you can rest assured that you're making
              the right choice for you and your loved ones.
            </p>
          </div>
          <Image src="/logo.svg" className="w-[150px] h-[150px]" width={0} height={0} alt="logo" />
        </div>

        <div className="flex flex-wrap gap-y-4 justify-between w-full lg:w-[900px]">
          <div className="flex gap-x-4 w-fit">
            <Image src="/check.svg" className="w-[60px] h-[60px]" width={0} height={0} alt="logo" />
            <div className="md:w-[350px]">
              <h5 className="case">Customer Support</h5>
              <p>
                At Huduma Insurance, we ensure our payment terms are flexible and accommodating to
                meet your needs.
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 w-fit">
            <Image src="/check.svg" className="w-[60px] h-[60px]" width={0} height={0} alt="logo" />
            <div className="md:w-[350px]">
              <h5 className="case">Payment Reminders</h5>
              <p>
                Receive timely reminders before your payment is due, ensuring you stay on top of
                your policy obligations.
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 w-fit">
            <Image src="/check.svg" className="w-[60px] h-[60px]" width={0} height={0} alt="logo" />
            <div className="md:w-[350px]">
              <h5 className="case">No extra charges</h5>
              <p>
                Our payment plans do not attract additional fees, ensuring you get value for money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
