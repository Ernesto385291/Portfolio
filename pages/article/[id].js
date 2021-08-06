import React, { Fragment } from "react";
import Markdown from "markdown-to-jsx";
import { Layout } from "../../components/Layout";

export default function article({ article }) {
  return (
    <Layout
      title={`Ernesto Vizcaíno | ${article.Title}`}
      description={article.Description}
      image={article.Cover}
      article={true}
      articleId={article.id}
    >
      {article ? (
        <div className="w-screen px-6 flex flex-col items-center relative">
          <div className="flex flex-col items-center md:w-6/12">
            <h1 className="font-bold text-[28px] text-center mt-10 md:text-3xl">
              {article.Title}
            </h1>
            <div className="w-[fit-content] flex flex-col items-center mt-6">
              <a
                className="text-[#0FA958]"
                href="https://twitter.com/Erne_Vizcaino"
                target="_blank"
              >
                <img
                  style={{ boxShadow: "0 0 0 2.5px #fff, 0 0 0 4.5px" }}
                  className="w-[30px] h-[30px] rounded-full object-cover md:w-[40px] md:h-[40px] shadow-white dark:shadow-dark"
                  src="/me.jpg"
                  alt="Ernesto Vizcaíno"
                  loading="lazy"
                />
              </a>
              <h2 className="text-[#6A6A6A] mt-4 text-base dark:text-gray-300">
                Ernesto Vizcaíno
              </h2>
              <time className="text-[#6A6A6A] text-base dark:text-gray-300">
                {article.Creation}
              </time>
            </div>
          </div>
          <div className="md:w-10/12">
            <img
              src={article.Cover}
              alt={article.Title}
              className="w-full h-full mt-8 mb-10 rounded-lg"
            />
          </div>
          <div className="md:w-6/12">
            <Markdown className="prose lg:prose-lg dark:prose-dark">
              {article.Content}
            </Markdown>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </Layout>
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
