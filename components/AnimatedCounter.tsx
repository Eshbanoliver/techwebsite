'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function AnimatedCounter({ 
  end, 
  suffix = '', 
  duration = 2000, 
  label, 
  icon, 
  className = '',
  minimal = false 
}: AnimatedCounterProps & { minimal?: boolean }): React.JSX.Element {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    const startTime = Date.now();

    const animate = (): void => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = typeof end === 'number' ? Math.floor(eased * end) : 0;
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  if (minimal) {
    return (
      <span ref={ref} className={className}>
        {count}{suffix}
      </span>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`metric-card designer-card ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="metric-icon-box">{icon}</div>
      <div className="metric-content">
        <div className="metric-number">
          {count}{suffix}
        </div>
        <div className="metric-label">{label}</div>
      </div>
    </motion.div>
  );
}
