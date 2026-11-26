'use client';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { SiteLink } from '@/components/site-link';
import { SERVICES } from '@/data/site';
import { useSite } from '@/components/site-provider';

export function SiteFooter() {
  const { whatsappUrl } = useSite();
  return (<>

      {/* --- ALT BİLGİ (Modern Kurumsal Footer) --- */}
      <footer className="bg-[#364975] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Marka & Adres */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo light />
              <p className="text-sm text-white/75 leading-relaxed pt-2">
                Bilimsel kanıta dayalı yaklaşımlarla çocuk, ergen ve yetişkinlerde dil, konuşma,
                ses ve akıcılık bozuklukları alanında uzman terapi desteği.
              </p>
              <div className="space-y-2 text-sm text-white/85 pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8CE0DF] shrink-0 mt-1" />
                  <span>Altayçeşme Mah. Denizer Sok. No:1/8 - Ada Ofis İş Merkezi MALTEPE</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#8CE0DF] shrink-0" />
                  <a href="tel:+905345986181" className="hover:text-white">
                    +90 (534) 598 61 81
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#8CE0DF] shrink-0" />
                  <a href="mailto:info@dktasyaayyildiz.com" className="hover:text-white">
                    info@dktasyaayyildiz.com
                  </a>
                </div>
              </div>
            </div>

            {/* Kurumsal */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#8CE0DF]">
                Kurumsal
              </h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <SiteLink page={'home'} className="hover:text-white">
                    Ana Sayfa
                  </SiteLink>
                </li>
                <li>
                  <SiteLink page={'about'} className="hover:text-white">
                    Hakkımızda
                  </SiteLink>
                </li>
                <li>
                  <SiteLink page={'services'} className="hover:text-white">
                    Hizmetlerimiz
                  </SiteLink>
                </li>
                <li>
                  <SiteLink page={'blog'} className="hover:text-white">
                    Makaleler
                  </SiteLink>
                </li>
                <li>
                  <SiteLink page={'contact'} className="hover:text-white">
                    İletişim
                  </SiteLink>
                </li>
              </ul>
            </div>

            {/* Hizmetlerimiz */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#8CE0DF]">
                Hizmetlerimiz
              </h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                {SERVICES.map((srv) => (
                  <li key={srv.id}>
                    <SiteLink
                      page={'services'} serviceId={srv.id}
                      className="hover:text-white text-left"
                    >
                      {srv.title}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Makaleler */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#8CE0DF]">
                Popüler Konular
              </h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                {[
                  'Ses Bozuklukları',
                  'Afazi Nedenleri',
                  'Geç Konuşma Terapisi',
                  'Artikülasyon Bozukluğu',
                  'Floortime Nedir?',
                  'Kekemelik Nedenleri',
                  'Prompt Tekniği Nedir?'
                ].map((topic, idx) => (
                  <li key={idx}>
                    <SiteLink page={'blog'} className="hover:text-white text-left">
                      {topic}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <div>
              © {new Date().getFullYear()} Dil ve Konuşma Merkezi Asya Ayyıldız. Tüm Hakları
              Saklıdır.
            </div>
            <div>Bu web sitesi bilgilendirme amaçlıdır; tanı ve tedavi yerine geçmez.</div>
          </div>
        </div>
      </footer>

      {/* --- SABİT WHATSAPP CTA BUTONU --- */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile İletişime Geç"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-4 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-sm hidden sm:inline">WhatsApp İletişim</span>
      </a>
</>);
}
