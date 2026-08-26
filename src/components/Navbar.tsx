"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";

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
        { href: "/projects", label: t.nav.projects },
        { href: "/blog", label: t.nav.blog },
        { href: "/#skills", label: t.nav.skills },
        { href: "/#contact", label: t.nav.contact },
    ];

    return (
        <nav
            className={`site-nav${scrolled ? " is-scrolled" : ""}`}
            aria-label="Primary"
        >
            <Link
                href="/#home"
                className="font-orbitron site-nav-logo"
            >
                EFE İKAN
            </Link>

            <div className="desktop-nav site-nav-links">
                {navLinks.map((l) => (
                    <Link key={l.href} href={l.href} className="site-nav-link">
                        {l.label}
                    </Link>
                ))}
            </div>

            <div className="site-nav-actions">
                <ThemeToggle />

                <button
                    type="button"
                    onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                    className="lang-toggle"
                    aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
                >
                    {lang === "tr" ? "EN" : "TR"}
                </button>

                <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    aria-label="GitHub"
                >
                    <Github size={16} aria-hidden />
                    <span className="show-md">GitHub</span>
                </a>

                <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    aria-label="LinkedIn"
                    style={{ color: "#0ea5e9" }}
                >
                    <Linkedin size={16} aria-hidden />
                    <span className="show-md">LinkedIn</span>
                </a>

                <button
                    type="button"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="mobile-menu-btn"
                    aria-label={mobileOpen ? t.nav.closeMenu : t.nav.toggleMenu}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                >
                    {mobileOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
                </button>
            </div>

            {mobileOpen && (
                <div id="mobile-menu" className="mobile-menu">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setMobileOpen(false)}
                            className="mobile-menu-link"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
