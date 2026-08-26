import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { personJsonLd } from "@/lib/seo";
import { SITE_DESCRIPTION_TR } from "@/lib/site";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION_TR,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <FeaturedProjects />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
