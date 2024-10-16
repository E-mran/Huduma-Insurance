import React from "react";

interface LineProp {
  className?: string;
}
const Line = ({ className }: LineProp) => {
  return (
    <div
      className={`border-t border-black dark:border-white h-px ${
        className ? className : ""
      }`}
    />
  );
};

export default Line;
