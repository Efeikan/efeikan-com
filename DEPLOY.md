# Cloudflare Workers / Pages (GitHub bağlama)

## 1) GitHub
Repo: efeikan-com (veya kendi adın)
Branch: main

## 2) Cloudflare Dashboard
Workers & Pages → Create → Import a repository → GitHub repo seç

### Build ayarları
- Framework preset: Next.js (OpenNext) / yoksa None
- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Node version: `20` veya `22`

### Environment variables (opsiyonel)
- `WEB3FORMS_ACCESS_KEY` = (iletişim formu için)

## 3) Domain (efeikan.com)
Workers & Pages → efeikan-com → Custom domains → Add
`efeikan.com` ve `www.efeikan.com` ekle.

DNS Cloudflare'deyse otomatik kaydolur.
DNS dışarıdaysa nameserver'ları Cloudflare'e taşı veya CNAME/Worker custom domain kullan.

## 4) Alternatif: CLI ile deploy
```bash
npx wrangler login
npm run deploy
```
