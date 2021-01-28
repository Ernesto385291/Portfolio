import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Cover = styled.img`
  width: 100%;
  height: 20%;
  object-fit: cover;
  object-position: center;
`;
export const Date = styled.p`
  margin: 0;
  color: #666666;
  font-size: 14px;
  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;
export const EntryTitle = styled.h2`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  margin: 12px 0px;
  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;
export const Description = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 12px;
  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;
export const ReadMore = styled.a`
  color: #1176f3;
  cursor: pointer;
`;
