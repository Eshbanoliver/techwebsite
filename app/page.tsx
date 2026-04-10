'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Rocket, 
  Users, 
  Calendar, 
  Cpu, 
  BrainCircuit, 
  Layout, 
  Smartphone, 
  Code, 
  Palette, 
  Cloud, 
  TrendingUp, 
  Zap,
  Target,
  CheckCircle,
  Lightbulb,
  ShieldCheck,
  Star,
  ArrowRight,
  Handshake,
  PenTool,
  RefreshCw,
  Search,
  Stethoscope,
  ShoppingBag,
  GraduationCap,
  Truck,
  Home as HomeIcon,
  Car,
  Factory,
  Gem,
  Store,
  Banknote,
  Hotel,
  Gavel,
  Anchor
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedCounter from '@/components/AnimatedCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import type { FAQItem } from '@/components/FAQAccordion';
import SectionReveal from '@/components/SectionReveal';
import TechStack from '@/components/TechStack';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  slug: string;
  glow: string;
  bg: string;
}

const services: ServiceItem[] = [
  { icon: <BrainCircuit size={24} />, title: 'AI & Machine Learning', desc: 'Intelligent solutions powered by advanced machine learning algorithms and predictive analytics.', slug: 'ai-ml', glow: 'glow-cyan', bg: '/services/ai-ml.png' },
  { icon: <Layout size={24} />, title: 'Web Development', desc: 'Stunning, high-performance websites built with modern frameworks like React and Next.js.', slug: 'web-development', glow: 'glow-blue', bg: '/services/web.png' },
  { icon: <Smartphone size={24} />, title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps with seamless user experiences and robust backends.', slug: 'mobile-apps', glow: 'glow-purple', bg: '/services/mobile.png' },
  { icon: <Code size={24} />, title: 'Software Development', desc: 'Custom enterprise software solutions designed to streamline operations and boost productivity.', slug: 'software-development', glow: 'glow-pink', bg: '/services/software.png' },
  { icon: <Palette size={24} />, title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces crafted with user-centered design principles.', slug: 'ui-ux-design', glow: 'glow-orange', bg: '/services/uiux.png' },
  { icon: <Cloud size={24} />, title: 'Cloud & DevOps', desc: 'Scalable cloud infrastructure and automated CI/CD pipelines for reliable deployments.', slug: 'cloud-devops', glow: 'glow-green', bg: '/services/cloud.png' },
  { icon: <TrendingUp size={24} />, title: 'Digital Marketing', desc: 'Data-driven marketing strategies that maximize your digital presence and ROI.', slug: 'digital-marketing', glow: 'glow-blue', bg: '/services/marketing.png' },
  { icon: <Target size={24} />, title: 'Branding & Logo', desc: 'Strategic brand identity and visual storytelling that resonates with your audience.', slug: 'branding', glow: 'glow-orange', bg: '/services/branding.png' },
  { icon: <ShieldCheck size={24} />, title: 'Enterprise Solutions', desc: 'Large-scale architectural solutions for global enterprises and mission-critical systems.', slug: 'enterprise-solutions', glow: 'glow-blue', bg: '/services/enterprise.png' },
];

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className: string;
}

const values: ValueItem[] = [
  { icon: <ShieldCheck size={32} />, title: 'Quality Assurance', desc: 'Only precision-engineered solutions from trusted technical frameworks.', className: 'bg-vibrant-pink' },
  { icon: <Users size={32} />, title: 'Client Satisfaction', desc: 'Your operational success is our topmost technical priority.', className: 'bg-vibrant-blue' },
  { icon: <Target size={32} />, title: 'Honest Pricing', desc: 'Transparent and competitive world-class development value.', className: 'bg-vibrant-orange' },
  { icon: <Code size={32} />, title: 'Reliable Products', desc: 'Durable software architectures built to last for decades.', className: 'bg-vibrant-green' },
  { icon: <Cpu size={32} />, title: 'Professional Service', desc: 'Expert support from experienced technological professionals.', className: 'bg-vibrant-indigo' },
  { icon: <Handshake size={32} />, title: 'Long-Term Trust', desc: 'Building lasting technical relationships since our establishment.', className: 'bg-vibrant-red' },
];

const whyUs = [
  { title: 'Global Infrastructure', desc: 'Planetary-scale cloud architectures engineered for zero-latency operations.', className: 'bg-why-1' },
  { title: 'Elite Talent Pool', desc: 'World-class engineers and architects with core contributions to top frameworks.', className: 'bg-why-2' },
  { title: '24/7 Priority Support', desc: 'Instant access to senior technical leads regardless of your timezone.', className: 'bg-why-3' },
  { title: 'Competitive ROI', desc: 'High-performance engineering that delivers measurable business value and growth.', className: 'bg-why-4' },
  { title: 'Scalable Solutions', desc: 'Modular software that grows seamlessly from startup to global enterprise.', className: 'bg-why-5' },
  { title: 'Zero-Downtime Policy', desc: 'Mission-critical reliability keeping your services online at all times.', className: 'bg-why-6' },
  { title: 'Security First', desc: 'Military-grade encryption and proactive vulnerability scanning by default.', className: 'bg-why-7' },
  { title: 'Rapid Deployment', desc: 'Automated CI/CD pipelines that move your ideas to production in hours.', className: 'bg-why-8' },
];

const processSteps = [
  {
    title: "Discovery & Strategy",
    desc: "We analyze your business goals and user needs to build a solid technical foundation.",
    icon: <Search size={28} />,
    step: "01",
    accent: "accent-cyan"
  },
  {
    title: "System Architecture",
    desc: "Defining high-performance tech stacks and scalable cloud infrastructures for long-term stability.",
    icon: <PenTool size={28} />,
    step: "02",
    accent: "accent-blue"
  },
  {
    title: "Agile Engineering",
    desc: "Rapid development cycles with high-quality code and continuous stakeholder feedback loops.",
    icon: <Code size={28} />,
    step: "03",
    accent: "accent-purple"
  },
  {
    title: "Quality Assurance",
    desc: "Comprehensive automated and manual testing ensure zero-defect software and top-tier security.",
    icon: <ShieldCheck size={28} />,
    step: "04",
    accent: "accent-pink"
  },
  {
    title: "Deployment & Ops",
    desc: "Seamless release through automated CI/CD pipelines to a highly-available production cloud.",
    icon: <Rocket size={28} />,
    step: "05",
    accent: "accent-orange"
  },
  {
    title: "Evolution & Growth",
    desc: "Post-launch monitoring and feature roadmaps to keep your platform at the cutting edge.",
    icon: <RefreshCw size={28} />,
    step: "06",
    accent: "accent-green"
  }
];

interface FAQItem {
  question: string;
  answer: string;
  className: string;
}

const faqItems: FAQItem[] = [
  { 
    question: 'What services does MS Infinix offer?', 
    answer: 'We offer a comprehensive range of tech services including AI & Machine Learning, Web Development, Mobile App Development, Software Development, UI/UX Design, Cloud & DevOps, and Digital Marketing.',
    className: 'bg-why-1'
  },
  { 
    question: 'Where is MS Infinix located?', 
    answer: 'MS Infinix is headquartered in Udaipur, Rajasthan 313001, India. We serve clients globally and offer both on-site and remote collaboration options to ensure seamless project delivery.',
    className: 'bg-why-2'
  },
  { 
    question: 'How long does a typical project take?', 
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex enterprise application could take 3-6 months.',
    className: 'bg-why-3'
  },
  { 
    question: 'Do you offer post-launch support?', 
    answer: 'Absolutely! We provide comprehensive post-launch support including bug fixes, performance optimization, security updates, and feature enhancements 24/7.',
    className: 'bg-why-4'
  },
  { 
    question: 'What technologies do you use?', 
    answer: 'We work with modern technologies including React, Next.js, Node.js, Python, TensorFlow, Flutter, React Native, AWS, Google Cloud, Azure, and Kubernetes.',
    className: 'bg-why-5'
  },
  { 
    question: 'How can I get a quote?', 
    answer: 'You can get a free consultation and quote by clicking the "Contact Us" or "Get a Quote" buttons. Our technical team will reach out within 24 hours.',
    className: 'bg-why-6'
  },
];

const industries = [
  { name: "Healthcare & Medical", icon: <Stethoscope size={24} />, desc: "AI-driven diagnostics, HIPAA-compliant patient portals, and precision medical analytics.", image: "/industries/healthcare.png" },
  { name: "E-commerce & Retail", icon: <ShoppingBag size={24} />, desc: "High-conversion storefronts, intelligent bento-grids, and integrated global payment gateways.", image: "/industries/ecommerce.png" },
  { name: "Education & LMS", icon: <GraduationCap size={24} />, desc: "Digital learning ecosystems, LMS platforms, and interactive classroom technology.", image: "/industries/education.png" },
  { name: "Logistics & Supply", icon: <Truck size={24} />, desc: "Real-time fleet tracking, AI route optimization, and automated warehouse management.", image: "/industries/logistics.png" },
  { name: "Real Estate & PropTech", icon: <HomeIcon size={24} />, desc: "Virtual property tours, BIM visualization, and secure transaction management.", image: "/industries/realestate.png" },
  { name: "Automotive & Mobility", icon: <Car size={24} />, desc: "Smart car interfaces, manufacturing automation, and fleet diagnostic systems.", image: "/industries/automotive.png" },
  { name: "Manufacturing & IIoT", icon: <Factory size={24} />, desc: "Industry 4.0 solutions, IoT sensor networks, and predictive maintenance algorithms.", image: "/industries/manufacturing.png" },
  { name: "Jewellery & Luxury", icon: <Gem size={24} />, desc: "Inventory management for high-value assets with 3D visualization and secure CRM.", image: "/industries/jewellery.png" },
  { name: "General Stores & POS", icon: <Store size={24} />, desc: "Next-gen POS systems with real-time stock sync and automated customer loyalty loops.", image: "/industries/generalstores.png" },
  { name: "Fintech & Banking", icon: <Banknote size={24} />, desc: "Secure digital wallets, blockchain integration, and AI-powered fraud detection.", image: "/industries/fintech.png" },
  { name: "Hospitality & Tourism", icon: <Hotel size={24} />, desc: "Booking engines, guest service automation, and smart amenity management.", image: "/industries/hospitality.png" },
  { name: "LegalTech & Compliance", icon: <Gavel size={24} />, desc: "Document & case management, secure digital signatures, and automated audit trails.", image: "/industries/legal.png" }
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <section className="hero" id="hero">
        <ParticleBackground />
        <HeroSlider />
        <div className="hero-bg" style={{ display: 'none' }}>
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section overflow-hidden" id="about-preview">
        <div className="container">
          <SectionReveal>
            <div className="about-grid">
              <div className="about-text-content">
                <span className="section-label">About MS Infinix</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Innovating the <span className="gradient-text">Next Generation</span> of Digital Experiences
                </h2>
                <p className="about-description">
                  Based in the historic city of Udaipur, Rajasthan, MS Infinix is more than just a 
                  technology firm. We are architects of digital transformation, dedicated to pushing 
                  the boundaries of what&apos;s possible through advanced engineering and creative design.
                </p>
                <div className="about-features">
                  <div className="about-feature">
                    <div className="feature-dot" />
                    <span>State-of-the-art AI Integration</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-dot" />
                    <span>Enterprise-Grade Scalability</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-dot" />
                    <span>User-Centric Visual Design</span>
                  </div>
                </div>
                <div className="about-cta-group" style={{ marginTop: '40px' }}>
                  <Link href="/about" className="btn btn-primary">
                    Learn Our Story →
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">
                    Work With Us
                  </Link>
                </div>
              </div>
              <div className="about-visual">
                <div className="visual-container glass-card">
                  <motion.img 
                    src="/about_innovation.png" 
                    alt="Innovation Visual"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <div className="visual-overlay" />
                  <motion.div 
                    className="visual-float-card glass-card"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="float-icon">🚀</span>
                    <div>
                      <strong>Udaipur&apos;s Best</strong>
                      <p>Top Rated Tech Studio</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== KEY METRICS ===== */}
      <section className="section" id="metrics">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Our Impact</span>
              <h2 className="section-title">
                Numbers That <span className="gradient-text">Speak</span>
              </h2>
              <p className="section-subtitle">
                Real results that reflect our commitment to excellence and client success.
              </p>
            </div>
          </SectionReveal>
          <div className="metrics-grid">
            <AnimatedCounter end={150} suffix="+" label="Projects Completed" icon={<Rocket size={28} />} className="glow-cyan" />
            <AnimatedCounter end={80} suffix="+" label="Clients Served" icon={<Users size={28} />} className="glow-blue" />
            <AnimatedCounter end={5} suffix="+" label="Years Experience" icon={<Calendar size={28} />} className="glow-purple" />
            <AnimatedCounter end={30} suffix="+" label="Technologies Used" icon={<Cpu size={28} />} className="glow-pink" />
          </div>
        </div>
      </section>

      <TechStack />

      {/* ===== SERVICES ===== */}
      <section className="section services-section" id="services">
        <div className="services-section-bg">
          <img src="/services_bg.png" alt="Services Background" />
          <div className="bg-overlay" />
        </div>
        <div className="container relative z-1">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Our Specialized Services</span>
              <h2 className="section-title">
                What We <span className="gradient-text">Deliver</span>
              </h2>
              <p className="section-subtitle">
                End-to-end technology solutions crafted to accelerate your business growth 
                and drive sustainable innovation in a digital-first world.
              </p>
            </div>
          </SectionReveal>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link key={i} href={`/services/${s.slug}`} className="service-card-link">
                <motion.div
                  className={`service-card designer-card ${s.glow}`}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="service-card-bg">
                    <img src={s.bg} alt={s.title} />
                    <div className="card-overlay" />
                  </div>
                  <div className="service-card-content relative z-1">
                    <div className="service-icon-box">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <div className="service-card-footer">
                      <span>Explore Solutions</span>
                      <Rocket size={16} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section mv-section overflow-hidden" id="mission-vision">
        <div className="mv-container container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Our Strategic Evolution</span>
              <h2 className="section-title">
                Mission & <span className="gradient-text">Vision</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="mv-creative-grid">
            <div className="mv-visual-bridge">
              <img src="/mv_visual.png" alt="Strategic Path" className="mv-visual-img" />
              <div className="mv-glow-overlay" />
            </div>

            <div className="mv-cards-wrapper">
              <motion.div 
                className="mv-card-creative designer-card glow-cyan mission-card"
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="mv-badge">Operational Mission</div>
                <div className="service-icon-box">
                  <Target size={32} />
                </div>
                <h3>Accelerating Innovation</h3>
                <p>
                  To bridge the technical gap for businesses worldwide by delivering 
                  precision-engineered solutions. We empower growth through code 
                  integrity, architectural stability, and a client-centric engineering culture.
                </p>
                <div className="mv-card-footer-meta">
                  <div className="status-indicator">
                    <span className="dot pulsed" /> 
                    <span>Live Operations</span>
                  </div>
                  <Link href="/about" className="mv-link-arrow">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                className="mv-card-creative designer-card glow-purple vision-card"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="mv-badge">Future Vision</div>
                <div className="service-icon-box">
                  <Search size={32} />
                </div>
                <h3>Planetary Excellence</h3>
                <p>
                  To be the global benchmark for creative technical problem-solving. 
                  We envision a future where high-performance technology is accessible, 
                  ethical, and seamlessly integrated into every human success story.
                </p>
                <div className="mv-card-footer-meta">
                  <div className="status-indicator">
                    <span className="dot pulsed" />
                    <span>2030 Roadmap</span>
                  </div>
                  <Link href="/about" className="mv-link-arrow">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES WE TRANSFORM ===== */}
      <section className="industries-section" id="industries">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Industry Expertise</span>
              <h2 className="section-title">
                Industries We <span className="gradient-text">Transform</span>
              </h2>
              <p className="section-subtitle">
                Deploying deep technical expertise across diverse global sectors to drive 
                innovation and operational excellence.
              </p>
            </div>
          </SectionReveal>

          <div className="industry-grid">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                className="industry-card"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="industry-bg">
                  <img src={ind.image} alt={ind.name} />
                  <div className="industry-bg-overlay" />
                </div>
                <div className="industry-tag">Sector_{i + 1}</div>
                <div className="industry-card-content relative z-1">
                  <div className="industry-icon-wrapper">
                    {ind.icon}
                  </div>
                  <h3>{ind.name}</h3>
                  <p>{ind.desc}</p>
                  <button className="industry-btn">Explore Solutions →</button>
                </div>
                <div className="industry-glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="section" id="values">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">What Drives Us</span>
              <h2 className="section-title">
                Our Core <span className="gradient-text">Values</span>
              </h2>
              <p className="section-subtitle">
                The principles that guide every decision, every line of code, and every client interaction.
              </p>
            </div>
          </SectionReveal>
          <div className="values-grid-vibrant">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className={`value-card-vibrant ${v.className}`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="corner-marker">
                  <span style={{ fontSize: '1.5rem' }}>*</span>
                </div>
                <div className="value-icon-box">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
                <Link href="/about" className="learn-more">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORKING PROCESS ===== */}
      <section className="process-section" id="process">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Engineering Workflow</span>
              <h2 className="section-title">
                Our Working <span className="gradient-text">Process</span>
              </h2>
              <p className="section-subtitle">
                A systematic, high-performance approach to turning complex ideas into 
                market-ready digital products.
              </p>
            </div>
          </SectionReveal>

          <div className="process-grid">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className={`process-card ${step.accent}`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="process-middle-gradient" />
                <div className="process-card-line" />
                <div className="process-step-num">{step.step}</div>
                <div className="process-icon-box">{step.icon}</div>
                <div className="process-card-content relative z-1">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                <div className="process-indicator">Phase_{step.step}</div>
                <div className="process-glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section" id="why-us">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Why MS Infinix</span>
              <h2 className="section-title">
                Why <span className="gradient-text">Choose Us</span>
              </h2>
              <p className="section-subtitle">
                We don&apos;t just build software — we build lasting partnerships and deliver real results.
              </p>
            </div>
          </SectionReveal>
          <div className="why-grid-vibrant">
            {whyUs.map((w, i) => (
              <motion.div
                key={i}
                className={`why-card-vibrant ${w.className}`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="why-card-watermark">0{i + 1}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="testimonials">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Client Love</span>
              <h2 className="section-title">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="section-subtitle">
                Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped transform.
              </p>
            </div>
          </SectionReveal>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" id="faq">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Got Questions?</span>
              <h2 className="section-title">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="section-subtitle">
                Find quick answers to common questions about our services and process.
              </p>
            </div>
          </SectionReveal>
          <div className="faq-bento-grid">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                className={`faq-bento-card ${item.className}`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="faq-watermark">?</div>
                <div className="faq-content">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH CTA ===== */}
      <section className="section" id="cta">
        <div className="container">
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
                SEC_ID: MS_INF_2026 // LOC: UDAIPUR_IN // 24.5854° N, 73.7125° E
              </div>

              <div className="cta-tech-content">
                <h2 className="cta-tech-title">
                  Let&apos;s Build Something <span className="gradient-text">Amazing</span> Together
                </h2>
                <p className="cta-tech-subtitle">
                  Ready to transform your ideas into reality? Our elite technical team is 
                  standing by to engineer your next digital breakthrough.
                </p>
                <div className="cta-tech-buttons">
                  <Link href="/contact" className="btn btn-tech" id="cta-contact">
                    Initialize Project →
                  </Link>
                  <Link href="/contact" className="btn btn-tech btn-tech-secondary" id="cta-quote">
                    Technical Brief
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
