import { SITE_DESCRIPTION_TR, SITE_NAME, SITE_URL, SOCIAL, absUrl } from "@/lib/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${SITE_NAME} | Portfolio`,
    url: SITE_URL,
    mainEntity: {
      "@type": "Person",
      name: SITE_NAME,
      jobTitle: "Software Developer",
      url: SITE_URL,
      email: SOCIAL.email,
      sameAs: [SOCIAL.github, SOCIAL.linkedin],
      description: SITE_DESCRIPTION_TR,
    },
  };
}

export function blogPostingJsonLd(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: absUrl(`/blog/${post.slug}/`),
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: absUrl(`/blog/${post.slug}/`),
    inLanguage: "tr",
  };
}
