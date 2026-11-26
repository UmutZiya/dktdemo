import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/data/site';
import { SitePage } from '@/components/site-page';
export const dynamicParams = false;
export function generateStaticParams() { return SERVICES.map(service => ({ slug: service.id })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find(item => item.id === slug);
  return { title: service?.title, description: service?.shortDesc };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!SERVICES.some(item => item.id === slug)) notFound();
  return <SitePage page="services" serviceId={slug} />;
}
