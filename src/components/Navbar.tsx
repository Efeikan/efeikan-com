"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const GITHUB_URL = "https://github.com/efeikan";
const LINKEDIN_URL = "https://www.linkedin.com/in/efe-ikan/";

export default function Navbar() {
    const { t, lang, setLang } = useLang();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { href: "/#home", label: t.nav.home },
        { href: "/#about", label: t.nav.about },
        { href: "/#stats", label: t.stats.sectionTitle },
        { href: "/projects", label: t.nav.projects },
        { href: "/#skills", label: t.nav.skills },
        { href: "/#contact", label: t.nav.contact },
    ];

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    height: "var(--nav-height)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 32px",
                    background: scrolled
                        ? "rgba(2, 5, 16, 0.85)"
                        : "rgba(2, 5, 16, 0.2)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "1px solid transparent",
                    transition: "all 0.4s ease",
                }}
            >
                {/* Logo */}
                <a
                    href="/#home"
                    className="font-orbitron"
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textDecoration: "none",
                        letterSpacing: "2px",
                    }}
                >
                    EFE İKAN
                </a>

                {/* Desktop nav links */}
                <div
                    style={{
                        display: "flex",
                        gap: "32px",
                        alignItems: "center",
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            style={{
                                color: "var(--text-secondary)",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.color = "var(--accent)")
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                            }
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* Right side */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {/* Lang toggle */}
                    <button
                        onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                        style={{
                            padding: "6px 14px",
                            borderRadius: "20px",
                            background: "rgba(0,212,255,0.08)",
                            border: "1px solid var(--border-accent)",
                            color: "var(--accent)",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            letterSpacing: "1px",
                            transition: "all 0.2s",
                            fontFamily: "Inter, sans-serif",
                        }}
                    >
                        {lang === "tr" ? "EN" : "TR"}
                    </button>

                    {/* GitHub */}
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon"
                        title="GitHub"
                    >
                        <Github size={16} />
                        <span style={{ display: "none" }} className="show-md">GitHub</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon"
                        title="LinkedIn"
                        style={{ color: "#0ea5e9" }}
                    >
                        <Linkedin size={16} />
                        <span style={{ display: "none" }} className="show-md">LinkedIn</span>
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{
                            background: "none",
                            border: "none",
                            color: "var(--text-primary)",
                            cursor: "pointer",
                            display: "none",
                            padding: "4px",
                        }}
                        className="mobile-menu-btn"
                        aria-label="Menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "var(--nav-height)",
                        left: 0,
                        right: 0,
                        background: "rgba(2, 5, 16, 0.97)",
                        backdropFilter: "blur(16px)",
                        borderBottom: "1px solid var(--border)",
                        padding: "20px 32px",
                        zIndex: 999,
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                color: "var(--text-primary)",
                                textDecoration: "none",
                                fontSize: "1rem",
                                fontWeight: 500,
                                padding: "8px 0",
                                borderBottom: "1px solid var(--border)",
                            }}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            )}

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .show-md {
            display: inline !important;
          }
        }
      `}</style>
        </>
    );
}
