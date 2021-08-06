import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center md:flex-row mx-5 my-20 md:mx-40">
      <aside className="flex flex-row justify-between items-center">
        <a
          className="mr-1"
          href="https://twitter.com/erne_vizcaino"
          target="_blank"
          style={{
            filter:
              "invert(69%) sepia(59%) saturate(4649%) hue-rotate(181deg) brightness(96%) contrast(98%)",
          }}
        >
          <Image
            src="/twitter.svg"
            alt="Ernesto Vizcaíno Twitter"
            width={30}
            height={30}
          />
        </a>
        <a
          className="mr-1"
          href="https://platzi.com/@Erne_Vizcaino/"
          target="_blank"
        >
          <Image
            src="/platzi_logo.png"
            alt="Ernesto Vizcaíno Platzi"
            width={35}
            height={35}
          />
        </a>

        <a
          className="mr-2"
          href="https://www.instagram.com/erne_vizcaino/"
          target="_blank"
        >
          <Image
            src="/instagram_logo.svg"
            alt="Ernesto Vizcaíno Instagram"
            width={35}
            height={35}
          />
        </a>
        <a
          className="mr-2"
          href="http://linkedin.com/in/erne-vizcaino/"
          target="_blank"
          style={{
            filter:
              "invert(25%) sepia(54%) saturate(2830%) hue-rotate(200deg) brightness(97%) contrast(87%)",
          }}
        >
          <Image
            src="/linkedin.svg"
            alt="Ernesto Vizcaíno Linkedin"
            width={25}
            height={25}
          />
        </a>
        <a
          className="mr-2"
          href="https://github.com/Ernesto385291/"
          target="_blank"
          style={{
            filter:
              "invert(63%) sepia(8%) saturate(102%) hue-rotate(7deg) brightness(89%) contrast(89%)",
          }}
        >
          <Image
            src="/github.svg"
            alt="Ernesto Vizcaíno Github"
            width={25}
            height={25}
          />
        </a>
      </aside>
      <aside>
        <p className="text-base text-gray-500">
          Copyright © 2021 Ernesto Vizcaíno. All rights reserved.
        </p>
      </aside>
    </footer>
  );
};
