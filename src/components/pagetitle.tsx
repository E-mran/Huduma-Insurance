import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="relative flex justify-center items-center h-[20vh] w-full titleBackground">
      <div className="flex justify-center items-center text-center mt-5 md:mt-10">
        <h1 className="text-white font-semibold text-[2.2em] md:text-[3em] uppercase">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
