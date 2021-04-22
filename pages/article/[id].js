import React, { Fragment } from "react";
import Head from "next/head";
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
  Comments,
} from "../../styles/styles";

export default function article({ article }) {
  return (
    <>
      <Head>
        <title>{`${article.Title} | Ernesto Vizcaíno`}</title>
        <html lang="es" />
        <meta name="description" content={article.Description} />
        <meta
          property="og:title"
          content={`${article.Title} | Ernesto Vizcaíno`}
        />
        <meta
          property="og:site_name"
          content={`${article.Title} | Ernesto Vizcaíno`}
        />
        <meta
          property="og:url"
          content={`https://ernestovizcaino.com/article/${article.id}`}
        />
        <meta property="og:description" content={article.Description} />
        <script async src="https://cusdis.com/js/cusdis.es.js"></script>
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
            <Comments
              id="cusdis_thread"
              data-host="https://cusdis.com"
              data-app-id="63eb4975-4d0f-42fc-a4eb-fc5d564e020c"
              data-page-id={article.id}
              data-page-url={`https://ernestovizcaino.com/article/${article.id}`}
              data-page-title={article.Title}
            ></Comments>
          </ArticleContent>
        </Fragment>
      ) : (
        <p>Cargando</p>
      )}
    </>
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
