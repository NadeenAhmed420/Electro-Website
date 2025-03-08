"use client";
import data from "../data/data.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsCartPlus } from "react-icons/bs";
import { LuGitCompare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useRef } from "react";

const RecentlyViewed = () => {
  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);

  return (
    <div className="container mx-auto w-[95%] mb-5 ">
      <div className="flex items-center justify-between relative after:absolute after:content-[''] after:w-full after:h-[2px] after:top-7 after:left-0 after:bg-gray-200 before:absolute before:content-[''] before:w-[150px] before:h-[2px] before:top-7 before:z-10 before:left-0 before:bg-secondary">
        <h2 className="w-full text-md text-primary font-semibold mb-1">
          Recently Viewed
        </h2>
        <div className="flex items-center justify-end gap-2 relative top-[-1px]">
          <button ref={swiperPrevRef} className="text-primary font-semibold bg-gray-100 p-2 rounded-full w-[25px] h-[25px] flex items-center justify-center">&lt;</button>
          <button ref={swiperNextRef} className="text-primary font-semibold bg-gray-100 p-2 rounded-full w-[25px] h-[25px] flex items-center justify-center">&gt;</button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: swiperPrevRef.current,
          nextEl: swiperNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperPrevRef.current;
          swiper.params.navigation.nextEl = swiperNextRef.current;
        }}
        breakpoints={{
          400: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1440: { slidesPerView: 6 },
        }}
      >
        {data.recentlyViewed.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="w-full min-w-[200px] h-[300px] group hover:h-full p-3 bg-white border-gray-100 border rounded-lg cursor-pointer mx-1 mt-4 mb-12 hover:scale-105 hover:shadow-md hover:border-gray-200 hover:border-1 hover:transition-all hover:duration-300 hover:ease-in">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={product.image}
                  width={150}
                  height={150}
                  alt={product.title}
                  className="object-contain"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-primary text-sm font-semibold">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-[13px] font-semibold mt-1">
                  {product.description}
                </p>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentlyViewed;
