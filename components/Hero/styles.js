import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 70px);

  @media (max-width: 425px) {
    margin: 0px 15px;
  }
`
export const Name = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0px;
  @media (max-width: 425px) {
    margin-bottom: 0px;
  }
`
export const CTA = styled.h1`
  margin: 0;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 60px;
  }
  @media (max-width: 425px) {
    font-size: 50px;
  }
`
export const Description = styled.h3`
  margin: 20px 0px;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
`
export const Button = styled.button`
  padding: 15px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 13px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
`
