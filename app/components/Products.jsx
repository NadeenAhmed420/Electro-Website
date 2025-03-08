import Image from "next/image";

export default function Products() {
  return (
    <div className=" container mx-auto w-[95%] py-8 ">
      <div className="grid grid-cols-12 w-full h-[450px] overflow-y-scroll md:overflow-visible sm:h-full ">
        {/* Featured Products */}
        <div className="col-span-12 xs:col-span-6 md:col-span-6 lg:col-span-3 mb-4 ">
          <h2 className="flex items-center justify-between relative after:absolute after:content-[''] after:w-[200px] after:h-[2px] after:top-7 after:left-0 after:bg-gray-200 before:absolute before:content-[''] before:w-[140px] before:h-[2px] before:top-7 before:z-10 before:left-0 before:bg-secondary">Featured Products</h2>

          <div className="space-y-4 mt-3">
            <ProductItem
              imgSrc="/product-1.jpeg"
              title="Purple Wireless Headphones Solo 2 HD"
              price="$1149.00"
            />
            <ProductItem
              imgSrc="/product-2.jpg"
              title="Powerbank 1130 mAh Blue"
              price="$210.00"
              rating={5}
            />
            <ProductItem
              imgSrc="/product-3.png"
              title="Nerocool EN52377 Dead Silence Gaming Cube Case"
              price="$180.00"
            />
          </div>
        </div>

        {/* Onsale Products */}
        <div className="col-span-12 xs:col-span-6 md:col-span-6 lg:col-span-3 mb-4">
          <h2 className="flex items-center justify-between relative after:absolute after:content-[''] after:w-[200px] after:h-[2px] after:top-7 after:left-0 after:bg-gray-200 before:absolute before:content-[''] before:w-[140px] before:h-[2px] before:top-7 before:z-10 before:left-0 before:bg-secondary">Onsale Products</h2>

          <div className="space-y-4 mt-3">
            <ProductItem
              imgSrc="/product-4.jpeg"
              title="Yellow Earphones Waterproof with Bluetooth"
              price="$110.00"
              oldPrice="$250.00"
            />
            <ProductItem
              imgSrc="/product-5.jpeg"
              title="Camera C430W 4K Waterproof"
              price="$899.00"
              oldPrice="$1200.00"
            />
            <ProductItem
              imgSrc="/product-6.jpg"
              title="Blue Wireless Headphones HD"
              price="$2100.00"
              oldPrice="$3299.00"
            />
          </div>
        </div>

        {/* Top Rated Products */}
        <div className="col-span-12 xs:col-span-6 md:col-span-6 lg:col-span-3 mb-4">
          <h2 className="flex items-center justify-between relative after:absolute after:content-[''] after:w-[200px] after:h-[2px] after:top-7 after:left-0 after:bg-gray-200 before:absolute before:content-[''] before:w-[140px] before:h-[2px] before:top-7 before:z-10 before:left-0 before:bg-secondary">Top Rated Products</h2>
          <div className="space-y-4 mt-3">
            <ProductItem
              imgSrc="/product-7.jpeg"
              title="Smartwatch 2.0 LTE Wifi Waterproof"
              price="$725.00"
              rating={5}
            />
            <ProductItem
              imgSrc="/product-8.jpeg"
              title="22Mps Camera 6200U with 500GB SDcard"
              price="$2999.00"
            />
            <ProductItem
              imgSrc="/product-9.jpeg"
              title="Full Color LaserJet Pro M452dn"
              price="$439.00"
            />
          </div>
        </div>

          {/* New Products */}
          <div className="col-span-12 xs:col-span-6 md:col-span-6 lg:col-span-3 mb-4"  >
          <h2 className="flex items-center justify-between relative after:absolute after:content-[''] after:w-[200px] after:h-[2px] after:top-7 after:left-0 after:bg-gray-200 before:absolute before:content-[''] before:w-[140px] before:h-[2px] before:top-7 before:z-10 before:left-0 before:bg-secondary">New Products</h2>

          <div className="space-y-4 mt-3">
            <ProductItem
              imgSrc="/product-1.jpeg"
              title="Purple Wireless Headphones Solo 2 HD"
              price="$1149.00"
            />
            <ProductItem
              imgSrc="/product-2.jpg"
              title="Powerbank 1130 mAh Blue"
              price="$210.00"
              rating={5}
            />
            <ProductItem
              imgSrc="/product-3.png"
              title="Nerocool EN52377 Dead Silence Gaming Cube Case"
              price="$180.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductItem({ imgSrc, title, price, oldPrice, rating }) {
  return (
    <div className="flex items-center gap-4">
      <img src={imgSrc} alt={title} className="w-[50px] h-[50px] " />
      <div>
        <h3 className="text-[11px] font-medium text-sky-700 w-full lg:w-[150px] ">
          {title}
        </h3>
        {rating && (
          <div className="flex text-yellow-400 text-xs">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>
        )}
        <div className="flex items-center space-x-2 ">
          <span className="text-primary font-medium text-[9px]">{price}</span>
          {oldPrice && (
            <span className="text-gray-500 font-semibold line-through text-[8px]">
              {oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
