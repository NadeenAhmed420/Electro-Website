"use client";
import data from "../data/data.json";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { BsCartPlus } from "react-icons/bs";
import { LuGitCompare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const tabItems = [
  "Best Sellers",
  "Top 20",
  "Laptops & computers",
  "Vedio cameras",
];
const TabItem = ({ title }) => (
  <li className="font-medium hover:font-bold hover:border-b-2 hover:border-secondary pb-1 cursor-pointer">
    {title}
  </li>
);

const BestSellers = () => {
  return (
    <div className="container mx-auto mt-3 sm:mt-10 w-[95%] ">
      {/* START OF OFFERS TABS */}
      <div className="flex items-center justify-center  relative after:absolute after:content-[''] after:w-full after:h-[1px] after:top-[32px] after:left-0 after:bg-gray-200 z-0 mb-5">
        <ul className="flex flex-wrap items-center justify-center gap-5 lg:gap-10 w-full text-[12px] lg:text-lg text-primary z-10">
          {tabItems.map((title, index) => (
            <TabItem key={index} title={title} />
          ))}
        </ul>
      </div>
      <div className=" grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data.bestSellers.map((product, index) => (
          <div
            key={index}
            className="group p-3 bg-white border-gray-100 border rounded-lg cursor-pointer mx-1 mt-4  hover:scale-105 hover:shadow-md hover:border-gray-200 hover:border-1 hover:transition-all hover:duration-300 hover:ease-in"
          >
            <div className="flex items-center justify-start md:justify-between gap-2">
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className="w-[90px] h-[80px]"
              />
              <div className="flex flex-col items-start justify-between w-full">
                <span className=" text-[10px] font-semibold text-gray-500">
                  {product.title}
                </span>
                <p className="text-sky-700 font-semibold text-[13px] sm:text-[10px] lg:text-[13px] my-3 ">
                  {product.description}
                </p>
                <div className="flex justify-between items-center  w-full">
                  {/* price - hide on hover */}
                  <div className="flex items-center justify-between gap-3 group-hover:hidden opacity-100 hover:transition-opacity hover:duration-500 hover:ease-in">
                    <span className="text-gray-600 text-md font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  {/* While Hovering */}
                  <div className="flex items-center justify-between gap-3 hidden group-hover:flex group-hover:opacity-100 transition-opacity duration-500 ease-in">
                    <span className="text-red-600 text-md font-semibold">
                      ${product.price.toFixed(2)}
                    </span>

                    {product.oldPrice && (
                      <span className="text-gray-500 font-semibold line-through text-[10px]">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button className="flex items-center justify-end bg-gray-300 rounded-full p-1.5  w-[25px] h-[25px]  hover:bg-secondary transition-all duration-300 ease-in-out">
                    <BsCartPlus color="white" size={15} />
                  </button>
                </div>

                <div className="overflow-hidden h-0 group-hover:h-[50px] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <hr className="text-gray-300 w-full mt-3" />
                  <div className="flex items-center gap-3 mt-4 ">
                    <div className="flex items-center gap-1">
                      <LuGitCompare color="gray" />
                      <small className="text-[10px] font-semibold">
                        compare
                      </small>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRegHeart color="gray" />
                      <small className="text-[10px] font-semibold">
                        wishlist
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
