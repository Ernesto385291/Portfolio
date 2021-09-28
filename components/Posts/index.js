import React from "react";

import { BlogCard } from "../BlogCard";

export const Posts = ({ data }) => {
  return (
    <section className="text-justify w-full px-2 py-4 my-36 md:px-5" id="blog">
      <div className="text-center">
        <h1 className="text-4xl mb-4 dark:text-white">Blog</h1>
        <h3 className="text-sm text-gray-500 dark:text-white">
          These are some posts that I have written
        </h3>
      </div>
      <div className="flex overflow-x-auto mt-4">
        {data.map((article) => {
          return <BlogCard key={article.id} {...article} />;
        })}
      </div>
    </section>
  );
};
