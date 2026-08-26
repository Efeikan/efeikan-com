"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const skillData = {
    frontend: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
        "Framer Motion", "Tailwind CSS"
    ],
    backend: [
        "Node.js", "Python", "FastAPI", "Express", "REST API", "GraphQL",
        "PostgreSQL", "MongoDB"
    ],
    tools: [
        "Git", "GitHub", "Docker", "VS Code", "Figma", "Vercel",
        "Linux", "Postman"
    ],
};

export default function SkillsSection() {
    const { t } = useLang();

    return (
        <section id="skills" className="section" aria-labelledby="skills-title">
            <div className="gradient-line" style={{ marginBottom: "100px" }} />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="section-label">&#9729;</span>
                    <h2 id="skills-title" className="section-title">{t.skills.sectionTitle}</h2>
                    <p className="section-subtitle">{t.skills.sectionSubtitle}</p>
                </motion.div>

                <div className="skills-grid">
                    {(["frontend", "backend", "tools"] as const).map((cat, i) => (
                        <motion.div
                            key={cat}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            className="glass-card"
                            style={{ padding: "28px" }}
                        >
                            <div className="skill-category-title">
                                {t.skills.categories[cat]}
                            </div>
                            <div className="skill-tags">
                                {skillData[cat].map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
