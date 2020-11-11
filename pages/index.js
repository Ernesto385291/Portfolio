import Head from "next/head"

import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"

export const getStaticProps = async () => {
  // Call an external API endpoint to get posts.
  const res = await fetch("https://my-blog-strapi-js.herokuapp.com/projects")
  const projects = await res.json()

  return {
    props: {
      projects,
    },
  }
}

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Ernesto Vizcaíno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Projects data={projects} />
      <Contact />
      <Footer />
    </div>
  )
}
