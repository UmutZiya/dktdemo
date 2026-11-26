import { SiteProvider, type SiteOptions } from './site-provider';
import { SiteHeader } from './layout/site-header';
import { SiteFooter } from './layout/site-footer';
import { HomePage } from './pages/home-page';
import { AboutPage } from './pages/about-page';
import { ServicesPage } from './pages/services-page';
import { BlogPage } from './pages/blog-page';
import { ContactPage } from './pages/contact-page';
import { AosInitializer } from './aos-initializer';

const pages = { home: HomePage, about: AboutPage, services: ServicesPage, blog: BlogPage, contact: ContactPage };
export function SitePage(options: SiteOptions) {
  const Content = pages[options.page];
  return (
    <SiteProvider key={`${options.page}-${options.serviceId ?? ''}-${options.articleId ?? ''}`} {...options}>
      <div className="min-h-screen bg-[#FAFBFD] text-slate-800 selection:bg-[#48B2B0]/20 selection:text-[#354978] flex flex-col">
        <AosInitializer />
        <a href="#main-content" className="skip-link">İçeriğe geç</a>
        <SiteHeader />
        <main id="main-content" className="flex-grow min-w-0" tabIndex={-1}><Content /></main>
        <SiteFooter />
      </div>
    </SiteProvider>
  );
}
