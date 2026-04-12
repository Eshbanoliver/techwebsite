'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Rocket, 
  Users, 
  Calendar, 
  Cpu, 
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
  Anchor,
  Share2,
  Megaphone,
  Globe,
  Smartphone,
  Paintbrush,
  Brain,
  ShoppingCart
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false });
const AnimatedCounter = dynamic(() => import('@/components/AnimatedCounter'), { ssr: false });
const TestimonialCarousel = dynamic(() => import('@/components/TestimonialCarousel'), { ssr: false });
const TechStack = dynamic(() => import('@/components/TechStack'), { ssr: false });
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
  { icon: <TrendingUp size={24} />, title: 'Digital Marketing', desc: 'Local SEO, lead generation & content marketing strategies for Udaipur businesses.', slug: 'digital-marketing', glow: 'glow-orange', bg: '/services/digital-marketing.png' },
  { icon: <Share2 size={24} />, title: 'Social Media Marketing', desc: 'Instagram, Reels & influencer collaborations for cafes, hotels & lifestyle brands.', slug: 'social-media-marketing', glow: 'glow-pink', bg: '/services/social-media.png' },
  { icon: <Megaphone size={24} />, title: 'Paid Ads', desc: 'Google, Meta & YouTube ad campaigns that drive instant visibility and ROI.', slug: 'paid-ads', glow: 'glow-purple', bg: '/services/paid-ads.png' },
  { icon: <Globe size={24} />, title: 'Web Development', desc: 'Business websites, e-commerce & custom solutions built for performance.', slug: 'web-development', glow: 'glow-blue', bg: '/services/web-development.png' },
  { icon: <Smartphone size={24} />, title: 'App & Web App Dev', desc: 'Mobile apps, PWAs & startup MVPs built for Udaipur entrepreneurs.', slug: 'app-development', glow: 'glow-green', bg: '/services/app-development.png' },
  { icon: <Paintbrush size={24} />, title: 'Graphic Design & Branding', desc: 'Logos, social media design & complete brand identity for local brands.', slug: 'graphic-design', glow: 'glow-pink', bg: '/services/graphic-design.png' },
  { icon: <Brain size={24} />, title: 'AI Solutions', desc: 'Practical AI chatbots, automation & data insights for Udaipur businesses.', slug: 'ai-solutions', glow: 'glow-cyan', bg: '/services/ai-solutions.png' },
  { icon: <ShoppingCart size={24} />, title: 'E-Commerce Management', desc: 'Amazon, Flipkart & marketplace management from setup to growth.', slug: 'ecommerce-management', glow: 'glow-orange', bg: '/services/ecommerce.png' },
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

interface FAQItem {
  question: string;
  answer: string;
  className: string;
}

