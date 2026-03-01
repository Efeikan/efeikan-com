"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const GITHUB_URL = "https://github.com/efeikan";
const LINKEDIN_URL = "https://www.linkedin.com/in/efe-ikan/";
const EMAIL = "mail@efeikan.com";

export default function ContactSection() {
    const { t } = useLang();

    const links = [
        {
            href: `mailto:${EMAIL}`,
            icon: Mail,
            label: t.contact.emailLabel,
            value: EMAIL,
            color: "#00d4ff",
            bg: "rgba(0,212,255,0.08)",
            border: "rgba(0,212,255,0.25)",
        },
        {
            href: LINKEDIN_URL,
            icon: Linkedin,
            label: t.contact.linkedinLabel,
            value: "linkedin.com/in/efe-ikan",
            color: "#0ea5e9",
            bg: "rgba(14,165,233,0.08)",
            border: "rgba(14,165,233,0.25)",
        },
        {
            href: GITHUB_URL,
            icon: Github,
            label: t.contact.githubLabel,
            value: "github.com/efeikan",
            color: "#c9d1d9",
            bg: "rgba(201,209,217,0.06)",
            border: "rgba(201,209,217,0.15)",
        },
    ];

    return (
        <section id="contact" className="section">
            <div className="gradient-line" style={{ marginBottom: "100px" }} />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="section-label">&#9993;</span>
                    <h2 className="section-title">{t.contact.sectionTitle}</h2>
                    <p className="section-subtitle">{t.contact.sectionSubtitle}</p>
                </motion.div>

                <div className="contact-links">
                    {links.map((link, i) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ scale: 1.04 }}
                                className="glass-card contact-link-card"
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    className="contact-icon-wrap"
                                    style={{
                                        background: link.bg,
                                        borderColor: link.border,
                                    }}
                                >
                                    <Icon size={24} color={link.color} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            fontWeight: 700,
                                            color: "var(--text-primary)",
                                            fontSize: "0.95rem",
                                            marginBottom: "4px",
                                        }}
                                    >
                                        {link.label}
                                    </div>
                                    <div
                                        style={{
                                            color: link.color,
                                            fontSize: "0.8rem",
                                            opacity: 0.8,
                                        }}
                                    >
                                        {link.value}
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
