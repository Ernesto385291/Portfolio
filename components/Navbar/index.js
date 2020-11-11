import React from "react"

import { Container, Content, Item, Mail } from "./styles"

export const Navbar = () => {
  return (
    <Container>
      <Mail target="_blank" href="mailto:me@ernestovizcaino.com">
        me@ernestovizcaino.com
      </Mail>

      <Content>
        <Item>Blog</Item>
        <Item>Projects</Item>
        <Item>Contact</Item>
      </Content>
    </Container>
  )
}
