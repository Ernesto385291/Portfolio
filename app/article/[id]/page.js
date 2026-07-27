import {
  ArrowLeft01Icon,
  Clock01Icon,
  TextAlignLeftIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "markdown-to-jsx";
import { Writing } from "../../../components/Writing";
import { longDate, readingTime, wordCount } from "../../../lib/format";
import { getArticle, getPosts } from "../../../lib/content";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: String(post.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.Title,
    description: article.Description,
    openGraph: {
      type: "article",
      url: `/article/${id}`,
    },
    twitter: {
      card: "summary",
    },
  };
}

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    notFound();
  }

  const posts = await getPosts();
  const otherPosts = posts.filter((post) => String(post.id) !== String(id));

  return (
    <article className="pb-32">
      <div className="column pt-8 pb-12 md:pt-10">
        <Link
          href="/#writing"
          className="meta -mx-2 flex items-center gap-1.5 rounded-lg px-2 py-1 transition-colors duration-200 hover:text-foreground"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={13} strokeWidth={2} />
          BACK
        </Link>
      </div>

      <header className="column">
        <div className="flex items-center justify-between gap-4">
          <time className="meta">{longDate(article.Creation)}</time>
          <div className="meta flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <HugeiconsIcon icon={Clock01Icon} size={14} strokeWidth={2} />
              {readingTime(article.Content)} m
            </span>
            <span className="flex items-center gap-1.5">
              <HugeiconsIcon icon={TextAlignLeftIcon} size={14} strokeWidth={2} />
              {wordCount(article.Content)} words
            </span>
          </div>
        </div>

        <h1 className="mt-8 text-2xl leading-[1.25] font-medium tracking-[-0.02em] text-foreground md:text-[28px]">
          {article.Title}
        </h1>
        {article.Description ? (
          <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
            {article.Description}
          </p>
        ) : null}

      </header>

      <div className="column mt-14">
        <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-medium prose-headings:tracking-[-0.011em] prose-p:leading-[1.7] prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:font-normal prose-a:text-foreground prose-a:decoration-border prose-a:underline-offset-4 hover:prose-a:decoration-foreground prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-[0.875em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl prose-pre:bg-surface prose-pre:text-foreground prose-img:image-outline prose-img:rounded-xl">
          <Markdown>{article.Content ?? ""}</Markdown>
        </div>
      </div>

      {otherPosts.length ? (
        <div className="mt-24">
          <Writing
            data={otherPosts}
            id="more-writing"
            label="More writing"
          />
        </div>
      ) : null}
    </article>
  );
}
