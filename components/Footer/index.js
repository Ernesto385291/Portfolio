import React from "react"
import Image from "next/image"

import { Container, Content } from "./styles"

export const Footer = () => {
  return (
    <Container>
      <Content>
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
          <p style={{ color: "#8c8c8c", fontsize: "0.7901234567901234em" }}>
            Copyright © 2020 Ernesto Vizcaíno. All rights reserved.
          </p>
        </aside>
      </Content>
    </Container>
  )
}
