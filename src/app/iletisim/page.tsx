import type { Metadata } from 'next';
import { SitePage } from '@/components/site-page';
export const metadata: Metadata = { title: 'İletişim ve Randevu', description: 'Maltepe Asya Ayyıldız Dil ve Konuşma Merkezi adres, telefon, harita ve WhatsApp üzerinden randevu talebi.' };
export default function Page() { return <SitePage page="contact" />; }
