'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';

interface ServiceDetail {
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  icon: string;
}

const services: ServiceDetail[] = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    desc: 'Harness the power of artificial intelligence to automate processes, gain predictive insights, and build intelligent applications that learn and adapt. Our AI solutions are designed to give your business a competitive edge in the data-driven economy.',
    features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Chatbots & Virtual Assistants', 'Recommendation Engines', 'Data Mining & Analysis'],
  },
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'We build stunning, high-performance websites and web applications using the latest frameworks and best practices. From corporate sites to complex SaaS platforms, we deliver pixel-perfect, responsive, and blazing-fast web experiences.',
    features: ['React & Next.js', 'Progressive Web Apps', 'E-Commerce Solutions', 'Custom CMS Development', 'API Development', 'Performance Optimization'],
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Create powerful native and cross-platform mobile applications that users love. We design and develop feature-rich iOS and Android apps with smooth animations, offline support, and seamless backend integration.',
    features: ['iOS Development (Swift)', 'Android Development (Kotlin)', 'React Native', 'Flutter', 'App Store Optimization', 'Push Notifications & Analytics'],
  },
  {
    icon: '💻',
    title: 'Software Development',
    desc: 'Custom enterprise software solutions tailored to your unique business requirements. From workflow automation to complex data management systems, we build reliable, scalable software that drives productivity.',
    features: ['Enterprise Applications', 'Workflow Automation', 'ERP & CRM Systems', 'Legacy System Modernization', 'Microservices Architecture', 'Database Design'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive interfaces designed with a deep understanding of user behavior and psychology. We create designs that not only look stunning but also drive engagement, conversion, and user satisfaction.',
    features: ['User Research & Personas', 'Wireframing & Prototyping', 'Visual Design Systems', 'Interaction Design', 'Usability Testing', 'Design Sprints'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Build robust, scalable cloud infrastructure with automated deployment pipelines. We help you leverage cloud-native services, containerization, and monitoring to ensure your applications are always available and performing at their best.',
    features: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security & Compliance'],
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    desc: 'Data-driven digital marketing strategies that maximize your online visibility, attract qualified leads, and drive sustainable growth. We combine creativity with analytics to deliver measurable results across all channels.',
    features: ['Search Engine Optimization', 'Pay-Per-Click Advertising', 'Social Media Marketing', 'Content Strategy', 'Email Campaigns', 'Analytics & Reporting'],
  },
];

const processSteps: ProcessStep[] = [
  { num: '01', title: 'Discovery', desc: 'We analyze your needs, goals, and market to define the perfect strategy.', icon: '🔍' },
  { num: '02', title: 'Design', desc: 'Crafting wireframes and visual designs that align with your brand identity.', icon: '🎨' },
  { num: '03', title: 'Development', desc: 'Building your solution with clean, efficient, and well-tested code.', icon: '⚙️' },
  { num: '04', title: 'Testing', desc: 'Rigorous QA testing across devices and scenarios for a flawless launch.', icon: '✅' },
  { num: '05', title: 'Launch', desc: 'Deploying your solution with full monitoring and performance optimization.', icon: '🚀' },
  { num: '06', title: 'Support', desc: 'Ongoing maintenance, updates, and feature enhancements post-launch.', icon: '💎' },
];

export default function ServicesPage(): React.JSX.Element {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">Our Services</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Solutions That <span className="gradient-text">Transform</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            Comprehensive technology services designed to accelerate your business growth and digital presence.
          </motion.p>
        </div>
      </div>

      {/* Services List */}
      <section className="service-detail" id="services-list">
        <div className="container">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="service-detail-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id={`service-${i}`}
            >
              <div className="service-detail-icon">{s.icon}</div>
              <div className="service-detail-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-detail-features">
                  {s.features.map((f, j) => (
                    <span key={j} className="service-feature-tag">{f}</span>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-secondary" style={{ display: 'inline-flex' }}>
                  Get Started →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section" id="our-process">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Our Process</span>
              <h2 className="section-title">How We <span className="gradient-text">Deliver</span></h2>
              <p className="section-subtitle">A streamlined, transparent process that ensures quality at every step.</p>
            </div>
          </SectionReveal>
          <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="glass-card"
                style={{ padding: '36px 24px', textAlign: 'center' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{step.icon}</div>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 800,
                  color: 'var(--neon-blue)', marginBottom: 8, letterSpacing: 1,
                }}>
                  STEP {step.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 10, fontSize: '1.1rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="services-cta">
        <div className="container">
          <SectionReveal>
            <div className="cta-section glass-card" style={{ padding: '80px 40px', borderRadius: 'var(--radius-xl)' }}>
              <div className="cta-bg" />
              <div className="cta-content">
                <h2>Need a Custom <span className="gradient-text">Solution</span>?</h2>
                <p>Tell us about your project and we&apos;ll craft the perfect technology strategy for your goals.</p>
                <div className="cta-buttons">
                  <Link href="/contact" className="btn btn-glow" id="services-cta-btn">Get a Free Quote →</Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
