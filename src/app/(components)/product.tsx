import { testUrl } from "@/utils/funcs";
import React, { HTMLAttributes } from "react";
import Link from "next/link";

interface IProduct extends HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  company: string;
  url: string;
}

export function ProductCard({
  company,
  url,
  name,
  description,
  ...rest
}: IProduct) {

  const { urlTest } = testUrl(url);

  
  return (
    <div
      {...rest}
      key={company}
      className="bg-green-50 h-[300px] w-[100%] md:w-[100%] p-4 rounded-[8px] relative shadow-sm hover:shadow-md"
    >
      <div className="relative h-[100%]">
        <h3 className="text-[18px] font-bold">{name}</h3>
        <p className="text-[12px] mb-8">by: {company}</p>
        <p className="text-[15px] truncated-text">{description}</p>

        {urlTest && (
          <Link
            href={url}
            target="_blank"
            className="absolute bg-green cursor-pointer text-white py-1 px-4 mt-8 rounded-md text-[15px] bottom-0"
          >
            Try Product
          </Link>
        )}
      </div>
    </div>
  );
}
