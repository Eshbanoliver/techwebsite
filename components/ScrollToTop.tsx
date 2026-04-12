'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToTop(): null {
  const pathname = usePathname();

  useEffect(() => {
    // Disable automatic scroll restoration by the browser
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const performScroll = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // Execute immediately on pathname change
    performScroll();

    // Use requestAnimationFrame to ensure it happens after the browser paints the new route
    const rafId = requestAnimationFrame(performScroll);

    // Staggered backup for heavy pages
    const timer = setTimeout(performScroll, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
