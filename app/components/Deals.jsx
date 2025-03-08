"use client";
import data from "../data/data.json";
import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";
import { LuGitCompare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const tabItems = [
  "Best Deals",
  "Tv & Video",
  "Camera",
  "Cell Phone",
  "Accessories",
  "GPS & Navi",
  "Laptops",
  "Computers",
];
const TabItem = ({ title }) => (
  <li className="font-medium hover:font-bold hover:border-b-2 hover:border-secondary pb-1 cursor-pointer">
    {title}
  </li>
);

// Reusable DealCard Component
const DealCard = ({ product }) => {
  return (
    <div className="group h-full sm:h-[300px] px-4 pb-2 bg-white border-gray-100 border rounded-lg cursor-pointer hover:h-full hover:scale-102 hover:shadow-md hover:border-gray-200 hover:border-1 hover:transition-all hover:duration-300 hover:ease-in">
      <div className="mt-3">
        <span className="text-[10px] font-semibold text-gray-500">
          {product.title}
        </span>
        <p className="text-sky-700 font-semibold text-[15px] sm:text-[15px] md:text-[13px] lg:text-[15px] mt-1">
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
          <div className="flex items-center justify-between gap-3 group-hover:hidden opacity-100 hover:transition-opacity hover:duration-500 hover:ease-in">
            <span className="text-gray-600 text-md font-semibold">
              ${product.price.toFixed(2)}
            </span>
          </div>
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
              <small className="text-[10px] font-semibold">Compare</small>
            </div>
            <div className="flex items-center gap-1">
              <FaRegHeart color="gray" />
              <small className="text-[10px] font-semibold">Wishlist</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Deals Component
export default function Deals() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto py-5  w-[95%] ">
        {/* START OF OFFERS TABS */}
        <div className="flex items-center justify-center  relative after:absolute after:content-[''] after:w-full after:h-[1px] after:top-[32px] after:left-0 after:bg-gray-200 z-0 mb-5">
          <ul className="flex flex-wrap items-center justify-center gap-5 lg:gap-10 w-full text-[12px] lg:text-lg text-primary z-10">
            {tabItems.map((title, index) => (
              <TabItem key={index} title={title} />
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-5 mx-auto">
          <div className="col-span-12 sm:col-span-12 md:col-span-3 flex flex-col gap-4">
            {data.deals.slice(0, 2).map((product, index) => (
              <DealCard key={index} product={product} />
            ))}
          </div>

          <div className="col-span-12 md:col-span-6 bg-white h-full md:h-[610px] mb-10 sm:mb-4">
            <div className="ms-5 my-4">
              <span className="text-[10px] font-semibold text-gray-500">
                TVS
              </span>
              <p className="text-sky-700 font-semibold text-sm">
                Widescreen 4K SUHD TV
              </p>
            </div>
            <div className="flex items-center justify-center my-10 xl:my-2">
              <img
                src="/deals.png"
                alt="Deals"
                className="w-[300px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[350px] xl:w-[500px] xl:h-[400px] md:mt-8"
              />
            </div>
            <div className="flex items-center justify-between mx-5 md:mt-15 lg:mt-8">
              <div className="flex items-center gap-3">
                <p className="text-red-500 text-2xl font-bold">$2,999.00</p>
                <span className="text-gray-500 font-medium line-through text-md">
                  $5000
                </span>
              </div>
              <button className="flex items-center gap-1.5 mt-2 bg-yellow-400 p-2 sm:px-4 sm:py-2 text-white text-sm rounded-3xl hover:bg-yellow-500 transition-colors">
                <MdOutlineAddShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-3 flex flex-col gap-4">
            {data.deals.slice(2, 4).map((product, index) => (
              <DealCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
