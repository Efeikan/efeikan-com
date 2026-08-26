"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function FeaturedProjects() {
  const { t } = useLang();
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projects" className="section" aria-labelledby="featured-projects-title">
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
          <h2 id="featured-projects-title" className="section-title">
            {t.projects.sectionTitle}
          </h2>
          <p className="section-subtitle">{t.projects.sectionSubtitle}</p>
        </motion.div>

        <div className="projects-grid">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="featured-projects-more">
          <Link href="/projects" className="btn btn-ghost">
            {t.projects.viewAll}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
