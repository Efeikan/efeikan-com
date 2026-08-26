"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import {
  ProjectCategory,
  projectCategories,
  projects,
} from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  const { t, lang } = useLang();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState<ProjectCategory>("all");
  const tech = searchParams.get("tech");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const catOk = active === "all" || p.category === active;
      const techOk = !tech || p.tags.includes(tech);
      return catOk && techOk;
    });
  }, [active, tech]);

  const setTech = (next: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next) params.set("tech", next);
    else params.delete("tech");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const toggleTech = (tag: string) => {
    setTech(tech === tag ? null : tag);
  };

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="gradient-line" style={{ marginBottom: "100px" }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label" aria-hidden>
            &#10022;
          </span>
          <h2 id="projects-title" className="section-title">
            {t.projects.sectionTitle}
          </h2>
          <p className="section-subtitle">{t.projects.sectionSubtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="projects-bar"
          role="tablist"
          aria-label={t.projects.sectionTitle}
        >
          {projectCategories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`projects-bar-item${isActive ? " active" : ""}`}
                onClick={() => setActive(cat.id)}
              >
                {lang === "tr" ? cat.labelTR : cat.labelEN}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tech-filter"
        >
          <div className="tech-filter-head">
            <span className="tech-filter-label">{t.projects.techFilter}</span>
            {tech && (
              <button
                type="button"
                className="tech-filter-clear"
                onClick={() => setTech(null)}
              >
                <X size={12} aria-hidden />
                {t.projects.clearFilter}
              </button>
            )}
          </div>
          <div className="tech-filter-tags">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tech-chip${tech === tag ? " active" : ""}`}
                onClick={() => toggleTech(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-${tech ?? "all"}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="projects-grid"
          >
            {filtered.length === 0 ? (
              <p className="projects-empty">{t.projects.empty}</p>
            ) : (
              filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <ProjectCard
                    project={project}
                    activeTech={tech}
                    onTechClick={toggleTech}
                  />
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
