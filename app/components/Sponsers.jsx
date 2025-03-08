"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const logos = [
  "/slider-1.jpg",
  "/slider-2.png",
  "/slider-3.jpg",
  "/slider-4.png",
  "/slider-5.png",
  "/slider-6.png",
  "/slider-7.png",
  "/slider-8.jpg",
];
function SliderButtons() {
  const swiper = useSwiper();
  return (
    <>
      <div className="card-buttons flex justify-between">
        <button
          className="text-primary font-semibold p-2 rounded-full w-[25px] h-[25px] flex items-center justify-center"
          onClick={() => swiper.slidePrev()}
        >
          &lt;
        </button>
        <button
          className="text-primary  font-semibold  p-2 rounded-full w-[25px] h-[25px] flex items-center justify-center"
          onClick={() => swiper.slideNext()}
        >
          &gt;
        </button>
      </div>
    </>
  );
}
const Sponsers = () => {
  return (
    <div className=" container mx-auto w-[95%] border-y-gray-200 border-x-0 border-1 mb-5">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="flex h-[50px]"
      >
        <SliderButtons />
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center px-15 h-[50px] "
          >
            <Image
              src={logo}
              alt={`Logo ${index}`}
              className=" w-[100px] max-h-[100px] text-center "
              width={100}
              height={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponsers;
