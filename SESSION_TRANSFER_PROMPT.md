# SESSION TRANSFER PROMPT

Bu dosya, yeni bir Codex/LLM oturumuna doğrudan verilmek üzere hazırlanmıştır. Aşağıdaki metni yeni oturuma olduğu gibi ver.

---

Bu repo, Nebim ERA sitesinin continuation snapshot'ıdır. Bu projede ezbere tasarım kararı vermeden, mevcut onaylı düzeni koruyarak çalışman gerekiyor.

## Repo Gerçeği

- Bu proje Next.js App Router içinde çalışan bir static export yapısıdır.
- Ama klasik component-first bir Next projesi değil.
- Asıl kaynak müşteri onaylı legacy HTML dosyalarıdır.
- Bu kaynaklar `src/content/legacy-pages` altındadır.
- Route adaptörü `src/lib/legacySite.ts` içindedir.
- Route render katmanı `src/app/[slug]/page.tsx` ve `src/app/page.tsx` üzerinden çalışır.
- Wrapper `src/components/legacy/LegacyHtmlPage.tsx` içindedir.

## En Kritik Kararlar

- Müşteri içerikleri ve layout kompozisyonu hassastır.
- Metinler keyfi değiştirilmeyecek.
- Section yapıları ve sıraları bozulmayacak.
- Ana sayfa görsel referanstır.
- İç sayfalarda header/nav dili ana sayfaya bağlanır.
- Dark theme header shell sabit tutulur.
- Background variant iç sayfalarda yalnızca `header-stage` içinde görünür.
- Alt içerik tekrar standart koyu yüzey akışına döner.
- Footer ortak sistemdir.
- Legal sayfalar da ana sistemden kopmayacak.

## Kullanıcı Tercihleri

- Türkçe iletişim kur.
- Kısa ama yüksek sinyalli konuş.
- Ezbere renk, glow, ton veya yeni kompozisyon icat etme.
- Bir şey bozulduysa dürüstçe söyle.
- Önce oku, sonra değiştir.
- “yaklaşık oldu” yaklaşımı bu projede uygun değil.

## Öncelikli Dosyalar

İlk bakman gereken dosyalar:

1. `README.md`
2. `src/lib/legacySite.ts`
3. `public/site-header.css`
4. `public/site-background.css`
5. `public/site-theme-runtime.js`
6. `src/app/layout.tsx`
7. ilgili legacy HTML kaynağı

## Çalışma Kuralları

- Shared sistemi bozacak page-local hack ekleme.
- Önce mevcut selector ve runtime zincirini anla.
- Home görünümünü referans al; iç sayfaları ona hizala.
- İç sayfa sorununu çözerken ana sayfayı bozma.
- Dark theme’de header rengi background varyantından etkilenmemeli.
- Header-stage etkisi içerik boyunca aşağı taşmamalı.

## İlk 10 Dakika Checklist

```bash
npm run lint
npm run build
```

Sonra:

1. `/` aç
2. `/features` aç
3. `/paket-1` aç
4. `/cerez-politikasi` aç
5. tema ve arka plan değiştir davranışını karşılaştır

Kontrol etmen gerekenler:

- header shell sabit mi
- footer ortak mı
- background variant doğru scope'ta mı
- legal ve paket sayfaları home referansından sapmış mı

## Eğer Yeni Bir Değişiklik Yapacaksan

Önce bunu kendine sor:

1. Bu karar home referansına uyuyor mu?
2. Bu değişiklik müşteri onaylı layout'u bozuyor mu?
3. Aynı davranış shared sistemden çözülebilir mi?
4. Bu yaptığım şey yeni bir drift yaratıyor mu?

Bu sorulardan biri kötü cevap veriyorsa, önce mimariyi tekrar oku.

## Projenin Kısa Teknik Özeti

- Next.js `16.2.3`
- React `19`
- static export
- legacy HTML adapter yaklaşımı
- shared theme/background runtime
- shared header/footer/mobile drawer sistemi

## Son Not

Bu repo “temiz sıfırdan UI denemesi” değil; “müşteri hassasiyetine sadık, kontrollü modernizasyon ve continuity” reposudur.

Önce koru, sonra iyileştir.

---
