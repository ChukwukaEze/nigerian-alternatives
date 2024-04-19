import React from "react";
import products from "../../../products.json";
import { ProductCard } from "./product";
import Link from "next/link";

function Body() {
  return (
    <section className="w-full max-w-6xl mx-auto my-0 pt-8">
      <h4 className="text-2xl font-semibold max-w-[550px]">
        NG Alternatives is an open source collection of Nigerian-built or
        Naira-priced Developer and Software Infrastructure.
      </h4>
      <div className="mt-8">
        <Link
          target="_blank"
          href={"https://github.com/ChukwukaEze/nigerian-alternatives"}
          className="bg-green text-white py-1 px-4 rounded-md hover:shadow-md"
        >
          Contribute on Github
        </Link>
      </div>
      <p className="block mt-10 text-[15px]">
        All products are priced in Nigerian Naira
      </p>
      <hr className="my-6" />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {products?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
    </section>
  );
}

export default Body;
