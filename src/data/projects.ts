export interface Project {
  id: number;
  titleTR: string;
  titleEN: string;
  descriptionTR: string;
  descriptionEN: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    titleTR: "Portfolyo Web Sitesi",
    titleEN: "Portfolio Website",
    descriptionTR: "Next.js ve Framer Motion ile oluşturulmuş kişisel portfolyo sitem. Karanlık tema, glassmorphism tasarım ve çoklu dil desteği içerir.",
    descriptionEN: "My personal portfolio built with Next.js and Framer Motion. Features dark theme, glassmorphism design and multi-language support.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "CSS"],
    githubUrl: "https://github.com/efeikan",
    liveUrl: "https://efeikan.com",
    featured: true,
  },
  {
    id: 2,
    titleTR: "Örnek Proje 2",
    titleEN: "Sample Project 2",
    descriptionTR: "Buraya ikinci projenin açıklamasını yazabilirsin. Kullandığın teknolojiler, çözdüğün problem ve sonuçlar hakkında bilgi ver.",
    descriptionEN: "Write your second project description here. Talk about the technologies used, problem solved and results achieved.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/efeikan",
    featured: false,
  },
  {
    id: 3,
    titleTR: "Örnek Proje 3",
    titleEN: "Sample Project 3",
    descriptionTR: "Üçüncü projenin açıklaması. Bu alanı kendi projelerinle doldurmak için src/data/projects.ts dosyasını düzenle.",
    descriptionEN: "Third project description. Edit src/data/projects.ts to fill this with your own projects.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/efeikan",
    featured: false,
  },
];
