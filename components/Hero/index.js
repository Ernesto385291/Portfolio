import React from "react"
import { motion } from "framer-motion"
import { Container, Name, CTA, Description, Button } from "./styles"

export const Hero = () => {
  return (
    <Container>
      <img
        src="/me.jpg"
        alt="Picture of the author"
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
      />
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
          Creating the future <br /> of the web
        </CTA>
      </motion.div>
      <Description>
        a <strong>Coder</strong>, I specialize in{" "}
        <strong>Frontend Development</strong> and{" "}
        <strong>Mobile Development</strong> <br /> using <strong>React</strong>,
        I'm in love with <strong>Javascript</strong> and <strong>Python</strong>
        , <br /> I never stop learning.
      </Description>
      <Button target="_blank" href="mailto:me@ernestovizcaino.com">
        CONNECT WITH ME
      </Button>
    </Container>
  )
}
