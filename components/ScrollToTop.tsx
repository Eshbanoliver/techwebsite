'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top on every path change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // 'instant' is better for navigation to prevent "sliding" effect
    });
  }, [pathname]);

  return null;
}
