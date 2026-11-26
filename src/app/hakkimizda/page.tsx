import type { Metadata } from 'next';
import { SitePage } from '@/components/site-page';
export const metadata: Metadata = { title: 'Hakkımızda', description: 'Uzm. Dkt. Asya Ayyıldız’ın akademik geçmişi, klinik deneyimi ve terapi sertifikaları.' };
export default function Page() { return <SitePage page="about" />; }
