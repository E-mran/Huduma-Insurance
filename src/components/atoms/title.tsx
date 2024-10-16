import React from "react";
import Line from "./line";

interface TitleProps {
  className?: string;
  color?: string;
  label: string;
}

const Title = ({ className, label, color }: TitleProps) => {
  return (
    <div className={`w-fit ${className ? className : ""}`}>
      <h3 className={`w-fit text-black dark:text-white ${color ? color : ""}`}>{label}</h3>
      <Line
        className={`w-[40%] border-black dark:border-white ml-auto mr-auto ${color ? color : ""}`}
      />
    </div>
  );
};

export default Title;
