import styled from "styled-components"

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
  height: 70px;

  @media (max-width: 768px) {
    padding: 0px 50px;
  }
  @media (max-width: 425px) {
    padding: 0px 25px;
  }
`
export const Content = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`
export const Item = styled.p`
  margin-left: 30px;
`
export const Mail = styled.a`
  font-size: 16;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-decoration: none;
  color: black;
`
