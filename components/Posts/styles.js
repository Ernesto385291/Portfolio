import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 5rem 1rem;
  text-align: justify;
`;
export const Headings = styled.div`
  position: relative;
  text-align: center;
  margin: 1rem 0 3rem 0;
`;

export const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: -1px;
  margin-bottom: 1rem;
  line-height: 1.3;
`;
export const Subtitle = styled.h3`
  color: #696969;
  font-weight: 400;
  font-size: 1rem;
  margin: 0px;
`;

export const Content = styled.div`
  /* display: grid;
  grid-gap: 24px;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(0, 1fr)); */
  width: 100%;
  display: flex;
  overflow-x: auto;

  /* @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 530px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  } */
`;
