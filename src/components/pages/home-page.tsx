'use client';
import { MapPin, CheckCircle2, Award, GraduationCap, MessageCircle, ChevronRight, ChevronDown, Star, Calendar, ArrowRight, HeartHandshake, ShieldCheck, Quote } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SiteLink } from '@/components/site-link';
import Link from 'next/link';
import { SERVICES, ARTICLES, TESTIMONIALS, FAQS } from '@/data/site';
import { useSite } from '@/components/site-provider';

export function HomePage() {
  const { openFaqIndex, setOpenFaqIndex, formData, setFormData, formStatus, handleFormSubmit, whatsappUrl, preparedWhatsAppUrl } = useSite();
  return (<>
          <>
            {/* HERO BÖLÜMÜ */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#F4F8FB] via-white to-[#EDF7F7] pt-10 pb-20 lg:pt-16 lg:pb-28">
              {/* Hafif Dekoratif Arka Plan Şekilleri */}
              <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[520px] h-[520px] rounded-full bg-[#64C4C3]/10 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[420px] h-[420px] rounded-full bg-[#4E6599]/8 blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  {/* Sol Metin & CTA Alanı */}
                  <div className="lg:col-span-7 space-y-6">
                    <Reveal direction="up">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#48B2B0]/30 shadow-xs text-xs sm:text-sm font-medium text-[#3E5384]">
                        <ShieldCheck className="w-4 h-4 text-[#48B2B0]" />
                        <span>Maltepe / İstanbul • Uzman Dil ve Konuşma Terapisti</span>
                      </div>
                    </Reveal>

                    <Reveal direction="up" delay={100}>
                      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.3] tracking-tight">
                        İletişimdeki Engelleri Birlikte Aşalım,{' '}
                        <span className="text-[#4E6599]">Sesinizi Özgürce</span> Duyurun.
                      </h1>
                    </Reveal>

                    <Reveal direction="up" delay={180}>
                      <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                        Çocuk, ergen ve yetişkinlerde dil, konuşma, ses ve akıcılık bozukluklarında;
                        bilimsel kanıta dayalı, güven veren ve bireye özel terapi yaklaşımlarıyla
                        yanınızdayız.
                      </p>
                    </Reveal>

                    <Reveal direction="up" delay={260}>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                        <SiteLink
                          page={'contact'}
                          className="inline-flex items-center justify-center gap-2.5 bg-[#4E6599] hover:bg-[#3E5384] text-white font-semibold px-7 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all text-base"
                        >
                          <Calendar className="w-5 h-5 text-[#8CE0DF]" />
                          <span>Ön Değerlendirme Randevusu Al</span>
                        </SiteLink>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-emerald-50 text-slate-800 border border-slate-200 hover:border-emerald-300 font-semibold px-6 py-4 rounded-2xl shadow-xs transition-all text-base"
                        >
                          <MessageCircle className="w-5 h-5 text-emerald-600" />
                          <span>WhatsApp’tan Sorun</span>
                        </a>
                      </div>
                    </Reveal>

                    {/* Güven Rozetleri */}
                    <Reveal direction="up" delay={340}>
                      <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/70 max-w-xl">
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-slate-900">Uzman</div>
                          <div className="text-xs sm:text-sm text-slate-500">Yüksek Lisans Derecesi</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-slate-900">10+</div>
                          <div className="text-xs sm:text-sm text-slate-500">Uluslararası Sertifika</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-slate-900">5.0 ★</div>
                          <div className="text-xs sm:text-sm text-slate-500">Danışan Memnuniyeti</div>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* Sağ Görsel / Uzman Kartı */}
                  <div className="lg:col-span-5">
                    <Reveal direction="left" delay={150}>
                      <div className="relative mx-auto max-w-md">
                        {/* Yumuşak Organik Işık Halesi */}
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#4E6599]/20 via-[#64C4C3]/25 to-teal-100/40 blur-xl opacity-80 pointer-events-none" />

                        {/* Yüzen Üst Rozet (Klinik Onaylı) */}
                        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 absolute -top-4 -right-3 z-20">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs font-bold text-slate-800">Randevuya Açık</span>
                        </div>

                        {/* Ana Vitrin Kartı */}
                        <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(78,101,153,0.12)] border border-slate-100/90">
                          {/* Üst Kurumsal Kapak & Ses Dalgası Şeridi */}
                          <div className="bg-gradient-to-br from-[#3E5384] via-[#4E6599] to-[#3B8D99] p-6 sm:p-7 text-white relative overflow-hidden">
                            {/* Dekoratif Ses Dalgası Çizgileri */}
                            <div className="flex items-end gap-1.5 opacity-20 absolute right-5 bottom-3 h-14 pointer-events-none">
                              {[20, 42, 28, 52, 34, 46, 22, 38, 18].map((bar, idx) => (
                                <span
                                  key={idx}
                                  style={{ height: `${bar}px` }}
                                  className="w-1.5 rounded-full bg-white"
                                />
                              ))}
                            </div>

                            <div className="relative z-10">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-medium text-teal-100 mb-2">
                                <Award className="w-3.5 h-3.5 text-[#8CE0DF]" />
                                <span>Kurucu & Uzman Dil ve Konuşma Terapisti</span>
                              </div>
                              <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white leading-snug">
                                Uzm. Dkt. Asya Ayyıldız
                              </h2>
                              <p className="text-xs sm:text-sm text-white/85 mt-1">
                                Üsküdar Üniversitesi Dil ve Konuşma Terapisi (YL)
                              </p>
                            </div>
                          </div>

                          {/* Orta Bölüm: Etkileşimli Sertifika & Yaklaşım Etiketleri */}
                          <div className="p-6 sm:p-7 space-y-5">
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                  Sertifikalı Terapi Yaklaşımları
                                </span>
                                <span className="text-[11px] font-semibold text-[#48B2B0]">
                                  Kanıta Dayalı
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-2.5">
                                {[
                                  { title: 'DIR Floortime', sub: '101 & 201 Uygulayıcı' },
                                  { title: 'PROMPT Tekniği', sub: 'Dokunsal Konuşma' },
                                  { title: 'ETEÇOM 2', sub: 'Erken Çocukluk' },
                                  { title: 'LSVT & BDT', sub: 'Ses & Kekemelik' }
                                ].map((item, i) => (
                                  <div
                                    key={i}
                                    className="p-3 rounded-2xl bg-[#F8FAFC] hover:bg-[#EDF7F7]/70 border border-slate-100 hover:border-[#48B2B0]/30 transition-colors group"
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#48B2B0] shrink-0" />
                                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#3E5384]">
                                        {item.title}
                                      </span>
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-1 pl-5">
                                      {item.sub}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Alt Konum ve Özgeçmiş Çubuğu */}
                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-xl bg-[#4E6599]/10 text-[#4E6599] flex items-center justify-center shrink-0">
                                  <MapPin className="w-4 h-4" />
                                </div>
                                <div className="text-xs leading-tight">
                                  <span className="font-bold text-slate-900 block">
                                    Maltepe / İstanbul
                                  </span>
                                  <span className="text-slate-500 text-[11px]">
                                    Ada Ofis İş Merkezi No:1/8
                                  </span>
                                </div>
                              </div>

                              <SiteLink
                                page={'about'}
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-[#4E6599] text-white text-xs font-semibold transition-colors shrink-0"
                              >
                                <span>Özgeçmiş</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </SiteLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>

            {/* HIZLI İLETİŞİM & ÖN DEĞERLENDİRME BANDI */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
              <Reveal direction="up" animate>
                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 sm:p-8 grid lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4 space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#48B2B0]">
                      Hızlı Geri Dönüş
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">
                      Sizi Arayalım, Süreci Birlikte Planlayalım
                    </h2>
                    <p className="text-sm text-slate-500">
                      Bilgilerinizle WhatsApp mesajınızı hazırlayın ve göndererek geri arama talep edin.
                    </p>
                  </div>

                  <form
                    onSubmit={handleFormSubmit}
                    className="lg:col-span-8 grid sm:grid-cols-3 gap-3 items-end"
                  >
                    <div>
                      <label htmlFor="homepage-field-1" className="block text-xs font-medium text-slate-600 mb-1">
                        Adınız Soyadınız
                      </label>
<input id="homepage-field-1" name="name" autoComplete="name" maxLength={120}
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Örn: Ayşe Yılmaz"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="homepage-field-2" className="block text-xs font-medium text-slate-600 mb-1">
                        Telefon Numaranız
                      </label>
<input id="homepage-field-2" name="phone" autoComplete="tel" inputMode="tel" minLength={10} maxLength={20} pattern="[+0-9 ()-]{10,20}"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05XX XXX XX XX"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-5 rounded-xl bg-[#48B2B0] hover:bg-[#3B9E9C] text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 h-[46px]"
                    >
                      {formStatus === 'success' ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Mesajınız Hazır</span>
                        </>
                      ) : (
                        <>
                          <span>Geri Arama İste</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
{formStatus === 'success' && <p role="status" className="lg:col-span-12 text-sm text-emerald-800">Mesajınız hazır. Talebinizi iletmek için WhatsApp ekranında Gönder’e basın. <a href={preparedWhatsAppUrl} target="_blank" rel="noreferrer" className="underline font-semibold">WhatsApp’ı tekrar aç</a></p>}
                </div>
              </Reveal>
            </section>

            {/* UZMANLIK ALANLARIMIZ (Hizmetler Grid) */}
            <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal direction="up" animate>
                <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                    Uzmanlık Alanlarımız
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                    Bilimsel ve Kişiye Özel Terapi Hizmetleri
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Her bireyin iletişim yolculuğu benzersizdir. Kapsamlı değerlendirme sonrasında
                    yaşa ve ihtiyaca en uygun terapi yöntemlerini uyguluyoruz.
                  </p>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Reveal key={service.id} direction="up" delay={index * 80}>
                      <div className="h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-xs hover:shadow-md hover:border-[#48B2B0]/40 transition-all flex flex-col justify-between group">
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.color}`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-slate-300 group-hover:text-[#48B2B0] transition-colors">
                              0{index + 1}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#4E6599] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed mb-5">
                            {service.shortDesc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs text-slate-500 font-medium truncate max-w-[180px]">
                            {service.audience}
                          </span>
                          <SiteLink
                            page={'services'} serviceId={service.id}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-[#4E6599] group-hover:translate-x-1 transition-transform"
                          >
                            <span>İncele</span>
                            <ChevronRight className="w-4 h-4" />
                          </SiteLink>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}

                {/* Özel Değerlendirme Çağrı Kartı */}
                <Reveal direction="up" delay={120} animate>
                  <div className="h-full rounded-2xl p-7 bg-gradient-to-br from-[#4E6599] to-[#3B4F7D] text-white flex flex-col justify-between shadow-md">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                        <HeartHandshake className="w-6 h-6 text-[#8CE0DF]" />
                      </div>
                      <h3 className="text-xl font-bold">
                        Hangi Terapinin Uygun Olduğundan Emin Değil misiniz?
                      </h3>
                      <p className="text-sm text-white/85 leading-relaxed">
                        Kapsamlı dil ve konuşma değerlendirmesi ile çocuğunuzun veya kendinizin
                        ihtiyaçlarını birlikte belirleyelim.
                      </p>
                    </div>
                    <div className="pt-6">
                      <SiteLink
                        page={'contact'}
                        className="w-full py-3.5 px-5 rounded-xl bg-white text-[#3E5384] hover:bg-teal-50 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Bize Ulaşın</span>
                        <ArrowRight className="w-4 h-4" />
                      </SiteLink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* HAKKIMIZDA ÖZET BÖLÜMÜ */}
            <section className="py-20 bg-white border-y border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5">
                    <Reveal direction="left" animate>
                      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#EDF7F7] to-[#E6ECF8] p-8 border border-slate-100">
                        <div className="aspect-[4/4] rounded-2xl bg-white shadow-inner flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                          <div className="w-24 h-24 rounded-full bg-[#4E6599]/10 flex items-center justify-center mb-4">
                            <GraduationCap className="w-12 h-12 text-[#4E6599]" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900">
                            Uzm. Dkt. Asya Ayyıldız
                          </h3>
                          <p className="text-sm text-[#48B2B0] font-medium mt-1">
                            Onur Öğrencisi & Yüksek Lisans Mezunu
                          </p>
                          <div className="mt-6 w-full space-y-2 text-left bg-slate-50 p-4 rounded-xl text-xs text-slate-600">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#48B2B0]" />
                              <span>Üsküdar Üniversitesi NP Feneryolu Tıp Merkezi</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#48B2B0]" />
                              <span>Erenköy Eğitim ve Araştırma Hastanesi</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#48B2B0]" />
                              <span>Florya İstanbul Aydın Üniversitesi Hastanesi</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <Reveal direction="right" delay={80} animate>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                        Uzmanımızı Tanıyın
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                        Merhaba! Ben Uzman Dil ve Konuşma Terapisti Asya Ayyıldız
                      </h2>
                      <p className="text-slate-600 leading-relaxed mt-4">
                        Üsküdar Üniversitesi Dil ve Konuşma Terapisi bölümünden{' '}
                        <strong className="text-slate-800">onur öğrencisi</strong> olarak mezun
                        oldum. Lisans eğitimim süresince çeşitli rehabilitasyon merkezleri, rehberlik
                        araştırma merkezleri, Üsküdar Üniversitesi NP Feneryolu Tıp Merkezi, Florya
                        İstanbul Aydın Üniversitesi Hastanesi ve Erenköy Eğitim ve Araştırma
                        Hastanesi’nde yoğun gözlem ve uygulama stajları gerçekleştirdim.
                      </p>
                      <p className="text-slate-600 leading-relaxed mt-3">
                        Ardından Üsküdar Üniversitesi Dil ve Konuşma Terapisi{' '}
                        <strong className="text-slate-800">yüksek lisans eğitimimi</strong>{' '}
                        tamamlayarak uzmanlık unvanımı aldım. Floortime 101-201, PROMPT, ETEÇOM 2,
                        LSVT ve Bilişsel Davranışçı Yaklaşım gibi uluslararası geçerliliği olan
                        terapi yöntemlerini danışanlarımın ihtiyaçlarına göre bütüncül bir bakış
                        açısıyla uyguluyorum.
                      </p>

                      <div className="pt-6 flex flex-wrap gap-3">
                        <SiteLink
                          page={'about'}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4E6599] hover:bg-[#3E5384] text-white font-semibold text-sm transition-colors"
                        >
                          <span>Tüm Eğitim ve Sertifikalarım</span>
                          <ArrowRight className="w-4 h-4" />
                        </SiteLink>
                        <SiteLink
                          page={'contact'}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 hover:border-[#48B2B0] text-slate-700 font-semibold text-sm transition-colors"
                        >
                          <span>Tanışma Randevusu Al</span>
                        </SiteLink>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>

            {/* ÇALIŞMA SÜRECİMİZ (4 Adım) */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal direction="up" animate>
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                    Nasıl İlerliyoruz?
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    4 Adımda Şeffaf ve Güvenilir Terapi Süreci
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: '01',
                    title: 'Ön Görüşme & Öykü',
                    desc: 'Ailenin veya danışanın beklentileri, gelişim öyküsü ve günlük iletişim dinamikleri detaylıca dinlenir.'
                  },
                  {
                    step: '02',
                    title: 'Bilimsel Değerlendirme',
                    desc: 'Standart testler ve klinik gözlemlerle dil, konuşma, ses veya akıcılık profili objektif olarak belirlenir.'
                  },
                  {
                    step: '03',
                    title: 'Bireysel Terapi Planı',
                    desc: 'Danışanın güçlü yönlerine ve hedeflerine uygun, oyun veya beceri temelli terapi programı oluşturulur.'
                  },
                  {
                    step: '04',
                    title: 'Aile İş Birliği & Takip',
                    desc: 'Terapi odasında kazanılan becerilerin günlük hayata aktarılması için aileye ve danışana düzenli rehberlik sunulur.'
                  }
                ].map((item, idx) => (
                  <Reveal key={item.step} direction="up" delay={idx * 90}>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs relative h-full">
                      <div className="w-11 h-11 rounded-full bg-[#EDF7F7] text-[#3B9E9C] font-bold flex items-center justify-center text-sm mb-4 border border-[#48B2B0]/20">
                        {item.step}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* DANIŞAN & VELİ YORUMLARI */}
            <section className="py-20 bg-[#F4F8FB] border-y border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal direction="up" animate>
                  <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                      Danışan Deneyimleri
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                      Ailelerimiz ve Danışanlarımız Ne Diyor?
                    </h2>
                  </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((review, idx) => (
                    <Reveal key={review.id} direction="up" delay={idx * 100}>
                      <div className="bg-white rounded-2xl p-7 shadow-xs border border-slate-100 h-full flex flex-col justify-between relative">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex gap-1 text-amber-400">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                            <Quote className="w-7 h-7 text-[#4E6599]/15" />
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed italic">
                            "{review.text}"
                          </p>
                        </div>

                        <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <div className="text-sm font-bold text-slate-900">{review.author}</div>
                            <div className="text-xs text-[#48B2B0] font-medium">{review.tag}</div>
                          </div>
                          <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                            Doğrulanmış Yorum
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* BLOG / MAKALELER ÖZETİ */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal direction="up" animate>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                      Bilgi Köşesi
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1.5">
                      Güncel Makaleler ve Aile Rehberi
                    </h2>
                  </div>
                  <SiteLink
                    page={'blog'}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4E6599] hover:text-[#3E5384]"
                  >
                    <span>Tüm Yazıları Gör</span>
                    <ArrowRight className="w-4 h-4" />
                  </SiteLink>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-3 gap-6">
                {ARTICLES.slice(0, 3).map((article, idx) => (
                  <Reveal key={article.id} direction="up" delay={idx * 70} animate>
                    <Link href={`/makaleler/${article.id}/`}
                      className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col h-full"
                    >
                      <div
                        className="h-44 bg-slate-100 bg-no-repeat p-6 flex flex-col justify-between relative overflow-hidden"
                        style={{
                          backgroundImage: "url('/images/article-covers-triptych.png')",
                          backgroundSize: '300% auto',
                          backgroundPosition: `${idx * 50}% center`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-white/10" />
                        <span className="self-start px-3 py-1 rounded-full bg-white/90 text-[#4E6599] text-xs font-semibold shadow-2xs">
                          {article.category}
                        </span>
                        <span className="relative self-end px-2.5 py-1 rounded-full bg-slate-900/65 text-[11px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          Makaleyi incele
                        </span>
                      </div>
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="text-xs text-slate-400 mb-2">
                            {article.date} • {article.readTime}
                          </div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#4E6599] transition-colors mb-2.5">
                            {article.title}
                          </h3>
                          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                            {article.excerpt}
                          </p>
                        </div>
                        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#48B2B0]">
                          <span>Devamını Oku</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* SIKÇA SORULAN SORULAR (SSS) */}
            <section className="py-16 bg-white border-t border-slate-100">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal direction="up" animate>
                  <div className="text-center mb-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                      Merak Edilenler
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                      Sıkça Sorulan Sorular
                    </h2>
                  </div>
                </Reveal>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <Reveal key={idx} direction="up" delay={idx * 60}>
                        <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-[#FAFBFD]">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)} aria-expanded={isOpen} aria-controls={`faq-answer-${idx}`}
                            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-[#4E6599] transition-colors"
                          >
                            <span className="text-sm sm:text-base">{faq.q}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#48B2B0] shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div id={`faq-answer-${idx}`} className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-white">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        </>);
}
