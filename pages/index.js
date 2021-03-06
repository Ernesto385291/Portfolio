import Head from "next/head";

import { Hero } from "../components/Hero";
import { Posts } from "../components/Posts";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const getStaticProps = async () => {
  // Call an external API endpoint to get posts.
  const res = await fetch("https://my-blog-strapi-js.herokuapp.com/apps");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 1, // In seconds
  };
};

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Ernesto Vizcaíno</title>
        <meta name="robots" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="My name is Ernesto Vizcaíno (@erne_vizcaino) i'm a coder, I specialize in Frontend Development and Mobile Development
          using React, I'm in love with Javascript and Python,
          I never stop learning."
        />
        <meta
          name="keywords"
          content="Ernesto Vizcaíno, Ernesto Vizcaino Alvarado, Ernesto Vizcaíno Alvarado, Ernesto Vizcaino, Ernesto, Vizcaíno, Vizcaino, Frontend, Erne_Vizcaino, @Erne_Vizcaino, erne_vizcaino, @erne_vizcaino"
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
      <Hero />
      <Posts data={data[0].posts} />
      <Projects data={data[0].projects} />
      <Contact />
      <Footer />
    </>
  );
}
