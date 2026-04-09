'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import type { FAQItem } from '@/components/FAQAccordion';
import SectionReveal from '@/components/SectionReveal';

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    category: 'General',
    items: [
      { question: 'What is MS Infinix?', answer: 'MS Infinix is a premium technology company based in Udaipur, Rajasthan, India. We specialize in AI & Machine Learning, Web Development, Mobile App Development, Software Development, UI/UX Design, Cloud & DevOps, and Digital Marketing. Our mission is to deliver future-ready digital solutions that drive business growth.' },
      { question: 'Where is MS Infinix located?', answer: 'We are headquartered in Udaipur, Rajasthan 313001, India. We serve clients both locally and globally, offering remote collaboration and on-site support as needed.' },
      { question: 'What industries do you serve?', answer: 'We serve a wide range of industries including healthcare, fintech, e-commerce, education, real estate, logistics, hospitality, and SaaS startups. Our versatile team can adapt to any domain requirements.' },
      { question: 'Do you work with startups or only large enterprises?', answer: 'We work with businesses of all sizes — from early-stage startups to established enterprises. We tailor our solutions and engagement models to fit your specific needs and budget.' },
    ],
  },
  {
    category: 'Services & Process',
    items: [
      { question: 'What services does MS Infinix offer?', answer: 'We offer comprehensive technology services including AI & Machine Learning, Web Development (React, Next.js, Node.js), Mobile App Development (iOS, Android, Flutter, React Native), Custom Software Development, UI/UX Design, Cloud & DevOps (AWS, Azure, GCP), and Digital Marketing (SEO, PPC, Social Media).' },
      { question: 'How does the development process work?', answer: 'Our process follows six key phases: 1) Discovery & Requirements Gathering, 2) UI/UX Design & Prototyping, 3) Development & Coding, 4) Quality Assurance & Testing, 5) Deployment & Launch, 6) Post-Launch Support & Maintenance. We keep you informed at every stage.' },
      { question: 'How long does a typical project take?', answer: 'Project timelines depend on scope and complexity. A simple website takes 2-4 weeks, a mobile app 6-12 weeks, and complex enterprise solutions 3-6+ months. We provide detailed project timelines during our initial consultation.' },
      { question: 'Can you work with our existing team?', answer: 'Absolutely! We offer team augmentation services where our developers and designers integrate seamlessly with your existing team. We are flexible with communication tools, project management platforms, and workflows.' },
    ],
  },
  {
    category: 'Pricing & Support',
    items: [
      { question: 'How much do your services cost?', answer: 'Our pricing varies based on project scope, complexity, and timeline. We offer competitive rates and flexible engagement models including fixed-price projects, hourly rates, and dedicated team arrangements. Contact us for a personalized quote.' },
      { question: 'Do you offer post-launch support?', answer: 'Yes! We provide comprehensive post-launch support including bug fixes, security patches, performance optimization, feature updates, and 24/7 monitoring. We offer monthly maintenance plans to keep your solution running smoothly.' },
      { question: 'What is your payment structure?', answer: 'We typically follow a milestone-based payment structure: an initial deposit to begin the project, followed by payments at key milestones (design approval, development completion, launch). We accept bank transfers, and all major payment methods.' },
      { question: 'Do you sign NDAs?', answer: 'Yes, we take confidentiality very seriously. We are happy to sign Non-Disclosure Agreements (NDAs) before discussing any project details. Your intellectual property and business ideas are always safe with us.' },
    ],
  },
  {
    category: 'Technology',
    items: [
      { question: 'What technologies do you specialize in?', answer: 'We specialize in React, Next.js, Node.js, Python, Django, Flask, TensorFlow, PyTorch, Flutter, React Native, Swift, Kotlin, AWS, Azure, GCP, Docker, Kubernetes, MongoDB, PostgreSQL, Redis, and many more. We choose the best tech stack for each project.' },
      { question: 'Do you build AI-powered applications?', answer: 'Yes! Our dedicated AI division builds intelligent applications using machine learning, natural language processing, computer vision, and predictive analytics. We can integrate AI capabilities into existing applications or build custom AI solutions from scratch.' },
      { question: 'Can you help with cloud migration?', answer: 'Absolutely. We have extensive experience in cloud migration and modernization. We help businesses migrate from on-premise infrastructure to cloud platforms (AWS, Azure, GCP) with minimal downtime and maximum efficiency.' },
    ],
  },
];

export default function FAQPage(): React.JSX.Element {
  return (
    <>
      <div className="page-header">
        <div className="page-header-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">FAQ</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            Find answers to common questions about our services, process, and technology.
          </motion.p>
        </div>
      </div>

      {faqCategories.map((cat, i) => (
        <section key={i} className="section" style={{ paddingTop: i === 0 ? 60 : 40, paddingBottom: 40 }} id={`faq-${cat.category.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="container">
            <SectionReveal>
              <div className="section-header" style={{ marginBottom: 36 }}>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{cat.category}</h2>
              </div>
            </SectionReveal>
            <FAQAccordion items={cat.items} />
          </div>
        </section>
      ))}

      <section className="section" id="faq-cta">
        <div className="container">
          <SectionReveal>
            <div className="cta-section glass-card" style={{ padding: '80px 40px', borderRadius: 'var(--radius-xl)' }}>
              <div className="cta-bg" />
              <div className="cta-content">
                <h2>Still Have <span className="gradient-text">Questions</span>?</h2>
                <p>Can&apos;t find the answer you&apos;re looking for? Our team is happy to help.</p>
                <div className="cta-buttons">
                  <Link href="/contact" className="btn btn-glow" id="faq-cta-btn">Contact Us →</Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
