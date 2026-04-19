import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  MessageSquare, 
  Search, 
  Code, 
  Smartphone, 
  Palette, 
  ShoppingBag,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';
import styles from './CategorizedFAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: any;
  faqs: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: <Search size={20} />,
    faqs: [
      { question: "How does a digital marketing agency increase business revenue?", answer: "A digital marketing agency like MS Infinex uses data-driven strategies—such as high-intent SEO, targeted PPC, and conversion rate optimization (CRO)—to drive qualified traffic that converts into paying customers." },
      { question: "How long does it take for SEO to show results on Google?", answer: "For most competitive keywords, SEO results typically start appearing within 3 to 6 months. However, technical optimizations can show indexing improvements in as little as 45 days." },
      { question: "What is the ROI of professional SEO services?", answer: "Search engine optimization offers one of the highest ROIs in digital marketing because it targets users actively searching for your services, resulting in a lower Cost Per Acquisition (CPA) compared to paid ads." },
      { question: "Why is local SEO important for businesses in Udaipur?", answer: "Local SEO focuses on hyper-targeted visibility in Udaipur and Rajasthan, ensuring your business appears in the 'Map Pack' for searches like 'best service provider near me'." }
    ]
  },
  {
    id: 'development',
    title: 'Web Development',
    icon: <Code size={20} />,
    faqs: [
      { question: "How much does it cost to build a professional website in 2026?", answer: "The cost of web development depends on complexity. A modern business website typically ranges from ₹25,000 to ₹1,50,000+, while custom enterprise or e-commerce portals are quoted based on technical requirements." },
      { question: "Which platform is best for e-commerce development?", answer: "We recommend Next.js with Shopify Headless for high-performance scale, or custom MERN stack solutions for businesses requiring unique functionality and full control over their data." },
      { question: "What are the benefits of a headless CMS architecture?", answer: "Headless CMS allows for faster load times, superior security, and the ability to push content across various platforms (Web, App, IoT) through a single API-driven source." },
      { question: "How to improve website loading speed for better SEO?", answer: "We improve speed by implementing image optimization, lazy loading, server-side rendering (SSR), and deploying on high-speed edge networks like Vercel and Cloudflare." }
    ]
  },
  {
    id: 'apps',
    title: 'App Engineering',
    icon: <Smartphone size={20} />,
    faqs: [
      { question: "How to choose between Native and Cross-Platform app development?", answer: "If you need extreme performance, Native is best. However, for most businesses, Cross-Platform (Flutter/React Native) is the superior choice as it reduces development costs by 40% while maintaining native-like quality." },
      { question: "What is the process of launching a mobile app on App Store?", answer: "The process involves developer account setup, rigorous beta testing, metadata optimization (ASO), and a compliance review by Apple/Google which typically takes 3-7 days." },
      { question: "How do mobile apps improve customer retention?", answer: "Mobile apps offer direct communication via push notifications, personalized user experiences, and offline accessibility, keeping your brand top-of-mind for the user." }
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    icon: <Palette size={20} />,
    faqs: [
      { question: "Why is premium UI/UX design critical for conversion?", answer: "High-end UI/UX design reduces friction in the user journey. By focusing on accessibility and premium aesthetics, you build immediate trust, which is the primary driver for online conversions." },
      { question: "What elements make a brand identity memorable?", answer: "A memorable brand identity requires a consistent visual language, a unique color psychology strategy, and a scalable logo system that works across all digital and print mediums." }
    ]
  }
];

export default function CategorizedFAQ() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentCategory = faqData.find(cat => cat.id === activeCategory) || faqData[0];

  // SEO: FAQ Schema Markup (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(cat => cat.faqs).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={styles['faq-v2-section']} id="faq">
      {/* Injecting JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className={styles['faq-v2-container']}>
        <div className={styles['faq-v2-layout']}>
          {/* Left: Sidebar Categories */}
          <div className="faq-v2-sidebar">
            <div className={styles['sidebar-sticky']}>
              <div className={styles['sidebar-label']}>Categories</div>
              {faqData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(null);
                  }}
                  className={`${styles['category-tab']} ${activeCategory === cat.id ? styles.active : ''}`}
                >
                  <span className={styles['cat-icon']}>{cat.icon}</span>
                  <span className={styles['cat-title']}>{cat.title}</span>
                  {activeCategory === cat.id && (
                    <motion.div layoutId="active-pill" className={styles['active-indicator']} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: FAQ Content */}
          <div className={styles['faq-v2-content']}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className={styles['faq-accordion-list']}>
                  {currentCategory.faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`${styles['faq-item-v2']} ${openIndex === idx ? styles.open : ''}`}
                      onClick={() => toggleAccordion(idx)}
                    >
                      <div className={styles['faq-question-row']}>
                        <div className={styles['q-wrap']}>
                          <HelpCircle className={styles['q-icon']} size={18} />
                          <h3>{faq.question}</h3>
                        </div>
                        <div className={styles['faq-toggle-icon']}>
                          {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </div>

                      <div className={styles['faq-answer-row']}>
                        <div className={styles['answer-content']}>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Support CTA */}
            <div className={styles['faq-support-card']}>
              <div className="support-visual">
                <div className={styles['avatar-stack']}>
                  <div className={styles.avatar}>M</div>
                  <div className={styles.avatar}>S</div>
                  <div className={styles.avatar}>I</div>
                </div>
              </div>
              <div className={styles['support-info']}>
                <h4>Still have questions?</h4>
                <p>Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
              </div>
              <Link href="/contact" className={styles['btn-support']}>
                <MessageSquare size={18} />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
