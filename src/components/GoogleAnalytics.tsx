"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { hasAnalyticsConsent, subscribeConsent } from "@/lib/consent";
import { GA_MEASUREMENT_ID } from "@/lib/site";

const GA_ID = GA_MEASUREMENT_ID;

function isMeasurementId(id: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(id);
}

export default function GoogleAnalytics() {
  const allowed = useSyncExternalStore(
    subscribeConsent,
    hasAnalyticsConsent,
    () => false
  );

  if (!isMeasurementId(GA_ID) || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
