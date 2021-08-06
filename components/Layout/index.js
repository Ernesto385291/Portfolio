import React, { Fragment } from "react";
import Head from "next/head";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const Layout = ({
  children,
  description,
  keywords,
  title,
  image,
  article,
  articleId,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ernesto Vizcaíno" />
        <meta name="description" content={description} />

        {/* <!-- Essential Twitter Meta Tags --> */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* <!-- Essential Facebook Meta Tags --> */}
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        {article ? (
          <meta
            property="og:url"
            content={`https://ernestovizcaino.com/article/${articleId}`}
          />
        ) : (
          <meta property="og:url" content={`https://ernestovizcaino.com`} />
        )}
      </Head>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};
