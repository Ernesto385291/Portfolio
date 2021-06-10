import React from "react";
import Link from "next/link";

export const BlogCard = ({ id, Title, Description, Creation }) => {
  return (
    <div className="w-screen flex flex-col justify-between flex-shrink-0 mr-5 p-4 sm:w-7/12 lg:w-4/12 2xl:w-3/12">
      <p className="text-gray-500 text-sm dark:text-white">{Creation}</p>
      <h1 className="text-xl font-semibold my-2 dark:text-white md:text-3xl">
        {Title}
      </h1>
      <p className="text-base font-normal antialiased mb-3 dark:text-white">
        {Description}
      </p>
      <Link href="/article/[id]" as={`/article/${id}`}>
        <a className="text-blue-500 cursor-pointer">LEER MÁS</a>
      </Link>
    </div>
  );
};
