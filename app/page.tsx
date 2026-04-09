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
  Search,
  CheckCircle,
  Lightbulb,
  ShieldCheck,
  Star,
  ArrowRight
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedCounter from '@/components/AnimatedCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import type { FAQItem } from '@/components/FAQAccordion';
import SectionReveal from '@/components/SectionReveal';

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
  glow: string;
}

const values: ValueItem[] = [
  { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'Pushing boundaries with cutting-edge technologies and creative solutions.', glow: 'glow-cyan' },
  { icon: <Star size={24} />, title: 'Quality', desc: 'Delivering excellence in every line of code and pixel of design.', glow: 'glow-blue' },
  { icon: <Search size={24} />, title: 'Transparency', desc: 'Open communication and honest collaboration throughout every project.', glow: 'glow-purple' },
  { icon: <Zap size={24} />, title: 'Speed', desc: 'Rapid delivery without compromising on quality or performance.', glow: 'glow-pink' },
  { icon: <Target size={24} />, title: 'Client Success', desc: 'Your success is our success — we go the extra mile for results.', glow: 'glow-orange' },
  { icon: <ShieldCheck size={24} />, title: 'Integrity', desc: 'Building trust through ethical practices and honest partnerships.', glow: 'glow-green' },
];

const whyUs: ValueItem[] = [
  { icon: <Users size={24} />, title: 'Expert Team', desc: 'Skilled professionals with deep expertise across modern technologies.', glow: 'glow-blue' },
  { icon: <Code size={24} />, title: 'Modern Tech Stack', desc: 'We use the latest tools, frameworks, and platforms for optimal results.', glow: 'glow-cyan' },
  { icon: <TrendingUp size={24} />, title: 'Scalable Solutions', desc: 'Architecture that grows with your business — from startup to enterprise.', glow: 'glow-purple' },
  { icon: <Rocket size={24} />, title: 'Fast Delivery', desc: 'Agile methodology ensures rapid iteration and on-time project completion.', glow: 'glow-pink' },
  { icon: <ShieldCheck size={24} />, title: 'Dedicated Support', desc: '24/7 post-launch support and maintenance to keep everything running smoothly.', glow: 'glow-orange' },
];

const faqItems: FAQItem[] = [
  { question: 'What services does MS Infinix offer?', answer: 'We offer a comprehensive range of tech services including AI & Machine Learning, Web Development, Mobile App Development, Software Development, UI/UX Design, Cloud & DevOps, and Digital Marketing. Each service is tailored to meet your specific business needs and goals.' },
  { question: 'Where is MS Infinix located?', answer: 'MS Infinix is headquartered in Udaipur, Rajasthan 313001, India. We serve clients globally and offer both on-site and remote collaboration options to ensure seamless project delivery.' },
  { question: 'How long does a typical project take?', answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.' },
  { question: 'Do you offer post-launch support?', answer: 'Absolutely! We provide comprehensive post-launch support including bug fixes, performance optimization, security updates, and feature enhancements. Our dedicated support team is available to ensure your solution runs smoothly 24/7.' },
  { question: 'What technologies do you use?', answer: 'We work with modern technologies including React, Next.js, Node.js, Python, TensorFlow, Flutter, React Native, AWS, Google Cloud, Azure, Docker, Kubernetes, and many more. We always choose the best technology stack for your specific project requirements.' },
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
                  <ArrowRight size={18} />
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
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            </div>
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
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className={`value-card designer-card ${v.glow}`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="service-icon-box">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
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
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <motion.div
                key={i}
                className={`why-card designer-card ${w.glow}`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="service-icon-box">{w.icon}</div>
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
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" id="cta">
        <div className="container">
          <SectionReveal>
            <div className="cta-section glass-card" style={{ padding: '80px 40px', borderRadius: 'var(--radius-xl)' }}>
              <div className="cta-bg" />
              <div className="cta-content">
                <h2>
                  Let&apos;s Build Something <span className="gradient-text">Amazing</span> Together
                </h2>
                <p>
                  Ready to transform your ideas into reality? Let&apos;s discuss your project
                  and create something extraordinary.
                </p>
                <div className="cta-buttons">
                  <Link href="/contact" className="btn btn-glow" id="cta-contact">
                    Contact Us →
                  </Link>
                  <Link href="/contact" className="btn btn-secondary" id="cta-quote">
                    Get a Quote
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
