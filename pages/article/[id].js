import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

import { BiArrowBack } from "react-icons/bi";

import {
  ArticleHeader,
  ArticleTitle,
  ArticleDate,
  ArticleAuthor,
  Author,
  Name,
  Social,
  ImageAuthor,
  ArticleContent,
  GoBack,
  GoBackContainer,
} from "../../styles/styles";

export default function article({ article }) {
  return (
    <div>
      <Head>
        <title>Ernesto Vizcaíno</title>
        <meta
          name="keywords"
          content="Ernesto Vizcaíno, Ernesto Vizcaino Alvarado, Ernesto Vizcaíno Alvarado, Ernesto Vizcaino, Ernesto, Vizcaíno, Vizcaino, Frontend"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#52d198" />
        <meta property="og:title" content="Ernesto Vizcaíno" />
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

      {article ? (
        <Fragment>
          <GoBackContainer>
            <Link href="/">
              <GoBack>
                <BiArrowBack size={20} /> Volver
              </GoBack>
            </Link>
          </GoBackContainer>
          <ArticleHeader>
            <ArticleTitle>{article.Title}</ArticleTitle>
            <ArticleDate>Martes, 26 de enero del 2021</ArticleDate>
            <ArticleAuthor>
              <Author>
                <ImageAuthor width={28} height={28} src="/me.jpg" />
                <div>
                  <Name>Ernesto Vizcaino</Name>
                  <Social
                    href="https://twitter.com/Erne_Vizcaino"
                    target="_blank"
                  >
                    @erne_vizcaino
                  </Social>
                </div>
              </Author>
            </ArticleAuthor>
          </ArticleHeader>
          <ArticleContent>
            <ReactMarkdown>{article.Content}</ReactMarkdown>
          </ArticleContent>
        </Fragment>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://my-blog-strapi-js.herokuapp.com/posts/");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  const res = await fetch(
    `https://my-blog-strapi-js.herokuapp.com/posts/${params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
    revalidate: 1, // In seconds
  };
}
