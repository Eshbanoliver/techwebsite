'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp, 
  Share2, 
  Megaphone, 
  Globe, 
  Smartphone, 
  Paintbrush, 
  Brain, 
  ShoppingCart,
  MessageCircle,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  category: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: 'digital-marketing',
    category: 'Digital Marketing',
    icon: <TrendingUp size={24} />,
    items: [
      { question: 'What is Local SEO and why does my Udaipur business need it?', answer: 'Local SEO optimizes your business to appear in "near me" and Google Maps searches. For Udaipur businesses, this means being the first choice for tourists or locals searching for your specific services in the city.' },
      { question: 'How long does it take to see results from SEO?', answer: 'SEO is a long-term game. Typically, you can see initial movement in 3-4 months, with significant ranking improvements and traffic growth in 6-12 months.' },
      { question: 'Do you manage Google Business Profiles?', answer: 'Yes, we handle complete Google Business Profile (GBP) optimization, including daily posts, review management, and photo updates to keep you ranking high in the Map Pack.' }
    ]
  },
  {
    id: 'social-media',
    category: 'Social Media Marketing',
    icon: <Share2 size={24} />,
    items: [
      { question: 'Which social platforms are best for my business?', answer: 'For Udaipur brands like cafes and hotels, Instagram and Facebook are essential. For B2B or coaching, LinkedIn might be better. we analyze your audience to pick the perfect platforms.' },
      { question: 'Do you provide content creation (photos/videos)?', answer: 'Yes! We have specialized packages for content creation, including professional Reels, food photography, and lifestyle shots at your Udaipur location.' },
      { question: 'How often will you post on our social media?', answer: 'Depending on your package, we typically post 3-6 times a week on the feed, with daily story updates to keep your audience engaged.' }
    ]
  },
  {
    id: 'paid-ads',
    category: 'Paid Ads (PPC)',
    icon: <Megaphone size={24} />,
    items: [
      { question: 'What is the minimum budget for Google Ads?', answer: 'For Udaipur local search ads, we recommend a minimum of ₹10,000-₹15,000 per month to get enough data and meaningful conversions.' },
      { question: 'Do you guarantee leads from Meta Ads?', answer: 'While no agency can guarantee a specific number, our data-driven targeting strategies typically result in high-quality leads at the lowest possible cost per acquisition.' },
      { question: 'Can you target specific locations in Udaipur?', answer: 'Yes, we can hyper-target specific areas (e.g., Fatehsagar, Old City, Hiran Magri) or a radius around your business location.' }
    ]
  },
  {
    id: 'web-dev',
    category: 'Web Development',
    icon: <Globe size={24} />,
    items: [
      { question: 'How long does it take to build a business website?', answer: 'A standard business website typically takes 2-4 weeks. Larger e-commerce stores or custom portals can take 6-12 weeks depending on complexity.' },
      { question: 'Will my website work on mobile devices?', answer: 'Absolutely. Every website we build is "Mobile-First," meaning it is optimized for high performance and perfect layout on smartphones and tablets.' },
      { question: 'Do you provide hosting and domain services?', answer: 'Yes, we offer complete managed hosting, domain registration, and SSL security as part of our website maintenance packages.' }
    ]
  },
  {
    id: 'app-dev',
    category: 'App Development',
    icon: <Smartphone size={24} />,
    items: [
      { question: 'Is a mobile app necessary for my small business?', answer: 'Not always. Sometimes a Progressive Web App (PWA) is better. We help you evaluate if an app will truly drive ROI or if a great mobile site is enough.' },
      { question: 'Can you build both Android and iOS apps?', answer: 'Yes, we specialize in cross-platform technologies like Flutter and React Native, which allow us to build for both platforms simultaneously, saving you time and money.' },
      { question: 'Do you handle App Store publishing?', answer: 'Yes, we manage the entire submission and approval process for the Google Play Store and Apple App Store.' }
    ]
  },
  {
    id: 'branding',
    category: 'Branding & Design',
    icon: <Paintbrush size={24} />,
    items: [
      { question: 'What does a complete brand identity include?', answer: 'A full identity package includes a professional logo, color palette, typography selection, business cards, letterheads, and a brand guideline document.' },
      { question: 'Can you redesign my existing logo?', answer: 'Yes, we offer "Brand Refresh" services where we modernize your existing brand while keeping the core elements that your customers already recognize.' }
    ]
  },
  {
    id: 'ai-solutions',
    category: 'AI Solutions',
    icon: <Brain size={24} />,
    items: [
      { question: 'How can AI help my local business?', answer: 'AI can handle 24/7 customer support via chatbots, automate repetitive administrative tasks, and provide insights into your customers\' preferences and buying patterns.' },
      { question: 'Are AI solutions expensive?', answer: 'Not anymore. With modern tools, we can implement powerful AI automations for Udaipur businesses at very accessible price points.' }
    ]
  },
  {
    id: 'ecommerce',
    category: 'E-Commerce Management',
    icon: <ShoppingCart size={24} />,
    items: [
      { question: 'Do you help list products on Amazon and Flipkart?', answer: 'Yes, we handle the entire process: account setup, product listing optimization, brand registry, and managing marketplace advertisements.' },
      { question: 'Can you manage my entire online store?', answer: 'Yes, our marketplace management services ranging from inventory management to processing orders and handling customer queries.' }
    ]
  }
];

