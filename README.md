# 13nbm Handoff Snapshot

Bu repo, Nebim ERA sitesinin mevcut çalışma durumunu yeni bir bilgisayarda veya yeni bir oturumda aynı kaliteyle sürdürebilmek için hazırlanmış continuation snapshot'tır.

Ana amaç iki şeyi birlikte korumaktır:

1. mevcut çalışan kod ve içerik düzeni
2. bu projede oluşan karar hafızası

Bu snapshot, mevcut `nebim-era-nextjs` çalışmasının devamıdır; fakat handoff ve continuity odaklı bir repo olarak ele alınmalıdır.

## Proje Özeti

Bu proje, müşteri onaylı HTML içerik ve yerleşimleri Next.js App Router içinde legacy adapter yaklaşımıyla çalıştıran statik bir Nebim ERA sitesidir.

Temel karar:

- müşteri onaylı layout ve content korunur
- içerik birebir taşınır, ezbere yeniden yazılmaz
- shared header/footer/runtime ile tüm site tutarlı hale getirilir
- ana sayfa görsel referanstır

## Mimari

En kritik yapı şu üç katmandır:

- `src/content/legacy-pages`
  - müşteri içerikleri, layout kompozisyonu ve onaylı HTML kaynakları
- `src/lib/legacySite.ts`
  - legacy HTML dosyalarını route, metadata, shared asset ve shared chrome ile bağlayan adaptör
- `src/app/[slug]`
  - legacy route resolver

İlgili destekleyici parçalar:

- `src/app/page.tsx`
  - ana sayfayı legacy kaynak üzerinden render eder
- `src/components/legacy/LegacyHtmlPage.tsx`
  - legacy wrapper
- `public/design-tokens.css`
  - ortak token seti
- `public/site-header.css`
  - shared header shell
- `public/site-footer.css`
  - shared footer
- `public/site-background.css`
  - shared hero/header-stage background davranışı
- `public/site-theme-runtime.js`
  - `theme` + `backgroundVariant` state runtime'ı
- `public/site-mobile-nav.css`
  - mobil drawer davranışı

## Route Envanteri

- `/`
- `/features`
- `/paas`
- `/paas-sss`
- `/certified`
- `/paket-1`
- `/paket-2`
- `/paket-3`
- `/paket-custom`
- `/gizlilik-politikasi`
- `/kvkk-aydinlatma`
- `/cerez-politikasi`
- `/vitrin`

## Çalıştırma

```bash
npm run dev
npm run lint
npm run build
```

Local dev server tipik olarak:

- `http://localhost:3000`
- gerekirse `http://127.0.0.1:3000`

`next.config.ts` içinde:

- `allowedDevOrigins: ['127.0.0.1', 'localhost']`
- `output: 'export'`

## Tasarım ve İçerik Kararları

Bu projede korunması gereken en önemli kararlar:

- Müşteri içerikleri ve kompozisyonu hassas.
  - metinler keyfi değiştirilmeyecek
  - section yapıları bozulmayacak
  - layout “yaklaşık” değil, mümkün olduğunca birebir korunacak
- Ana sayfa görsel referanstır.
  - iç sayfa header shell'i ana sayfaya yaklaşır
  - tersi yapılmaz; ana sayfa iç sayfalara göre bozulmaz
- Shared header/footer mantığı var.
  - legal, paket, features, paas, certified sayfaları ortak chrome kullanır
- Dark theme header shell sabit tutulur.
  - background varyantı dark header rengini kaydırmaz
- Background variant sınırsız yayılmaz.
  - ana sayfada hero alanında
  - iç sayfalarda yalnızca `header-stage` alanında görünür
  - alt içerik tekrar koyu standart yüzey akışına döner
- Mobil menü ortak drawer davranışıyla çalışır.
  - tema değiştir
  - arka plan değiştir
  - aynı mantıkla tüm legacy sayfalarda görünür

## Çalışma Tarzı ve Hassasiyetler

Bu repo üzerinde çalışırken özellikle kaçınılacak şeyler:

- ezbere UI kararı vermek
- “güzel görünür” diye ekstra glow, mavi overlay, yeni ton ailesi uydurmak
- müşteri onaylı HTML içinde içerik kompozisyonunu bozmak
- page-specific hack ile shared sistemi dağıtmak
- ana sayfayı referans olmaktan çıkarmak

Doğru yaklaşım:

- önce mevcut davranışı oku
- sonra shared sistem üzerinden düzelt
- mümkün olan her yerde tek kaynak kullan
- iç sayfalarda drift oluşturan yerel stilleri bastır ama içeriği bozma

## Şu Anki Repo Gerçeği

Bu snapshot, eski component tabanlı Next migration yapısından legacy HTML adapter modeline dönmüş durumda.

Özetle:

- eski App Router page/component ağacının büyük kısmı kaldırıldı
- yerine `src/content/legacy-pages` + adapter mimarisi geldi
- worktree büyük bir geçiş snapshot'ı içeriyor; bu normal

Bu yüzden değişiklik okurken “neden çok sayıda delete var” diye panik yapılmamalı. Bu, bilinçli mimari dönüşümün parçası.

## Açık / Aktif Dikkat Alanları

En güncel dikkat başlıkları:

- dark theme header shell kararlılığı
- `theme + backgroundVariant` state’in sayfalar arası tutarlılığı
- iç sayfalarda `header-stage` etkisinin fazla aşağı sarkmaması
- footer ve legal sayfaların ana sistemden kopmaması
- paket/fatures/legal iç sayfalarının home referansından uzaklaşmaması

## Yeni Oturum İçin Okuma Sırası

Yeni biri repo’ya geldiğinde şu sırayla bakmalı:

1. `README.md`
2. `SESSION_TRANSFER_PROMPT.md`
3. `src/lib/legacySite.ts`
4. `public/site-header.css`
5. `public/site-background.css`
6. `src/app/layout.tsx`
7. gerekli legacy HTML kaynağı

## Handoff Notu

Bu repo, yeni GitHub hedefi olarak `LabJanus/13nbm` altında saklanmak üzere hazırlanmıştır.

Kurallar:

- mevcut `origin` korunur
- yeni hedef remote adı `handoff` olmalıdır
- bu repo docs-only değil, tam çalışma snapshot'ıdır

Yeni bir makinede devam ederken ilk yapılacak şey:

```bash
npm install
npm run lint
npm run build
```

Sonra ilgili sayfayı tarayıcıda açıp mevcut davranışı görmeden hiçbir görsel karar verilmemelidir.
