# Canlıya alma — GitHub + Cloudflare

## Şu an canlı
Worker URL: https://efeikan-com.efe-ikan2005.workers.dev

## Domain (efeikan.com) bağlama
`efeikan.com` üzerinde mevcut A/CNAME kayıtları Worker custom domain ile çakışıyor.

### Cloudflare Dashboard adımları
1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **efeikan-com**
2. **Settings** → **Domains & Routes** → **Add** → **Custom Domain**
3. Önce DNS’te `efeikan.com` / `www` için eski **A** ve **CNAME** kayıtlarını sil
4. Sonra custom domain olarak `efeikan.com` ve `www.efeikan.com` ekle

Domain Cloudflare’de değilse: Domain → Add site → nameserver’ları Cloudflare’e taşı, sonra yukarıdaki adımlar.

## GitHub’a bağlama (otomatik deploy)
1. GitHub’da boş repo oluştur: `efeikan-com`
2. Terminalde:

```bash
cd ~/Desktop/efeikan-com-master
git remote add origin https://github.com/KULLANICI_ADIN/efeikan-com.git
git push -u origin main
```

3. Cloudflare → Workers & Pages → efeikan-com → Settings → Build  
   veya **Create application** → **Import repository** → GitHub repo seç

### Build ayarları
- **Build command:** `npx opennextjs-cloudflare build`
- **Deploy command:** `npx wrangler deploy`
- **Root:** `/`
- **Node:** `22`

## Yerel yeniden deploy
```bash
npx wrangler login
npm run deploy
```
