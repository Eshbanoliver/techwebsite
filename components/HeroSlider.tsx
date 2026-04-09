'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    image: '/hero/1.png',
    title: 'Building <span class="gradient-text">Future-Ready</span> Digital Solutions',
    desc: 'Transforming businesses with advanced AI, web, and mobile engineering from the heart of Udaipur.',
  },
  {
    image: '/hero/2.png',
    title: 'Precision <span class="gradient-text">AI & ML</span> Systems',
    desc: 'Intelligent automation and predictive analytics designed for global scalability.',
  },
  {
    image: '/hero/3.png',
    title: 'Elegant <span class="gradient-text">Web & Mobile</span> Experiences',
    desc: 'Crafting stunning, high-performance interfaces that captivate and convert.',
  },
  {
    image: '/hero/4.png',
    title: 'Secure <span class="gradient-text">Cloud & DevOps</span>',
    desc: 'Reliable, scalable, and optimized infrastructure for modern enterprises.',
  },
];

export default function HeroSlider(): React.JSX.Element {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="hero-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <div 
            className="hero-image" 
            style={{ backgroundImage: `url(${slides[current].image})` }} 
          />
          <div className="hero-overlay" />
          
          <div className="hero-content container">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="badge-dot" />
              Trusted Tech Partner Since 2020
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              dangerouslySetInnerHTML={{ __html: slides[current].title }}
            />

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {slides[current].desc}
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/contact" className="btn btn-glow">
                Get Started →
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`hero-dot ${current === i ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .hero-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          filter: brightness(0.5);
          transition: transform 12s linear;
          transform: scale(1.05);
        }
        .hero-slide[style*="opacity: 1"] .hero-image {
          transform: scale(1.1);
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 0%, var(--bg-primary) 100%),
                      linear-gradient(to bottom, var(--bg-primary) 0%, transparent 20%, transparent 80%, var(--bg-primary) 100%);
          opacity: 0.85;
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 140px 24px 80px; /* Strong top padding to clear fixed nav */
          max-width: 1000px !important;
          width: 100%;
        }
        .hero-badge {
          margin-bottom: 28px;
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 28px;
          color: var(--text-primary);
          text-shadow: 0 4px 15px rgba(0,0,0,0.4);
        }
        .hero-description {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--text-secondary);
          margin: 0 auto 48px;
          max-width: 720px;
          line-height: 1.8;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-dots {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }
        .hero-dot {
          width: 12px;
          height: 6px;
          border-radius: 2px;
          background: var(--text-muted);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .hero-dot.active {
          width: 32px;
          background: var(--neon-blue);
          box-shadow: 0 0 15px var(--neon-blue);
        }
        [data-theme='light'] .hero-image {
          filter: brightness(1);
          opacity: 0.6;
        }
        [data-theme='light'] .hero-overlay {
          background: radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, var(--bg-primary) 100%),
                      linear-gradient(to bottom, var(--bg-primary) 0%, transparent 20%, transparent 80%, var(--bg-primary) 100%);
          opacity: 0.8;
        }
        [data-theme='light'] .hero-title {
          text-shadow: 0 0 20px rgba(255,255,255,0.8);
        }
        @media (max-width: 768px) {
          .hero-content {
            padding-top: 120px; /* Still generous for mobile */
          }
          .hero-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  );
}
