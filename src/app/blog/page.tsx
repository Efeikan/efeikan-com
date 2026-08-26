import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Efe İkan — backend, veritabanı tasarımı ve sistem mimarisi üzerine teknik yazılar.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog | Efe İkan",
    description:
      "Backend, veritabanı tasarımı ve sistem mimarisi üzerine teknik yazılar.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts().map((post) => ({
    slug: post.slug,
    date: post.date,
    titleTR: post.titleTR,
    titleEN: post.titleEN,
    excerptTR: post.excerptTR,
    excerptEN: post.excerptEN,
    tags: post.tags,
  }));

  return (
    <>
      <Navbar />
      <main id="main" className="blog-page">
        <div className="container">
          <header className="section-header blog-page-header">
            <span className="section-label" aria-hidden>
              &#9998;
            </span>
            <h1 className="section-title">Blog</h1>
            <p className="section-subtitle blog-page-sub">
              Backend · veritabanı · sistem notları
            </p>
          </header>
          <BlogList posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  );
}
