import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { Posts } from "../components/Posts";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

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
    <Layout
      title="Ernesto Vizcaíno"
      image="https://i.imgur.com/Hi2WGWX.png"
      description="My name is Ernesto Vizcaíno (@erne_vizcaino) I'm a coder, I specialize in Frontend Development and Mobile Development using React."
      keywords="Ernesto Vizcaíno, Ernesto Vizcaino Alvarado, Ernesto Vizcaíno Alvarado, Ernesto Vizcaino, Ernesto, Vizcaíno, Vizcaino, Frontend, Erne_Vizcaino, @Erne_Vizcaino, erne_vizcaino, @erne_vizcaino"
    >
      <Hero />
      <Posts data={data[0].posts} />
      <Projects data={data[0].projects} />
      <Contact />
    </Layout>
  );
}
