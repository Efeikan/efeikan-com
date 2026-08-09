import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "Efe İkan | Software Developer",
  description:
    "Efe İkan — Yazılım Geliştirici. Next.js, React, TypeScript ve daha fazlası ile güzel arayüzler inşa ediyorum.",
  keywords: ["Efe İkan", "Software Developer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Efe İkan", url: "https://efeikan.com" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.svg"],
  },
  openGraph: {
    title: "Efe İkan | Software Developer",
    description: "Kişisel portfolyo ve proje sayfası",
    url: "https://efeikan.com",
    siteName: "Efe İkan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <ClientShell>{children}</ClientShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
