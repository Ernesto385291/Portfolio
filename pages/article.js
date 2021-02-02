import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

import { useRouter } from "next/router";
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
} from "../styles/styles";

export default function article({ query }) {
  const router = useRouter();
  const [data, setData] = useState();

  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`https://my-blog-strapi-js.herokuapp.com/posts/${router.query.id}`)
        .then((data) => setData(data.data));
    }
  }, [router.query.id]);
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

      {data ? (
        <Fragment>
          <GoBackContainer>
            <Link href="/articles">
              <GoBack>
                <BiArrowBack size={20} /> Volver
              </GoBack>
            </Link>
          </GoBackContainer>
          <ArticleHeader>
            <ArticleTitle>{data.Title}</ArticleTitle>
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
            <ReactMarkdown>{data.Content}</ReactMarkdown>
          </ArticleContent>
        </Fragment>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
}
