"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
    const { t, lang } = useLang();

    return (
        <section id="projects" className="section">
            <div className="gradient-line" style={{ marginBottom: "100px" }} />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="section-label">&#10022;</span>
                    <h2 className="section-title">{t.projects.sectionTitle}</h2>
                    <p className="section-subtitle">{t.projects.sectionSubtitle}</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card project-card"
                        >
                            {/* Featured badge */}
                            {project.featured && (
                                <div>
                                    <span className="featured-badge">
                                        <Star size={10} />
                                        {t.projects.featured}
                                    </span>
                                </div>
                            )}

                            {/* Title */}
                            <h3
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "var(--text-primary)",
                                }}
                            >
                                {lang === "tr" ? project.titleTR : project.titleEN}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "0.9rem",
                                    lineHeight: "1.7",
                                    flexGrow: 1,
                                }}
                            >
                                {lang === "tr" ? project.descriptionTR : project.descriptionEN}
                            </p>

                            {/* Tech tags */}
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="project-links">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-icon"
                                    >
                                        <Github size={14} />
                                        {t.projects.viewCode}
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-icon"
                                        style={{ color: "var(--accent)" }}
                                    >
                                        <ExternalLink size={14} />
                                        {t.projects.viewLive}
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
