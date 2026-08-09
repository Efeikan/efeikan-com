"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function HeroSection() {
    const { t } = useLang();

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "var(--nav-height) 24px 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Animated orbs */}
            <div
                style={{
                    position: "absolute",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
                    top: "10%",
                    left: "-15%",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(123,97,255,0.07) 0%, transparent 70%)",
                    bottom: "10%",
                    right: "-10%",
                    pointerEvents: "none",
                }}
            />

            {/* Grid pattern overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.03,
                    backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    pointerEvents: "none",
                }}
            />

            <div
                className="container"
                style={{
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "780px",
                }}
            >
                {/* Greeting badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="section-label">{t.hero.greeting}</span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="font-orbitron"
                    style={{
                        fontSize: "clamp(3rem, 8vw, 6rem)",
                        lineHeight: 1.05,
                        marginTop: "16px",
                        marginBottom: "8px",
                        background:
                            "linear-gradient(135deg, #ffffff 0%, var(--accent) 50%, var(--accent-2) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "-1px",
                    }}
                >
                    {t.hero.name}
                </motion.h1>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                        color: "var(--accent-soft)",
                        fontWeight: 500,
                        marginBottom: "24px",
                        letterSpacing: "0.5px",
                    }}
                >
                    {t.hero.title}
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    style={{
                        color: "var(--text-secondary)",
                        fontSize: "1.05rem",
                        lineHeight: 1.8,
                        maxWidth: "560px",
                        margin: "0 auto 48px",
                    }}
                >
                    {t.hero.subtitle}
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
                >
                    <a href="/projects" className="btn btn-primary">
                        {t.hero.cta}
                        <ChevronRight size={18} />
                    </a>
                    <a href="#about" className="btn btn-ghost">
                        {t.hero.ctaSecondary}
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    style={{
                        position: "absolute",
                        bottom: "-60px",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        style={{ color: "var(--text-muted)" }}
                    >
                        <ArrowDown size={20} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
