'use client';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Rocket, Users, Calendar, Cpu, BrainCircuit, Layout, Smartphone, Code, 
  Palette, Cloud, TrendingUp, Zap, Target, Search, CheckCircle, Lightbulb, 
  ShieldCheck, Star, Mail, Phone, MapPin, ArrowRight
} from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import FAQAccordion from '@/components/FAQAccordion';

interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  glow: string;
  metrics: { end: number; suffix: string; label: string; icon: React.ReactNode }[];
  whyUs: string[];
  faqs: { question: string; answer: string }[];
}

const serviceData: Record<string, ServiceDetail> = {
  'ai-ml': {
    title: 'AI & Machine Learning',
    subtitle: 'Autonomous Intelligence for the Modern Enterprise',
    description: 'We build intelligent solutions that learn, adapt, and scale. From predictive analytics to natural language processing, our AI systems are designed to unlock hidden value and drive unprecedented efficiency.',
    icon: <BrainCircuit size={48} />,
    glow: 'glow-cyan',
    metrics: [
      { end: 95, suffix: '%', label: 'Inference Accuracy', icon: <Target size={24} /> },
      { end: 40, suffix: '%', label: 'Cost Reduction', icon: <Zap size={24} /> },
      { end: 500, suffix: '+', label: 'Models Deployed', icon: <Cpu size={24} /> },
    ],
    whyUs: [
      'Proprietary NLP and Computer Vision frameworks',
      'Seamless integration with existing enterprise data',
      'Focus on ethical and explainable AI architectures',
      'Real-time processing at planetary scale'
    ],
    faqs: [
      { question: 'How do you handle data privacy in AI?', answer: 'We implement state-of-the-art encryption and federated learning techniques to ensure your data stays private and secure while training models.' },
      { question: 'Can you integrate AI into our existing software?', answer: 'Yes, we specialize in building API-first AI modules that can be integrated into any legacy or modern application stack.' }
    ]
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'High-Performance Ecosystems for the Modern Web',
    description: 'We craft stunning, lightning-fast web experiences that convert. Our engineering team focuses on scalability, accessibility, and high-conversion architectures using the world\'s most advanced frameworks.',
    icon: <Layout size={48} />,
    glow: 'glow-blue',
    metrics: [
      { end: 99, suffix: '%', label: 'Performance Score', icon: <Zap size={24} /> },
      { end: 10, suffix: 'M+', label: 'User Reach', icon: <Users size={24} /> },
      { end: 250, suffix: '+', label: 'Platforms Built', icon: <Code size={24} /> },
    ],
    whyUs: [
      'Next.js and React experts with core contributions',
      'Global CDN and Edge-native infrastructures',
      'WCAG 2.1 Accessible and SEO-perfect codebases',
      'Real-time collaborative features as standard'
    ],
    faqs: [
      { question: 'What tech stack do you recommend?', answer: 'While we adapt to your needs, we typically recommend the Next.js, TypeScript, and Node.js stack for its unparalleled performance and developer velocity.' },
      { question: 'Do you offer custom CMS integration?', answer: 'Absolutely. We have extensive experience with Headless CMS solutions like Contentful, Sanity, and Strapi.' }
    ]
  },
  'mobile-apps': {
    title: 'Mobile App Development',
    subtitle: 'Next-Generation Mobility Solutions',
    description: 'Beautiful native and cross-platform mobile apps designed for the way people live. We combine fluid animations with robust offline-first backends to create apps that stay in the user\'s dock.',
    icon: <Smartphone size={48} />,
    glow: 'glow-purple',
    metrics: [
      { end: 4.9, suffix: '', label: 'Avg App Store Rating', icon: <Star size={24} /> },
      { end: 5, suffix: 'M+', label: 'Total Downloads', icon: <Rocket size={24} /> },
      { end: 100, suffix: '%', label: 'Unit Test Coverage', icon: <CheckCircle size={24} /> },
    ],
    whyUs: [
      'Native iOS (Swift) and Android (Kotlin) excellence',
      'Hybrid mastery with Flutter and React Native',
      'Security-first architecture for fintech and health',
      'Biometric and hardware-level integrations'
    ],
    faqs: [
      { question: 'Do you build for both iOS and Android?', answer: 'Yes, we provide both native development and cross-platform solutions that share 90% of the codebase while maintaining native 120fps performance.' },
      { question: 'How do you handle OS updates?', answer: 'Our maintenance packages include proactive updates to ensure your app remains compatible with the latest iOS and Android releases.' }
    ]
  },
  'software-development': {
    title: 'Software Development',
    subtitle: 'Engineered for Enterprise Stability',
    description: 'Custom enterprise software designed to solve complex business logic. We build the backbone of your operations with a focus on reliability, modularity, and long-term maintainability.',
    icon: <Code size={48} />,
    glow: 'glow-pink',
    metrics: [
      { end: 100, suffix: '%', label: 'Uptime Reliability', icon: <ShieldCheck size={24} /> },
      { end: 60, suffix: '%', label: 'Efficiency Gain', icon: <TrendingUp size={24} /> },
      { end: 1, suffix: 'B+', label: 'Annual Transactions', icon: <Cpu size={24} /> },
    ],
    whyUs: [
      'Microservices and Serverless architectures',
      'Event-driven systems for high throughput',
      'Rigorous TDD and BDD development cycles',
      'Legacy modernization and cloud migration'
    ],
    faqs: [
      { question: 'Do you provide the source code?', answer: 'Yes, you maintain full ownership of the intellectual property and source code upon project completion.' },
      { question: 'Can you scale with us as we grow?', answer: 'Our software is built to be horizontally scalable, meaning it can grow from 10 users to 10 million with minimal architectural changes.' }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Emotionally Intelligent Design Systems',
    description: 'We don\'t just design screens; we design experiences. Our user-centric approach combines deep psychology with aesthetic excellence to create interfaces that are as functional as they are beautiful.',
    icon: <Palette size={48} />,
    glow: 'glow-orange',
    metrics: [
      { end: 300, suffix: '%', label: 'Conversion Lift', icon: <TrendingUp size={24} /> },
      { end: 15, suffix: 'k+', label: 'Screens Designed', icon: <Layout size={24} /> },
      { end: 50, suffix: '+', label: 'Design Awards', icon: <Star size={24} /> },
    ],
    whyUs: [
      'Data-driven user research and testing',
      'Scalable Design Systems for brand consistency',
      'Interactive prototyping and motion design',
      'Accessibility-first (WCAG) approach'
    ],
    faqs: [
      { question: 'What is your design process?', answer: 'We follow a structured Research -> Wireframe -> Prototype -> Test -> Final Design cycle to ensure every pixel serves a purpose.' },
      { question: 'Do you provide design tokens for devs?', answer: 'Yes, we provide fully documented design tokens and handover files via Figma to ensure dev implementation matches design exactly.' }
    ]
  },
  'cloud-devops': {
    title: 'Cloud & DevOps',
    subtitle: 'Infra-as-Code for Global Scaling',
    description: 'Continuous delivery pipelines and automated cloud infrastructures that eliminate deployment fear. We build resilient, self-healing environments that allow your team to ship multiple times per day.',
    icon: <Cloud size={48} />,
    glow: 'glow-green',
    metrics: [
      { end: 0, suffix: '', label: 'Unscheduled Downtime', icon: <ShieldCheck size={24} /> },
      { end: 10, suffix: 'x', label: 'Deployment Frequency', icon: <Zap size={24} /> },
      { end: 99.99, suffix: '%', label: 'Service SLIs', icon: <CheckCircle size={24} /> },
    ],
    whyUs: [
      'AWS, Azure, and GCP certified experts',
      'Kubernetes and Container orchestration',
      'Automated CI/CD security scanning',
      'Zero-downtime blue/green deployments'
    ],
    faqs: [
      { question: 'Which cloud provider should we choose?', answer: 'We analyze your cost, region, and service requirements to recommend the best fit among AWS, Google Cloud, or Microsoft Azure.' },
      { question: 'Do you provide 24/7 monitoring?', answer: 'Yes, our SRE team provides 24/7 incident response and proactive infrastructure monitoring.' }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Algorithmic Growth Strategies',
    description: 'Performance marketing driven by data, not guesswork. We combine SEO, PPC, and content strategies to dominate searching and social landscapes, delivering a measurable ROI for every marketing dollar.',
    icon: <TrendingUp size={48} />,
    glow: 'glow-blue',
    metrics: [
      { end: 500, suffix: '%', label: 'Organic Traffic Growth', icon: <TrendingUp size={24} /> },
      { end: 3, suffix: 'x', label: 'Average ROAS', icon: <Target size={24} /> },
      { end: 15, suffix: 'M+', label: 'Ad Impressions', icon: <Users size={24} /> },
    ],
    whyUs: [
      'Technical SEO and Keyword dominance',
      'Content strategies that build authority',
      'Data-driven PPC with machine learning',
      'Conversion Rate Optimization (CRO) focus'
    ],
    faqs: [
      { question: 'How long until we see SEO results?', answer: 'SEO is a marathon. Typically, you\'ll see significant movement in 3-6 months, with dominance building after 12 months.' },
      { question: 'Do you manage budget or just strategy?', answer: 'We offer full-service management including budget allocation, creative production, and technical execution.' }
    ]
  },
  'branding': {
    title: 'Branding & Logo',
    subtitle: 'Strategic Visual Identities that Command Attention',
    description: 'We don\'t just design logos; we build iconic brands. Our process combines deep market research with artistic excellence to create visual identities that resonate with your core audience and stand the test of time.',
    icon: <Target size={48} />,
    glow: 'glow-orange',
    metrics: [
      { end: 100, suffix: '%', label: 'Brand Recognition Lift', icon: <Star size={24} /> },
      { end: 50, suffix: '+', label: 'Identity Projects', icon: <Palette size={24} /> },
      { end: 10, suffix: 'x', label: 'Perceived Value Growth', icon: <TrendingUp size={24} /> },
    ],
    whyUs: [
      'Comprehensive Brand Strategy and Voice development',
      'Timeless minimalist design philosophy',
      'Full-suite brand guidelines (Typography, Color, Grid)',
      'Cross-platform adaptive identity systems'
    ],
    faqs: [
      { question: 'What is included in a branding package?', answer: 'Our core package includes logo design, typography selection, color palette development, and a 50+ page brand book.' },
      { question: 'Can you refresh an existing brand?', answer: 'Yes, we offer Brand Evolution services that modernize your existing identity while maintaining established brand equity.' }
    ]
  },
  'enterprise-solutions': {
    title: 'Enterprise Solutions',
    subtitle: 'Mission-Critical Engineering at Global Scale',
    description: 'Specialized architectural solutions for the world\'s most demanding environments. We engineer high-availability, high-throughput systems that power global enterprises and critical infrastructure.',
    icon: <ShieldCheck size={48} />,
    glow: 'glow-blue',
    metrics: [
      { end: 99.999, suffix: '%', label: 'SLA Reliability', icon: <ShieldCheck size={24} /> },
      { end: 200, suffix: 'M+', label: 'Daily Core Requests', icon: <Cpu size={24} /> },
      { end: 0, suffix: '', label: 'Severity-1 Incidents', icon: <CheckCircle size={24} /> },
    ],
    whyUs: [
      'Distributed systems and Eventual Consistency mastery',
      'Enterprise-grade security and compliance (SOC2/HIPAA)',
      'Hybrid and Multi-cloud orchestration',
      'Predictive auto-scaling and self-healing systems'
    ],
    faqs: [
      { question: 'How do you ensure enterprise security?', answer: 'We implement Zero-Trust architectures, end-to-end encryption, and automated security scanning as part of our core engineering pipeline.' },
      { question: 'Do you offer migration from legacy systems?', answer: 'Yes, we are experts in Strangler Fig patterns and zero-downtime migrations from monolithic legacy systems to modern distributed architectures.' }
    ]
  }
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = serviceData[slug];

  if (!data) return notFound();

  return (
    <main className="service-detail-page">
      {/* ===== HERO ===== */}
      <section className="service-hero">
        <div className="container">
          <motion.div 
            className="service-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`service-detail-icon ${data.glow}`}>
              {data.icon}
            </div>
            <h1 className="gradient-text">{data.title}</h1>
            <h2>{data.subtitle}</h2>
            <p>{data.description}</p>
          </motion.div>
        </div>
      </section>

      {/* ===== KEY METRICS ===== */}
      <section className="section bg-secondary/30">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Performance & Scale</span>
              <h2 className="section-title">Key <span className="gradient-text">Metrics</span></h2>
            </div>
          </SectionReveal>
          <div className="metrics-grid">
            {data.metrics.map((m, i) => (
              <AnimatedCounter 
                key={i} 
                end={m.end} 
                suffix={m.suffix} 
                label={m.label} 
                icon={m.icon} 
                className={data.glow} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section">
        <div className="container">
          <div className="why-split">
            <div className="why-left">
              <SectionReveal>
                <span className="section-label">Why Us</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                   Why Choose <span className="gradient-text">Our Expertise</span>
                </h2>
                <div className="why-points">
                  {data.whyUs.map((point, i) => (
                    <motion.div 
                      key={i} 
                      className="why-point"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className={`point-dot ${data.glow}`} />
                      <p>{point}</p>
                    </motion.div>
                  ))}
                </div>
              </SectionReveal>
            </div>
            <div className="why-right">
              <motion.div 
                className={`visual-designer-card designer-card ${data.glow}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="card-visual-content">
                  <Rocket size={80} className="glow-icon" />
                  <h3>Elevate Your Business</h3>
                  <p>Our specialized approach ensures your vision is translated into high-performance reality.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT & FAQS ===== */}
      <section className="section bg-secondary/30">
        <div className="container">
          <div className="support-grid">
            <div className="support-contact">
              <SectionReveal>
                <h2 className="section-title" style={{ textAlign: 'left' }}>Get in <span className="gradient-text">Touch</span></h2>
                <p style={{ marginBottom: '32px', color: 'var(--text-secondary)' }}>Ready to discuss your project? Our team is available 24/7.</p>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <Mail className="info-icon" />
                    <div>
                      <strong>Email Us</strong>
                      <p>contact@msinfinix.tech</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <Phone className="info-icon" />
                    <div>
                      <strong>Call Us</strong>
                      <p>+91 12345 67890</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <MapPin className="info-icon" />
                    <div>
                      <strong>Visit Us</strong>
                      <p>Udaipur, Rajasthan, India</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
            <div className="support-faqs">
              <SectionReveal>
                <h2 className="section-title" style={{ textAlign: 'left' }}>Common <span className="gradient-text">Queries</span></h2>
                <FAQAccordion items={data.faqs} />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <div className={`final-cta-section designer-card ${data.glow}`}>
              <div className="final-cta-content">
                <h2>Start Your Digital Transformation</h2>
                <p>Join hundreds of forward-thinking businesses and build the future with MS Infinix.</p>
                <div className="final-cta-buttons">
                  <Link href="/contact" className="btn btn-glow">Get Started Now</Link>
                  <Link href="/about" className="btn btn-secondary">Learn More <ArrowRight size={18} /></Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
