export type ProjectCategory =
  | "all"
  | "backend"
  | "fullstack"
  | "mobile"
  | "ai"
  | "devops";

export interface Project {
  id: number;
  slug: string;
  titleTR: string;
  titleEN: string;
  descriptionTR: string;
  descriptionEN: string;
  longDescriptionTR: string;
  longDescriptionEN: string;
  featuresTR: string[];
  featuresEN: string[];
  tags: string[];
  category: Exclude<ProjectCategory, "all">;
  year: string;
  roleTR: string;
  roleEN: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  accent: string;
}

export const projectCategories: {
  id: ProjectCategory;
  labelTR: string;
  labelEN: string;
}[] = [
  { id: "all", labelTR: "Tümü", labelEN: "All" },
  { id: "backend", labelTR: "Backend", labelEN: "Backend" },
  { id: "fullstack", labelTR: "Full Stack", labelEN: "Full Stack" },
  { id: "mobile", labelTR: "Mobil", labelEN: "Mobile" },
  { id: "ai", labelTR: "AI", labelEN: "AI" },
  { id: "devops", labelTR: "DevOps", labelEN: "DevOps" },
];

export const projects: Project[] = [
  {
    id: 1,
    slug: "pettag",
    titleTR: "Pettag",
    titleEN: "Pettag",
    descriptionTR:
      "Veteriner hekimler ile evcil hayvan sahiplerini buluşturan kapsamlı dijital sağlık ekosistemi.",
    descriptionEN:
      "A comprehensive digital health ecosystem connecting veterinarians and pet owners.",
    longDescriptionTR:
      "Pettag, hayvan sağlığı ve takip süreçlerini dijitalleştiren geniş ölçekli bir platformdur. Randevu yönetimi, aşı takibi, veteriner paneli ve pet sahibi mobil deneyimini tek mimari altında birleştirir. Yüksek eşzamanlı istekleri kaldıracak şekilde tasarlanmış API katmanı ve optimize edilmiş veri modeli ile gerçek dünya trafiğine hazırdır.",
    longDescriptionEN:
      "Pettag is a large-scale platform that digitalizes animal health and tracking workflows. It unifies appointment management, vaccine tracking, veterinarian dashboards, and pet-owner mobile experiences under one architecture. The API layer and optimized data model are built for real-world concurrent traffic.",
    featuresTR: [
      "Çok rollü auth (veteriner / pet sahibi / admin)",
      "Randevu & aşı hatırlatma motoru",
      "Gerçek zamanlı bildirim altyapısı",
      "Ölçeklenebilir PostgreSQL şema tasarımı",
    ],
    featuresEN: [
      "Multi-role auth (vet / pet owner / admin)",
      "Appointment & vaccine reminder engine",
      "Realtime notification infrastructure",
      "Scalable PostgreSQL schema design",
    ],
    tags: ["Node.js", "PostgreSQL", "REST API", "Redis"],
    category: "fullstack",
    year: "2024",
    roleTR: "Backend & Sistem Mimarisi",
    roleEN: "Backend & System Architecture",
    githubUrl: "https://github.com/efeikan",
    featured: true,
    accent: "#00d4ff",
  },
  {
    id: 2,
    slug: "finderdev",
    titleTR: "FinderDev",
    titleEN: "FinderDev",
    descriptionTR:
      "Yazılımcılar için sosyal ağ — 11 kişilik ekipte Backend ve Database Context’in tamamını üstlendim.",
    descriptionEN:
      "A social network for developers — owned the full Backend and Database Context in an 11-person team.",
    longDescriptionTR:
      "FinderDev, yazılımcıların proje, iş ve topluluk buluşmalarını tek platformda toplayan bir sosyal ağdır. Feed, mesajlaşma, profil ve eşleştirme servisleri mikroservis benzeri bir backend yapısıyla yönetilir. Çoklu kullanıcı trafiğinde tutarlılık ve performans odaklı veri tabanı mimarisi kuruldu.",
    longDescriptionEN:
      "FinderDev is a social network where developers discover projects, jobs, and communities. Feed, messaging, profiles, and matching services run on a microservice-style backend. The database architecture prioritizes consistency and performance under multi-user traffic.",
    featuresTR: [
      "Sosyal feed & etkileşim servisleri",
      "Mesajlaşma ve bildirim kuyrukları",
      "Profil / skill eşleştirme algoritması",
      "Ekip koordinasyonu ve API sözleşmeleri",
    ],
    featuresEN: [
      "Social feed & engagement services",
      "Messaging and notification queues",
      "Profile / skill matching algorithm",
      "Team coordination and API contracts",
    ],
    tags: ["Node.js", "MongoDB", "WebSocket", "Redis"],
    category: "backend",
    year: "2024",
    roleTR: "Lead Backend Developer",
    roleEN: "Lead Backend Developer",
    githubUrl: "https://github.com/efeikan",
    featured: true,
    accent: "#7b61ff",
  },
  {
    id: 3,
    slug: "nexus-commerce-api",
    titleTR: "Nexus Commerce API",
    titleEN: "Nexus Commerce API",
    descriptionTR:
      "Yüksek trafikli e-ticaret için sipariş, stok ve ödeme orkestrasyonunu yöneten kurumsal backend.",
    descriptionEN:
      "Enterprise backend orchestrating orders, inventory, and payments for high-traffic commerce.",
    longDescriptionTR:
      "Nexus, sepetten ödemeye kadar tüm e-ticaret akışını event-driven bir mimariyle yönetir. Stok rezervasyonu, idempotent ödeme işlemleri ve sipariş durum makinesi ile güvenilir bir ticaret omurgası sunar. Horizontal scaling ve cache stratejileriyle pik trafikte dayanıklılık hedeflenir.",
    longDescriptionEN:
      "Nexus manages the full commerce flow from cart to payment with an event-driven architecture. Inventory reservation, idempotent payments, and an order state machine form a reliable commerce backbone. Horizontal scaling and caching keep the system resilient during peak traffic.",
    featuresTR: [
      "Event-driven sipariş pipeline",
      "Idempotent ödeme entegrasyonları",
      "Stok rezervasyon & concurrency kontrolü",
      "OpenAPI ile dokümante edilmiş API",
    ],
    featuresEN: [
      "Event-driven order pipeline",
      "Idempotent payment integrations",
      "Inventory reservation & concurrency control",
      "OpenAPI-documented endpoints",
    ],
    tags: ["NestJS", "PostgreSQL", "RabbitMQ", "Redis"],
    category: "backend",
    year: "2025",
    roleTR: "Backend Engineer",
    roleEN: "Backend Engineer",
    githubUrl: "https://github.com/efeikan",
    featured: true,
    accent: "#22d3ee",
  },
  {
    id: 4,
    slug: "pulse-realtime-chat",
    titleTR: "Pulse Realtime Chat",
    titleEN: "Pulse Realtime Chat",
    descriptionTR:
      "WebSocket tabanlı, odalı sohbet ve typing indicator destekli düşük gecikmeli mesajlaşma sistemi.",
    descriptionEN:
      "Low-latency room-based messaging with WebSockets and typing indicators.",
    longDescriptionTR:
      "Pulse, çok kanallı gerçek zamanlı sohbet altyapısıdır. Presence, typing status ve mesaj geçmişi Redis + PostgreSQL kombinasyonuyla yönetilir. Horizontal scale için sticky session yerine pub/sub fan-out modeli kullanılır.",
    longDescriptionEN:
      "Pulse is a multi-channel realtime chat backbone. Presence, typing status, and message history are managed with Redis + PostgreSQL. A pub/sub fan-out model replaces sticky sessions for horizontal scale.",
    featuresTR: [
      "Oda / DM mesajlaşma",
      "Presence & typing indicators",
      "Mesaj geçmişi ve arama",
      "Pub/Sub ile scale-out",
    ],
    featuresEN: [
      "Room / DM messaging",
      "Presence & typing indicators",
      "Message history and search",
      "Scale-out via Pub/Sub",
    ],
    tags: ["Socket.io", "Node.js", "Redis", "PostgreSQL"],
    category: "backend",
    year: "2025",
    roleTR: "Backend Developer",
    roleEN: "Backend Developer",
    githubUrl: "https://github.com/efeikan",
    accent: "#34d399",
  },
  {
    id: 5,
    slug: "aurora-analytics",
    titleTR: "Aurora Analytics",
    titleEN: "Aurora Analytics",
    descriptionTR:
      "Ürün metriklerini gerçek zamanlı görselleştiren, özelleştirilebilir dashboard ve raporlama platformu.",
    descriptionEN:
      "Realtime product metrics platform with customizable dashboards and reporting.",
    longDescriptionTR:
      "Aurora, olay akışlarını toplayıp aggregate ederek yönetim panellerine sunar. Filtrelenebilir widget’lar, export ve rol bazlı erişim ile ekiplerin karar alma hızını artırır. Frontend Next.js, veri katmanı ise zaman serisi odaklı sorgularla güçlendirilmiştir.",
    longDescriptionEN:
      "Aurora ingests and aggregates event streams for management dashboards. Filterable widgets, exports, and role-based access speed up decision-making. The frontend is Next.js; the data layer is tuned for time-series queries.",
    featuresTR: [
      "Gerçek zamanlı metrik widget’ları",
      "Rol bazlı dashboard erişimi",
      "CSV / PDF export",
      "Zaman aralığı ve segment filtreleri",
    ],
    featuresEN: [
      "Realtime metric widgets",
      "Role-based dashboard access",
      "CSV / PDF export",
      "Time-range and segment filters",
    ],
    tags: ["Next.js", "TypeScript", "ClickHouse", "Chart.js"],
    category: "fullstack",
    year: "2025",
    roleTR: "Full Stack Developer",
    roleEN: "Full Stack Developer",
    githubUrl: "https://github.com/efeikan",
    liveUrl: "https://efeikan.com",
    accent: "#a78bfa",
  },
  {
    id: 6,
    slug: "shield-auth-gateway",
    titleTR: "Shield Auth Gateway",
    titleEN: "Shield Auth Gateway",
    descriptionTR:
      "OAuth2 / JWT, rate limit ve API key yönetimi sunan merkezi kimlik doğrulama geçidi.",
    descriptionEN:
      "Central auth gateway with OAuth2 / JWT, rate limiting, and API key management.",
    longDescriptionTR:
      "Shield, mikroservisler için tek giriş noktası sağlayan bir auth gateway’dir. Token lifecycle, refresh rotation, rate limiting ve audit log ile güvenlik standartlarını merkezileştirir. Gateway katmanı diğer servislerin auth karmaşıklığını sıfırlar.",
    longDescriptionEN:
      "Shield is an auth gateway that acts as a single entry point for microservices. Token lifecycle, refresh rotation, rate limiting, and audit logs centralize security standards and remove auth complexity from other services.",
    featuresTR: [
      "OAuth2 + JWT token lifecycle",
      "API key & scope yönetimi",
      "Rate limiting & abuse koruması",
      "Audit log ve oturum izleme",
    ],
    featuresEN: [
      "OAuth2 + JWT token lifecycle",
      "API key & scope management",
      "Rate limiting & abuse protection",
      "Audit logs and session tracking",
    ],
    tags: ["Go", "JWT", "Redis", "Kong"],
    category: "backend",
    year: "2025",
    roleTR: "Backend / Security",
    roleEN: "Backend / Security",
    githubUrl: "https://github.com/efeikan",
    accent: "#f472b6",
  },
  {
    id: 7,
    slug: "orbit-mobile-companion",
    titleTR: "Orbit Mobile Companion",
    titleEN: "Orbit Mobile Companion",
    descriptionTR:
      "React Native ile geliştirilmiş, offline-first senkronizasyonlu saha operasyon mobil uygulaması.",
    descriptionEN:
      "React Native field-ops app with offline-first synchronization.",
    longDescriptionTR:
      "Orbit, bağlantısız ortamlarda çalışan ekipler için tasarlandı. Yerel SQLite kuyruğu ile işlemleri saklar, bağlantı gelince çakışma çözümlemeli senkronizasyon yapar. Push bildirimleri ve harita entegrasyonu ile saha verimliliğini artırır.",
    longDescriptionEN:
      "Orbit is built for teams working offline. A local SQLite queue stores operations and syncs with conflict resolution when connectivity returns. Push notifications and maps boost field productivity.",
    featuresTR: [
      "Offline-first veri kuyruğu",
      "Çakışma çözümlemeli sync",
      "Push bildirimleri",
      "Harita & konum takibi",
    ],
    featuresEN: [
      "Offline-first data queue",
      "Conflict-aware sync",
      "Push notifications",
      "Maps & location tracking",
    ],
    tags: ["React Native", "SQLite", "TypeScript", "Firebase"],
    category: "mobile",
    year: "2024",
    roleTR: "Mobile Developer",
    roleEN: "Mobile Developer",
    githubUrl: "https://github.com/efeikan",
    accent: "#38bdf8",
  },
  {
    id: 8,
    slug: "helix-ai-assistant",
    titleTR: "Helix AI Assistant",
    titleEN: "Helix AI Assistant",
    descriptionTR:
      "Kod tabanı bağlamlı soru-cevap ve PR özeti üreten RAG destekli geliştirici asistanı.",
    descriptionEN:
      "RAG-powered developer assistant for codebase Q&A and PR summaries.",
    longDescriptionTR:
      "Helix, repository’yi chunk’layıp vektör veritabanına indexler; geliştiricinin sorularına kaynak göstererek yanıt verir. PR diff’lerinden otomatik özet ve risk skorları üretir. Prompt pipeline’ı ve embedding stratejisi latency / kalite dengesi için ayarlanmıştır.",
    longDescriptionEN:
      "Helix chunks and indexes a repository into a vector store, answering developer questions with citations. It generates PR summaries and risk scores from diffs. The prompt pipeline and embeddings are tuned for latency/quality balance.",
    featuresTR: [
      "RAG ile kaynaklı yanıtlar",
      "PR özet & risk skoru",
      "Embedding pipeline",
      "Repo bazlı izolasyon",
    ],
    featuresEN: [
      "Cited answers via RAG",
      "PR summary & risk score",
      "Embedding pipeline",
      "Repo-level isolation",
    ],
    tags: ["Python", "FastAPI", "OpenAI", "Pinecone"],
    category: "ai",
    year: "2025",
    roleTR: "AI / Backend Engineer",
    roleEN: "AI / Backend Engineer",
    githubUrl: "https://github.com/efeikan",
    featured: true,
    accent: "#c084fc",
  },
  {
    id: 9,
    slug: "vault-pipeline",
    titleTR: "Vault CI/CD Pipeline",
    titleEN: "Vault CI/CD Pipeline",
    descriptionTR:
      "GitHub Actions, Docker ve Kubernetes ile otomatik test, build ve blue-green deploy hattı.",
    descriptionEN:
      "Automated test, build, and blue-green deploy pipeline with GitHub Actions, Docker, and Kubernetes.",
    longDescriptionTR:
      "Vault, commit’ten production’a kadar olan süreci standardize eder. Lint, test, image build, güvenlik taraması ve blue-green rollout tek pipeline’da birleşir. Rollback ve environment secret yönetimi ile güvenli dağıtım sağlar.",
    longDescriptionEN:
      "Vault standardizes the path from commit to production. Lint, tests, image build, security scans, and blue-green rollout live in one pipeline. Rollback and secret management keep deploys safe.",
    featuresTR: [
      "Otomatik test & lint gate’leri",
      "Container image build & scan",
      "Blue-green Kubernetes deploy",
      "Tek tık rollback",
    ],
    featuresEN: [
      "Automated test & lint gates",
      "Container image build & scan",
      "Blue-green Kubernetes deploy",
      "One-click rollback",
    ],
    tags: ["GitHub Actions", "Docker", "Kubernetes", "Helm"],
    category: "devops",
    year: "2025",
    roleTR: "DevOps Engineer",
    roleEN: "DevOps Engineer",
    githubUrl: "https://github.com/efeikan",
    accent: "#fb923c",
  },
  {
    id: 10,
    slug: "ledger-fintech-core",
    titleTR: "Ledger Fintech Core",
    titleEN: "Ledger Fintech Core",
    descriptionTR:
      "Çift kayıtlı muhasebe modeli ve idempotent transfer API’leriyle finansal işlem çekirdeği.",
    descriptionEN:
      "Financial transaction core with double-entry ledger and idempotent transfer APIs.",
    longDescriptionTR:
      "Ledger, para hareketlerini çift kayıt (double-entry) prensibiyle kaydeder. Transfer işlemleri idempotent key’ler ve ACID transaction’larla güvence altındadır. Reconciliation job’ları ve audit trail ile finansal doğruluk korunur.",
    longDescriptionEN:
      "Ledger records money movement with a double-entry model. Transfers are protected by idempotent keys and ACID transactions. Reconciliation jobs and an audit trail preserve financial correctness.",
    featuresTR: [
      "Double-entry ledger modeli",
      "Idempotent transfer API",
      "Reconciliation job’ları",
      "Tam audit trail",
    ],
    featuresEN: [
      "Double-entry ledger model",
      "Idempotent transfer API",
      "Reconciliation jobs",
      "Full audit trail",
    ],
    tags: ["Node.js", "PostgreSQL", "Prisma", "Kafka"],
    category: "backend",
    year: "2025",
    roleTR: "Backend Engineer",
    roleEN: "Backend Engineer",
    githubUrl: "https://github.com/efeikan",
    featured: true,
    accent: "#2dd4bf",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return projects.slice(0, limit);
  return projects
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === current.category ? 1 : 0;
      const bScore = b.category === current.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}
