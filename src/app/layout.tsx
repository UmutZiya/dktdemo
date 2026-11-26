import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Asya Ayyıldız | Maltepe Dil ve Konuşma Merkezi', template: '%s | Asya Ayyıldız' },
  description: 'İstanbul Maltepe’de uzman dil ve konuşma terapisti Asya Ayyıldız. Çocuk, ergen ve yetişkinlerde dil, konuşma, ses ve akıcılık terapisi.',
  openGraph: { locale: 'tr_TR', type: 'website', siteName: 'Asya Ayyıldız Dil ve Konuşma Merkezi' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#4E6599' };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="tr" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
