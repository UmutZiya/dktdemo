import type { ReactNode } from 'react';

export function Reveal({ children, direction = 'up', delay = 0, className = '', animate = false }: {
  children: ReactNode; direction?: 'up' | 'left' | 'right'; delay?: number; className?: string; animate?: boolean;
}) {
  const animation = direction === 'left' ? 'fade-left' : direction === 'right' ? 'fade-right' : 'fade-up';
  const normalizedDelay = Math.round(delay / 50) * 50;
  return <div className={className} data-aos={animate ? animation : undefined} data-aos-duration={animate ? 600 : undefined} data-aos-delay={animate && normalizedDelay ? normalizedDelay : undefined}>{children}</div>;
}
