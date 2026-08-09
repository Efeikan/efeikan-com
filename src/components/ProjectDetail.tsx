"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Project, getRelatedProjects } from "@/data/projects";
import ProjectMockup from "@/components/ProjectMockup";

export default function ProjectDetail({ project }: { project: Project }) {
  const { t, lang } = useLang();
  const related = getRelatedProjects(project.slug);

  const title = lang === "tr" ? project.titleTR : project.titleEN;
  const description =
    lang === "tr" ? project.longDescriptionTR : project.longDescriptionEN;
  const features = lang === "tr" ? project.featuresTR : project.featuresEN;
  const role = lang === "tr" ? project.roleTR : project.roleEN;

  return (
    <main className="project-detail">
      <div
        className="project-detail-glow"
        style={{
          background: `radial-gradient(circle, ${project.accent}33, transparent 70%)`,
        }}
      />

      <div className="container project-detail-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link href="/projects" className="project-back">
            <ArrowLeft size={16} />
            {t.projects.backToProjects}
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="project-detail-header"
        >
          <div className="project-detail-meta">
            <span className="project-year">{project.year}</span>
            <span className="project-role">{role}</span>
          </div>
          <h1
            className="font-orbitron project-detail-title"
            style={{
              background: `linear-gradient(135deg, ${project.accent}, var(--accent-2))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h1>
          <p className="project-detail-lead">
            {lang === "tr" ? project.descriptionTR : project.descriptionEN}
          </p>

          <div className="project-tags" style={{ marginTop: 8 }}>
            {project.tags.map((tag) => (
              <Link
                key={tag}
                href={`/projects?tech=${encodeURIComponent(tag)}`}
                className="project-tag project-tag-link"
              >
                {tag}
              </Link>
            ))}
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="project-detail-visual"
        >
          <ProjectMockup project={project} />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="glass-card project-detail-body"
        >
          <h2>{t.projects.overview}</h2>
          <p>{description}</p>

          <h2 style={{ marginTop: 36 }}>{t.projects.features}</h2>
          <ul className="project-feature-list">
            {features.map((f) => (
              <li key={f}>
                <span
                  className="project-feature-dot"
                  style={{ background: project.accent }}
                />
                {f}
              </li>
            ))}
          </ul>
        </motion.section>

        {related.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="project-related"
          >
            <h2 className="section-title" style={{ fontSize: "1.6rem" }}>
              {t.projects.related}
            </h2>
            <div className="projects-grid">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="glass-card project-card project-card-link"
                  style={{ ["--project-accent" as string]: p.accent }}
                >
                  <ProjectMockup project={p} compact />
                  <span className="project-year">{p.year}</span>
                  <h3 className="project-card-title">
                    {lang === "tr" ? p.titleTR : p.titleEN}
                  </h3>
                  <p className="project-card-desc">
                    {lang === "tr" ? p.descriptionTR : p.descriptionEN}
                  </p>
                  <div className="project-card-cta">
                    <span>{t.projects.viewDetails}</span>
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
