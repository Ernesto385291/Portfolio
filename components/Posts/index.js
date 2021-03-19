import React from "react";

import { Container, Content, Headings, Title, Subtitle } from "./styles";

import { BlogCard } from "../BlogCard";

export const Posts = ({ data }) => {
  return (
    <Container id="blog">
      <Headings>
        <Title>Blog</Title>
        <Subtitle>These are some posts that I have written</Subtitle>
      </Headings>
      <Content>
        {data.map((article) => {
          return <BlogCard key={article.id} {...article} />;
        })}
      </Content>
    </Container>
  );
};
