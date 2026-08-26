"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import type { BlogPostMeta } from "@/lib/blog";

export default function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  const { t, lang } = useLang();

  if (posts.length === 0) {
    return <p className="projects-empty">{t.blog.empty}</p>;
  }

  return (
    <div className="blog-list">
      {posts.map((post) => {
        const title = lang === "tr" ? post.titleTR : post.titleEN;
        const excerpt = lang === "tr" ? post.excerptTR : post.excerptEN;
        return (
          <article key={post.slug} className="glass-card blog-card">
            <time className="blog-card-date" dateTime={post.date}>
              {t.blog.published} {post.date}
            </time>
            <h2 className="blog-card-title">
              <Link href={`/blog/${post.slug}`}>{title}</Link>
            </h2>
            <p className="blog-card-excerpt">{excerpt}</p>
            {post.tags.length > 0 && (
              <div className="project-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <Link href={`/blog/${post.slug}`} className="project-card-cta">
              {t.blog.readMore}
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
