"use client";

import SplashScreen from "@/components/SplashScreen";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SplashScreen />
      {children}
      <CookieConsent />
      <GoogleAnalytics />
    </>
  );
}
