'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  faqs: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    id: 'marketing',
    title: 'Digital Marketing & SEO',
    faqs: [
      { question: "How does MS Infinex improve my search engine rankings?", answer: "We implement advanced technical SEO, including schema markup, Core Web Vitals optimization, and high-authority link building tailored to specific industry keywords." },
      { question: "What is the typical ROI for a digital marketing campaign?", answer: "While ROI varies by sector, our data-driven approach typically sees a 300% increase in lead conversion rates within the first 6 months of execution." },
      { question: "Do you provide monthly performance reports?", answer: "Yes, we providing transparent, granular reporting including CTR, conversion metrics, and keyword movement through enterprise-grade analytics dashboards." },
      { question: "How long does it take to see results from SEO?", answer: "Initial improvements often appear within 45-60 days, with full authority build and stable top-tier rankings established within 4-6 months." },
      { question: "Can you manage global marketing campaigns?", answer: "Absolutely. We engineer multi-regional campaigns that respect local cultural nuances while maintaining global brand consistency using geo-targeted Paid Ads." },
      { question: "What platforms do you specialize in for Paid Ads?", answer: "We are experts in Google Ads (Search, Display, Shopping), Meta Ads, LinkedIn Marketing, and Amazon Advertising ecosystems." },
      { question: "How do you handle content strategy for SEO?", answer: "Our content is engineered for both user intent and search algorithms, focusing on high-value semantic clusters that establish your brand as a topical authority." },
      { question: "Do you offer localized SEO for Udaipur businesses?", answer: "Yes, we specialize in hyper-local SEO strategies to dominate the Udaipur and Rajasthan markets, capturing high-intent local traffic." },
      { question: "Is social media marketing included in digital strategy?", answer: "We offer comprehensive SMM as a core component, focusing on engagement metrics and social-proof that indirectly boosts your main site's authority." },
      { question: "How often do you refresh ad creatives?", answer: "We perform weekly A/B testing on ad creatives to prevent ad fatigue and ensure your Cost Per Acquisition (CPA) remains at the lowest possible threshold." }
    ]
  },
  {
    id: 'development',
    title: 'Web & E-commerce Development',
    faqs: [
      { question: "What technologies do you use for web development?", answer: "We specialize in the T3 stack (Next.js, Tailwind, TypeScript), Node.js, and high-performance React frameworks for enterprise-grade scalability." },
      { question: "Is every website you build mobile-responsive?", answer: "Yes, every portal is built with a mobile-first philosophy, ensuring seamless functionality across all device form-factors and browsers." },
      { question: "Do you provide custom e-commerce solutions?", answer: "We engineer high-conversion storefronts using custom WooCommerce, Shopify Headless, and bespoke MERN stack solutions for complex retail requirements." },
      { question: "How do you ensure website security?", answer: "We implement multi-layer security protocols including SSL/TLS encryption, WAF integration, and regular automated vulnerability scanning." },
      { question: "Can you integrate third-party APIs?", answer: "We have deep expertise in integrating complex APIs, including global payment gateways, ERP systems, and custom CRM middlewares." },
      { question: "What is your approach to website speed?", answer: "We focus on ultra-fast load times through image optimization, lazy loading, and edge-computing CDN integration (Vercel/Cloudflare)." },
      { question: "Do you offer custom CMS development?", answer: "Yes, we build user-friendly custom CMS environments that allow your team to manage content without any technical knowledge." },
      { question: "Can you redesign an existing website?", answer: "We provide comprehensive UI/UX overhauls that focus on modern minimalist design and conversion rate optimization (CRO)." },
      { question: "Do you provide hosting services?", answer: "We assist in setting up enterprise-grade cloud hosting on AWS, Google Cloud, or Azure, optimized specifically for your application's architecture." },
      { question: "Is the site code SEO-friendly?", answer: "Every line of code is written with SEO in mind, ensuring proper semantic HTML, meta-tags, and rapid indexability." }
    ]
  },
  {
    id: 'apps',
    title: 'Mobile App Engineering',
    faqs: [
      { question: "Which platforms do you build mobile apps for?", answer: "We develop native-performance applications for both iOS and Android using Cross-Platform frameworks like Flutter and React Native." },
      { question: "Can you help with App Store Optimization (ASO)?", answer: "Yes, we provide full ASO services including keyword research and optimized visual assets to ensure high visibility on both Play Store and App Store." },
      { question: "How long does it take to build a mobile app?", answer: "A typical MVP (Minimum Viable Product) takes 8-12 weeks, while complex enterprise apps can take 4-6 months of focused engineering." },
      { question: "Do you handle the app store submission process?", answer: "Yes, we manage the entire deployment lifecycle, ensuring your app complies with all Apple and Google developer guidelines." },
      { question: "Can you integrate biometric authentication?", answer: "We can integrate advanced security features including FaceID, Fingerprint scanning, and multi-factor authentication (MFA)." },
      { question: "Do you offer app maintenance services?", answer: "We provide dedicated post-launch support packs for OS updates, bug fixes, and continuous feature enhancement." },
      { question: "Can existing websites be converted to apps?", answer: "Yes, we can transform your web architecture into a Progressive Web App (PWA) or a high-performance Hybrid application." },
      { question: "How do you handle offline functionality?", answer: "We implement local data caching and synchronization logic so your app remains functional even in areas with low connectivity." },
      { question: "Will my app be scalable for millions of users?", answer: "All our app backends are built on cloud-native serverless architectures that auto-scale based on real-time user traffic." },
      { question: "Do you provide UI/UX prototypes before coding?", answer: "Absolutely. We start every project with interactive Figma prototypes so you can experience the user flow before a single line of code is written." }
    ]
  },
  {
    id: 'branding',
    title: 'Branding & UI/UX Design',
    faqs: [
      { question: "What is included in a branding package?", answer: "Our packages include logo design, color typography systems, brand voice guidelines, and high-fidelity digital asset kits." },
      { question: "Do you create corporate identity guidelines?", answer: "Yes, we provide comprehensive 'Brand Bibles' that ensure visual and messaging consistency across every marketing touchpoint." },
      { question: "What is your design philosophy?", answer: "We follow a high-end minimalist approach, focusing on 'Apple-style' clarity, premium spacing, and functional aesthetics that build trust." },
      { question: "Can you design for print media as well?", answer: "While we are digital-first, we provide high-resolution vectorized assets for billboards, stationary, and professional merchandise." },
      { question: "How many logo iterations do you provide?", answer: "Typically, we provide 3 distinct directions with multiple rounds of refinement until the brand identity is perfect." },
      { question: "Do you conduct user research?", answer: "Every UI/UX project starts with deep user persona analysis and competitor benchmarking to ensure your design outperforms the market." },
      { question: "What tools do your designers use?", answer: "We utilize industry-leading tools like Figma, Adobe Creative Suite, and Spline for 3D web visualizations." },
      { question: "Can you refresh an old brand logo?", answer: "Yes, we specialize in 'Brand Modernization' where we evolve your existing logo into a modern, minimalist masterpiece." },
      { question: "Is UI/UX design different from Graphic Design?", answer: "Yes, UI/UX focuses on the logic, usability, and interactive flow of digital products, whereas Graphic Design focuses on visual messaging." },
      { question: "Do you provide 3D brand assets?", answer: "Yes, we can create abstract 3D assets and animations that give your brand a futuristic, high-tech visual edge." }
    ]
  },
  {
    id: 'marketplace',
    title: 'Marketplace Management',
    faqs: [
      { question: "Which marketplaces do you manage?", answer: "We specialize in Amazon (Seller/Vendor Central), Flipkart, Myntra, and Nykaa management for both national and international sellers." },
      { question: "How do you increase sales on Amazon?", answer: "We focus on high-intent keyword optimization, A+ content creation, and aggressive Amazon PPC management to drive BSR (Best Seller Rank)." },
      { question: "Do you handle inventory forecasting?", answer: "Yes, we provide data-driven inventory insights to ensure you never go out of stock or overstock during peak sale seasons." },
      { question: "Can you help with brand registry?", answer: "We manage the entire Brand Registry process, giving you access to protected listings and advanced marketing tools." },
      { question: "What is A+ Content (EBC)?", answer: "A+ Content (Enhanced Brand Content) allows us to add rich visual storytelling to your product pages, significantly boosting conversion rates." },
      { question: "Do you manage marketplace advertisements?", answer: "We are experts in Amazon Sponsored Products, Brands, and Video ads, optimizing for the lowest possible ACOS (Advertising Cost of Sales)." },
      { question: "How do you handle negative reviews?", answer: "We implement white-hat review management strategies to ethically build social proof and resolve customer complaints rapidly." },
      { question: "Can you manage my entire e-commerce operation?", answer: "Yes, we offer 'End-to-End' management where we handle everything from listing and pricing to advertising and logistics coordination." },
      { question: "Do you provide marketplace competitor analysis?", answer: "We use enterprise tools like Helium 10 and Jungle Scout to track competitor movements and price your products for maximum profit." },
      { question: "What is the benefit of hiring a management agency?", answer: "Hiring us allows you to focus on production while we leverage our technical algorithms to scale your sales 10x faster than manual management." }
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
              {faqData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(null);
                  }}
                  className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right: FAQ Content */}
          <div className="faq-v2-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="faq-accordion-list">
                  {currentCategory.faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`faq-item-v2 ${openIndex === idx ? 'open' : ''}`}
                      onClick={() => toggleAccordion(idx)}
                    >
                      <div className="faq-question-row">
                        <h3>{faq.question}</h3>
                        <div className="faq-toggle-icon">
                          {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                      </div>
                      <div className="faq-answer-row">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom: Contact CTA */}
            <div className="faq-support-card">
              <div className="support-info">
                <h4>Still have questions?</h4>
                <p>Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
              </div>
              <Link href="/contact" className="btn-support">
                <MessageSquare size={18} />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-v2-section {
          padding: 100px 0;
          background: var(--bg-primary);
        }
        .faq-v2-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .faq-v2-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 60px;
          align-items: flex-start;
        }
        .sidebar-sticky {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .category-tab {
          padding: 16px 24px;
          text-align: left;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-secondary);
          background: transparent;
          border: 1px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .category-tab:hover {
          color: var(--text-primary);
          background: rgba(255, 138, 0, 0.05);
        }
        .category-tab.active {
          color: #ff8a00;
          background: rgba(255, 138, 0, 0.1);
          border-color: rgba(255, 138, 0, 0.2);
        }
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-item-v2 {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .faq-question-row {
          padding: 24px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .faq-question-row h3 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.4;
        }
        .faq-toggle-icon {
          color: var(--text-secondary);
          transition: transform 0.3s ease;
        }
        .faq-answer-row {
          max-height: 0;
          padding: 0 30px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }
        .faq-item-v2.open .faq-answer-row {
          max-height: 300px;
          padding-bottom: 30px;
          opacity: 1;
        }
        .faq-answer-row p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0;
        }
        .faq-item-v2:hover {
          border-color: rgba(255, 138, 0, 0.3);
          transform: translateY(-2px);
        }
        .faq-support-card {
          margin-top: 60px;
          padding: 30px 40px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }
        .support-info h4 {
          font-size: 1.25rem;
          font-weight: 850;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .support-info p {
          color: var(--text-secondary);
          margin: 0;
        }
        .btn-support {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #ff8a00;
          color: white;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        .btn-support:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 138, 0, 0.4);
        }

        @media (max-width: 992px) {
          .faq-v2-layout {
            grid-template-columns: 1fr;
            gap: 40px;
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
            padding: 40px 30px;
          }
        }
      `}</style>
    </section>
  );
}
