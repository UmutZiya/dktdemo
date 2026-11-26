'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { pageHref } from '@/lib/routes';
import { useSite } from './site-provider';

export function SiteLink({ page, serviceId, onClick, ...props }: Omit<ComponentProps<typeof Link>, 'href'> & { page: string; serviceId?: string | null }) {
  const { activePage, selectedServiceId, setMobileMenuOpen, setServicesDropdownOpen } = useSite();
  const current = activePage === page && (!serviceId || serviceId === selectedServiceId);
  return <Link href={pageHref(page, serviceId)} aria-current={current ? 'page' : undefined} {...props} onClick={(event) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }
  }} />;
}
