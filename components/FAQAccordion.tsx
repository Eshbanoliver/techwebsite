'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="faq-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
        >
          <button
            className={`faq-question ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggle(index)}
            id={`faq-q-${index}`}
          >
            <span>{item.question}</span>
            <span className={`faq-chevron ${openIndex === index ? 'open' : ''}`}>
              ▾
            </span>
          </button>
          <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
            <p>{item.answer}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
