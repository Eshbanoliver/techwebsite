'use client';
import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="floating-left">
        <a
          href="https://wa.me/919876543210"
          className="float-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          id="float-whatsapp"
        >
          💬
        </a>
        <a
          href="tel:+919876543210"
          className="float-btn call"
          aria-label="Call Us"
          id="float-call"
        >
          📞
        </a>
      </div>

      <div className="floating-right">
        <button
          className={`float-btn scroll-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          id="float-scroll-top"
        >
          ↑
        </button>
      </div>
    </>
  );
}
