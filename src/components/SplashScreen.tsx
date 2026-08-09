"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BRAND = "EFE İKAN";
const SUB = "SOFTWARE DEVELOPER";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const duration = 2200;
    let frame = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 380);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={!visible}
        >
          {/* Ambient orbs */}
          <motion.div
            className="splash-orb splash-orb-a"
            animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="splash-orb splash-orb-b"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Orbit rings */}
          <div className="splash-rings">
            <motion.div
              className="splash-ring splash-ring-1"
              initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{
                opacity: { duration: 0.6 },
                scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              }}
            />
            <motion.div
              className="splash-ring splash-ring-2"
              initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
              animate={{ opacity: 0.85, scale: 1, rotate: -360 }}
              transition={{
                opacity: { duration: 0.7, delay: 0.1 },
                scale: { duration: 1, delay: 0.05, ease: [0.22, 1, 0.36, 1] },
                rotate: { duration: 24, repeat: Infinity, ease: "linear" },
              }}
            />
            <motion.div
              className="splash-ring splash-ring-3"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0.2, 0.55, 0.2], scale: [0.92, 1.05, 0.92] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="splash-content">
            <motion.p
              className="splash-kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              LOADING EXPERIENCE
            </motion.p>

            <h1 className="font-orbitron splash-brand" aria-label={BRAND}>
              {BRAND.split("").map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.25 + i * 0.06,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="splash-sub"
              initial={{ opacity: 0, letterSpacing: "12px" }}
              animate={{ opacity: 0.75, letterSpacing: "6px" }}
              transition={{ delay: 0.85, duration: 0.7 }}
            >
              {SUB}
            </motion.p>

            <div className="splash-progress-wrap">
              <div className="splash-progress-track">
                <motion.div
                  className="splash-progress-fill"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </div>
              <motion.span
                className="splash-progress-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {progress}%
              </motion.span>
            </div>
          </div>

          {/* Scan line */}
          <motion.div
            className="splash-scan"
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
