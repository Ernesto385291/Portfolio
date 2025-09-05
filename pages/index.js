import React from "react";

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://my-blog-strapi-js.herokuapp.com/apps");
    if (!res.ok) {
      return { props: { data: [{ posts: [], projects: [] }] }, revalidate: 60 };
    }
    const data = await res.json();
    return {
      props: { data: Array.isArray(data) ? data : [{ posts: [], projects: [] }] },
      revalidate: 60,
    };
  } catch {
    return { props: { data: [{ posts: [], projects: [] }] }, revalidate: 60 };
  }
};

export default function Home() {
  return <div className="p-10 text-center">Hello</div>;
}
