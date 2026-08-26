"use client";

import { motion } from "framer-motion";
import { Quote, UserRound } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const { t, lang } = useLang();

  return (
    <section
      id="testimonials"
      className="section"
      aria-labelledby="testimonials-title"
    >
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
            &#10077;
          </span>
          <h2 id="testimonials-title" className="section-title">
            {t.testimonials.sectionTitle}
          </h2>
          <p className="section-subtitle">{t.testimonials.sectionSubtitle}</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass-card testimonial-card"
            >
              <Quote
                className="testimonial-quote-icon"
                size={22}
                aria-hidden
              />
              <p className="testimonial-quote">
                {lang === "tr" ? item.quoteTR : item.quoteEN}
              </p>
              <footer className="testimonial-meta">
                <div className="testimonial-photo" aria-hidden={!item.photoSrc}>
                  {item.photoSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.photoSrc}
                      alt=""
                      width={48}
                      height={48}
                    />
                  ) : (
                    <UserRound size={22} aria-hidden />
                  )}
                </div>
                <div>
                  <cite className="testimonial-name">{item.name}</cite>
                  <p className="testimonial-role">
                    {lang === "tr" ? item.roleTR : item.roleEN}
                    {item.company ? ` · ${item.company}` : ""}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
