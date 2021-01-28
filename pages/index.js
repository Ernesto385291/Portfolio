import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const getServerSideProps = async () => {
  // Call an external API endpoint to get posts.
  const res = await fetch("https://my-blog-strapi-js.herokuapp.com/projects");
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Ernesto Vizcaíno</title>
        <html lang="en" />
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
      <Navbar />
      <Hero />
      <Projects data={projects} />
      <Contact />
      <Footer />
    </div>
  );
}
