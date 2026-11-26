'use client';
import { Phone, Mail, MapPin, Clock, ChevronDown, Calendar, Menu, X } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { SiteLink } from '@/components/site-link';
import { SERVICES } from '@/data/site';
import { useSite } from '@/components/site-provider';

export function SiteHeader() {
  const { activePage, mobileMenuOpen, setMobileMenuOpen, servicesDropdownOpen, setServicesDropdownOpen, scrolled } = useSite();
  return (<>{/* --- ÜST İLETİŞİM ŞERİDİ (Top Bar) --- */}
      <div className="bg-[#3E5384] text-white/90 text-xs py-2.5 px-4 hidden xl:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="https://maps.google.com/?q=Altayçeşme+mah.+Denizer+sok.+No:1/8+Ada+Ofis+İş+Merkezi+Maltepe+İstanbul"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-teal-200 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#7CE0DF]" />
              <span>Altayçeşme Mah. Denizer Sok. No:1/8 Ada Ofis İş Merkezi, Maltepe / İstanbul</span>
            </a>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#7CE0DF]" />
              <span>Pzt - Cmt: 09:00 - 19:00</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+905345986181"
              className="flex items-center gap-1.5 font-medium hover:text-teal-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7CE0DF]" />
              <span>+90 (534) 598 61 81</span>
            </a>
            <a
              href="mailto:info@dktasyaayyildiz.com"
              className="flex items-center gap-1.5 hover:text-teal-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#7CE0DF]" />
              <span>info@dktasyaayyildiz.com</span>
            </a>
            <a
              href="mailto:info@dktasyaayyildiz.com"
              target="_blank"
              rel="noreferrer"
              aria-label="E-posta gönder"
              className="p-1 rounded-full bg-white/10 hover:bg-[#48B2B0] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* --- ANA NAVİGASYON (Sticky Header) --- */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
            : 'bg-white py-4 border-b border-slate-100/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <SiteLink
            page={'home'}
            className="text-left group"
          >
            <BrandLogo />
          </SiteLink>

          {/* Masaüstü Menü */}
          <nav className="hidden xl:flex items-center gap-1">
            {[
              { id: 'home', label: 'Ana Sayfa' },
              { id: 'about', label: 'Hakkımızda' }
            ].map((item) => (
              <SiteLink
                key={item.id}
                page={item.id}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activePage === item.id
                    ? 'text-[#4E6599] bg-[#4E6599]/8 font-semibold'
                    : 'text-slate-600 hover:text-[#4E6599] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </SiteLink>
            ))}

            {/* Hizmetlerimiz Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              onFocus={() => setServicesDropdownOpen(true)}
              onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesDropdownOpen(false); }}
            >
              <SiteLink
                page={'services'}
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                  activePage === 'services'
                    ? 'text-[#4E6599] bg-[#4E6599]/8 font-semibold'
                    : 'text-slate-600 hover:text-[#4E6599] hover:bg-slate-50'
                }`}
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#48B2B0]' : ''
                  }`}
                />
              </SiteLink>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                    {SERVICES.map((srv) => {
                      const Icon = srv.icon;
                      return (
                        <SiteLink
                          key={srv.id}
                          page={'services'} serviceId={srv.id}
                          className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-3 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-[#48B2B0]/10 text-[#48B2B0] group-hover:bg-[#48B2B0] group-hover:text-white transition-colors mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-[#4E6599]">
                              {srv.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {srv.audience}
                            </div>
                          </div>
                        </SiteLink>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {[
              { id: 'blog', label: 'Makaleler & Rehber' },
              { id: 'contact', label: 'İletişim' }
            ].map((item) => (
              <SiteLink
                key={item.id}
                page={item.id}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activePage === item.id
                    ? 'text-[#4E6599] bg-[#4E6599]/8 font-semibold'
                    : 'text-slate-600 hover:text-[#4E6599] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </SiteLink>
            ))}
          </nav>

          {/* Sağ CTA Butonları */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="tel:+905345986181"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-[#4E6599] hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#48B2B0]" />
              <span>0534 598 61 81</span>
            </a>
            <SiteLink
              page={'contact'}
              className="flex items-center gap-2 bg-[#4E6599] hover:bg-[#3E5384] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4 text-[#8CE0DF]" />
              <span>Randevu Oluştur</span>
            </SiteLink>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation"
            className="xl:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobil Açılır Menü */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain xl:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <SiteLink
              page={'home'}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium ${
                activePage === 'home' ? 'bg-[#4E6599]/10 text-[#4E6599]' : 'text-slate-700'
              }`}
            >
              Ana Sayfa
            </SiteLink>
            <SiteLink
              page={'about'}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium ${
                activePage === 'about' ? 'bg-[#4E6599]/10 text-[#4E6599]' : 'text-slate-700'
              }`}
            >
              Hakkımızda
            </SiteLink>
            <div className="px-4 py-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Hizmetlerimiz
              </div>
              <div className="space-y-1 pl-2 border-l-2 border-[#48B2B0]/40">
                {SERVICES.map((srv) => (
                  <SiteLink
                    key={srv.id}
                    page={'services'} serviceId={srv.id}
                    className="block w-full text-left py-2 px-3 rounded-lg text-sm text-slate-600 hover:text-[#4E6599] hover:bg-slate-50"
                  >
                    {srv.title}
                  </SiteLink>
                ))}
              </div>
            </div>
            <SiteLink
              page={'blog'}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium ${
                activePage === 'blog' ? 'bg-[#4E6599]/10 text-[#4E6599]' : 'text-slate-700'
              }`}
            >
              Makaleler & Rehber
            </SiteLink>
            <SiteLink
              page={'contact'}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium ${
                activePage === 'contact' ? 'bg-[#4E6599]/10 text-[#4E6599]' : 'text-slate-700'
              }`}
            >
              İletişim
            </SiteLink>

            <div className="pt-3 grid grid-cols-2 gap-3">
              <a
                href="tel:+905345986181"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-800 font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-[#4E6599]" />
                <span>Hemen Ara</span>
              </a>
              <SiteLink
                page={'contact'}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4E6599] text-white font-semibold text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Randevu Al</span>
              </SiteLink>
            </div>
          </div>
        )}
      </header>

      
      </>);
}
