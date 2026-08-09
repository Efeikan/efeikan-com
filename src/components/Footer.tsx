"use client";

import { useLang } from "@/context/LanguageContext";
import { Heart } from "lucide-react";

export default function Footer() {
    const { t } = useLang();
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                borderTop: "1px solid var(--border)",
                padding: "40px 24px",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
            }}
        >
            {/* Gradient top accent */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "200px",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, var(--accent), var(--accent-2), transparent)",
                }}
            />

            <div
                className="font-orbitron"
                style={{
                    fontSize: "1rem",
                    letterSpacing: "3px",
                    background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "12px",
                }}
            >
                EFE İKAN
            </div>

            <p
                style={{
                    color: "var(--text-muted)",
                    fontSize: "0.82rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                }}
            >
                © {year} Efe İkan — {t.footer.rights}
                <span style={{ margin: "0 4px", display: "inline-flex", alignItems: "center" }}>
                    <Heart size={12} color="#ff6b6b" fill="#ff6b6b" />
                </span>
                {t.footer.builtWith}
            </p>
        </footer>
    );
}
