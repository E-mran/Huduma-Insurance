import React from "react";

const Private = () => {
  return (
    <div className="w-[95%] md:w-[60%] h-fit bg-cgray-100 dark:bg-cblack-300 pt-10 pb-10 p-4 md:p-10 mt-6 ml-auto mr-auto">
      <div className="w-[95%] space-y-10 ml-auto mr-auto">
        <div>
          <h5 className="text-cgreen-300 dark:text-cgreen-200">1. Choose the Right Coverage</h5>
          <p>
            Understand the difference between comprehensive, third-party only, and third-party,
            fire, and theft insurance. Consider comprehensive coverage if you want full protection,
            but weigh it against your budget and vehicle's value.
          </p>
        </div>

        <div>
          <h5 className="text-cgreen-300 dark:text-cgreen-200">2. Regularly Review Your Policy</h5>
          <p>
            As your car ages, the value may depreciate. Consider adjusting your policy to match your
            current needs, such as reducing premiums if the vehicle's value decreases.
          </p>
        </div>

        <div>
          <h5 className="text-cgreen-300 dark:text-cgreen-200">
            3. Maintain a Clean Driving Record
          </h5>
          <p>
            Avoid accidents and traffic violations to keep premiums lower. Insurance companies often
            reward safe drivers with lower rates or bonuses.
          </p>
        </div>

        <div>
          <h5 className="text-cgreen-300 dark:text-cgreen-200">
            4. Ensure Proper Vehicle Maintenance
          </h5>
          <p>
            Well-maintained vehicles are less prone to accidents and breakdowns. Regular servicing
            can also help detect issues that might affect insurance claims, such as tire wear or
            faulty brakes.
          </p>
        </div>

        <div>
          <h5 className="text-cgreen-300 dark:text-cgreen-200">5. Bundle Insurance Policies</h5>
          <p>
            If you own multiple vehicles or have other insurance needs, bundling policies (home,
            health, life) with the same provider can lead to discounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Private;
