import React from "react";
import product_1 from "../../assets/images/product_1.jpg";
import product_2 from "../../assets/images/product_2.jpeg";
import product_3 from "../../assets/images/product_3.jpeg";
import product_4 from "../../assets/images/product_4.jpg";
import ProductMapData from "./ProductMapData";

const data = [
  {
    model: "home design 1",
    img: product_1,
  },
  {
    model: "home design 2",
    img: product_2,
  },
  {
    model: "home design",
    img: product_3,
  },
  {
    model: "home design",
    img: product_4,
  },
];

const Product = () => {
  return (
    <section className="mt-10 w-[85%] mx-auto ">
      {/* product top banner */}
      <div className="flex h-[24vw] md:h-[19rem]">
        <img src={product_1} alt="product 1" className="h-auto w-full" />
        <div className="border-2 border-[#383838] flex items-center -ml-1 -z-10">
          <div className="px-10">
            <img src={product_2} alt="product 2" className="md:h-44 h-[16vw]" />
            <h3 className="md:text-3xl text-center">Interior</h3>
          </div>
        </div>
      </div>

      {/* product top categories and items */}
      <div>
        <div className="text-sm flex mt-10 items-center">
          <p>Home</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-5 text-[#00ade5]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="text-[#00ade5]">product</p>
        </div>

        <div className="grid grid-flow-row grid-cols-7 gap-8 mt-10 mb-10">
          {/* filter by */}
          <div className="col-span-2">
            <div className="flex">
            <h3 className="text-2xl text-[#00ade5] font-bold self-end">
              FILTER BY
            </h3>
            <div className="self-end w-[60%] border-b border-[#00ade5] mb-2"></div>
            </div>

            <div className="mt-10">
              <div className="bg-gradient-to-r from-[#007BA5] to-[#139FD4] py-3 px-5">
                  <h4 className="text-white text-lg">CATEGORIES</h4>
              </div>

              <div className="bg-[#00ade5]">
              <div className="flex justify-between py-3 px-5 cursor-pointer">
                <p className="text-white">my room</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-6 font-extrabold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="flex justify-between py-3 px-5 cursor-pointer">
                <p className="text-white">sale design</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-6 font-extrabold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="flex justify-between py-3 px-5 cursor-pointer">
                <p className="text-white">my new item</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-6 font-extrabold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              </div>
            </div>
          </div>

          {/* filter items */}
          <div className="col-span-5">
            <p className="text-gray-400">Filter:</p>
            <div className="self-end w-full border-b border-[#00ade5] mb-2"></div>

            <div className="grid grid-flow-row grid-cols-4">
                {
                    data.map(item => <ProductMapData item={item} />)
                }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
