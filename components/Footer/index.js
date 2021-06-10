import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center mx-5 my-20 md:mx-40">
      <aside>
        <a href="https://twitter.com/erne_vizcaino" target="_blank">
          <Image
            src="/twitter_logo.svg"
            alt="Ernesto Vizcaíno Twitter"
            width={35}
            height={35}
            style={{ marginRight: 15 }}
          />
        </a>
        <a href="https://platzi.com/@Erne_Vizcaino/" target="_blank">
          <Image
            src="/platzi_logo.png"
            alt="Ernesto Vizcaíno Platzi"
            width={35}
            height={35}
            style={{ marginRight: 15 }}
          />
        </a>

        <a href="https://www.instagram.com/erne_vizcaino/" target="_blank">
          <Image
            src="/instagram_logo.svg"
            alt="Ernesto Vizcaíno Instagram"
            width={35}
            height={35}
            style={{ marginRight: 15 }}
          />
        </a>
        <a href="http://linkedin.com/in/erne-vizcaino/" target="_blank">
          <Image
            src="/linkedin-Logo.png"
            alt="Ernesto Vizcaíno Linkedin"
            width={35}
            height={35}
            style={{ marginRight: 15 }}
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
