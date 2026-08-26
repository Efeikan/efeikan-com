"use client";

import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Project } from "@/data/projects";
import ProjectMockup from "@/components/ProjectMockup";

export default function ProjectCard({
  project,
  activeTech,
  onTechClick,
}: {
  project: Project;
  activeTech?: string | null;
  onTechClick?: (tag: string) => void;
}) {
  const { t, lang } = useLang();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="glass-card project-card project-card-link"
      style={{ ["--project-accent" as string]: project.accent }}
      aria-label={`${lang === "tr" ? project.titleTR : project.titleEN} — ${t.projects.viewDetails}`}
    >
      <ProjectMockup project={project} compact />

      <div className="project-card-top">
        <span className="project-year">{project.year}</span>
        {project.featured && (
          <span className="featured-badge">
            <Star size={10} aria-hidden />
            {t.projects.featured}
          </span>
        )}
      </div>

      <h3 className="project-card-title">
        {lang === "tr" ? project.titleTR : project.titleEN}
      </h3>

      <p className="project-card-desc">
        {lang === "tr" ? project.descriptionTR : project.descriptionEN}
      </p>

      <div className="project-tags">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className={`project-tag${activeTech === tag ? " active" : ""}`}
            onClick={
              onTechClick
                ? (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onTechClick(tag);
                  }
                : undefined
            }
            role={onTechClick ? "button" : undefined}
            tabIndex={onTechClick ? 0 : undefined}
            onKeyDown={
              onTechClick
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      onTechClick(tag);
                    }
                  }
                : undefined
            }
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="project-card-cta">
        <span>{t.projects.viewDetails}</span>
        <ArrowUpRight size={16} aria-hidden />
      </div>
    </Link>
  );
}
