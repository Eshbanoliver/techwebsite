'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "MS Infinix transformed our vision into a stunning digital platform. Their expertise in AI and web development is truly world-class. We saw a 300% increase in user engagement.",
    author: "Rajesh Sharma",
    role: "CEO, TechVentures India",
    initials: "RS",
  },
  {
    quote: "The team delivered our mobile app ahead of schedule with exceptional quality. Their attention to detail and modern tech stack made all the difference for our startup.",
    author: "Priya Mehta",
    role: "Founder, HealthFirst App",
    initials: "PM",
  },
  {
    quote: "Outstanding cloud & DevOps solutions that reduced our infrastructure costs by 40%. MS Infinix is our go-to technology partner for all digital transformation needs.",
    author: "Amit Patel",
    role: "CTO, CloudScale Solutions",
    initials: "AP",
  },
  {
    quote: "Their UI/UX design work is absolutely phenomenal. They redesigned our entire platform and our customer satisfaction scores went through the roof. Highly recommend!",
    author: "Sneha Gupta",
    role: "Product Manager, DesignHub",
    initials: "SG",
  },
  {
    quote: "MS Infinix's digital marketing strategies helped us achieve 5x ROI within just 3 months. Their data-driven approach and creative solutions are unmatched.",
    author: "Vikram Singh",
    role: "Director, GrowthWave",
    initials: "VS",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div>
      <div className="testimonials-wrapper">
        <div
          className="testimonials-track"
          style={{
            transform: `translateX(-${current * 424}px)`,
          }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card glass-card">
              <div className="stars">★★★★★</div>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="author">
                <div className="author-avatar">{t.initials}</div>
                <div className="author-info">
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-controls">
        <button onClick={prev} aria-label="Previous testimonial" id="testimonial-prev">
          ←
        </button>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            style={{
              width: current === i ? 32 : 10,
              height: 10,
              borderRadius: 'var(--radius-full)',
              background: current === i ? 'var(--gradient-primary)' : 'var(--bg-glass)',
              border: `1px solid ${current === i ? 'transparent' : 'var(--border-glass)'}`,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
        <button onClick={next} aria-label="Next testimonial" id="testimonial-next">
          →
        </button>
      </div>
    </div>
  );
}
