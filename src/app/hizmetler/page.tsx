import type { Metadata } from 'next';
import { SitePage } from '@/components/site-page';
export const metadata: Metadata = { title: 'Dil ve Konuşma Terapisi Hizmetlerimiz' };
export default function Page() { return <SitePage page="services" />; }
