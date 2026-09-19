"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import {
  getConsent,
  setConsent,
  subscribeConsent,
  type ConsentValue,
} from "@/lib/consent";

function readNeedsConsent(): boolean {
  return getConsent() === null;
}

export default function CookieConsent() {
  const { t } = useLang();
  const needsConsent = useSyncExternalStore(
    subscribeConsent,
    readNeedsConsent,
    () => false
  );
  const [dismissed, setDismissed] = useState(false);
  const visible = needsConsent && !dismissed;

  const choose = (value: ConsentValue) => {
    setConsent(value);
    setDismissed(true);
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
              <Cookie size={20} aria-hidden />
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
                aria-label={t.cookie.reject}
              >
                {t.cookie.reject}
              </button>
              <button
                type="button"
                className="btn btn-primary cookie-btn"
                onClick={() => choose("accepted")}
                aria-label={t.cookie.accept}
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
