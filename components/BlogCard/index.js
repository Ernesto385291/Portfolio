import React from "react";
import Link from "next/link";

import { Container, Date, EntryTitle, Description, ReadMore } from "./styles";

export const BlogCard = ({ id, Title, Content, Image, Creation }) => {
  return (
    <Container>
      <Date>Martes, 26 de enero del 2021</Date>
      <EntryTitle>{Title}</EntryTitle>
      <Description>
        Strapi en pocas palabras es un sistema gestor de contenidos, o CMS por
        sus siglas en inglés, y es un software que corre dentro de un navegador
        que te permite administrar el contenido de un sitio web.
      </Description>
      <Link
        href={{
          pathname: "/article",
          query: { id: id },
        }}
      >
        <ReadMore>LEER MÁS</ReadMore>
      </Link>
    </Container>
  );
};
