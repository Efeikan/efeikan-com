import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import { SITE_DESCRIPTION_TR } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description:
    "Efe İkan — Pettag, FinderDev ve geliştirilen sistemlerin proje listesi.",
  alternates: { canonical: "/projects/" },
  openGraph: {
    title: "Projelerimiz | Efe İkan",
    description: SITE_DESCRIPTION_TR,
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="projects-page">
        <Suspense fallback={<div className="section container" />}>
          <ProjectsSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
