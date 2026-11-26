'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';

export function AosInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      anchorPlacement: 'top-bottom',
    });

    const animationFrame = requestAnimationFrame(() => AOS.refreshHard());
    return () => cancelAnimationFrame(animationFrame);
  }, [pathname]);

  return null;
}
