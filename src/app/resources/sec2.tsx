"use client";
import React, { useEffect, useState } from "react";

const FAQ = () => {
  const [questionID, setQuestionID] = useState(1);

  const toggleVisibilityHandler = (qID: number) => setQuestionID(qID);

  return (
    <div className="relative flex justify-center items-center w-full mt-[50px]">
      <div className="w-full h-fit md:p-10 mt-6">
        <h4 className="text-center text-cgreen-200 dark:text-cgreen-100">FAQ</h4>
        <h3 className="text-center pb-4">frequently asked questions</h3>
        <div className="w-[95%] md:w-[85%] p-4 bg-cgray-100 dark:bg-cblack-300 ml-auto mr-auto">
          <div
            className="w-full h-fit flex items-center pb-4 border-b-[1px] border-cgray-400"
            onClick={() => toggleVisibilityHandler(1)}
          >
            <div className="flex justify-between w-[96%] hover:cursor-pointer ml-auto mr-auto">
              <div className="space-y-2">
                <p className="w-[90%] font-semibold">
                  What is the difference between comprehensive and third-party insurance?
                </p>
                <p className={`${questionID == 1 ? "" : "hidden"}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac purus et leo
                  eleifend malesuada. Nulla venenatis vestibulum ante, sit amet pulvinar dui
                  placerat vel. Phasellus rhoncus suscipit neque ut ornare. Integer mattis lorem vel
                  tellus imperdiet porttitor. Etiam quam leo, finibus in nisi a, dapibus pharetra
                  ligula. Morbi sodales nec ante faucibus aliquet. Nunc lacus tellus, vestibulum a
                  leo at, pellentesque maximus nibh. Nulla quis interdum mauris, nec imperdiet
                  lorem.
                </p>
              </div>
              {questionID == 1 ? <p>▲</p> : <p>▼</p>}
            </div>
          </div>

          <div
            className="w-full h-fit flex items-center pb-4 pt-4 border-b-[1px] border-cgray-400"
            onClick={() => toggleVisibilityHandler(2)}
          >
            <div className="flex justify-between w-[96%] hover:cursor-pointer ml-auto mr-auto">
              <div className="space-y-2">
                <p className="w-[90%] font-semibold">
                  How do I choose the right insurance coverage for my vehicle?
                </p>
                <p className={`${questionID == 2 ? "" : "hidden"}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac purus et leo
                  eleifend malesuada. Nulla venenatis vestibulum ante, sit amet pulvinar dui
                  placerat vel. Phasellus rhoncus suscipit neque ut ornare. Integer mattis lorem vel
                  tellus imperdiet porttitor. Etiam quam leo, finibus in nisi a, dapibus pharetra
                  ligula. Morbi sodales nec ante faucibus aliquet. Nunc lacus tellus, vestibulum a
                  leo at, pellentesque maximus nibh. Nulla quis interdum mauris, nec imperdiet
                  lorem.
                </p>
              </div>
              {questionID == 2 ? <p>▲</p> : <p>▼</p>}
            </div>
          </div>

          <div
            className="w-full h-fit flex items-center pb-4 pt-4 border-b-[1px] border-cgray-400"
            onClick={() => toggleVisibilityHandler(3)}
          >
            <div className="flex justify-between w-[96%] hover:cursor-pointer ml-auto mr-auto">
              <div className="space-y-2">
                <p className="w-[90%] font-semibold">
                  Can I transfer my insurance to a new vehicle?
                </p>
                <p className={`${questionID == 3 ? "" : "hidden"}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac purus et leo
                  eleifend malesuada. Nulla venenatis vestibulum ante, sit amet pulvinar dui
                  placerat vel. Phasellus rhoncus suscipit neque ut ornare. Integer mattis lorem vel
                  tellus imperdiet porttitor. Etiam quam leo, finibus in nisi a, dapibus pharetra
                  ligula. Morbi sodales nec ante faucibus aliquet. Nunc lacus tellus, vestibulum a
                  leo at, pellentesque maximus nibh. Nulla quis interdum mauris, nec imperdiet
                  lorem.
                </p>
              </div>
              {questionID == 3 ? <p>▲</p> : <p>▼</p>}
            </div>
          </div>

          <div
            className="w-full h-fit flex items-center pb-4 pt-4 border-b-[1px] border-cgray-400"
            onClick={() => toggleVisibilityHandler(4)}
          >
            <div className="flex justify-between w-[96%] hover:cursor-pointer ml-auto mr-auto">
              <div className="space-y-2">
                <p className="w-[90%] font-semibold">What factors affect my insurance premium?</p>
                <p className={`${questionID == 4 ? "" : "hidden"}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac purus et leo
                  eleifend malesuada. Nulla venenatis vestibulum ante, sit amet pulvinar dui
                  placerat vel. Phasellus rhoncus suscipit neque ut ornare. Integer mattis lorem vel
                  tellus imperdiet porttitor. Etiam quam leo, finibus in nisi a, dapibus pharetra
                  ligula. Morbi sodales nec ante faucibus aliquet. Nunc lacus tellus, vestibulum a
                  leo at, pellentesque maximus nibh. Nulla quis interdum mauris, nec imperdiet
                  lorem.
                </p>
              </div>
              {questionID == 4 ? <p>▲</p> : <p>▼</p>}
            </div>
          </div>

          <div
            className="w-full h-fit flex items-center pb-4 pt-4"
            onClick={() => toggleVisibilityHandler(5)}
          >
            <div className="flex justify-between w-[96%] hover:cursor-pointer ml-auto mr-auto">
              <div className="space-y-2">
                <p className="w-[90%] font-semibold">
                  How do I update my policy if my details change?
                </p>
                <p className={`${questionID == 5 ? "" : "hidden"}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac purus et leo
                  eleifend malesuada. Nulla venenatis vestibulum ante, sit amet pulvinar dui
                  placerat vel. Phasellus rhoncus suscipit neque ut ornare. Integer mattis lorem vel
                  tellus imperdiet porttitor. Etiam quam leo, finibus in nisi a, dapibus pharetra
                  ligula. Morbi sodales nec ante faucibus aliquet. Nunc lacus tellus, vestibulum a
                  leo at, pellentesque maximus nibh. Nulla quis interdum mauris, nec imperdiet
                  lorem.
                </p>
              </div>
              {questionID == 5 ? <p>▲</p> : <p>▼</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
