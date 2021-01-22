import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding: 6.25rem 0;
  text-align: left;
  @media (max-width: 640px) {
    padding: 4rem 0;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  align-items: center;
  margin: 2rem auto;
  padding: 0 1.5rem;
  max-width: 1024px;
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
