import React from "react";
import Button from "@/components/atoms/button";

const WhoWeAre = () => {
  return (
    <div className="relative h-fit w-full mt-[70px] space-y-10">
      <div className="w-[95%] md:w-[70%] bg-cgray-100 dark:bg-cblack-300 pt-8 pb-8 space-y-20 ml-auto mr-auto">
        <div className="space-y-4 w-[85%] ml-auto mr-auto">
          <h3>Private Vehicles Insurance</h3>
          <div>
            <h5 className="text-cgreen-300 dark:text-cgreen-200 pb-1">Comprehensive Cover</h5>
            <p>
              This policy offers the highest level of protection for your private vehicle. It covers
              damages to your car from accidents, fire, theft, vandalism, and natural disasters.
              Additionally, it provides third-party liability coverage, ensuring you are protected
              from any legal responsibility for damages or injuries to others.
            </p>
          </div>

          <div>
            <h5 className="text-cgreen-300 dark:text-cgreen-200 pb-1">Third-Party Only Cover</h5>
            <p>
              This is the minimum legal requirement for vehicle insurance. It covers the costs of
              damage or injury you may cause to another person, their vehicle, or their property.
              However, it does not cover any damage to your own vehicle.
            </p>
          </div>

          <div>
            <h5 className="text-cgreen-300 dark:text-cgreen-200 pb-1">
              Third-Party, Fire, and Theft Cover
            </h5>
            <p>
              In addition to third-party liability coverage, this policy protects your private
              vehicle from loss or damage caused by fire or theft. It does not, however, cover any
              damages resulting from accidents or other causes.
            </p>
          </div>

          <div>
            <a href="quote">
              <Button label="GET QUOTE" className="text-white bg-cgreen-200 w-[150px] h-[50px]" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-[95%] md:w-[70%] bg-cgray-100 dark:bg-cblack-300 pt-8 pb-8 space-y-20 ml-auto mr-auto">
        <div className="space-y-4 w-[85%] ml-auto mr-auto">
          <h3>Public Service Vehicles (PSV)</h3>
          <div>
            <h5 className="text-cgreen-300 dark:text-cgreen-200 pb-1">Comprehensive Cover</h5>
            <p>
              This policy provides full protection for public service vehicles, covering damage to
              the vehicle from accidents, fire, theft, and natural disasters. It also includes
              third-party liability, ensuring that any damage or injury caused to others is covered.
              Additional benefits may include passenger liability and driver coverage.
            </p>
          </div>

          <div>
            <h5 className="text-cgreen-300 dark:text-cgreen-200 pb-1">Third-Party Only Cover</h5>
            <p>
              This policy covers your legal liability for damage or injury to third parties,
              including passengers, other drivers, and pedestrians. It is the most basic level of
              insurance required for public service vehicles, but it does not cover damage to your
              vehicle.
            </p>
          </div>

          <div>
            <h5 className="text-cgreen-300 dark:text-cgreen-200 pb-1">
              Third-Party, Fire, and Theft Cover
            </h5>
            <p>
              This policy provides third-party liability coverage along with protection for your PSV
              from fire or theft. However, it does not cover damages to your vehicle from accidents
              or other non-fire-related incidents.
            </p>
          </div>

          <div>
            <a href="quote">
              <Button label="GET QUOTE" className="text-white bg-cgreen-200 w-[150px] h-[50px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
