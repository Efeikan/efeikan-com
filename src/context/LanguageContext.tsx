"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "tr" | "en";

interface Translations {
    nav: {
        home: string;
        about: string;
        projects: string;
        skills: string;
        contact: string;
    };
    hero: {
        greeting: string;
        name: string;
        title: string;
        subtitle: string;
        cta: string;
        ctaSecondary: string;
    };
    about: {
        sectionTitle: string;
        p1: string;
        p2: string;
        p3: string;
        p4: string;
    };
    stats: {
        sectionTitle: string;
        sectionSubtitle: string;
        projects: string;
        team: string;
        apis: string;
        platforms: string;
    };
    projects: {
        sectionTitle: string;
        sectionSubtitle: string;
        viewCode: string;
        viewLive: string;
        viewDetails: string;
        featured: string;
        backToProjects: string;
        overview: string;
        features: string;
        related: string;
        techFilter: string;
        clearFilter: string;
        empty: string;
    };
    skills: {
        sectionTitle: string;
        sectionSubtitle: string;
        categories: {
            frontend: string;
            backend: string;
            tools: string;
        };
    };
    contact: {
        sectionTitle: string;
        sectionSubtitle: string;
        emailLabel: string;
        linkedinLabel: string;
        githubLabel: string;
        formTitle: string;
        formSubtitle: string;
        formName: string;
        formEmail: string;
        formMessage: string;
        formNamePh: string;
        formEmailPh: string;
        formMessagePh: string;
        formSubmit: string;
        formSending: string;
        formSubject: string;
        formSuccess: string;
        formActivation: string;
        formError: string;
    };
    footer: {
        rights: string;
        builtWith: string;
    };
    cookie: {
        title: string;
        description: string;
        accept: string;
        reject: string;
    };
}

