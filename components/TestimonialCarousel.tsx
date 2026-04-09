'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
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

export default function TestimonialCarousel(): React.JSX.Element {
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-container-cinematic">
      <div className="testimonial-view-window">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="testimonial-card-cinematic designer-card glow-cyan"
          >
            <div className="quote-symbol-bg">
              <Quote size={80} strokeWidth={1} />
            </div>

            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className="star-active" />
              ))}
            </div>

            <p className="large-quote">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>

            <div className="author-pod-premium">
              <div className="avatar-pod-glow">
                <span className="avatar-initials">{testimonials[current].initials}</span>
              </div>
              <div className="author-meta-premium">
                <h4>{testimonials[current].author}</h4>
                <p>{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="cinematic-controls">
        <button onClick={() => paginate(-1)} className="control-btn" id="prev-btn">
          <ChevronLeft size={24} />
        </button>
        <div className="paginator-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`dot-indicator ${current === i ? 'active' : ''}`}
            />
          ))}
        </div>
        <button onClick={() => paginate(1)} className="control-btn" id="next-btn">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
