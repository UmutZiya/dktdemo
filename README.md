# Asya Ayyıldız Dil ve Konuşma Merkezi

Gemini dışa aktarımından Next.js App Router, React, TypeScript ve Tailwind CSS ile düzenlenmiştir. Tasarım ve Türkçe içerikler korunmuştur. Tüm sayfalar derleme sırasında statik üretilir; veritabanı, API rotası veya sunucuda form işleme yoktur.

## Yerel kullanım

Node.js 22 ve npm gerekir.

```sh
npm ci
npm run dev
```

http://localhost:3000 adresini açın. Üretim kontrolü:

```sh
npm run check
npm start
```

Üretim sunucusu çalışırken başka bir terminalde:

```sh
node scripts/verify-production.mjs
```

Bu kontrol statik rotaları, sayfa başlıklarını, h1 başlıklarını, alan etiketlerini, dahili bağlantıları, CSS/JS dosyalarını ve 404 yanıtını denetler.

## Klasörler

```text
src/
  app/                 Next.js rotaları, metadata, genel stiller ve 404
  components/
    layout/            Ortak üst menü ve alt bilgi
    pages/             Ana sayfa, hakkımızda, hizmetler, makaleler, iletişim
    site-provider.tsx  Menü, SSS ve WhatsApp form etkileşimleri
    site-link.tsx      Next.js bağlantıları
    reveal.tsx         Hareket tercihlerine duyarlı görünüm animasyonu
  data/site.ts         Hizmetler, eğitimler, makaleler, yorumlar ve SSS
  lib/routes.ts        Sayfa adresleri
original/              Yüklenen dosyanın değiştirilmeyen kopyası
```

Sayfa adresleri `/`, `/hakkimizda/`, `/hizmetler/`, `/hizmetler/[slug]/`, `/makaleler/`, `/makaleler/[id]/` ve `/iletisim/` şeklindedir. Doğrudan bağlantı, yenileme ve tarayıcı geri/ileri gezinmesi desteklenir.

## GitHub üzerinden Vercel

1. Bu klasörün içeriğini GitHub deponuzun köküne ekleyin. `package.json`, `package-lock.json`, `src`, yapılandırmalar ve `.github` dahil olmalıdır. `.gitignore` bağımlılık ve derleme klasörlerini dışarıda tutar.
2. Vercel → Add New → Project ile GitHub deponuzu içe aktarın.
3. Framework Preset: **Next.js**; Root Directory: **./**; Node.js: **22.x**.
4. Build Command: **npm run build**; Install Command: **npm ci**. `vercel.json` bunları tanımlar.
5. Output Directory ayarını Next.js varsayılanında bırakın (**.next**). `out`, `dist` veya `public` seçmeyin.
6. Ortam değişkeni gerekmez. Deploy ile yayınlayın; ardından Vercel adresinde menüleri, derin bağlantıda sayfa yenilemeyi ve WhatsApp akışını kontrol edin.

GitHub Actions her push ve pull request için temiz kurulum, TypeScript kontrolü ve üretim derlemesi yapar. Vercel GitHub bağlantısı kurulduktan sonra izlenen dala gönderilen commit’leri otomatik yayınlar.

Resmî referanslar: [Vercel build ayarları](https://vercel.com/docs/builds/configure-a-build), [Git entegrasyonu](https://vercel.com/docs/git).

## Form ve içerik

Formlar veriyi kaydetmez veya kendiliğinden mesaj göndermez. Ad, telefon ve isteğe bağlı diğer bilgilerle WhatsApp mesajı hazırlanır; ziyaretçi WhatsApp’ta Gönder’e basarak iletir. Açılır pencere engellenirse sonuç alanındaki tekrar açma bağlantısı kullanılabilir. Form bilgileri URL’de veya tarayıcı depolamasında saklanmaz; WhatsApp bağlantısındaki mesaj parametresine yalnızca gönderim düğmesine basıldığında eklenir.

İletişim telefonu, e-posta, adres, çalışma saatleri, uzmanlık bilgileri ve danışan yorumları yüklenen içerikten alınmıştır. Genel Instagram ana sayfasına giden örnek bağlantı e-posta bağlantısıyla değiştirilmiştir; gerçek profil URL’si sağlandığında eklenebilir. Google Haritalar ve WhatsApp harici servislerdir.

Mobil düzen: küçük ekranlarda tek sütun, kaydırılabilir mobil menü, 44 px menü dokunma alanları, mobilde 16 px form alanları, görünür klavye odağı ve azaltılmış hareket desteği. Gerçek cihaz ve tüm tarayıcı kombinasyonlarında mutlak kusursuzluk garantisi verilmez.
