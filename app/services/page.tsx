'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';
import ParticleBackground from '@/components/ParticleBackground';
import { 
  Cpu, Code, Smartphone, Layout, Cloud, TrendingUp, Search, 
  PenTool, Settings, CheckCircle, Rocket, ShieldCheck,
  BrainCircuit, Target
} from 'lucide-react';

interface ServiceDetail {
  category: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  slug: string;
  image: string;
}

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const services: ServiceDetail[] = [
  {
    category: "Neural Core",
    icon: <BrainCircuit size={32} />,
    title: 'AI & Machine Learning',
    desc: 'Harness the power of artificial intelligence to automate processes, gain predictive insights, and build intelligent applications that learn and adapt.',
    features: ['NLP Models', 'Predictive Analytics', 'Computer Vision', 'Generative AI'],
    slug: 'ai-ml',
    image: '/services/ai-ml.png'
  },
  {
    category: "Architecture",
    icon: <Code size={32} />,
    title: 'Web & Enterprise Systems',
    desc: 'We build stunning, high-performance web applications and enterprise software using the latest scalable frameworks and distributed best practices.',
    features: ['React & Next.js', 'SaaS Architectures', 'Microservices', 'High-Load APIs'],
    slug: 'web-development',
    image: '/services/web.png'
  },
  {
    category: "Interfaces",
    icon: <Smartphone size={32} />,
    title: 'Mobile Engineering',
    desc: 'Create powerful native and cross-platform mobile applications. We design and develop feature-rich iOS and Android apps that users love.',
    features: ['React Native', 'Swift & Kotlin', 'App Optimization', 'Offline-First Sync'],
    slug: 'mobile-apps',
    image: '/services/mobile.png'
  },
  {
    category: "Design System",
    icon: <Layout size={32} />,
    title: 'Cinematic UI/UX',
    desc: 'Beautiful, intuitive interfaces designed with a deep understanding of user behavior. We create designs that look stunning and drive massive engagement.',
    features: ['Interactive Prototyping', 'Liquid Glass Systems', '3D Integration', 'User Psychology'],
    slug: 'ui-ux-design',
    image: '/services/uiux.png'
  },
  {
    category: "Infrastructure",
    icon: <Cloud size={32} />,
    title: 'Cloud & DevOps',
    desc: 'Build robust, scalable cloud infrastructure with automated deployment pipelines. We ensure your applications are always available.',
    features: ['AWS & Azure Core', 'Kubernetes', 'CI/CD Automation', 'Zero-Trust Security'],
    slug: 'cloud-devops',
    image: '/services/cloud.png'
  },
  {
    category: "Growth Ops",
    icon: <TrendingUp size={32} />,
    title: 'Digital Marketing',
    desc: 'Digital marketing strategies powered by deep analytics that maximize your online visibility, attract qualified leads, and drive exponential growth.',
    features: ['Algorithmic SEO', 'Conversion Optimization', 'Performance Advertising', 'Data Mining'],
    slug: 'digital-marketing',
    image: '/services/marketing.png'
  },
  {
    category: "Identity",
    icon: <Target size={32} />,
    title: 'Branding & Logo',
    desc: 'Strategic visual identities that command attention. We build iconic brands that resonate with your audience and stand the test of time.',
    features: ['Brand Strategy', 'Logo Design', 'Visual Guidelines', 'Brand Voice'],
    slug: 'branding',
    image: '/services/branding.png'
  },
  {
    category: "Engine",
    icon: <Code size={32} />,
    title: 'Software Development',
    desc: 'Custom enterprise software designed for stability and scale. We build the backbone of your operations with precision engineering.',
    features: ['Custom CRM/ERP', 'Legacy Migration', 'TDD/BDD', 'Microservices'],
    slug: 'software-development',
    image: '/services/software.png'
  },
  {
    category: "Global Scale",
    icon: <ShieldCheck size={32} />,
    title: 'Enterprise Solutions',
    desc: 'Mission-critical engineering for demanding environments. High-availability systems that power global infrastructures.',
    features: ['Global SLIs', 'Zero-Trust Security', 'SLA Management', 'Scalable Arch'],
    slug: 'enterprise-solutions',
    image: '/services/enterprise.png'
  },
];

