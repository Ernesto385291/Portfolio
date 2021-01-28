import React from "react";
import Link from "next/link";
import { Container, Content, Item, Mail, HidingContent } from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <Mail target="_blank" href="mailto:vizcaino.erne@gmail.com">
        Email me!
      </Mail>

      <Content>
        <Link href="/articles">
          <Item>Blog</Item>
        </Link>
        <HidingContent>
          <Item href="#projects">Projects</Item>
          <Item href="#contact">Contact</Item>
        </HidingContent>
      </Content>
    </Container>
  );
};
