export interface Testimonial {
  id: number;
  name: string;
  roleTR: string;
  roleEN: string;
  company: string;
  quoteTR: string;
  quoteEN: string;
  photoSrc?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayşe Demir",
    roleTR: "Ürün Yöneticisi",
    roleEN: "Product Manager",
    company: "Pettag",
    quoteTR:
      "Efe, karmaşık backend ihtiyaçlarını sade bir mimariye indirdi. Teslim hızı ve iletişim kalitesi ekibi gerçekten rahatlattı.",
    quoteEN:
      "Efe turned complex backend needs into a clean architecture. His delivery speed and communication made the whole team more confident.",
  },
  {
    id: 2,
    name: "Mert Yılmaz",
    roleTR: "Teknik Lider",
    roleEN: "Tech Lead",
    company: "FinderDev",
    quoteTR:
      "Veritabanı tasarımı ve API sözleşmelerinde net, savunulabilir kararlar aldı. 11 kişilik ekipte backend tarafı onun omuzlarındaydı.",
    quoteEN:
      "He made clear, defensible calls on database design and API contracts. In an 11-person team, the backend sat firmly on his shoulders.",
  },
  {
    id: 3,
    name: "Elif Kaya",
    roleTR: "Kurucu",
    roleEN: "Founder",
    company: "Studio North",
    quoteTR:
      "Hem teknik derinlik hem de ürün bakışı var. Placeholder referans — gerçek alıntıyla değiştirilecek.",
    quoteEN:
      "He brings both technical depth and product sense. Placeholder reference — to be replaced with a real quote.",
  },
];
