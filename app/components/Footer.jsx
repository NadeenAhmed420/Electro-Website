import Image from "next/image";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";

// Data for links
const footerLinks = [
  {
    title: "Find it fast",
    links: [
      "Laptops & Computers",
      "Cameras & Photography",
      "Smartphones & Tablets",
      "Video Games",
      "TV & Audio",
      "Car Electronics & GPS",
    ],
  },
  {
    title: "Services",
    links: [
      "Printing & Publishing",
      "Office Supplies",
      "Accessories",
      "Computer Components",
    ],
  },
  {
    title: "Customer Care",
    links: [
      "My Account",
      "Track Orders",
      "Custom Service",
      "My Wishlist",
      "FAQs",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];

const socialIcons = [
  { icon: BsInstagram, size: 11 },
  { icon: BiLogoFacebook, size: 14 },
  { icon: FaTwitter, size: 12 },
  { icon: IoLogoWhatsapp, size: 12 },
  { icon: FaLinkedinIn, size: 12 },
];

const paymentMethods = [
  "/master-card.png",
  "/visa-logo.png",
  "/paypal.webp",
  "/mastro.webp",
];

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto mt-5 w-[95%]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {/* Contact Info */}
          <div>
            <h3 className="text-primary text-md font-bold mb-0">Electro</h3>
            <div className="flex items-start gap-3 my-1 sm:my-3">
              <Image src="/call.png" alt="Call Icon" width={25} height={25} />
              <div className="flex flex-col ">
                <small className="text-gray-600 text-[10px] font-medium">
                  Got Questions? Call us 24/7!
                </small>
                <span className="text-primary text-[8px] sm:text-sm font-semibold ">
                  (800)-(8001),(8588),7890
                </span>
              </div>
            </div>
            <div>
              <small className="text-primary text-xs font-bold">
                Contact Info
              </small>
              <p className="text-gray-600 text-[10px] font-medium">
                17 Princess Road, New York, NY 10001, USA
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              {socialIcons.map(({ icon: Icon, size }, index) => (
                <Icon key={index} size={size} color="#767676" />
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h5 className="text-primary text-xs font-bold">
                {section.title}
              </h5>
              <ul className="text-gray-600 text-xs ">
                {section.links.map((link, idx) => (
                  <li key={idx} className="hover:text-primary my-2.5 cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      {/* Bottom Section */}
      <div className=" mx-auto bg-gray-100 py-2 mt-5 ">
        <div className="container  w-[95%] mx-auto flex justify-between items-center text-xs">
          <div>
            &copy; <span className="font-bold">Electro</span> - All Rights
            Reserved
          </div>
          <div className="flex items-center gap-2">
            {paymentMethods.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Payment Method"
                width={20}
                height={20}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
