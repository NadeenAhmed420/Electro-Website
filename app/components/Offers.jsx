"use client";
import data from "../data/data.json";
import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";
import { LuGitCompare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const Offers = () => {
  const totalTime = 8 * 3600; // 8 hours in seconds
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (t) => String(Math.floor(t)).padStart(2, "0");

  // OFFERS TABS
  const tabItems = ["Featured Products", "On Sale", "Top Rated"];
  const TabItem = ({ title }) => (
    <li className="font-medium hover:font-bold hover:border-b-2 hover:border-secondary pb-1 cursor-pointer">
      {title}
    </li>
  );

  return (
    <>
      <div className="container mx-auto grid grid-cols-12 mt-10 mb-20 gap-3 w-[95%]">
        <div className="col-span-12 sm:col-span-4 md:col-span-4  border-secondary border-3 rounded-lg mt-3  md:px-2 h-fit md:h-full">
          <div className="flex items-center justify-between p-3">
            <h2 className="text-sm md:text-2xl text-primary font-bold flex flex-col">
              Special <span className="font-semibold">Offer</span>
            </h2>
            <p className="text-white  bg-primary w-[80px] md:w-[110px] h-[55px] flex flex-col items-center justify-center rounded-md">
              Save <span className="text-xs font-semibold">20%</span>
            </p>
          </div>
          <img
            src="/offer-1.jpg"
            alt="offers"
            className="object-contain w-full h-[180px] sm:h-[200px] mt-5 transform rotate-[-1deg]  "
          />
          <div className="px-3 sm:px-2">
            <div className="flex flex-col items-center  gap-3 sm:mt-0 mt-7  ">
              <p className="text-sky-700 font-semibold text-[18px] w-[300px] max-w-full text-center mt-3">
                GameConsole Limited edition gaming console with Destiny design.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 font-semibold line-through text-lg ">
                  $99.8
                </span>
                <span className="text-red-600 text-lg font-semibold">
                  $75.3
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-2">
              <small>
                Available:<span className="font-semibold">6</span>
              </small>
              <small>
                Alredy Sold:<span className="font-semibold">28</span>
              </small>
            </div>
            <div className=" w-full h-4 bg-gray-200 rounded-2xl">
              <div
                className="h-full bg-yellow-400 mt-2"
                style={{ width: `${30}%` }}
              ></div>
            </div>
            <div className="text-center mt-3">
              <p className="text-sm font-semibold">Hurry Up! Offer Ends In:</p>
              <div className="flex justify-center gap-2 text-xl font-bold mt-2 mb-5">
                <span className="bg-gray-100 p-2 rounded-lg w-12 text-center">
                  {formatTime(timeLeft / 3600)}
                </span>{" "}
                :
                <span className="bg-gray-100 p-2 rounded-lg w-12 text-center">
                  {formatTime((timeLeft % 3600) / 60)}
                </span>{" "}
                :
                <span className="bg-gray-100 p-2 rounded-lg w-12 text-center">
                  {formatTime(timeLeft % 60)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-8 md:col-span-8 mt-3 sm:mt-0 h-[580px] overflow-y-scroll md:overflow-visible">
          {/* START OF OFFERS TABS */}
          <div className="flex items-center justify-center relative after:absolute after:content-[''] after:w-full after:h-[1px] after:top-[32px] after:left-0 after:bg-gray-200 z-0">
            <ul className="flex items-center justify-center gap-5 w-full text-[12px] sm:text-lg text-primary z-10">
              {tabItems.map((title, index) => (
                <TabItem key={index} title={title} />
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
            {data.offers.map((product, index) => (
              <div
                key={index}
                className=" group px-4 pb-2 bg-white border-gray-100 border rounded-lg cursor-pointer hover:scale-102 hover:shadow-md hover:border-gray-200 hover:border-1 hover:transition-all hover:duration-300 hover:ease-in"
              >
                <div className="mt-3">
                  <span className=" text-[12px] font-semibold text-gray-500">
                    {product.title}
                  </span>
                  <p className="text-sky-700 font-semibold text-[15px] sm:text-[10px] md:text-[15px] lg:text-[15px] mt-1 ">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src={product.image}
                      width={150}
                      height={150}
                      alt={product.title}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex justify-between items-center gap-3 w-full mt-3">
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
                    <button className="flex items-center justify-end bg-gray-300 rounded-full p-1.5 w-[25px] h-[25px] hover:bg-secondary transition-all duration-300 ease-in-out">
                      <BsCartPlus color="white" size={15} />
                    </button>
                  </div>

                  <div className="overflow-hidden h-0 group-hover:h-[50px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <hr className="text-gray-300 w-full mt-3" />
                    <div className="flex items-center gap-3 mt-4">
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
