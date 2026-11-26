'use client';
import { Award, GraduationCap, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SiteLink } from '@/components/site-link';
import { SEMINARS } from '@/data/site';

export function AboutPage() {
  return (<>
          <div className="pb-20">
            {/* Sayfa Başlığı */}
            <section className="bg-gradient-to-r from-[#F4F8FB] to-[#EDF7F7] py-14 border-b border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <SiteLink page={'home'} className="hover:text-[#4E6599]">
                    Ana Sayfa
                  </SiteLink>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#4E6599] font-semibold">Hakkımızda</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Uzm. Dkt. Asya Ayyıldız Kimdir?
                </h1>
                <p className="text-slate-600 mt-2 max-w-2xl">
                  Akademik geçmişimiz, klinik staj deneyimlerimiz ve uluslararası terapi
                  sertifikalarımız.
                </p>
              </div>
            </section>

            {/* Biyografi & Klinik Deneyim */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <Reveal direction="left" animate>
                    <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm space-y-6">
                      <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#4E6599]/10 to-[#64C4C3]/20 flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center text-3xl font-bold text-[#4E6599] mb-4">
                          AA
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">Uzm. Dkt. Asya Ayyıldız</h2>
                        <p className="text-sm text-[#48B2B0] font-semibold mt-1">
                          Dil ve Konuşma Terapisti
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="w-5 h-5 text-[#4E6599] shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-slate-900">Yüksek Lisans</div>
                            <div className="text-xs text-slate-600">
                              Üsküdar Üniversitesi – Dil ve Konuşma Terapisi (Uzmanlık)
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-[#48B2B0] shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-slate-900">Lisans Derecesi</div>
                            <div className="text-xs text-slate-600">
                              Üsküdar Üniversitesi – Dil ve Konuşma Terapisi (Onur Öğrencisi)
                            </div>
                          </div>
                        </div>
                      </div>

                      <SiteLink
                        page={'contact'}
                        className="w-full py-3.5 rounded-xl bg-[#4E6599] hover:bg-[#3E5384] text-white font-semibold text-sm transition-colors"
                      >
                        Randevu ve Bilgi İçin Ulaşın
                      </SiteLink>
                    </div>
                  </Reveal>
                </div>

                <div className="lg:col-span-7 space-y-8">
                  <Reveal direction="up" animate>
                    <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-xs space-y-4">
                      <h2 className="text-2xl font-bold text-slate-900">Eğitim ve Klinik Geçmiş</h2>
                      <p className="text-slate-600 leading-relaxed">
                        Üsküdar Üniversitesi Dil ve Konuşma Terapisi bölümünden{' '}
                        <strong>onur öğrencisi</strong> olarak mezun oldum. Lisans eğitimim
                        süresince çeşitli rehabilitasyon merkezleri, rehberlik araştırma merkezi,{' '}
                        <strong>Üsküdar Üniversitesi NP Feneryolu Tıp Merkezi</strong>,{' '}
                        <strong>Florya İstanbul Aydın Üniversitesi Hastanesi</strong> ve{' '}
                        <strong>Erenköy Eğitim ve Araştırma Hastanesi</strong>’nde gözlem ve
                        uygulama stajları yaptım.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        Üsküdar Üniversitesi Dil ve Konuşma Terapisi yüksek lisans eğitimimi
                        tamamlayarak uzmanlığımı aldım. Şu anda İstanbul Maltepe’deki merkezimde
                        çocuk, ergen ve yetişkin danışanlarıma kanıta dayalı, etik ve bütüncül dil
                        ve konuşma terapisi hizmeti sunmaktayım.
                      </p>
                    </div>
                  </Reveal>

                  {/* Seminerler ve Kurslar Zaman Çizelgesi */}
                  <Reveal direction="up" delay={100} animate>
                    <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-xs">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 rounded-xl bg-[#48B2B0]/15 text-[#3B9E9C]">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">
                            Seminerler, Kurslar ve Sertifikalar
                          </h2>
                          <p className="text-xs text-slate-500">
                            Mesleki gelişim ve uluslararası sertifikasyon eğitimleri
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4 relative before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                        {SEMINARS.map((item, index) => (
                          <div key={index} className="relative flex items-start gap-4 pl-1">
                            <span className="px-2.5 py-1 rounded-lg bg-[#EDF7F7] text-[#3B9E9C] border border-[#48B2B0]/25 text-xs font-bold shrink-0 z-10">
                              {item.year}
                            </span>
                            <div className="bg-slate-50/80 rounded-xl p-3.5 flex-grow border border-slate-100">
                              <div className="text-sm font-bold text-slate-900">{item.title}</div>
                              <div className="text-xs text-slate-500 mt-1">{item.instructor}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          </div>
        </>);
}
