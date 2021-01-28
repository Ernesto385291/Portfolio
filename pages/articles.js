import React from "react";
import Head from "next/head";
import Link from "next/link";

import { BiArrowBack } from "react-icons/bi";

import {
  HeadingContainer,
  HeadingTitleContainer,
  HeadingTitle,
  Container,
  HeadingSearchContainer,
  HeadingSearch,
  ArticlesContainer,
  GoBackContainer,
  GoBack,
} from "../styles/styles";

import { BlogCard } from "../components/BlogCard";

export const getServerSideProps = async () => {
  // Call an external API endpoint to get articles.
  const res = await fetch("https://my-blog-strapi-js.herokuapp.com/posts");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default function Articles({ articles }) {
  return (
    <Container>
      <Head>
        <title>Blog | Ernesto Vizcaíno</title>
        <meta
          name="description"
          content="A coder, I specialize in Frontend Development and Mobile Development
          using React, I'm in love with Javascript and Python,
          I never stop learning."
        />
        <meta
          name="keywords"
          content="Ernesto Vizcaíno, Ernesto Vizcaino Alvarado, Ernesto Vizcaíno Alvarado, Ernesto Vizcaino, Ernesto, Vizcaíno, Vizcaino, Frontend"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#52d198" />
        <meta property="og:title" content="Blog | Ernesto Vizcaíno" />
        <meta property="og:site_name" content="Ernesto Vizcaíno" />
        <meta property="og:url" content="https://ernestovizcaino.com/" />
        <meta
          property="og:description"
          content="A coder, I specialize in Frontend Development and Mobile Development
          using React, I'm in love with Javascript and Python,
          I never stop learning."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.imgur.com/Hi2WGWX.png"
        ></meta>
      </Head>
      <GoBackContainer>
        <Link href="/articles">
          <GoBack>
            <BiArrowBack size={20} /> Volver
          </GoBack>
        </Link>
      </GoBackContainer>
      <HeadingContainer>
        <HeadingTitleContainer>
          <HeadingTitle>Blog</HeadingTitle>
        </HeadingTitleContainer>
        {/* <HeadingSearchContainer>
          <HeadingSearch placeholder="Seach posts..." />
        </HeadingSearchContainer> */}
      </HeadingContainer>
      {articles.map((article) => (
        <ArticlesContainer>
          <BlogCard {...article} />
        </ArticlesContainer>
      ))}
    </Container>
  );
}
