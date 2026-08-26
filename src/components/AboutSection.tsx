"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { Code2, Layers, Cpu, PawPrint, Users } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
    const { t, lang } = useLang();

    const stats = [
        { value: "3+", labelTR: "Yıl Deneyim", labelEN: "Years Exp.", icon: Code2 },
        { value: "10+", labelTR: "Tamamlanan Proje", labelEN: "Projects", icon: Layers },
        { value: "∞", labelTR: "Satır Kod", labelEN: "Lines of Code", icon: Cpu },
    ];

    const projects = [
        {
            icon: PawPrint,
            color: "#00d4ff",
            bgColor: "rgba(0,212,255,0.08)",
            borderColor: "rgba(0,212,255,0.2)",
            name: "Pettag",
            slug: "pettag",
            text: t.about.p2,
        },
        {
            icon: Users,
            color: "#7b61ff",
            bgColor: "rgba(123,97,255,0.08)",
            borderColor: "rgba(123,97,255,0.2)",
            name: "FinderDev",
            slug: "finderdev",
            text: t.about.p3,
        },
    ];

    return (
        <section id="about" className="section" aria-labelledby="about-title">
            <div className="gradient-line" style={{ marginBottom: "100px" }} />
            <div className="container">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="section-label">&#9670;</span>
                    <h2 id="about-title" className="section-title">{t.about.sectionTitle}</h2>
                </motion.div>

                {/* === INTRO BLOCK === */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{
                        position: "relative",
                        marginBottom: "64px",
                        padding: "40px 48px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "20px",
                        overflow: "hidden",
                    }}
                >
                    {/* Decorative glow corner */}
                    <div style={{
                        position: "absolute",
                        top: 0, left: 0,
                        width: "200px", height: "200px",
                        background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />

                    {/* Opening quote mark */}
                    <div
                        className="font-orbitron"
                        style={{
                            fontSize: "5rem",
                            lineHeight: 1,
                            color: "var(--accent)",
                            opacity: 0.15,
                            position: "absolute",
                            top: "12px",
                            left: "32px",
                            fontWeight: 700,
                            pointerEvents: "none",
                        }}
                    >
                        &ldquo;
                    </div>

                    <p
                        style={{
                            fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
                            lineHeight: "1.9",
                            color: "var(--text-primary)",
                            fontWeight: 400,
                            position: "relative",
                            zIndex: 1,
                            paddingLeft: "24px",
                            borderLeft: "3px solid var(--accent)",
                        }}
                    >
                        {t.about.p1}
                    </p>
                </motion.div>

                {/* === PROJECT HIGHLIGHT CARDS === */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "64px" }} className="project-highlights-grid">
                    {projects.map((proj, i) => {
                        const Icon = proj.icon;
                        return (
                            <motion.div
                                key={proj.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                                whileHover={{ y: -4, boxShadow: `0 20px 50px ${proj.bgColor}` }}
                            >
                                <Link
                                    href={`/projects/${proj.slug}`}
                                    className="about-project-card"
                                    style={{
                                        padding: "32px",
                                        background: proj.bgColor,
                                        border: `1px solid ${proj.borderColor}`,
                                        borderRadius: "16px",
                                        backdropFilter: "blur(10px)",
                                        position: "relative",
                                        overflow: "hidden",
                                        display: "block",
                                        textDecoration: "none",
                                        color: "inherit",
                                        height: "100%",
                                    }}
                                >
                                {/* Background watermark */}
                                <div style={{
                                    position: "absolute",
                                    right: "-16px", bottom: "-16px",
                                    opacity: 0.05,
                                }}>
                                    <Icon size={100} color={proj.color} />
                                </div>

                                {/* Header */}
                                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                                    <div style={{
                                        width: "44px", height: "44px",
                                        borderRadius: "12px",
                                        background: `${proj.color}18`,
                                        border: `1px solid ${proj.color}40`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                    }}>
                                        <Icon size={20} color={proj.color} />
                                    </div>
                                    <span
                                        className="font-orbitron"
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            letterSpacing: "1.5px",
                                            color: proj.color,
                                        }}
                                    >
                                        {proj.name.toUpperCase()}
                                    </span>
                                </div>

                                {/* Description — strip leading emoji+name prefix */}
                                <p style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "0.92rem",
                                    lineHeight: "1.8",
                                    position: "relative",
                                    zIndex: 1,
                                }}>
                                    {proj.text.replace(/^.+?—\s*/, "")}
                                </p>
                                <span className="project-card-cta" style={{ marginTop: 16 }}>
                                    {t.projects.viewDetails}
                                </span>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* === STATS ROW === */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                        marginBottom: "48px",
                    }}
                    className="stats-row"
                >
                    {stats.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={i}
                                style={{
                                    padding: "28px 24px",
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    borderRadius: "14px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "10px",
                                    textAlign: "center",
                                }}
                            >
                                <Icon size={20} color="var(--accent)" style={{ opacity: 0.7 }} />
                                <div
                                    className="font-orbitron"
                                    style={{
                                        fontSize: "2.2rem",
                                        fontWeight: 700,
                                        background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        lineHeight: 1,
                                    }}
                                >
                                    {s.value}
                                </div>
                                <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.5px" }}>
                                    {lang === "tr" ? s.labelTR : s.labelEN}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* === CLOSING STATEMENT === */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    style={{
                        textAlign: "center",
                        padding: "32px 48px",
                        background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,97,255,0.05))",
                        border: "1px solid rgba(0,212,255,0.12)",
                        borderRadius: "16px",
                    }}
                >
                    <p style={{
                        color: "var(--text-secondary)",
                        fontSize: "1rem",
                        lineHeight: "1.9",
                        fontStyle: "italic",
                        maxWidth: "680px",
                        margin: "0 auto",
                    }}>
                        {t.about.p4}
                    </p>
                </motion.div>

            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .project-highlights-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-row {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .stats-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
