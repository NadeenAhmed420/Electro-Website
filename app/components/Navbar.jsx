import React from "react";
import { FaPhoneAlt, FaRegEnvelope, FaTractor } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const navItems = [
  { icon: <FaPhoneAlt size={10} color="#fed700" />, text: "+123-(456)-7890" },
  {
    icon: <FaRegEnvelope size={12} color="#fed700" />,
    text: "info@electro.com",
  },
];

const NavBarItems = [
  {
    icon: <IoLocationOutline size={12} color="#343E48" />,
    text: "Store Locator",
  },
  { icon: <FaTractor size={12} color="#343E48" />, text: "Track Your Order" },
  { icon: <BsCurrencyDollar size={12} color="#343E48" />, text: "Dollar (US)" },
  { icon: <FiUser size={12} color="#343E48" />, text: "Register or Sign In" },
];

const NavItem = ({ icon, text }) => (
  <div className="flex items-center gap-1 relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] sm:after:h-[20px] after:top-[0px] sm:after:top-[2px] after:right-[-7px] sm:after:right-[-10px] after:bg-gray-200 last:after:hidden ">
    {icon}
    <span className="text-primary text-[10px] sm:text-[15px] font-medium whitespace-nowrap">
      {text}
    </span>
  </div>
);

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 w-[95%] text-xs">
        <div className="flex flex-wrap items-center gap-5">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-3 lg:mt-0 relative ">
          {NavBarItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
      </div>
      <hr className="border-gray-200" />
    </>
  );
};

export default Navbar;
