import type { Metadata } from 'next';
import { SitePage } from '@/components/site-page';
export const metadata: Metadata = { title: 'Makaleler ve Rehber' };
export default function Page() { return <SitePage page="blog" />; }