const faqItems: FAQItem[] = [
  { 
    question: 'What services does MS Infinex Tech offer?', 
    answer: 'We offer Digital Marketing, Social Media Marketing, Paid Ads, Web Development, App Development, Graphic Design & Branding, AI Solutions, and E-Commerce Marketplace Management — all tailored for Udaipur businesses.',
    className: 'bg-why-1'
  },
  { 
    question: 'Where is MS Infinex Tech located?', 
    answer: 'MS Infinex Tech is headquartered in Udaipur, Rajasthan 313001, India. We serve clients globally and offer both on-site and remote collaboration options to ensure seamless project delivery.',
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
      <section className="hero-v3" id="hero">
        <ParticleBackground />
        
        {/* Cinematic Glows */}
        <div className="hero-glow-v3" style={{ top: '-10%', right: '0%', '--glow-rgb': '0, 198, 255' } as any} />
        <div className="hero-glow-v3" style={{ bottom: '10%', left: '0%', '--glow-rgb': '168, 85, 247' } as any} />

        <div className="container relative z-10">
          <div className="hero-v3-inner">
            
            {/* Left Column: Messaging */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hero-text-side"
            >
              <div className="hero-eyebrow-v3">
                <span className="text-xl">👋</span>
                <span>Welcome to MS Infinex Tech</span>
              </div>

              <h1 className="hero-title-v3">
                Engineering Absolute <span className="gradient-text">Digital Mastery</span>
              </h1>

              <p className="hero-desc-v3">
                We specialize in deploying hyper-scalable architectural ecosystems and advanced AI integrations that drive measurable industrial growth.
              </p>

              <div className="hero-actions-v3">
                <Link href="/services" className="btn btn-tech hero-btn-main">
                  Explore Solutions ↗
                </Link>
                <Link href="/about" className="btn btn-secondary hero-btn-sub">
                   Our Story 
                </Link>
              </div>

              {/* Technical Coordinates */}
              <div className="hero-tech-coordinates-v3">
                <div>SEC_ID: INF_HQ_01</div>
                <div className="coord-dot" />
                <div>LOC: 24.5° N / 73.7° E</div>
              </div>
            </motion.div>

            {/* Right Column: Visual + Floating Data */}
            <div className="hero-visual-side">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ position: 'relative' }}
              >
                <div className="hero-img-container">
                    <Image 
                      src="/hero_tech_monolith.png" 
                      alt="Main Hero Monolith" 
                      width={800}
                      height={900}
                      className="hero-monolith-img"
                      priority
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent, transparent)' }} />
                </div>

                {/* Floating Metric 1: Users */}
                <motion.div 
                  className="floating-metric-card metric-users-v3"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <div className="avatar-stack-v3">
                        <div style={{ background: 'var(--neon-blue)', boxShadow: '0 0 10px var(--neon-blue)' }} />
                        <div style={{ background: 'var(--neon-purple)', boxShadow: '0 0 10px var(--neon-purple)' }} />
                        <div style={{ background: 'var(--neon-cyan)', boxShadow: '0 0 10px var(--neon-cyan)' }} />
                     </div>
                     <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'white' }}>1M+ Users</div>
                        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>Global Scale</div>
                     </div>
                  </div>
                </motion.div>

                {/* Floating Metric 2: Ratings */}
                <motion.div 
                  className="floating-metric-card light metric-rating-v3"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                >
                   <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                         <Image 
                           src="https://www.google.com/favicon.ico" 
                           alt="Google" 
                           width={20}
                           height={20}
                           style={{ width: '100%', height: 'auto', objectFit: 'contain' }} 
                         />
                      </div>
                      <div>
                         <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                            {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
                         </div>
                         <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#111' }}>(4.9) Review Matrix</div>
                      </div>
                   </div>
                </motion.div>

                {/* Background Pattern Decal */}
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '240px', height: '240px', backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: -1, opacity: 0.4 }} />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section overflow-hidden" id="about-preview">
        <div className="container">
          <SectionReveal>
            <div className="about-grid">
              <div className="about-text-content">
                <span className="section-label">About Infinex</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Innovating the <span className="gradient-text">Next Generation</span> of Digital Experiences
                </h2>
                <p className="about-description">
                  Based in the historic city of Udaipur, Rajasthan, MS Infinex Tech is more than just a 
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
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section services-section" id="services">
        <div className="services-section-bg">
          <Image 
            src="/services_bg.png" 
            alt="Services Background" 
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
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
                    <Image 
                      src={s.bg} 
                      alt={s.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
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

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section" id="why-us">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Why Infinex</span>
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

      <TechStack />

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
                  <Image 
                    src={ind.image} 
                    alt={ind.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover"
                  />
                  <div className="industry-bg-overlay" />
                </div>
                <div className="industry-tag">Sector_{i + 1}</div>
                <div className="industry-card-content relative z-1">
                  <div className="industry-icon-wrapper">
                    {ind.icon}
                  </div>
                  <h3>{ind.name}</h3>
                  <p>{ind.desc}</p>
                  <Link href="/services" className="industry-btn">
                    Explore Solutions →
                  </Link>
                </div>
                <div className="industry-glow" />
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
