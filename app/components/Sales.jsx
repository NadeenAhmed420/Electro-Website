import Image from "next/image";
import React from "react";

const Sales = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center md:grid md:grid-cols-12 bg-gray-100 pt-5 pb-0 md:py-8 px-6 sm:px-10 h-full md:h-[130px] relative my-15 w-[95%]">
        <div className="flex items-center justify-between md:contents ">
          <div className="col-span-5">
            <div className="w-[220px] sm:w-[270px] lg:w-[300px]">
              <h2 className="relative text-xl sm:text-2xl lg:text-3xl text-primary uppercase after:absolute after:content-[''] after:w-[1px] after:h-[50px] after:top-[15px] after:right-[-20px] after:bg-gray-200 after:hidden lg:after:block">
                shop and <span className="font-bold">save big</span> on hotest
                tablets
              </h2>
            </div>
          </div>
          <div className="col-span-2 mt-3">
            {" "}
            <div className="bg-secondary w-[100px] sm:w-[130px] lg:w-[180px] [60px] sm:h-[70px] rounded-lg text-center">
              <span className="text-primary text-[8px] font-semibold uppercase italic">
                starting at
              </span>
              <h1 className="text-primary text-3xl font-bold m-0">
                <sup>$</sup>79<sup>99</sup>{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="relative top-[0px] right-[0] md:absolute">
            <img
              src="/sales-2.png"
              alt="sales"
              className="w-100 md:w-80 h-[130px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
