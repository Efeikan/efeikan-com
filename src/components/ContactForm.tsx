"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const TO_EMAIL = "efeikan@outlook.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

type SendResult =
  | { ok: true }
  | { ok: false; reason: "activation" | "failed" };

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
  captcha?: string;
};

async function sendViaFormSubmit(payload: {
  name: string;
  email: string;
  message: string;
  captchaToken?: string;
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
      ...(payload.captchaToken
        ? { "cf-turnstile-response": payload.captchaToken }
        : {}),
    }),
  });

  const data = await res.json().catch(() => ({} as Record<string, string>));
  const message = String(data.message ?? "").toLowerCase();

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
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "sent" | "activation" | "error"
  >("idle");
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !widgetRef.current) return;

    const render = () => {
      if (!window.turnstile || !widgetRef.current || widgetId.current) return;
      widgetId.current = window.turnstile.render(widgetRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "auto",
      });
    };

    if (window.turnstile) {
      render();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      "script[data-turnstile]"
    );
    if (existing) {
      existing.addEventListener("load", render);
      return () => existing.removeEventListener("load", render);
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.turnstile = "true";
    script.addEventListener("load", render);
    document.head.appendChild(script);
    return () => script.removeEventListener("load", render);
  }, []);

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = t.contact.formRequired;
    if (!email.trim()) next.email = t.contact.formRequired;
    else if (!EMAIL_RE.test(email.trim())) next.email = t.contact.formEmailInvalid;
    if (!message.trim()) next.message = t.contact.formRequired;
    if (TURNSTILE_SITE_KEY) {
      const token = widgetId.current
        ? window.turnstile?.getResponse(widgetId.current)
        : "";
      if (!token) next.captcha = t.contact.formCaptcha;
    }
    return next;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (honeypot.trim()) {
      setStatus("sent");
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const captchaToken = widgetId.current
      ? window.turnstile?.getResponse(widgetId.current)
      : undefined;

    const payload = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      captchaToken,
    };

    try {
      const result = await sendViaFormSubmit(payload);
      if (result.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
        if (widgetId.current) window.turnstile?.reset(widgetId.current);
        return;
      }
      if (result.reason === "activation") {
        setStatus("activation");
        return;
      }
      setStatus("error");
    } catch {
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
          name="company"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </label>

      <div className="contact-form-row">
        <label className="contact-field" htmlFor="contact-name">
          <span>{t.contact.formName}</span>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setStatus("idle");
              setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            placeholder={t.contact.formNamePh}
            required
            disabled={status === "loading"}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <span id="contact-name-error" className="contact-field-error" role="alert">
              {errors.name}
            </span>
          )}
        </label>
        <label className="contact-field" htmlFor="contact-email">
          <span>{t.contact.formEmail}</span>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
              setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder={t.contact.formEmailPh}
            required
            disabled={status === "loading"}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <span id="contact-email-error" className="contact-field-error" role="alert">
              {errors.email}
            </span>
          )}
        </label>
      </div>

      <label className="contact-field" htmlFor="contact-message">
        <span>{t.contact.formMessage}</span>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setStatus("idle");
            setErrors((prev) => ({ ...prev, message: undefined }));
          }}
          placeholder={t.contact.formMessagePh}
          required
          disabled={status === "loading"}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && (
          <span id="contact-message-error" className="contact-field-error" role="alert">
            {errors.message}
          </span>
        )}
      </label>

      {TURNSTILE_SITE_KEY ? (
        <div className="contact-captcha">
          <div ref={widgetRef} />
          {errors.captcha && (
            <span className="contact-field-error" role="alert">
              {errors.captcha}
            </span>
          )}
        </div>
      ) : null}

      <div className="contact-form-actions">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <Loader2 size={16} className="spin" aria-hidden />
          ) : (
            <Send size={16} aria-hidden />
          )}
          {status === "loading" ? t.contact.formSending : t.contact.formSubmit}
        </button>
        {status === "sent" && (
          <span className="contact-form-status ok" role="status">
            {t.contact.formSuccess}
          </span>
        )}
        {status === "activation" && (
          <span className="contact-form-status ok" role="status">
            {t.contact.formActivation}
          </span>
        )}
        {status === "error" && !errors.name && !errors.email && !errors.message && !errors.captcha && (
          <span className="contact-form-status err" role="alert">
            {t.contact.formError}
          </span>
        )}
      </div>
    </motion.form>
  );
}
