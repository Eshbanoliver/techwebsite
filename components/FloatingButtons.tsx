'use client';
import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import ChatBot from './ChatBot';

export default function FloatingButtons(): React.JSX.Element {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="floating-left">
        <a
          href="https://wa.me/919251148882"
          className="float-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          id="float-whatsapp"
        >
          <MessageCircle size={20} />
          <span className="float-label">Consult</span>
        </a>
        <a
          href="tel:+919251148882"
          className="float-btn call"
          aria-label="Call Us"
          id="float-call"
        >
          <Phone size={20} />
          <span className="float-label">Call Support</span>
        </a>
      </div>

      <div className="floating-right">
        <button
          className={`float-btn scroll-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          id="float-scroll-top"
        >
          <ArrowUp size={20} />
        </button>
        <ChatBot />
      </div>
    </>
  );
}
