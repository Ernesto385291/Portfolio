import React from "react"

import { Container, Content, Title, Button } from "./styles"

export const Contact = () => {
  return (
    <Container>
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
          <Button>
            <a target="_blank" href="mailto:me@ernestovizcaino.com">
              Email me!
            </a>
          </Button>
        </aside>
      </Content>
    </Container>
  )
}
