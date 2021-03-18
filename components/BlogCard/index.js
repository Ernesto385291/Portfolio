import React from "react";
import Link from "next/link";

import {
  Container,
  Date,
  EntryTitle,
  Description as DescriptionContainer,
  ReadMore,
} from "./styles";

export const BlogCard = ({ id, Title, Description, Creation }) => {
  return (
    <Container>
      <Date>{Creation}</Date>
      <EntryTitle>{Title}</EntryTitle>
      <DescriptionContainer>{Description}</DescriptionContainer>
      <Link href="/article/[id]" as={`/article/${id}`}>
        <ReadMore>LEER MÁS</ReadMore>
      </Link>
    </Container>
  );
};
