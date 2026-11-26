'use client';
import { CheckCircle2, MessageCircle, ChevronRight } from 'lucide-react';
import { SiteLink } from '@/components/site-link';
import { SERVICES } from '@/data/site';
import { useSite } from '@/components/site-provider';

export function ServicesPage() {
  const { selectedServiceId, whatsappUrl } = useSite();
  return (<>
          <div className="pb-20">
            <section className="bg-gradient-to-r from-[#F4F8FB] to-[#EDF7F7] py-14 border-b border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <SiteLink page={'home'} className="hover:text-[#4E6599]">
                    Ana Sayfa
                  </SiteLink>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#4E6599] font-semibold">Hizmetlerimiz</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Dil ve Konuşma Terapisi Hizmetlerimiz
                </h1>
                <p className="text-slate-600 mt-2 max-w-2xl">
                  Her yaş grubuna özel, bilimsel temelli değerlendirme ve terapi programlarımızı
                  detaylı inceleyin.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Sol Hizmet Seçim Menüsü */}
                <div className="lg:col-span-4 space-y-2">
                  {SERVICES.map((srv) => {
                    const Icon = srv.icon;
                    const isSelected = srv.id === selectedServiceId;
                    return (
                      <SiteLink
                        key={srv.id}
                        page={'services'} serviceId={srv.id}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#4E6599] text-white border-[#4E6599] shadow-md'
                            : 'bg-white text-slate-700 border-slate-200/80 hover:border-[#48B2B0]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-xl ${
                              isSelected ? 'bg-white/15 text-[#8CE0DF]' : 'bg-slate-100 text-[#4E6599]'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-sm">{srv.title}</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 ${
                            isSelected ? 'text-white' : 'text-slate-400'
                          }`}
                        />
                      </SiteLink>
                    );
                  })}
                </div>

                {/* Sağ Seçili Hizmet Detay Kartı */}
                <div className="lg:col-span-8">
                  {SERVICES.filter((s) => s.id === selectedServiceId).map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.id}
                        className="bg-white rounded-3xl p-5 sm:p-8 sm:p-10 border border-slate-100 shadow-sm space-y-6"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-4 rounded-2xl border ${service.color}`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#48B2B0]">
                              Uzmanlık Alanı
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-slate-600 text-base leading-relaxed">
                          {service.shortDesc}
                        </p>

                        <div className="bg-[#F4F8FB] rounded-2xl p-5 border border-slate-100">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Hedef Grup
                          </div>
                          <div className="text-sm font-semibold text-slate-800">
                            {service.audience}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-4">
                            Terapi Sürecinde Neler Yapıyoruz?
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-3.5">
                            {service.details.map((detail, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                              >
                                <CheckCircle2 className="w-5 h-5 text-[#48B2B0] shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-sm text-slate-600">
                            Bu alanla ilgili ön değerlendirme randevusu oluşturmak için:
                          </div>
                          <div className="flex gap-3 w-full sm:w-auto">
                            <SiteLink
                              page={'contact'}
                              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-[#4E6599] hover:bg-[#3E5384] text-white font-semibold text-sm transition-colors"
                            >
                              Randevu Al
                            </SiteLink>
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 font-semibold text-sm flex items-center justify-center gap-2"
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span>WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </>);
}
