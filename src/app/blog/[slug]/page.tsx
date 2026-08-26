import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/BlogPostHeader";
import JsonLd from "@/components/JsonLd";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import { blogPostingJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Yazı bulunamadı" };

  return {
    title: post.titleTR,
    description: post.excerptTR,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: `${post.titleTR} | Efe İkan`,
      description: post.excerptTR,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.titleTR,
      description: post.excerptTR,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { contentTR, contentEN, ...meta } = post;

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          slug: post.slug,
          title: post.titleTR,
          description: post.excerptTR,
          date: post.date,
        })}
      />
      <Navbar />
      <main id="main" className="blog-post-page">
        <article className="container blog-post-inner">
          <BlogPostHeader post={meta} />
          <div className="glass-card blog-prose-wrap">
            <div className="blog-lang-tr mdx-prose">
              <MDXRemote source={contentTR} />
            </div>
            <div className="blog-lang-en mdx-prose">
              <MDXRemote source={contentEN} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
