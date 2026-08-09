"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const STORAGE_KEY = "efe-cookie-consent";

export default function CookieConsent() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="cookie-banner"
          role="dialog"
          aria-live="polite"
          aria-label={t.cookie.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cookie-banner-inner">
            <div className="cookie-banner-icon">
              <Cookie size={20} />
            </div>
            <div className="cookie-banner-copy">
              <strong>{t.cookie.title}</strong>
              <p>{t.cookie.description}</p>
            </div>
            <div className="cookie-banner-actions">
              <button
                type="button"
                className="btn btn-ghost cookie-btn"
                onClick={() => choose("rejected")}
              >
                {t.cookie.reject}
              </button>
              <button
                type="button"
                className="btn btn-primary cookie-btn"
                onClick={() => choose("accepted")}
              >
                {t.cookie.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
