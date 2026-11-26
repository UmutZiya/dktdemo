'use client';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SiteLink } from '@/components/site-link';
import Link from 'next/link';
import { ARTICLES } from '@/data/site';
import { useSite } from '@/components/site-provider';

export function BlogPage() {
  const { selectedArticle } = useSite();
  return (<>
          <div className="pb-20">
            <section className="bg-gradient-to-r from-[#F4F8FB] to-[#EDF7F7] py-14 border-b border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <SiteLink page={'home'} className="hover:text-[#4E6599]">
                    Ana Sayfa
                  </SiteLink>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#4E6599] font-semibold">Makaleler</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  {selectedArticle ? selectedArticle.title : 'Bilgilendirici Makaleler & Rehber'}
                </h1>
                <p className="text-slate-600 mt-2 max-w-2xl">
                  Dil gelişimi, kekemelik, ses sağlığı ve erken müdahale yöntemleri hakkında bilimsel
                  yazılarımız.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
              {selectedArticle ? (
                <div className="max-w-3xl mx-auto bg-white rounded-3xl p-5 sm:p-10 border border-slate-100 shadow-sm space-y-6">
                  <SiteLink
                    page={'blog'}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4E6599] hover:underline"
                  >
                    ← Tüm Makalelere Dön
                  </SiteLink>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="px-3 py-1 rounded-full bg-[#EDF7F7] text-[#3B9E9C] font-semibold">
                      {selectedArticle.category}
                    </span>
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-base font-medium text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border-l-4 border-[#48B2B0]">
                    {selectedArticle.excerpt}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {selectedArticle.content}
                  </p>
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm font-medium text-slate-800">
                      Konuyla ilgili uzman görüşü almak ister misiniz?
                    </div>
                    <SiteLink
                      page={'contact'}
                      className="px-6 py-3 rounded-xl bg-[#4E6599] text-white font-semibold text-sm"
                    >
                      İletişime Geçin
                    </SiteLink>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {ARTICLES.map((art) => (
                    <Link key={art.id} href={`/makaleler/${art.id}/`}
                      className="bg-white rounded-2xl p-7 border border-slate-100 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                          <span className="px-3 py-1 rounded-full bg-[#EDF7F7] text-[#3B9E9C] font-semibold">
                            {art.category}
                          </span>
                          <span>{art.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#4E6599] transition-colors mb-3">
                          {art.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{art.excerpt}</p>
                      </div>
                      <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#4E6599]">
                        <span>Makaleyi Oku</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </div>
        </>);
}
