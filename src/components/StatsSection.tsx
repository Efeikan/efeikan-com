"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const stats = [
  { value: 10, suffix: "+", labelKey: "projects" as const },
  { value: 11, suffix: "", labelKey: "team" as const },
  { value: 40, suffix: "+", labelKey: "apis" as const },
  { value: 2, suffix: "", labelKey: "platforms" as const },
];

function Counter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span className="font-orbitron stats-value">
      {n}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const labels = {
    projects: t.stats.projects,
    team: t.stats.team,
    apis: t.stats.apis,
    platforms: t.stats.platforms,
  };

  return (
    <section id="stats" className="section stats-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <span className="section-label">◈</span>
          <h2 className="section-title">{t.stats.sectionTitle}</h2>
          <p className="section-subtitle">{t.stats.sectionSubtitle}</p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.labelKey}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass-card stats-card"
            >
              <Counter value={s.value} suffix={s.suffix} active={inView} />
              <span className="stats-label">{labels[s.labelKey]}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
