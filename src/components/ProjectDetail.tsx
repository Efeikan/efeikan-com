"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ImageIcon } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Project, getRelatedProjects } from "@/data/projects";
import ProjectMockup from "@/components/ProjectMockup";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectDetail({ project }: { project: Project }) {
  const { t, lang } = useLang();
  const related = getRelatedProjects(project.slug);

  const title = lang === "tr" ? project.titleTR : project.titleEN;
  const description =
    lang === "tr" ? project.longDescriptionTR : project.longDescriptionEN;
  const architecture =
    lang === "tr" ? project.architectureTR : project.architectureEN;
  const features = lang === "tr" ? project.featuresTR : project.featuresEN;
  const responsibilities =
    lang === "tr" ? project.responsibilitiesTR : project.responsibilitiesEN;
  const role = lang === "tr" ? project.roleTR : project.roleEN;

  return (
    <main id="main" className="project-detail">
      <div
        className="project-detail-glow"
        style={{
          background: `radial-gradient(circle, ${project.accent}33, transparent 70%)`,
        }}
        aria-hidden
      />

      <div className="container project-detail-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link href="/projects" className="project-back">
            <ArrowLeft size={16} aria-hidden />
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

          <div className="project-detail-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label={`${title} ${t.projects.viewLive}`}
              >
                <ExternalLink size={16} aria-hidden />
                {t.projects.viewLive}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label={`${title} ${t.projects.viewCode}`}
              >
                <Github size={16} aria-hidden />
                {t.projects.viewCode}
              </a>
            )}
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
          aria-labelledby="project-overview"
        >
          <h2 id="project-overview">{t.projects.overview}</h2>
          <p>{description}</p>

          <h2 style={{ marginTop: 36 }}>{t.projects.architecture}</h2>
          <p>{architecture}</p>

          <h2 style={{ marginTop: 36 }}>{t.projects.roleHeading}</h2>
          <p className="project-role-lead">{role}</p>
          <ul className="project-feature-list">
            {responsibilities.map((item) => (
              <li key={item}>
                <span
                  className="project-feature-dot"
                  style={{ background: project.accent }}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>

          <h2 style={{ marginTop: 36 }}>{t.projects.features}</h2>
          <ul className="project-feature-list">
            {features.map((f) => (
              <li key={f}>
                <span
                  className="project-feature-dot"
                  style={{ background: project.accent }}
                  aria-hidden
                />
                {f}
              </li>
            ))}
          </ul>

          <h2 style={{ marginTop: 36 }}>{t.projects.challenges}</h2>
          <div className="challenge-list">
            {project.challenges.map((c) => (
              <article key={c.titleEN} className="challenge-card">
                <h3>{lang === "tr" ? c.titleTR : c.titleEN}</h3>
                <p>
                  <span className="challenge-label">{t.projects.solution}: </span>
                  {lang === "tr" ? c.solutionTR : c.solutionEN}
                </p>
              </article>
            ))}
          </div>

          <h2 style={{ marginTop: 36 }}>{t.projects.screenshots}</h2>
          <p className="screenshots-hint">{t.projects.screenshotsHint}</p>
          <div className="screenshot-grid">
            {project.screenshots.map((shot, i) => {
              const alt = lang === "tr" ? shot.altTR : shot.altEN;
              return (
                <figure key={`${alt}-${i}`} className="screenshot-figure">
                  {shot.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={shot.src} alt={alt} className="screenshot-img" />
                  ) : (
                    <div
                      className="screenshot-placeholder"
                      role="img"
                      aria-label={alt}
                    >
                      <ImageIcon size={28} aria-hidden />
                      <span>
                        {t.projects.screenshotSlot} {i + 1}
                      </span>
                    </div>
                  )}
                  <figcaption>{alt}</figcaption>
                </figure>
              );
            })}
          </div>
        </motion.section>

        {related.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="project-related"
            aria-labelledby="related-projects"
          >
            <h2
              id="related-projects"
              className="section-title"
              style={{ fontSize: "1.6rem" }}
            >
              {t.projects.related}
            </h2>
            <div className="projects-grid">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
