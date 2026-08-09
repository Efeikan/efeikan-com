"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const TO_EMAIL = "efeikan@outlook.com";

type SendResult =
  | { ok: true }
  | { ok: false; reason: "activation" | "failed" };

async function sendViaFormSubmit(payload: {
  name: string;
  email: string;
  message: string;
}): Promise<SendResult> {
  const res = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      message: payload.message,
      _subject: `Portfolyo iletişim — ${payload.name}`,
      _template: "table",
      _captcha: "false",
      _replyto: payload.email,
    }),
  });

  const data = await res.json().catch(() => ({} as Record<string, string>));
  const message = String(data.message ?? "").toLowerCase();

  // First-time setup: activation mail was sent to Outlook
  if (
    message.includes("activation") ||
    message.includes("activate form") ||
    message.includes("activate")
  ) {
    return { ok: false, reason: "activation" };
  }

  if (res.ok && (data.success === true || data.success === "true")) {
    return { ok: true };
  }

  return { ok: false, reason: "failed" };
}

export default function ContactForm() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "sent" | "activation" | "error"
  >("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (honeypot.trim()) {
      setStatus("sent");
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const payload = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, company: honeypot }),
      });

      const data = await res.json().catch(() => ({}));

      if (data.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      if (data.fallback === "formsubmit" || data.error === "no_provider") {
        const result = await sendViaFormSubmit(payload);
        if (result.ok) {
          setStatus("sent");
          setName("");
          setEmail("");
          setMessage("");
          return;
        }
        if (result.reason === "activation") {
          setStatus("activation");
          return;
        }
      }

      setStatus("error");
    } catch {
      try {
        const result = await sendViaFormSubmit(payload);
        if (result.ok) {
          setStatus("sent");
          setName("");
          setEmail("");
          setMessage("");
          return;
        }
        if (result.reason === "activation") {
          setStatus("activation");
          return;
        }
      } catch {
        // ignore
      }
      setStatus("error");
    }
  };

  return (
    <motion.form
      className="contact-form glass-card"
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      noValidate
    >
      <h3 className="contact-form-title">{t.contact.formTitle}</h3>
      <p className="contact-form-sub">{t.contact.formSubtitle}</p>

      <label className="contact-honeypot" aria-hidden="true">
        Company
        <input
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </label>

      <div className="contact-form-row">
        <label className="contact-field">
          <span>{t.contact.formName}</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setStatus("idle");
            }}
            placeholder={t.contact.formNamePh}
            required
            disabled={status === "loading"}
          />
        </label>
        <label className="contact-field">
          <span>{t.contact.formEmail}</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            placeholder={t.contact.formEmailPh}
            required
            disabled={status === "loading"}
          />
        </label>
      </div>

      <label className="contact-field">
        <span>{t.contact.formMessage}</span>
        <textarea
          name="message"
          rows={5}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setStatus("idle");
          }}
          placeholder={t.contact.formMessagePh}
          required
          disabled={status === "loading"}
        />
      </label>

      <div className="contact-form-actions">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <Loader2 size={16} className="spin" />
          ) : (
            <Send size={16} />
          )}
          {status === "loading" ? t.contact.formSending : t.contact.formSubmit}
        </button>
        {status === "sent" && (
          <span className="contact-form-status ok">{t.contact.formSuccess}</span>
        )}
        {status === "activation" && (
          <span className="contact-form-status ok">
            {t.contact.formActivation}
          </span>
        )}
        {status === "error" && (
          <span className="contact-form-status err">{t.contact.formError}</span>
        )}
      </div>
    </motion.form>
  );
}
