import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proje bulunamadı" };
  return {
    title: project.titleTR,
    description: project.descriptionTR,
    alternates: { canonical: `/projects/${slug}/` },
    openGraph: {
      title: `${project.titleTR} | Efe İkan`,
      description: project.descriptionTR,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.titleTR,
      description: project.descriptionTR,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}
