import React from "react";

export const Contact = () => {
  return (
    <section
      className="flex flex-col my-16 mx-5 text-center md:my-56 md:mx-40 md:flex-row md:justify-between md:items-center"
      id="contact"
    >
      <aside className="mb-2 md:mb-0">
        <h3 className="text-4xl text-left">Let's get in touch</h3>
      </aside>
      <aside className="md:w-3/12">
        <a
          className="flex flex-row justify-center items-center h-14 text-lg rounded-md bg-black w-full text-white dark:bg-white dark:text-black"
          target="_blank"
          href="mailto:vizcaino.erne@gmail.com"
        >
          Email me!
        </a>
      </aside>
    </section>
  );
};
