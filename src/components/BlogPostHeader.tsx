"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import type { BlogPostMeta } from "@/lib/blog";

export default function BlogPostHeader({ post }: { post: BlogPostMeta }) {
  const { t, lang } = useLang();
  const title = lang === "tr" ? post.titleTR : post.titleEN;
  const excerpt = lang === "tr" ? post.excerptTR : post.excerptEN;

  return (
    <header className="blog-post-header">
      <Link href="/blog" className="project-back">
        <ArrowLeft size={16} aria-hidden />
        {t.blog.backToBlog}
      </Link>
      <time className="blog-card-date" dateTime={post.date}>
        {t.blog.published} {post.date}
      </time>
      <h1 className="blog-post-title">{title}</h1>
      <p className="blog-post-lead">{excerpt}</p>
      {post.tags.length > 0 && (
        <div className="project-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
