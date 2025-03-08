import React from "react";
import { BsSend } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="bg-secondary p-3 mb-10">
      <div className="container w-[95%] grid sm:grid-cols-3 md:grid-cols-3  mx-auto ">
        <div className=" flex items-center gap-2 ">
          <BsSend size={14} />
          <h4 className="text-primary text-xs font-medium">
            Sign up to NewsLetter
          </h4>
        </div>
        <div>
          <span className="text-primary text-sm">
            {" "}
            ... and recieve{" "}
            <small className="font-bold"> $20 coupon for first shopping</small>
          </span>
        </div>
        <div className=" flex items-center bg-yellow-400 rounded-full mt-1">
          <input
            type="text"
            placeholder="Enter your email address"
            className="bg-white border-none outline-none text-[9px] py-1 px-5 rounded-l-full flex-grow placeholder:text-[8px]"
          />
          <button
            className="bg-gray-800 text-white text-[9px] font-medium px-4 py-1 rounded-r-full"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
