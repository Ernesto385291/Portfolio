import { Clock01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Section } from "@/components/Section";
import { readingTime, shortDate, timestamp } from "@/lib/format";

export const Writing = ({ data }) => {
  const posts = [...data].sort((a, b) => timestamp(b.Creation) - timestamp(a.Creation));

  return (
    <Section id="writing" label="Writing">
      {posts.length ? (
        <ul className="mt-8 -mx-3">
          {posts.map((post, index) => (
            <li key={post.id} className="reveal" style={{ "--rise-delay": index % 4 }}>
              <Link
                href={`/article/${post.id}`}
                className="group/row flex items-center gap-4 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-surface focus-visible:bg-surface focus-visible:outline-none"
              >
                <time className="meta w-[4.75rem] shrink-0">
                  {shortDate(post.Creation)}
                </time>
                <span className="min-w-0 flex-1 truncate text-base text-foreground">
                  {post.Title}
                </span>
                <span className="meta flex shrink-0 items-center gap-1.5">
                  <HugeiconsIcon icon={Clock01Icon} size={13} strokeWidth={2} />
                  {readingTime(post.Content)} m
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-base text-muted-foreground">
          New posts are coming soon.
        </p>
      )}
    </Section>
  );
};
