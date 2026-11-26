import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/data/site';
import { SitePage } from '@/components/site-page';
export const dynamicParams = false;
export function generateStaticParams() { return ARTICLES.map(article => ({ id: String(article.id) })); }
type Props = { params: Promise<{ id: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = ARTICLES.find(item => String(item.id) === id);
  return { title: article?.title, description: article?.excerpt };
}
export default async function Page({ params }: Props) {
  const { id } = await params;
  const article = ARTICLES.find(item => String(item.id) === id);
  if (!article) notFound();
  return <SitePage page="blog" articleId={article.id} />;
}
