import React from "react";
import { motion } from "framer-motion";
import { Container, Name, CTA, Description, Button } from "./styles";

export const Hero = () => {
  return (
    <Container>
      <Name>Hi, I'm Ernesto 🤘</Name>
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
        <CTA>
          Coding <br /> the future
        </CTA>
      </motion.div>
      <Description>
        a <strong>Coder</strong>, I specialize in{" "}
        <strong>Frontend Development</strong> and{" "}
        <strong>Mobile Development</strong> <br /> using <strong>React</strong>,
        I'm in love with <strong>Javascript</strong> and <strong>Python</strong>
        , <br /> I never stop learning.
      </Description>
      <Button target="_blank" href="mailto:vizcaino.erne@gmail.com">
        CONNECT WITH ME
      </Button>
    </Container>
  );
};
