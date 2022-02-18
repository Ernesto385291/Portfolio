import React from "react";

export const Navbar = () => {
  return (
    <nav className="h-[5vh] flex justify-between mt-2 items-center p-5 sm:px-10 md:mt-5">
      <a
        className="text-base no-underline dark:text-white"
        target="_blank"
        href="mailto:vizcaino.erne@gmail.com"
      >
        Email me!
      </a>

      <div className="flex">
        <a
          className="mr-5 dark:text-white"
          href="https://ernestovizcaino.vercel.app/#blog"
        >
          Blog
        </a>
        <a
          className="dark:text-white"
          href="https://www.polywork.com/erne_vizcaino"
        >
          Timeline
        </a>
        <a
          className="mx-5 hidden dark:text-white md:block"
          href="https://ernestovizcaino.vercel.app/#projects"
        >
          Projects
        </a>
        <a
          className="hidden dark:text-white md:block"
          href="https://ernestovizcaino.vercel.app/#contact"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
