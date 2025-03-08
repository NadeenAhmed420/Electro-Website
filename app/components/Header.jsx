"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FiMenu, FiChevronRight } from "react-icons/fi";

const Header = () => {
  const menuItems = [
    { name: "Value of the Day", hasChildren: false },
    { name: "Top 100 Offers", hasChildren: false },
    { name: "New Arrivals", hasChildren: false },
    { name: "Laptops & Computers", hasChildren: true },
    { name: "Cameras & Photography", hasChildren: true },
    { name: "Smart Phones & Tablets", hasChildren: true },
    { name: "Video Games & Consoles", hasChildren: true },
    { name: "TV & Audio", hasChildren: true },
    { name: "Gadgets", hasChildren: true },
    { name: "Car Electronic & GPS", hasChildren: true },
    { name: "Accessories", hasChildren: true },
  ];

  // OFFERS TABS
  const tabItems = [
    "Super Deals",
    "Featured Brands",
    "Trending Styles",
    "Gift Cards",
    "Blog",
  ];

  const TabItem = ({ title }) => (
    <li className="font-bold hover:font-bold cursor-pointer first:text-red-700">
      {title}
    </li>
  );

  const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        const isLarge = window.innerWidth >= 640;
        setIsLargeScreen(isLarge);
        setIsOpen(isLarge);
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const toggleMenu = () => {
      if (!isLargeScreen) {
        setIsOpen(!isOpen);
      }
    };

    return (
      <div className="relative z-20 lg:top-[-50px]">
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 px-4 py-3 bg-secondary text-primary font-semibold rounded-t-lg w-full"
        >
          <FiMenu size={24} />
          <span>All Departments</span>
        </button>

        <div
          className={`${
            isLargeScreen
              ? "static w-full bg-white shadow-lg rounded-b-lg"
              : "absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg"
          } ${!isLargeScreen && !isOpen ? "hidden" : "block"}`}
        >
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 cursor-pointer font-medium text-primary text-sm"
              >
                <span>{item.name}</span>
                {item.hasChildren && (
                  <FiChevronRight className="text-gray-400" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {isOpen && !isLargeScreen && (
          <div
            className="fixed inset-0 bg-black/15 z-10 sm:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-100">
      <div className="container grid grid-cols-12 mx-auto w-[95%]">
        <div className="col-span-12 sm:col-span-4 md:col-span-4 relative ">
          <SideMenu />
        </div>

        <div className="grid grid-cols-12 col-span-12 sm:col-span-8 md:col-span-8 lg:ms-5 relative lg:top-[-50px] ">
          <div className="col-span-12 flex items-center justify-between lg:ms-15 ">
            <ul className="flex md:flex-wrap items-center justify-center gap-3 sm:gap-5 text-[10px] md:text-sm text-primary z-10 mt-5 lg:mt-0">
              {tabItems.map((title, index) => (
                <TabItem key={index} title={title} />
              ))}
            </ul>
            <h6 className="text-[10px] text-primary hidden xl:block">
              Free Shipping On Orders Over $50
            </h6>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-5 mt-2 md:mt-15 lg:ms-15 ">
            <h1 className="lg:text-5xl text-3xl text-primary uppercase mb-2">
              The New Standard
            </h1>
            <span className="text-primary text-[13px] font-bold uppercase ">
              Under Favourable Smartwatches
            </span>
            <div className="my-2 sm:my-5">
              <span className="text-primary text-[10px] font-semibold uppercase ">
                FROM
              </span>
              <h1 className="text-primary text-4xl font-bold m-0">
                <sup>$</sup>749<sup>99</sup>{" "}
              </h1>
              <button className="w-[170px] bg-secondary text-primary px-4 py-2 rounded-xl mt-2 sm:mt-5">
                Start Buying
              </button>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-7 ">
            <img
              src="/header-1.png"
              alt=""
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[380px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