export default function FAQPage(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>(faqCategories[0].id);
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  const toggleItem = (catId: string, index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [catId]: prev[catId] === index ? null : index
    }));
  };

  // Generate FAQ Schema (JSON-LD) for rich search results
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap(cat =>
      cat.items.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-header faq-hero">
        <div className="container">
          <div className="page-header-content">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="section-label">Support Center</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              Clear answers to help you navigate your digital transformation journey with MS Infinex.
            </motion.p>
          </div>
        </div>
      </div>

      <section className="section faq-main">
        <div className="container">
          <div className="faq-layout">
            <aside className="faq-sidebar">
              <div className="sidebar-sticky-box">
                <h3 className="sidebar-title">Categories</h3>
                <div className="faq-nav">
                  {faqCategories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`faq-nav-item ${activeCategory === cat.id ? 'active' : ''}`}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        const element = document.getElementById(cat.id);
                        if (element) {
                          const offset = 100;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = element.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;
                          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                        }
                      }}
                    >
                      <span className="faq-nav-icon">{cat.icon}</span>
                      <span className="faq-nav-label">{cat.category}</span>
                    </button>
                  ))}
                </div>
                
                <div className="faq-support-card glass-card">
                  <h4>Need more help?</h4>
                  <p>Our support team is available Mon-Sat, 9AM-7PM IST.</p>
                  <Link href="/contact" className="support-link">
                    Contact Support <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>

            <div className="faq-content">
              {faqCategories.map((cat, catIdx) => (
                <div key={cat.id} id={cat.id} className="faq-category-block">
                  <div className="category-header">
                    <div className="category-icon-box">{cat.icon}</div>
                    <h2 className="category-title">{cat.category}</h2>
                  </div>
                  
                  <div className="faq-accordion-custom">
                    {cat.items.map((item, idx) => {
                      const isOpen = openItems[cat.id] === idx;
                      return (
                        <div key={idx} className={`faq-row ${isOpen ? 'open' : ''}`}>
                          <button 
                            className="faq-trigger" 
                            onClick={() => toggleItem(cat.id, idx)}
                          >
                            <span className="faq-q-text">{item.question}</span>
                            <span className="faq-icon-indicator">
                              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </span>
                          </button>
                          <div className="faq-answer-box">
                            <div className="faq-answer-inner">
                              <p>{item.answer}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-cta-bottom">
        <div className="container">
          <div className="cta-bordered-box">
            <div className="cta-flex">
              <div className="cta-text">
                <h2>Still have <span className="gradient-text">doubts</span>?</h2>
                <p>Let&apos;s talk about your business goals and how we can achieve them together.</p>
              </div>
              <div className="cta-action">
                <Link href="/contact" className="btn btn-primary">
                  Get a Free Consultation
                </Link>
                <div className="whatsapp-fast">
                  <MessageCircle size={20} />
                  <span>Avg. response: 15 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
