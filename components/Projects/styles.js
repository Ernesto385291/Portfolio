import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 6.25rem 1rem;
  max-width: 1024px;
  text-align: center;
`
export const Headings = styled.div`
  position: relative;
  text-align: center;
  margin: 1rem 0 3rem 0;
`

export const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: -1px;
  margin-bottom: 1rem;
  line-height: 1.3;
`
export const Subtitle = styled.h3`
  color: #696969;
  font-weight: 400;
  font-size: 1rem;
  margin: 0px;
`

export const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 530px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

// Project Styles

export const ProjectContainer = styled.div`
  cursor: pointer;
  padding: 24px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  text-align: left;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  transition: 250ms;

  :hover {
    transition: 250ms;
    box-shadow: 0px 0px 12px 0px rgba(232, 232, 232, 1);
  }
`
export const ProjectTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ProjectCircle = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
`
export const ProjectTitle = styled.h3`
  font-weight: 600;
  font-size: 1.125em;
  line-height: 1.4;
  margin: 16px 0px;
  color: #111;
`
export const ProjectDetails = styled.div`
  font-size: 14px;
  color: #111;
`
export const ProjectLink = styled.a`
  text-decoration: none;
  color: #067df7;
  transition: 250ms;
  margin: 16px 0px;
  font-size: inherit;
  :hover {
    color: #61a7ef;
    text-decoration: underline;
    transition: 250ms;
  }
`
