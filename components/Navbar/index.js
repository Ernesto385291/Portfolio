import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between mt-2 items-center p-5 sm:px-10 md:mt-5">
      <a
        className="text-base no-underline dark:text-white"
        target="_blank"
        href="mailto:vizcaino.erne@gmail.com"
      >
        Email me!
      </a>

      <div className="flex">
        <a className="mr-5 dark:text-white" href="#blog">
          Blog
        </a>
        <a
          className="dark:text-white"
          href="https://timeline.ernestovizcaino.com"
        >
          Timeline
        </a>
        <a className="mx-5 hidden dark:text-white md:block" href="#projects">
          Projects
        </a>
        <a className="hidden dark:text-white md:block" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};
