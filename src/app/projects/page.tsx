import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata = {
  title: "Projelerimiz | Efe İkan",
  description: "Efe İkan — geliştirilen güçlü projeler ve sistemler.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="projects-page">
        <Suspense fallback={<div className="section container" />}>
          <ProjectsSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
