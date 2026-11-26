export const routes: Record<string, string> = {
  home: '/', about: '/hakkimizda/', services: '/hizmetler/', blog: '/makaleler/', contact: '/iletisim/',
};

export function pageHref(page: string, serviceId?: string | null, articleId?: number) {
  if (page === 'services' && serviceId) return `/hizmetler/${serviceId}/`;
  if (page === 'blog' && articleId) return `/makaleler/${articleId}/`;
  return routes[page] ?? '/';
}
