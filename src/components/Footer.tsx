"use client";

import Link from "next/link";
import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { SOCIAL } from "@/lib/site";
import BackToTop from "@/components/BackToTop";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/#home", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/#skills", label: t.nav.skills },
    { href: "/#contact", label: t.nav.contact },
  ];

  const socials = [
    {
      href: SOCIAL.linkedin,
      label: t.contact.linkedinLabel,
      icon: Linkedin,
      external: true,
    },
    {
      href: SOCIAL.github,
      label: t.contact.githubLabel,
      icon: Github,
      external: true,
    },
    {
      href: `mailto:${SOCIAL.email}`,
      label: t.contact.emailLabel,
      icon: Mail,
      external: false,
    },
  ];

  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer-accent" aria-hidden />

        <div className="container site-footer-grid">
          <div className="site-footer-brand">
            <Link href="/#home" className="font-orbitron site-footer-logo">
              EFE İKAN
            </Link>
            <p className="site-footer-tagline">{t.footer.tagline}</p>
          </div>

          <nav className="site-footer-nav" aria-label={t.footer.quickLinks}>
            <p className="site-footer-col-title">{t.footer.quickLinks}</p>
            <ul className="site-footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer-social-col">
            <p className="site-footer-cta">{t.footer.cta}</p>
            <p className="site-footer-col-title">{t.footer.connect}</p>
            <div className="site-footer-socials">
              {socials.map(({ href, label, icon: Icon, external }) => (
                <a
                  key={href}
                  href={href}
                  className="site-footer-social"
                  aria-label={label}
                  title={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon size={18} aria-hidden />
                </a>
              ))}
            </div>
            <a href={`mailto:${SOCIAL.email}`} className="site-footer-email">
              {SOCIAL.email}
            </a>
          </div>
        </div>

        <div className="container site-footer-bottom">
          <p className="site-footer-copy">
            © {year} Efe İkan — {t.footer.rights}
            <span className="site-footer-heart" aria-hidden>
              <Heart size={12} color="#ff6b6b" fill="#ff6b6b" />
            </span>
            {t.footer.builtWith}
          </p>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
