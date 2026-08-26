export type ProjectCategory =
  | "all"
  | "backend"
  | "fullstack"
  | "mobile"
  | "ai"
  | "devops";

export interface ProjectChallenge {
  titleTR: string;
  titleEN: string;
  solutionTR: string;
  solutionEN: string;
}

export interface ProjectScreenshot {
  src?: string;
  altTR: string;
  altEN: string;
}

export interface Project {
  id: number;
  slug: string;
  titleTR: string;
  titleEN: string;
  descriptionTR: string;
  descriptionEN: string;
  longDescriptionTR: string;
  longDescriptionEN: string;
  architectureTR: string;
  architectureEN: string;
  featuresTR: string[];
  featuresEN: string[];
  responsibilitiesTR: string[];
  responsibilitiesEN: string[];
  challenges: ProjectChallenge[];
  screenshots: ProjectScreenshot[];
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
    architectureTR:
      "REST API katmanı Node.js üzerinde; kimlik doğrulama, randevu, aşı ve bildirim bounded context’leri ayrı servis modülleri olarak ayrıldı. Kaynak of truth PostgreSQL, oturum ve kısa ömürlü cache Redis. Bildirimler kuyruk üzerinden asenkron işleniyor. Veteriner paneli ve pet-sahibi mobil istemcileri aynı sözleşmeyi paylaşır.",
    architectureEN:
      "REST API on Node.js, with auth, appointments, vaccines, and notifications split into bounded-context modules. PostgreSQL is the source of truth; Redis handles sessions and short-lived cache. Notifications are processed asynchronously via a queue. The vet dashboard and pet-owner mobile clients share the same contract.",
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
    responsibilitiesTR: [
      "Çok rollü auth ve yetkilendirme modelini tasarlamak",
      "Randevu / aşı domain’inin veri modelini ve API’sini kurmak",
      "Bildirim kuyruğu ve hatırlatma motorunu bağlamak",
      "Yüksek eşzamanlı istekler için sorgu ve indeks stratejisi",
    ],
    responsibilitiesEN: [
      "Design the multi-role auth and authorization model",
      "Build the appointment / vaccine domain data model and API",
      "Wire the notification queue and reminder engine",
      "Query and index strategy for high-concurrency traffic",
    ],
    challenges: [
      {
        titleTR: "Rol bazlı veri izolasyonu",
        titleEN: "Role-based data isolation",
        solutionTR:
          "Veteriner, pet sahibi ve admin aynı kaynaklara farklı kapsamlarla erişiyor. Row-level kurallar ve açık yetki kontrolleri ile sızıntı riski kapatıldı.",
        solutionEN:
          "Vets, pet owners, and admins hit the same resources with different scopes. Row-level rules and explicit permission checks closed the leak risk.",
      },
      {
        titleTR: "Hatırlatmaların kaçırılmaması",
        titleEN: "Reliable reminder delivery",
        solutionTR:
          "Zamanlanmış işler idempotent job’lar olarak kuyruğa alındı; başarısız gönderimler retry + dead-letter ile izleniyor.",
        solutionEN:
          "Scheduled work is enqueued as idempotent jobs; failed sends are tracked with retry and a dead-letter path.",
      },
    ],
    screenshots: [
      {
        altTR: "Pettag veteriner paneli — randevu takvimi (yer tutucu)",
        altEN: "Pettag veterinarian dashboard — appointment calendar (placeholder)",
      },
      {
        altTR: "Pet sahibi mobil uygulaması — aşı takip ekranı (yer tutucu)",
        altEN: "Pet-owner mobile app — vaccine tracking screen (placeholder)",
      },
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
    architectureTR:
      "Feed, mesajlaşma, profil ve eşleştirme ayrı backend context’leri; ortak kimlik katmanı JWT. MongoDB belge modeli sosyal graf ve esnek profil alanları için, Redis pub/sub ve presence için kullanıldı. WebSocket gateway mesaj fan-out’unu üstleniyor. 11 kişilik ekipte API sözleşmeleri OpenAPI ile kilitlendi.",
    architectureEN:
      "Feed, messaging, profiles, and matching live in separate backend contexts behind a shared JWT identity layer. MongoDB models the social graph and flexible profiles; Redis covers pub/sub and presence. A WebSocket gateway handles message fan-out. In an 11-person team, API contracts were locked with OpenAPI.",
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
    responsibilitiesTR: [
      "Backend ve Database Context’in tamamını sahiplenmek",
      "Feed / mesajlaşma veri modelini ve indekslerini kurmak",
      "Ekip içi API sözleşmelerini ve review sürecini yürütmek",
      "Çoklu kullanıcı trafiğinde tutarlılık ve performans dengelemek",
    ],
    responsibilitiesEN: [
      "Own the full Backend and Database Context",
      "Design feed / messaging data models and indexes",
      "Drive API contracts and the review process across the team",
      "Balance consistency and performance under multi-user traffic",
    ],
    challenges: [
      {
        titleTR: "Feed’in ölçeklenmesi",
        titleEN: "Scaling the feed",
        solutionTR:
          "Herkes-için-tek-sorgu modeli yerine fan-out-on-write + sayfalama; sıcak gönderiler Redis’te tutuldu, arşiv MongoDB’de kaldı.",
        solutionEN:
          "Replaced a single-query-for-everyone model with fan-out-on-write plus pagination; hot posts live in Redis, archive stays in MongoDB.",
      },
      {
        titleTR: "Ekip sözleşmelerinin kırılması",
        titleEN: "Breaking team contracts",
        solutionTR:
          "OpenAPI spec’i source of truth yaptık; breaking change’ler versioned endpoint ve changelog ile yönetildi.",
        solutionEN:
          "OpenAPI became the source of truth; breaking changes shipped as versioned endpoints with a changelog.",
      },
    ],
    screenshots: [
      {
        altTR: "FinderDev ana feed ekranı (yer tutucu)",
        altEN: "FinderDev main feed screen (placeholder)",
      },
      {
        altTR: "Geliştirici profil ve eşleştirme arayüzü (yer tutucu)",
        altEN: "Developer profile and matching UI (placeholder)",
      },
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
    architectureTR:
      "NestJS modülleri sipariş, stok ve ödeme bounded context’lerini ayırır. Event bus olarak RabbitMQ; durum makinesi PostgreSQL transaction’ları içinde. Ödeme sağlayıcı çağrıları idempotent key + outbox pattern ile güvence altında.",
    architectureEN:
      "NestJS modules isolate order, inventory, and payment bounded contexts. RabbitMQ is the event bus; the state machine commits inside PostgreSQL transactions. Payment-provider calls are guarded with idempotent keys and an outbox pattern.",
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
    responsibilitiesTR: [
      "Sipariş durum makinesi ve stok rezervasyonunu tasarlamak",
      "Idempotent ödeme entegrasyonlarını yazmak",
      "OpenAPI sözleşmesi ve hata kodlarını standartlaştırmak",
    ],
    responsibilitiesEN: [
      "Design the order state machine and inventory reservation",
      "Implement idempotent payment integrations",
      "Standardize the OpenAPI contract and error codes",
    ],
    challenges: [
      {
        titleTR: "Çift ödeme ve stok yarışı",
        titleEN: "Double charge and stock races",
        solutionTR:
          "Idempotency-Key header + SELECT FOR UPDATE rezervasyonu; ödeme onayı gelmeden stok kesin düşülmüyor.",
        solutionEN:
          "Idempotency-Key header plus SELECT FOR UPDATE reservation; stock is not committed until payment confirms.",
      },
    ],
    screenshots: [
      {
        altTR: "Nexus sipariş pipeline şeması (yer tutucu)",
        altEN: "Nexus order pipeline diagram (placeholder)",
      },
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
    architectureTR:
      "Socket.io gateway, Redis pub/sub ile birden fazla instance’a fan-out yapar. Mesaj kalıcılığı PostgreSQL; presence ve typing Redis TTL ile. Sticky session yok — herhangi bir node mesajı yayınlayabilir.",
    architectureEN:
      "A Socket.io gateway fans out across instances via Redis pub/sub. Message durability lives in PostgreSQL; presence and typing use Redis TTLs. No sticky sessions — any node can publish.",
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
    responsibilitiesTR: [
      "WebSocket gateway ve oda modelini kurmak",
      "Presence / typing protokolünü tasarlamak",
      "Yatay ölçek için pub/sub fan-out’u bağlamak",
    ],
    responsibilitiesEN: [
      "Build the WebSocket gateway and room model",
      "Design the presence / typing protocol",
      "Wire pub/sub fan-out for horizontal scale",
    ],
    challenges: [
      {
        titleTR: "Sticky session bağımlılığı",
        titleEN: "Sticky-session coupling",
        solutionTR:
          "Redis adapter ile node’lar birbirinden haberdar; yük dengeleyici round-robin kalabiliyor.",
        solutionEN:
          "A Redis adapter keeps nodes in sync so the load balancer can stay round-robin.",
      },
    ],
    screenshots: [
      {
        altTR: "Pulse oda sohbeti arayüzü (yer tutucu)",
        altEN: "Pulse room chat interface (placeholder)",
      },
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
    architectureTR:
      "Olaylar ClickHouse’a yazılır; Next.js dashboard widget’ları REST üzerinden aggregate sorgular çeker. Rol bazlı görünürlük API gateway’de uygulanır. Export işleri arka planda kuyruklanır.",
    architectureEN:
      "Events land in ClickHouse; the Next.js dashboard pulls aggregates over REST. Role-based visibility is enforced at the API gateway. Export jobs are queued in the background.",
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
    responsibilitiesTR: [
      "Dashboard widget API’sini ve yetki katmanını yazmak",
      "Zaman serisi sorgularını ve cache stratejisini kurmak",
      "CSV / PDF export pipeline’ını bağlamak",
    ],
    responsibilitiesEN: [
      "Build the dashboard widget API and permission layer",
      "Set up time-series queries and caching",
      "Wire the CSV / PDF export pipeline",
    ],
    challenges: [
      {
        titleTR: "Geniş tarih aralığında yavaş sorgular",
        titleEN: "Slow wide-range queries",
        solutionTR:
          "Materialized aggregate tabloları + zaman kovaları; UI’da varsayılan aralık dar tutuldu.",
        solutionEN:
          "Materialized aggregate tables plus time buckets; the UI defaults to a narrow range.",
      },
    ],
    screenshots: [
      {
        altTR: "Aurora metrik dashboard’u (yer tutucu)",
        altEN: "Aurora metrics dashboard (placeholder)",
      },
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
    architectureTR:
      "Go ile yazılmış gateway; JWT access + rotating refresh, API key scope’ları Redis’te. Rate limit token bucket. Downstream servisler sadece iç header’a güvenir. Audit log append-only.",
    architectureEN:
      "Go gateway with JWT access tokens, rotating refresh, and API-key scopes in Redis. Rate limiting is a token bucket. Downstream services trust an internal header only. Audit log is append-only.",
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
    responsibilitiesTR: [
      "Token lifecycle ve refresh rotation’ı uygulamak",
      "Rate limit ve API key scope modelini kurmak",
      "Audit trail ve oturum izlemeyi bağlamak",
    ],
    responsibilitiesEN: [
      "Implement token lifecycle and refresh rotation",
      "Build rate limiting and API-key scopes",
      "Wire audit trail and session tracking",
    ],
    challenges: [
      {
        titleTR: "Refresh token hırsızlığı",
        titleEN: "Refresh-token theft",
        solutionTR:
          "Rotation + reuse detection: çalınan token tekrar kullanılırsa aile iptal edilir.",
        solutionEN:
          "Rotation plus reuse detection: if a stolen token is replayed, the whole family is revoked.",
      },
    ],
    screenshots: [
      {
        altTR: "Shield auth akış diyagramı (yer tutucu)",
        altEN: "Shield auth flow diagram (placeholder)",
      },
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
    architectureTR:
      "React Native istemci, yerel SQLite kuyruğu ile offline yazar. Senkronizasyon last-write-wins + alan bazlı merge. Backend çakışma sürüm numarası bekler. Push Firebase üzerinden.",
    architectureEN:
      "React Native client writes offline into a local SQLite queue. Sync uses last-write-wins plus field-level merge. The backend expects a conflict version number. Push goes through Firebase.",
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
    responsibilitiesTR: [
      "Offline kuyruk ve senkron protokolünü yazmak",
      "Çakışma çözümleme kurallarını tanımlamak",
      "Harita ve push entegrasyonunu bağlamak",
    ],
    responsibilitiesEN: [
      "Write the offline queue and sync protocol",
      "Define conflict-resolution rules",
      "Integrate maps and push notifications",
    ],
    challenges: [
      {
        titleTR: "Aynı kayda çift saha güncellemesi",
        titleEN: "Two field updates to the same record",
        solutionTR:
          "Sürüm vektörü + kullanıcıya gösterilen çakışma ekranı; otomatik merge yalnızca çakışmayan alanlarda.",
        solutionEN:
          "Version vector plus a conflict screen for the user; automatic merge only on non-overlapping fields.",
      },
    ],
    screenshots: [
      {
        altTR: "Orbit saha uygulaması harita ekranı (yer tutucu)",
        altEN: "Orbit field-app map screen (placeholder)",
      },
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
    architectureTR:
      "FastAPI servisi repo’yu chunk’lar, embedding üretir, Pinecone’a yazar. Soru anında retrieval + rerank; yanıt kaynak snippet’leriyle döner. PR özeti diff’ten ayrı bir prompt zinciri.",
    architectureEN:
      "A FastAPI service chunks the repo, embeds it, and writes to Pinecone. Questions go through retrieval plus rerank; answers return with source snippets. PR summaries use a separate prompt chain over the diff.",
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
    responsibilitiesTR: [
      "Chunk / embedding pipeline’ını kurmak",
      "RAG yanıt formatını ve kaynak göstermeyi tasarlamak",
      "PR özet ve risk skor prompt’larını ayarlamak",
    ],
    responsibilitiesEN: [
      "Build the chunk / embedding pipeline",
      "Design cited RAG answers",
      "Tune PR summary and risk-score prompts",
    ],
    challenges: [
      {
        titleTR: "Halüsinasyon ve yanlış dosya referansı",
        titleEN: "Hallucinated file citations",
        solutionTR:
          "Yanıt yalnızca retrieved chunk’lardan üretilecek şekilde system prompt; citation id doğrulanmadan gösterilmiyor.",
        solutionEN:
          "The system prompt may only use retrieved chunks; citations are not shown until the id is verified.",
      },
    ],
    screenshots: [
      {
        altTR: "Helix kod soru-cevap arayüzü (yer tutucu)",
        altEN: "Helix codebase Q&A interface (placeholder)",
      },
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
    architectureTR:
      "GitHub Actions matris job’ları lint/test/scan; image GHCR’ye, Helm chart ile Kubernetes blue-green. Secret’ler environment-scoped. Rollback önceki ReplicaSet’e tek job.",
    architectureEN:
      "GitHub Actions matrix jobs cover lint/test/scan; images go to GHCR and Helm rolls out Kubernetes blue-green. Secrets are environment-scoped. Rollback is a single job to the previous ReplicaSet.",
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
    responsibilitiesTR: [
      "Pipeline stage’lerini ve kalite kapılarını tanımlamak",
      "Blue-green Helm release’ini kurmak",
      "Rollback ve secret yönetimini belgelemek",
    ],
    responsibilitiesEN: [
      "Define pipeline stages and quality gates",
      "Set up the blue-green Helm release",
      "Document rollback and secret management",
    ],
    challenges: [
      {
        titleTR: "Yarım kalan deploy’lar",
        titleEN: "Half-finished deploys",
        solutionTR:
          "Readiness probe geçmeden traffic switch yok; başarısız rollout otomatik abort.",
        solutionEN:
          "Traffic does not switch until readiness probes pass; a failed rollout aborts automatically.",
      },
    ],
    screenshots: [
      {
        altTR: "Vault CI/CD pipeline görünümü (yer tutucu)",
        altEN: "Vault CI/CD pipeline view (placeholder)",
      },
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
    architectureTR:
      "Prisma + PostgreSQL çift kayıt defteri; her transfer debit/credit satır çifti tek transaction. Idempotency key unique index. Kafka ile reconciliation event’leri. Audit satırları silinmez.",
    architectureEN:
      "Prisma + PostgreSQL double-entry ledger; each transfer writes a debit/credit pair in one transaction. Idempotency keys are a unique index. Kafka carries reconciliation events. Audit rows are never deleted.",
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
    responsibilitiesTR: [
      "Double-entry şemasını ve transfer API’sini yazmak",
      "Idempotent key ve ACID sınırlarını korumak",
      "Reconciliation job ve audit trail’i kurmak",
    ],
    responsibilitiesEN: [
      "Write the double-entry schema and transfer API",
      "Enforce idempotent keys and ACID boundaries",
      "Build reconciliation jobs and the audit trail",
    ],
    challenges: [
      {
        titleTR: "Kısmi transfer yazımı",
        titleEN: "Partial transfer writes",
        solutionTR:
          "Tek transaction, iki satır; bakiye trigger yerine application-level checksum job.",
        solutionEN:
          "One transaction, two rows; balances are checked by an application-level checksum job rather than triggers.",
      },
    ],
    screenshots: [
      {
        altTR: "Ledger hesap hareketleri ekranı (yer tutucu)",
        altEN: "Ledger account-movement screen (placeholder)",
      },
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
