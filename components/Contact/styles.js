import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 6.25rem 0;
  text-align: center;
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
export const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: -1px;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 0.8rem;
`

export const Button = styled.a`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: inherit;
  margin: 0;
  width: 100%;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  width: 50%;
  transition: 250ms;
  cursor: pointer;
  border-radius: 7px;
  line-height: inherit;
  outline: none;
  text-decoration: none;
  :hover {
    transition: 250ms;
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
  }
  @media (prefers-color-scheme: dark) {
    color: #000;
    background-color: #fff;
    :hover {
      transition: 250ms;
      background-color: #000;
      border: 1px solid #fff;
      color: #fff;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`
