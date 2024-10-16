import React from "react";

const Services = () => {
  return (
    <div className="relative mt-[-100px] w-full">
      <div className="flex flex-wrap gap-10 md:gap-20 justify-center">
        <div className="flex justify-center items-center w-[400px] h-[260px] bg-cgray-100 dark:bg-cblack-300 text-center drop-shadow-lg">
          <div className="w-[85%]">
            <h3 className="pb-2">public vehicles</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales magna id
              egestas malesuada. Nam dapibus vel eros viverra tempus. Interdum et malesuada fames ac
              ante ipsum primis in faucibus.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-[400px] h-[260px] bg-cgray-100 dark:bg-cblack-300 text-center drop-shadow-lg">
          <div className="w-[85%]">
            <h3 className="pb-2">private vehicles</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales magna id
              egestas malesuada. Nam dapibus vel eros viverra tempus. Interdum et malesuada fames ac
              ante ipsum primis in faucibus.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-[80px] w-[90%] md:w-[500px] ml-auto mr-auto">
        <h3 className="pb-2">service benefits</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas nisl quis leo
          rhoncus pharetra. Integer efficitur sollicitudin turpis, et sodales orci accumsan a.
          Quisque posuere et lectus sed iaculis. Fusce at ex viverra, sagittis odio rhoncus,
          sollicitudin nisl. Fusce dignissim odio et nunc malesuada, et ultrices neque dignissim.
          Cras consequat velit finibus finibus rhoncus. Vivamus lacinia dolor facilisis, efficitur
          eros quis, congue erat. Nunc nec est justo.
        </p>
      </div>
    </div>
  );
};

export default Services;
