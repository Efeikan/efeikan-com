import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Efe İkan | Software Developer",
  description:
    "Efe İkan — Yazılım Geliştirici. Next.js, React, TypeScript ve daha fazlası ile güzel arayüzler inşa ediyorum.",
  keywords: ["Efe İkan", "Software Developer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Efe İkan", url: "https://efeikan.com" }],
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
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
