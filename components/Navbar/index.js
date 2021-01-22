import React from "react"

import { Container, Content, Item, Mail } from "./styles"

export const Navbar = () => {
  return (
    <Container>
      <Mail target="_blank" href="mailto:vizcaino.erne@gmail.com">
        Email me!
      </Mail>

      <Content>
        <Item>Blog</Item>
        <Item href="#projects">Projects</Item>
        <Item href="#contact">Contact</Item>
      </Content>
    </Container>
  )
}
