'use client';

import { createContext, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ARTICLES, SERVICES } from '@/data/site';

export type SitePageName = 'home' | 'about' | 'services' | 'blog' | 'contact';
export type SiteOptions = { page: SitePageName; serviceId?: string; articleId?: number };
const initialForm = { name: '', phone: '', email: '', service: 'Ön Değerlendirme / Genel Bilgi', message: '' };
export const whatsappUrl = 'https://wa.me/905345986181?text=' + encodeURIComponent('Merhaba Asya Hanım, dil ve konuşma terapisi hakkında bilgi ve randevu almak istiyorum.');

function useSiteController({ page, serviceId, articleId }: SiteOptions) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState(whatsappUrl);
  const previousPath = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen && !servicesDropdownOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        document.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    const media = window.matchMedia('(min-width: 1280px)');
    const closeOnResize = () => setMobileMenuOpen(false);
    media.addEventListener('change', closeOnResize);
    return () => { document.removeEventListener('keydown', handleKey); media.removeEventListener('change', closeOnResize); };
  }, [mobileMenuOpen, servicesDropdownOpen]);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      previousPath.current = pathname;
    }
  }, [pathname]);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [
      'Merhaba Asya Hanım, web siteniz üzerinden randevu / bilgi talebi oluşturmak istiyorum.',
      `Ad Soyad: ${formData.name.trim()}`, `Telefon: ${formData.phone.trim()}`,
      formData.email && `E-Posta: ${formData.email.trim()}`, `Hizmet Alanı: ${formData.service}`,
      formData.message && `Mesaj: ${formData.message.trim()}`,
    ].filter(Boolean);
    const url = `https://wa.me/905345986181?text=${encodeURIComponent(lines.join('\n'))}`;
    setPreparedWhatsAppUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormStatus('success');
  };

  return {
    activePage: page, selectedServiceId: serviceId ?? SERVICES[0].id,
    selectedArticle: ARTICLES.find(article => article.id === articleId) ?? null,
    mobileMenuOpen, setMobileMenuOpen, servicesDropdownOpen, setServicesDropdownOpen,
    openFaqIndex, setOpenFaqIndex, scrolled, formData, setFormData, formStatus, setFormStatus,
    preparedWhatsAppUrl, handleFormSubmit, whatsappUrl,
  };
}

const SiteContext = createContext<ReturnType<typeof useSiteController> | null>(null);
export function SiteProvider({ children, ...options }: SiteOptions & { children: ReactNode }) {
  const state = useSiteController(options);
  return <SiteContext.Provider value={state}>{children}</SiteContext.Provider>;
}
export function useSite() {
  const state = useContext(SiteContext);
  if (!state) throw new Error('useSite must be used within SiteProvider');
  return state;
}
