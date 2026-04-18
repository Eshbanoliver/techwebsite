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
    <section className="faq-v2-section">
      {/* Injecting JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="faq-v2-container">
        <div className="faq-v2-layout">
          {/* Left: Sidebar Categories */}
          <div className="faq-v2-sidebar">
            <div className="sidebar-sticky">
              <div className="sidebar-label">Categories</div>
              {faqData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(null);
                  }}
                  className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-title">{cat.title}</span>
                  {activeCategory === cat.id && (
                    <motion.div layoutId="active-pill" className="active-indicator" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: FAQ Content */}
          <div className="faq-v2-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="faq-accordion-list">
                  {currentCategory.faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`faq-item-v2 ${openIndex === idx ? 'open' : ''}`}
                      onClick={() => toggleAccordion(idx)}
                    >
                      <div className="faq-question-row">
                        <div className="q-wrap">
                          <HelpCircle className="q-icon" size={18} />
                          <h3>{faq.question}</h3>
                        </div>
                        <div className="faq-toggle-icon">
                          <Plus size={20} style={{ transform: openIndex === idx ? 'rotate(135deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                        </div>
                      </div>
                      <div className="faq-answer-row">
                        <div className="answer-content">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom: Contact CTA */}
            <div className="faq-support-card">
              <div className="support-visual">
                <div className="avatar-stack">
                  <div className="avatar">M</div>
                  <div className="avatar">S</div>
                  <div className="avatar">I</div>
                </div>
              </div>
              <div className="support-info">
                <h4>Still have questions?</h4>
                <p>Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
              </div>
              <Link href="/contact" className="btn-support">
                <MessageSquare size={18} />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-v2-section {
          padding: 120px 0;
          background: var(--bg-primary);
          position: relative;
        }
        .faq-v2-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .faq-v2-layout {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 100px;
          align-items: flex-start;
        }
        .sidebar-sticky {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .sidebar-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 800;
          color: var(--text-muted);
          margin-bottom: 20px;
          padding-left: 20px;
        }
        .category-tab {
          padding: 20px 24px;
          text-align: left;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-secondary);
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 15px;
          position: relative;
        }
        .category-tab:hover {
          color: var(--text-primary);
          background: var(--bg-glass-hover);
          border-color: rgba(255, 138, 0, 0.3);
        }
        .category-tab.active {
          color: var(--text-primary);
          background: var(--bg-glass-hover);
          border-color: #ff8a00;
          box-shadow: 0 5px 15px rgba(255, 138, 0, 0.1);
        }
        .active-indicator {
          position: absolute;
          left: 0;
          top: 25%;
          height: 50%;
          width: 4px;
          background: #ff8a00;
          border-radius: 0 4px 4px 0;
        }
        
        .faq-v2-content {
          position: relative;
        }
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .faq-item-v2 {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .faq-question-row {
          padding: 32px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }
        .q-wrap {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .q-icon {
          color: #ff8a00;
          flex-shrink: 0;
        }
        .faq-question-row h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }
        .faq-toggle-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }
        .faq-answer-row {
          max-height: 0;
          padding: 0 40px 0 80px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
        }
        .faq-item-v2.open .faq-answer-row {
          max-height: 400px;
          padding-bottom: 40px;
          opacity: 1;
        }
        .answer-content {
          border-left: 2px solid rgba(255, 138, 0, 0.2);
          padding-left: 30px;
        }
        .faq-answer-row p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0;
        }
        .faq-item-v2:hover, .faq-item-v2.open {
          background: var(--bg-glass-hover);
          border-color: rgba(255, 138, 0, 0.6);
          transform: translateX(5px);
          box-shadow: var(--shadow-glass);
        }
        .faq-support-card {
          margin-top: 80px;
          padding: 40px;
          background: var(--gradient-subtle);
          border: 1px solid rgba(255, 138, 0, 0.2);
          border-radius: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          position: relative;
          overflow: hidden;
        }
        .avatar-stack {
          display: flex;
          align-items: center;
        }
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #333;
          border: 3px solid var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          margin-left: -15px;
          color: white;
        }
        .avatar:first-child { margin-left: 0; background: #ff8a00; }
        .support-info h4 {
          font-size: 1.5rem;
          font-weight: 850;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .support-info p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          margin: 0;
        }
        .btn-support {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: #ff8a00;
          color: white;
          border-radius: 16px;
          font-weight: 800;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
          box-shadow: 0 10px 30px rgba(255, 138, 0, 0.3);
        }
        .btn-support:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(255, 138, 0, 0.5);
        }

        @media (max-width: 1024px) {
          .faq-v2-container { padding: 0 24px; }
          .faq-v2-layout { gap: 40px; }
        }

        @media (max-width: 992px) {
          .faq-v2-section {
            width: 100%;
            padding: 60px 0;
            overflow: hidden;
          }
          .faq-v2-container {
            width: 100%;
            padding: 0 16px;
            overflow: hidden;
          }
          .faq-v2-layout {
            grid-template-columns: 100%;
            gap: 30px;
          }
          .sidebar-label {
            display: none !important;
          }
          .sidebar-sticky {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            padding: 10px 0 20px;
            width: 100%;
            position: relative;
            top: 0;
          }
          
          .category-tab {
            padding: 10px 12px;
            justify-content: center;
            flex-direction: column;
            gap: 6px;
            text-align: center;
            border-radius: 12px;
          }
          .category-tab .cat-title { 
            font-size: 0.75rem; 
            line-height: 1.2;
            white-space: normal; /* Allow text to wrap if needed */
          }
          .category-tab .cat-icon { font-size: 1rem; }
          .active-indicator {
            left: 20%;
            top: auto;
            bottom: 0px;
            height: 3px;
            width: 60%;
            border-radius: 3px 3px 0 0;
          }

          .faq-v2-content { width: 100%; }
          .faq-item-v2 { width: 100% !important; margin: 0 !important; }
          .faq-question-row { padding: 20px 16px; }
          .faq-answer-row { padding: 0 16px 0 16px; }
          .faq-question-row h3 { font-size: 1rem; }
          
          .faq-support-card {
            width: 100%;
            flex-direction: column;
            text-align: center;
            padding: 30px 16px;
            border-radius: 20px;
          }
          .btn-support { width: 100%; justify-content: center; }
          .faq-item-v2:hover { transform: none; }
        }

        @media (max-width: 480px) {
          .sidebar-sticky {
            gap: 8px;
          }
          .category-tab {
            padding: 8px;
          }
          .category-tab .cat-title { font-size: 0.7rem; }
        }
      `}</style>
    </section>
  );
}