const processSteps: ProcessStep[] = [
  { num: '01', title: 'Discovery', desc: 'We analyze your technical needs, strategic goals, and target market to define the perfect architectural blueprint.', icon: <Search size={24} /> },
  { num: '02', title: 'Design', desc: 'Crafting comprehensive wireframes and high-fidelity visual systems that perfectly align with your brand identity.', icon: <PenTool size={24} /> },
  { num: '03', title: 'Development', desc: 'Building your custom solution with ultra-clean, efficient, and well-tested code using modern CI/CD pipelines.', icon: <Settings size={24} /> },
  { num: '04', title: 'Testing', desc: 'Rigorous Quality Assurance testing across all devices and edge-case scenarios to guarantee a flawless launch experience.', icon: <CheckCircle size={24} /> },
  { num: '05', title: 'Deployment', desc: 'Deploying your solution gracefully with full automated monitoring and continuous performance optimization protocols.', icon: <Rocket size={24} /> },
  { num: '06', title: 'Evolution', desc: 'Ongoing maintenance, intelligent updates, and strategic feature enhancements to keep your tech stack ahead of the curve.', icon: <ShieldCheck size={24} /> },
];

export default function ServicesPage(): React.JSX.Element {
  return (
    <main className="min-h-screen pt-24 bg-primary text-primary relative overflow-hidden">
      <ParticleBackground />
      
      {/* Page Header */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
        <div className="container px-6 relative z-10 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label-hacker mx-auto mb-6" style={{ display: 'inline-flex' }}>Capabilities</span>
          </motion.div>
          <motion.h1 className="text-6xl md:text-7xl font-black mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Solutions That <span className="gradient-text">Transform</span>
          </motion.h1>
          <motion.p className="text-xl text-secondary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            We engineer comprehensive technology solutions designed to accelerate your business growth and dominate the digital landscape.
          </motion.p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-12 pb-32 relative z-10" id="services-list">
        <div className="container px-6">
          <div className="service-showcase-grid">
            {services.map((s, i) => (
              <Link key={i} href={`/services/${s.slug}`} className="service-card-link">
                <motion.div
                  className="premium-service-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  id={`service-${i}`}
                >
                  <div className="psc-bg">
                    <img src={s.image} alt={s.title} />
                    <div className="psc-overlay" />
                  </div>
                  <div className="psc-content-inner">
                    <div className="psc-icon-box">{s.icon}</div>
                    <span className="psc-category">{s.category}</span>
                    <h3 className="psc-title">{s.title}</h3>
                    <p className="psc-desc">{s.desc}</p>
                    <div className="psc-features">
                      {s.features.map((f, j) => (
                        <span key={j} className="psc-feature-tag">{f}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 relative z-10" style={{ background: 'var(--grid-color)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }} id="our-process">
        <div className="container px-6">
          <SectionReveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="section-label-hacker mx-auto mb-6" style={{ display: 'inline-flex' }}>Workflow</span>
              <h2 className="text-5xl font-black mb-6">How We <span className="gradient-text">Engineer</span></h2>
              <p className="text-xl text-secondary">A streamlined, transparent architectural process that ensures absolute quality at every step of development.</p>
            </div>
          </SectionReveal>
          
          <div className="process-timeline-v2">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="process-step-v2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="step-num">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH CTA ===== */}
      <section className="section py-32 relative z-10" id="cta">
        <div className="container px-6">
          <SectionReveal>
            <div className="cta-tech-wrapper">
              <div className="cta-tech-grid" />
              <div className="cta-tech-scan" />
              
              {/* Corner Decals */}
              <div className="cta-tech-corner corner-tl" />
              <div className="cta-tech-corner corner-tr" />
              <div className="cta-tech-corner corner-bl" />
              <div className="cta-tech-corner corner-br" />

              {/* Technical Data Decals */}
              <div className="cta-tech-status-bars">
                <div className="status-row">
                  <span>Core Logic</span>
                  <div className="status-bar-bg"><div className="status-bar-fill" style={{ animationDelay: '0s' }} /></div>
                </div>
                <div className="status-row">
                  <span>Neural Net</span>
                  <div className="status-bar-bg"><div className="status-bar-fill" style={{ animationDelay: '-1.5s' }} /></div>
                </div>
                <div className="status-row">
                  <span>Sync Status</span>
                  <div className="status-row-text" style={{ color: '#00ff00' }}>[ ACTIVE ]</div>
                </div>
              </div>

              <div className="cta-tech-coordinates">
                SEC_ID: MS_INF_SER_26 // LOC: UDAIPUR_IN // 24.5854° N, 73.7125° E
              </div>

              <div className="cta-tech-content">
                <h2 className="cta-tech-title">
                  Ready to Build the <span className="gradient-text">Exceptional</span>?
                </h2>
                <p className="cta-tech-subtitle">
                  Stop settling for standard templates. Our technical team is standing by to architect your next digital breakthrough.
                </p>
                <div className="cta-tech-buttons">
                  <Link href="/contact" className="btn btn-tech" id="cta-contact">
                    Initialize Protocol →
                  </Link>
                  <Link href="/portfolio" className="btn btn-tech btn-tech-secondary" id="cta-quote">
                    View Data Logs
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
