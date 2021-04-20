import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;
export const HeadingContainer = styled.header`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #eaeaea;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const HeadingTitleContainer = styled.div`
  padding: 10px 196px 20px 196px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10px 80px 20px 80px;
  }
  @media (max-width: 500px) {
    padding: 10px 20px 20px 20px;
  }
`;
export const HeadingTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  line-height: 1.5;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
export const HeadingSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 196px 24px 196px;
  width: 100%;
`;

export const HeadingSearch = styled.input``;
export const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  padding: 0px 12rem 3rem 12rem;
  @media (max-width: 1024px) {
    padding: 0px 5rem 3rem 5rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0px 5rem 3rem 5rem;
  }
  @media (max-width: 500px) {
    padding: 0px 20px 3rem 20px;
  }
`;

export const GoBack = styled.a`
  color: #1176f3;
  cursor: pointer;
  display: flex;
`;

export const ArticleHeader = styled.header`
  display: flex;
  margin-top: 35px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid #eaeaea;
`;
export const ArticleTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 0 auto;
  max-width: 900px;
  text-align: center;
  line-height: 46px;
  letter-spacing: -0.015em;
  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

export const ArticleDate = styled.p`
  margin: 20px 0px;
  color: #666666;
  font-size: 14px;
  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

export const ArticleAuthor = styled.div`
  margin: 0 auto;
  padding-bottom: 10px;
`;
export const Author = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;
export const Social = styled.a`
  margin: 0;
  font-size: 12px;
  color: #0970f3;
`;
export const ImageAuthor = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
export const ArticleContent = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  font-size: 16px;
  margin: 0px 15rem;
  padding-top: 30px;

  img {
    border-radius: 10px;
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin: 0px 8rem;
  }
  @media (max-width: 768px) {
    margin: 0px 3rem;
  }
  @media (max-width: 500px) {
    margin: 0px 20px;
  }
`;
export const GoBackContainer = styled.div`
  margin: 30px 50px;
  @media (max-width: 500px) {
    margin: 30px 20px;
  }
`;