const translations: Record<Lang, Translations> = {
    tr: {
        nav: {
            home: "Ana Sayfa",
            about: "Hakkımda",
            projects: "Projelerimiz",
            skills: "Yetenekler",
            contact: "İletişim",
        },
        hero: {
            greeting: "Merhaba, ben",
            name: "Efe İkan",
            title: "Yazılım Geliştirici",
            subtitle:
                "Kod yazmayı, problem çözmeyi ve güzel arayüzler tasarlamayı seviyorum. Dijital dünyada iz bırakmak için çalışıyorum.",
            cta: "Projelerimi Gör",
            ctaSecondary: "Hakkımda",
        },
        about: {
            sectionTitle: "Hakkımda",
            p1: "Merhaba, ben Efe İkan. Karmaşık sistemlerin mutfağında (Backend) çözüm üretmeyi seven, veri yapılarını ve sistem mimarisini bir yapbozun parçaları gibi birleştirmekten keyif alan bir geliştiriciyim. Yazılım dünyasındaki yolculuğumu, sadece kod yazmak değil, gerçek dünya sorunlarına teknolojik yanıtlar vermek üzerine kurguluyorum.",
            p2: "🐾 Pettag — Veteriner hekimler ile evcil hayvan sahiplerini aynı platformda buluşturan, geniş kapsamlı bir dijital ekosistem projesidir. Hayvan sağlığı ve takibi süreçlerini dijitalleştirerek, hem profesyoneller hem de kullanıcılar için işlevsel bir çözüm sundum. Bu büyük ölçekli proje, bir fikrin nasıl kapsamlı bir platforma dönüşebileceği konusundaki ilk önemli deneyimimdi.",
            p3: "👨‍💻 FinderDev — Yazılımcılar ve teknoloji meraklıları için geliştirdiğimiz bir sosyal ağ platformu. 11 kişilik geniş bir ekiple yürüttüğümüz bu projede, sistemin kalbi sayılan Backend ve Database Context süreçlerinin tamamını üstlendim. Çoklu kullanıcı trafiğini yönetmek, veri tabanı mimarisini optimize etmek ve ekip içindeki teknik koordinasyonu sağlamak, mühendislik becerilerimi bir üst seviyeye taşıdı.",
            p4: "Veri tabanı tasarımı, API geliştirme ve sistem mimarisi konularındaki tutkumla, her zaman daha performanslı ve ölçeklenebilir projeler üretmeyi hedefliyorum. Teknolojinin mutfağında, yeni nesil çözümler inşa etmeye devam ediyorum.",
        },
        stats: {
            sectionTitle: "Rakamlarla",
            sectionSubtitle: "Ürettiğim işin somut özeti",
            projects: "Güçlü proje",
            team: "Kişilik ekip (FinderDev)",
            apis: "API / servis",
            platforms: "Bayrak platform",
        },
        projects: {
            sectionTitle: "Projelerimiz",
            sectionSubtitle: "Güçlü sistemler, gerçek ürünler — detay için İncele",
            viewCode: "Kodu Gör",
            viewLive: "Canlı Gör",
            viewDetails: "İncele",
            featured: "Öne Çıkan",
            backToProjects: "Projelere Dön",
            overview: "Genel Bakış",
            features: "Öne Çıkan Özellikler",
            related: "Benzer Projeler",
            techFilter: "Teknoloji filtresi",
            clearFilter: "Temizle",
            empty: "Bu filtreye uyan proje yok.",
        },
        skills: {
            sectionTitle: "Yetenekler",
            sectionSubtitle: "Kullandığım teknoloji ve araçlar",
            categories: {
                frontend: "Frontend",
                backend: "Backend",
                tools: "Araçlar",
            },
        },
        contact: {
            sectionTitle: "İletişim",
            sectionSubtitle: "Bir fikrin mi var? Konuşalım.",
            emailLabel: "E-posta Gönder",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
            formTitle: "Mesaj Gönder",
            formSubtitle:
                "Mesajın efeikan@outlook.com adresine gelir. İlk kurulumda Outlook’taki aktivasyon linkine bir kez tıklaman gerekir.",
            formName: "Ad Soyad",
            formEmail: "E-posta",
            formMessage: "Mesaj",
            formNamePh: "Adın",
            formEmailPh: "ornek@mail.com",
            formMessagePh: "Kısaca ne konuşmak istiyorsun?",
            formSubmit: "Gönder",
            formSending: "Gönderiliyor…",
            formSubject: "Portfolyo iletişim",
            formSuccess: "Mesajın iletildi. Teşekkürler!",
            formActivation:
                "Aktivasyon maili efeikan@outlook.com adresine gitti. Outlook’ta “Activate Form” linkine tıkla, sonra tekrar gönder.",
            formError: "Gönderilemedi. Alanları kontrol edip tekrar dene.",
        },
        footer: {
            rights: "Tüm hakları saklıdır.",
            builtWith: "Next.js ile oluşturuldu",
        },
        cookie: {
            title: "Çerez tercihi",
            description:
                "Deneyimi iyileştirmek için gerekli çerezleri kullanıyoruz. Devam ederek çerez politikamızı kabul etmiş olursun.",
            accept: "Kabul et",
            reject: "Reddet",
        },
    },

    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Our Projects",
            skills: "Skills",
            contact: "Contact",
        },
        hero: {
            greeting: "Hi, I'm",
            name: "Efe İkan",
            title: "Software Developer",
            subtitle:
                "I love writing code, solving problems, and crafting beautiful interfaces. Working to leave a mark in the digital world.",
            cta: "View My Projects",
            ctaSecondary: "About Me",
        },
        about: {
            sectionTitle: "About Me",
            p1: "Hi, I'm Efe İkan. I'm a developer who loves crafting solutions in the heart of complex systems (Backend), piecing together data structures and system architecture like a puzzle. My journey in software isn't just about writing code — it's about delivering technological answers to real-world problems.",
            p2: "🐾 Pettag — A comprehensive digital ecosystem connecting veterinarians and pet owners on a single platform. By digitalizing animal health and tracking processes, I delivered a functional solution for both professionals and users. This large-scale project was my first major experience watching an idea grow into a full platform.",
            p3: "👨‍💻 FinderDev — A social network platform built for developers and tech enthusiasts. Running within a team of 11, I owned the entire Backend and Database Context — handling multi-user traffic, optimizing database architecture, and coordinating technical decisions across the team. It took my engineering skills to the next level.",
            p4: "With a passion for database design, API development, and system architecture, I always aim to build more performant and scalable systems. I continue building next-generation solutions in the kitchen of technology.",
        },
        stats: {
            sectionTitle: "By the Numbers",
            sectionSubtitle: "A concrete snapshot of the work",
            projects: "Strong projects",
            team: "Person team (FinderDev)",
            apis: "APIs / services",
            platforms: "Flagship platforms",
        },
        projects: {
            sectionTitle: "Our Projects",
            sectionSubtitle: "Strong systems, real products — open a project to explore",
            viewCode: "View Code",
            viewLive: "View Live",
            viewDetails: "Explore",
            featured: "Featured",
            backToProjects: "Back to Projects",
            overview: "Overview",
            features: "Key Features",
            related: "Related Projects",
            techFilter: "Tech filter",
            clearFilter: "Clear",
            empty: "No projects match this filter.",
        },
        skills: {
            sectionTitle: "Skills",
            sectionSubtitle: "Technologies & tools I work with",
            categories: {
                frontend: "Frontend",
                backend: "Backend",
                tools: "Tools",
            },
        },
        contact: {
            sectionTitle: "Contact",
            sectionSubtitle: "Have an idea? Let's talk.",
            emailLabel: "Send Email",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
            formTitle: "Send a Message",
            formSubtitle:
                "Messages go to efeikan@outlook.com. On first setup, click the activation link in Outlook once.",
            formName: "Full name",
            formEmail: "Email",
            formMessage: "Message",
            formNamePh: "Your name",
            formEmailPh: "you@mail.com",
            formMessagePh: "What would you like to talk about?",
            formSubmit: "Send",
            formSending: "Sending…",
            formSubject: "Portfolio contact",
            formSuccess: "Message delivered. Thank you!",
            formActivation:
                "Activation email sent to efeikan@outlook.com. Click “Activate Form” in Outlook, then submit again.",
            formError: "Could not send. Check the fields and try again.",
        },
        footer: {
            rights: "All rights reserved.",
            builtWith: "Built with Next.js",
        },
        cookie: {
            title: "Cookie preference",
            description:
                "We use essential cookies to improve your experience. By continuing, you accept our cookie policy.",
            accept: "Accept",
            reject: "Reject",
        },
    },
};

interface LanguageContextType {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "tr",
    setLang: () => { },
    t: translations.tr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("tr");
    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLang = () => useContext(LanguageContext);
