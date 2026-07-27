import { posts, projects } from "../data/content";

export async function getHomeContent() {
  return { posts, projects };
}

export async function getPosts() {
  return posts;
}

export async function getArticle(id) {
  return posts.find((post) => String(post.id) === String(id)) ?? null;
}
