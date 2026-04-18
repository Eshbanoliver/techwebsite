'use client';

import { useState } from 'react';
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
      { question: "How does MS Infinex improve my search engine rankings?", answer: "We implement advanced technical SEO, including schema markup, Core Web Vitals optimization, and high-authority link building tailored to specific industry keywords." },
      { question: "What is the typical ROI for a digital marketing campaign?", answer: "While ROI varies by sector, our data-driven approach typically sees a 300% increase in lead conversion rates within the first 6 months of execution." },
      { question: "Do you provide monthly performance reports?", answer: "Yes, we providing transparent, granular reporting including CTR, conversion metrics, and keyword movement through enterprise-grade analytics dashboards." },
      { question: "How long does it take to see results from SEO?", answer: "Initial improvements often appear within 45-60 days, with full authority build and stable top-tier rankings established within 4-6 months." },
      { question: "Can you manage global marketing campaigns?", answer: "Absolutely. We engineer multi-regional campaigns that respect local cultural nuances while maintaining global brand consistency using geo-targeted Paid Ads." }
    ]
  },
  {
    id: 'development',
    title: 'Web Development',
    icon: <Code size={20} />,
    faqs: [
      { question: "What technologies do you use for web development?", answer: "We specialize in the T3 stack (Next.js, Tailwind, TypeScript), Node.js, and high-performance React frameworks for enterprise-grade scalability." },
      { question: "Is every website you build mobile-responsive?", answer: "Yes, every portal is built with a mobile-first philosophy, ensuring seamless functionality across all device form-factors and browsers." },
      { question: "Do you provide custom e-commerce solutions?", answer: "We engineer high-conversion storefronts using custom WooCommerce, Shopify Headless, and bespoke MERN stack solutions for complex retail requirements." },
      { question: "How do you ensure website security?", answer: "We implement multi-layer security protocols including SSL/TLS encryption, WAF integration, and regular automated vulnerability scanning." }
    ]
  },
  {
    id: 'apps',
    title: 'App Engineering',
    icon: <Smartphone size={20} />,
    faqs: [
      { question: "Which platforms do you build mobile apps for?", answer: "We develop native-performance applications for both iOS and Android using Cross-Platform frameworks like Flutter and React Native." },
      { question: "Can you help with App Store Optimization (ASO)?", answer: "Yes, we provide full ASO services including keyword research and optimized visual assets to ensure high visibility on both Play Store and App Store." },
      { question: "How long does it take to build a mobile app?", answer: "A typical MVP (Minimum Viable Product) takes 8-12 weeks, while complex enterprise apps can take 4-6 months of focused engineering." }
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    icon: <Palette size={20} />,
    faqs: [
      { question: "What is included in a branding package?", answer: "Our packages include logo design, color typography systems, brand voice guidelines, and high-fidelity digital asset kits." },
      { question: "What is your design philosophy?", answer: "We follow a high-end minimalist approach, focusing on 'Apple-style' clarity, premium spacing, and functional aesthetics that build trust." },
      { question: "Can you refresh an old brand logo?", answer: "Yes, we specialize in 'Brand Modernization' where we evolve your existing logo into a modern, minimalist masterpiece." }
    ]
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    icon: <ShoppingBag size={20} />,
    faqs: [
      { question: "Which marketplaces do you manage?", answer: "We specialize in Amazon (Seller/Vendor Central), Flipkart, Myntra, and Nykaa management for both national and international sellers." },
      { question: "How do you increase sales on Amazon?", answer: "We focus on high-intent keyword optimization, A+ content creation, and aggressive Amazon PPC management to drive BSR (Best Seller Rank)." }
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

  return (
    <section className="faq-v2-section">
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
                    <motion.div luxury-indicator layoutId="active-pill" className="active-indicator" />
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
          color: var(--text-secondary);
          margin-bottom: 20px;
          padding-left: 20px;
          opacity: 0.6;
        }
        .category-tab {
          padding: 20px 24px;
          text-align: left;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-secondary);
          background: transparent;
          border: none;
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
          background: rgba(255, 255, 255, 0.03);
        }
        .category-tab.active {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }
        .active-indicator {
          position: absolute;
          left: 0;
          width: 4px;
          height: 30px;
          background: #ff8a00;
          border-radius: 0 4px 4px 0;
          box-shadow: 0 0 15px rgba(255, 138, 0, 0.6);
        }
        .cat-icon {
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .category-tab.active .cat-icon {
          opacity: 1;
          color: #ff8a00;
          transform: scale(1.1);
        }
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .faq-item-v2 {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        .faq-question-row {
          padding: 30px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }
        .q-wrap {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .q-icon {
          color: #ff8a00;
          opacity: 0.6;
        }
        .faq-question-row h3 {
          font-size: 1.2rem;
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
          background: rgba(255, 255, 255, 0.05);
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
        .faq-item-v2:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 138, 0, 0.3);
          transform: translateX(5px);
        }
        .faq-support-card {
          margin-top: 80px;
          padding: 40px;
          background: linear-gradient(135deg, rgba(255, 138, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
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
          border: 3px solid #111;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          margin-left: -15px;
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

        @media (max-width: 1200px) {
          .faq-v2-layout { gap: 60px; }
        }

        @media (max-width: 992px) {
          .faq-v2-layout {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .sidebar-sticky {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 15px;
            top: 80px;
          }
          .category-tab {
            white-space: nowrap;
          }
          .faq-support-card {
            flex-direction: column;
            text-align: center;
            padding: 50px 30px;
          }
          .avatar-stack { justify-content: center; margin-bottom: 10px; }
          .faq-answer-row { padding-left: 40px; }
        }
      `}</style>
    </section>
  );
}
