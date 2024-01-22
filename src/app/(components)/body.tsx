import React from "react";
import products from "../../../products.json";

function Body() {
  return (
    <section className="w-full max-w-6xl mx-auto my-0 pt-8">
      <h4 className="text-2xl font-semibold max-w-[550px]">
        NG Alternatives is an open source collection of Nigerian-built or
        Naira-priced Developer and Software Infrastructure.
      </h4>
      <button className="bg-green text-white py-1 px-4 mt-8 rounded-md">
        Contribute on Github
      </button>
      <p className="block mt-10 text-[15px]">
        All products are priced in Nigerian Naira
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {products?.map((product) => {
          return (
            <div
              key={product.company}
              className="bg-green-50 h-[300px] w-[100%] md:w-[100%] p-4 rounded-[8px] relative"
            >
              <div className="relative h-[100%]">
                <h3 className="text-[18px] font-bold">{product?.name}</h3>
                <p className="text-[12px] mb-8">by: {product?.company}</p>
                <p className="text-[15px] truncated-text">
                  {product?.description}
                </p>

                <a
                  href={product?.url}
                  className="absolute bg-green text-white py-1 px-4 mt-8 rounded-md text-[15px] bottom-0"
                >
                  Try Product
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Body;
