export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://efeikan.com";

export const SITE_NAME = "Efe İkan";

export const SITE_TITLE = "Efe İkan | Software Developer";

export const SITE_DESCRIPTION_TR =
  "Efe İkan — Yazılım Geliştirici. Backend, sistem mimarisi, Next.js, React ve TypeScript ile ölçeklenebilir ürünler inşa ediyorum.";

export const SITE_DESCRIPTION_EN =
  "Efe İkan — Software Developer. I build scalable products with backend systems, architecture, Next.js, React, and TypeScript.";

export const SITE_KEYWORDS = [
  "Efe İkan",
  "Software Developer",
  "Backend",
  "Next.js",
  "React",
  "TypeScript",
  "Portfolio",
];

export const SOCIAL = {
  github: "https://github.com/efeikan",
  linkedin: "https://www.linkedin.com/in/efe-ikan/",
  email: "efeikan@outlook.com",
} as const;

export function absUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, SITE_URL).toString();
}
