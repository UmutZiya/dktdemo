'use client';
import { Phone, Mail, MapPin, CheckCircle2, ChevronRight, Send } from 'lucide-react';
import { SiteLink } from '@/components/site-link';
import { SERVICES } from '@/data/site';
import { useSite } from '@/components/site-provider';

export function ContactPage() {
  const { formData, setFormData, formStatus, setFormStatus, handleFormSubmit, preparedWhatsAppUrl } = useSite();
  return (<>
          <div className="pb-20">
            <section className="bg-gradient-to-r from-[#F4F8FB] to-[#EDF7F7] py-14 border-b border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <SiteLink page={'home'} className="hover:text-[#4E6599]">
                    Ana Sayfa
                  </SiteLink>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#4E6599] font-semibold">İletişim</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Bize Ulaşın & Randevu Oluşturun
                </h1>
                <p className="text-slate-600 mt-2 max-w-2xl">
                  Sorularınız veya ön değerlendirme randevu talepleriniz için formu doldurabilir ya da
                  doğrudan telefon/WhatsApp üzerinden ulaşabilirsiniz.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Sol İletişim Formu */}
                <div className="lg:col-span-6">
                  <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 mb-1">İletişim & Randevu Formu</h2>
                    <p className="text-sm text-slate-500 mb-6">
                      Bilgilerinizle bir WhatsApp mesajı hazırlanır. Talebinizi iletmek için WhatsApp ekranında Gönder’e basın.
                    </p>

                    {formStatus === 'success' ? (
                      <div role="status" className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                        <h3 className="text-lg font-bold text-emerald-900">
                          WhatsApp Mesajınız Hazırlandı!
                        </h3>
                        <p className="text-sm text-emerald-800">
                          Form bilgileriniz şablon olarak WhatsApp ekranında açıldı. Mesajı
                          göndererek uzmanımıza anında ulaşabilirsiniz.
                        </p>
                        <a href={preparedWhatsAppUrl} target="_blank" rel="noreferrer" className="block underline text-emerald-900 font-semibold">WhatsApp’ı tekrar aç</a>
<button
                          onClick={() => setFormStatus('idle')}
                          className="mt-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold"
                        >
                          Yeni Mesaj Oluştur
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="contactpage-field-1" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            İsim Soyisim *
                          </label>
<input id="contactpage-field-1" name="name" autoComplete="name" maxLength={120}
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Adınız ve soyadınız"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contactpage-field-2" className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Telefon *
                            </label>
<input id="contactpage-field-2" name="phone" autoComplete="tel" inputMode="tel" minLength={10} maxLength={20} pattern="[+0-9 ()-]{10,20}"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="05XX XXX XX XX"
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white"
                            />
                          </div>
                          <div>
                            <label htmlFor="contactpage-field-3" className="block text-xs font-semibold text-slate-700 mb-1.5">
                              E-Posta
                            </label>
<input id="contactpage-field-3" name="email" autoComplete="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="ornek@email.com"
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="contactpage-field-4" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            İlgilendiğiniz Hizmet Alanı
                          </label>
<select id="contactpage-field-4" name="service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white"
                          >
                            <option>Ön Değerlendirme / Genel Bilgi</option>
                            {SERVICES.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="contactpage-field-5" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Mesajınız
                          </label>
<textarea id="contactpage-field-5" name="message" maxLength={2000}
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Danışanın yaşı ve kısaca bilgi almak istediğiniz konu..."
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 px-6 rounded-xl bg-[#4E6599] hover:bg-[#3E5384] text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>WhatsApp Mesajı Hazırla</span>
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* Sağ Adres, Harita & İletişim Kartı */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                    {/* Gerçek Google Haritalar Iframe Alanı */}
                    <div className="h-72 w-full bg-slate-100 relative overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.103613459219!2d29.1248378!3d40.9353963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6bd7e80a017%3A0x9ec2c273a39e6c03!2zQWx0YXnDp2XFn21lLCBEZW5pemVyIFNrLiBObzoxLCAzNDg0MyBNYWx0ZXBlL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1795675707277!5m2!1str!2str"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Asya Ayyıldız Dil ve Konuşma Merkezi Konumu"
                      />
                    </div>

                    {/* İletişim Detayları */}
                    <div className="p-7 space-y-4">
                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-slate-100 text-[#4E6599]">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-400">Adres</div>
                          <div className="text-sm font-medium text-slate-800">
                            Altayçeşme Mah. Denizer Sok. No:1/8 - Ada Ofis İş Merkezi MALTEPE /
                            İSTANBUL
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-slate-100 text-[#48B2B0]">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-400">Telefon & WhatsApp</div>
                          <a
                            href="tel:+905345986181"
                            className="text-sm font-bold text-slate-900 hover:text-[#4E6599]"
                          >
                            +90 (534) 598 61 81
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-slate-100 text-[#4E6599]">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-400">E-Posta</div>
                          <a
                            href="mailto:info@dktasyaayyildiz.com"
                            className="text-sm font-medium text-slate-800 hover:text-[#4E6599]"
                          >
                            info@dktasyaayyildiz.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>);
}
