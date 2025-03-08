import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CategoryCard = ({ image, title, msg }) => {
  const renderTitle = (text) => {
    return text.split("**").map((part, index) =>
      index % 2 === 0 ? (
        part
      ) : (
        <span key={index} className="font-bold">
          {part}
        </span>
      )
    );
  };

  return (
    <div className="flex items-center bg-gray-100 p-0.5 w-full  h-[160px] rounded-xl hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-[180px] h-[150px] object-contain"
      />
      <div className="flex-1 p-1">
        <h4 className="text-primary text-lg uppercase mb-3 ">
          {renderTitle(title)}
        </h4>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold">{msg}</span>
          <div className="w-[18px] h-[18px] flex justify-center items-center rounded-full bg-secondary">
            <IoIosArrowForward size={12} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

const categories = [
  {
    id: 1,
    image: "/category-1.png",
    title: "Catch Big **deals** on the cameras",
    msg: "Shop Now",
  },
  {
    id: 2,
    image: "/category-2.png",
    title: "tablets, smartphones **and more** ",
    msg: "UP To 70%",
  },
  {
    id: 3,
    image: "/category-3.png",
    title: "shop the **hotest** products",
    msg: "Shop Now",
  },
];

const Category = () => {
  return (
    <div className="container mx-auto mt-5 w-[95%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            image={category.image}
            title={category.title}
            msg={category.msg}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
