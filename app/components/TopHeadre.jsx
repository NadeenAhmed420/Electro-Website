"use client";
import React, { useState, useRef, useEffect } from "react";
import { LuGitCompare } from "react-icons/lu";
import { FaRegHeart, FaSearch, FaChevronDown } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

const categories = [
  "All Categories",
  "Electronics",
  "Smartphones",
  "Laptops & Computers",
  "Cameras & Photography",
  "Gaming",
  "Home & Kitchen",
  "Fashion",
];

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-5 bg-white border-2 border-yellow-400 rounded-full overflow-visible w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search for products"
        className="w-full flex-1 indent-2.5 px-4 py-2 outline-none text-gray-700 placeholder-gray-400 placeholder:text-[13px] placeholder:font-medium"
      />

      <div className="relative inline-block" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm hover:text-gray-900 transition-colors"
        >
          <span>{selectedCategory}</span>
          <FaChevronDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={12}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-[999]">
            <ul className="py-2 max-h-64 overflow-auto">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 ${
                    category === selectedCategory
                      ? "text-primary font-medium"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button className="bg-secondary rounded-r-full py-3 px-7 text-white">
        <FaSearch size={16} color="#343e48" />
      </button>
    </div>
  );
};

const TopHeader = () => {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-2  mt-5 mb-10 w-[95%] flex items-center relative lg:mb-20">
      <div className="col-span-12 sm:col-span-3 md:col-span-3 w-full sm:w-[175px]">
        <h1 className="text-3xl lg:text-5xl relative  font-extrabold text-primary after:absolute after:content-[''] after:w-[10px] after:h-[10px] after:text-secondary after:rounded-full after:top-[35px] after:right-[-10px] after:bg-secondary after:hidden lg:after:block">
          electro
        </h1>
      </div>
      <div className="col-span-12 sm:col-span-9 md:col-span-6 ">
        <SearchBar />
      </div>
      <div className="col-span-12 md:col-span-3 hidden md:block">
        <div className="flex items-center justify-end gap-3 lg:gap-8">
          <LuGitCompare size={20} />
          <FaRegHeart size={20} />
          <div className="relative cursor-pointer">
            <BsBag size={20} className="text-primary z-0" />
            <div className="absolute -bottom-2.5 -right-2.5 bg-secondary w-[18px] h-[18px] rounded-full z-10 flex items-center justify-center">
              <span className="text-[10px] font-bold">4</span>
            </div>
          </div>
          <span className="text-primary text-[15px] font-bold ">
            <sup>$</sup> 3.152.99
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
