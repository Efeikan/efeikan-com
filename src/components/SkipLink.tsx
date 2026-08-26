"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function SkipLink() {
  const { t } = useLang();
  return (
    <Link href="#main" className="skip-link">
      {t.nav.skipToContent}
    </Link>
  );
}
