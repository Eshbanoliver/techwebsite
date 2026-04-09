'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedCounter from '@/components/AnimatedCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import type { FAQItem } from '@/components/FAQAccordion';
import SectionReveal from '@/components/SectionReveal';

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

interface ValueItem {
  icon: string;
  title: string;
  desc: string;
}

const services: ServiceItem[] = [
  { icon: '🤖', title: 'AI & Machine Learning', desc: 'Intelligent solutions powered by advanced machine learning algorithms, natural language processing, and predictive analytics.' },
  { icon: '🌐', title: 'Web Development', desc: 'Stunning, high-performance websites and web applications built with modern frameworks like React, Next.js, and Node.js.' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences and robust backends.' },
  { icon: '💻', title: 'Software Development', desc: 'Custom enterprise software solutions designed to streamline operations, boost productivity, and drive growth.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces crafted with user-centered design principles that delight and convert visitors.' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'Scalable cloud infrastructure, CI/CD pipelines, containerization, and monitoring for reliable deployments.' },
  { icon: '📈', title: 'Digital Marketing', desc: 'Data-driven SEO, social media, PPC, and content marketing strategies that maximize your digital presence and ROI.' },
];

const values: ValueItem[] = [
  { icon: '💡', title: 'Innovation', desc: 'Pushing boundaries with cutting-edge technologies and creative solutions.' },
  { icon: '✨', title: 'Quality', desc: 'Delivering excellence in every line of code and pixel of design.' },
  { icon: '🔍', title: 'Transparency', desc: 'Open communication and honest collaboration throughout every project.' },
  { icon: '⚡', title: 'Speed', desc: 'Rapid delivery without compromising on quality or performance.' },
  { icon: '🏆', title: 'Client Success', desc: 'Your success is our success — we go the extra mile for results.' },
  { icon: '🤝', title: 'Integrity', desc: 'Building trust through ethical practices and honest partnerships.' },
];

const whyUs: ValueItem[] = [
  { icon: '👥', title: 'Expert Team', desc: 'Skilled professionals with deep expertise across modern technologies.' },
  { icon: '🛠️', title: 'Modern Tech Stack', desc: 'We use the latest tools, frameworks, and platforms for optimal results.' },
  { icon: '📐', title: 'Scalable Solutions', desc: 'Architecture that grows with your business — from startup to enterprise.' },
  { icon: '🚀', title: 'Fast Delivery', desc: 'Agile methodology ensures rapid iteration and on-time project completion.' },
  { icon: '💎', title: 'Dedicated Support', desc: '24/7 post-launch support and maintenance to keep everything running smoothly.' },
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
            <AnimatedCounter end={150} suffix="+" label="Projects Completed" />
            <AnimatedCounter end={80} suffix="+" label="Clients Served" />
            <AnimatedCounter end={5} suffix="+" label="Years Experience" />
            <AnimatedCounter end={30} suffix="+" label="Technologies Used" />
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section" id="services">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Our Services</span>
              <h2 className="section-title">
                What We <span className="gradient-text">Deliver</span>
              </h2>
              <p className="section-subtitle">
                End-to-end technology solutions crafted to accelerate your business growth.
              </p>
            </div>
          </SectionReveal>
          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="service-card glass-card"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section" id="mission-vision">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Our Purpose</span>
              <h2 className="section-title">
                Mission & <span className="gradient-text">Vision</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="mv-grid">
            <motion.div className="mv-card glass-card" {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses worldwide with innovative, reliable, and scalable technology solutions
                that drive growth, enhance efficiency, and create meaningful digital experiences. We are
                committed to delivering excellence through modern engineering practices and a client-first approach.
              </p>
            </motion.div>
            <motion.div className="mv-card glass-card" {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To become a globally recognized technology partner known for transforming ideas into
                world-class digital products. We envision a future where every business, regardless of size,
                has access to cutting-edge technology that propels them ahead of the competition.
              </p>
            </motion.div>
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
                className="value-card glass-card"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="value-icon">{v.icon}</div>
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
                className="why-card glass-card"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="why-icon">{w.icon}</div>
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
