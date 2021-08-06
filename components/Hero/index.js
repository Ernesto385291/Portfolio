import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="h-[95vh] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold dark:text-white">
          Hi, I'm Ernesto Vizcaíno 🤘
        </h1>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 2,
          }}
        >
          <h1 className="my-5 text-6xl font-bold text-center bg-cover bg-clip-text text-transparent bg-hero-pattern md:text-8xl lg:text-9xl">
            Coding <br /> the future
          </h1>
        </motion.div>
        <h1 className="text-base text-center mb-5 px-2 dark:text-white">
          a <strong>Coder</strong>, I specialize in{" "}
          <strong>Frontend Development</strong> and{" "}
          <strong>Mobile Development</strong> <br /> using{" "}
          <strong>React</strong>, I'm in love with <strong>Javascript</strong>{" "}
          and <strong>Python</strong>
          , <br /> I never stop learning.
        </h1>
        <a
          className="text-xs px-10 py-4 rounded-full bg-black text-white text-center dark:bg-white dark:text-black"
          target="_blank"
          href="mailto:vizcaino.erne@gmail.com"
        >
          CONNECT WITH ME
        </a>
      </div>
      <div />
    </div>
  );
};
