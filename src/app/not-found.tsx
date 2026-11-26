import Link from 'next/link';
export default function NotFound() {
  return <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center bg-slate-50"><p className="text-[#4E6599] font-bold">404</p><h1 className="text-3xl font-bold">Sayfa bulunamadı</h1><p>Aradığınız sayfa mevcut değil veya adresi değişmiş olabilir.</p><Link className="rounded-xl px-6 py-3 bg-[#4E6599] text-white font-semibold" href="/">Ana sayfaya dön</Link></main>;
}
