import React from "react"

import { Container, Content, Title, Button } from "./styles"

export const Contact = () => {
  return (
    <Container id="contact">
      <Content>
        <aside>
          <Title>Let's get in touch</Title>
        </aside>
        <aside
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <Button target="_blank" href="mailto:vizcaino.erne@gmail.com">
            Email me!
          </Button>
        </aside>
      </Content>
    </Container>
  )
}
