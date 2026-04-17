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
  { icon: <TrendingUp size={24} />, title: 'Digital Marketing', desc: 'Expert SEO, lead generation, and content strategies to rank your business higher.', slug: 'digital-marketing', glow: 'glow-orange', bg: '/assets/marketing_no_human_stock_1776416291000.png' },
  { icon: <Share2 size={24} />, title: 'Social Media Marketing', desc: 'Creative social media management to engage customers and build brand loyalty.', slug: 'social-media-marketing', glow: 'glow-pink', bg: '/assets/social_no_human_stock_1776416264473.png' },
  { icon: <Megaphone size={24} />, title: 'Paid Ads', desc: 'Results-driven Google and Meta ad campaigns that maximize your marketing ROI.', slug: 'paid-ads', glow: 'glow-purple', bg: '/assets/service_paidads_stock_1776416655014.png' },
  { icon: <Globe size={24} />, title: 'Web Development', desc: 'Dynamic websites and e-commerce platforms built for speed and conversions.', slug: 'web-development', glow: 'glow-orange', bg: '/assets/service_webdev_stock_1776416031626.png' },
  { icon: <Smartphone size={24} />, title: 'App Development', desc: 'Native-feel mobile apps and PWAs designed for exceptional user experience.', slug: 'app-development', glow: 'glow-green', bg: '/assets/service_appdev_stock_v2_1776416681623.png' },
  { icon: <Paintbrush size={24} />, title: 'Branding & Design', desc: 'High-end visual identity and logo design to make your brand stand out.', slug: 'graphic-design', glow: 'glow-pink', bg: '/assets/service_branding_stock_1776416084682.png' },
  { icon: <Brain size={24} />, title: 'AI Solutions', desc: 'Smart AI chatbots and automation to streamline your business operations.', slug: 'ai-solutions', glow: 'glow-orange', bg: '/assets/about_no_human_stock_1776416238612.png' },
  { icon: <ShoppingCart size={24} />, title: 'Marketplace Management', desc: 'Expert Amazon and Flipkart management to grow your national sales.', slug: 'ecommerce-management', glow: 'glow-orange', bg: '/assets/industry_ecommerce_visual_1776415874745.png' },
];

const whyUs = [
  { title: 'Strategic Growth', desc: 'We engineer data-driven marketing strategies that scale local brands globally.', className: 'bg-why-1' },
  { title: 'Quality Engineering', desc: 'Clean, secure, and high-performance code built by experienced technicians.', className: 'bg-why-2' },
  { title: 'Udaipur Experts', desc: 'We have a deep understanding of Udaipur’s market and audience preferences.', className: 'bg-why-3' },
  { title: 'Dedicated Support', desc: 'Round-the-clock technical assistance from experts who care about your results.', className: 'bg-why-4' },
  { title: 'Enterprise Scalability', desc: 'Solutions designed to grow seamlessly as your customer base expands nationwide.', className: 'bg-why-5' },
  { title: 'Measurable ROI', desc: 'Every marketing rupee is optimized to ensure maximum profit for your business.', className: 'bg-why-6' },
  { title: 'Bulletproof Security', desc: 'Industry-standard encryption and security protocols protecting your data.', className: 'bg-why-7' },
  { title: 'Rapid Launch', desc: 'Move from idea to live deployment in record time without cutting corners.', className: 'bg-why-8' },
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
  { name: "Healthcare & Medical", icon: <Stethoscope size={24} />, desc: "AI-driven diagnostics, HIPAA-compliant patient portals, and precision medical analytics.", image: "/assets/industry_healthcare_visual_1776415815696.png" },
  { name: "E-commerce & Retail", icon: <ShoppingBag size={24} />, desc: "High-conversion storefronts, intelligent bento-grids, and integrated global payment gateways.", image: "/assets/industry_ecommerce_visual_1776415874745.png" },
  { name: "Education & LMS", icon: <GraduationCap size={24} />, desc: "Digital learning ecosystems, LMS platforms, and interactive classroom technology.", image: "/assets/about_business_growth_visual_1776415616126.png" },
  { name: "Logistics & Supply", icon: <Truck size={24} />, desc: "Real-time fleet tracking, AI route optimization, and automated warehouse management.", image: "/assets/service_webdev_stock_1776416031626.png" },
  { name: "Real Estate & PropTech", icon: <HomeIcon size={24} />, desc: "Virtual property tours, BIM visualization, and secure transaction management.", image: "/assets/industry_hospitality_visual_1776415839091.png" },
  { name: "Automotive & Mobility", icon: <Car size={24} />, desc: "Smart car interfaces, manufacturing automation, and fleet diagnostic systems.", image: "/assets/services_cinematic_bg_1776415793060.png" },
  { name: "Manufacturing & IIoT", icon: <Factory size={24} />, desc: "Industry 4.0 solutions, IoT sensor networks, and predictive maintenance algorithms.", image: "/assets/about_business_v2_stock_1776416113626.png" },
  { name: "Jewellery & Luxury", icon: <Gem size={24} />, desc: "Inventory management for high-value assets with 3D visualization and secure CRM.", image: "/assets/service_branding_stock_1776416084682.png" },
  { name: "General Stores & POS", icon: <Store size={24} />, desc: "Next-gen POS systems with real-time stock sync and automated customer loyalty loops.", image: "/assets/service_marketing_stock_1776416007039.png" },
  { name: "Fintech & Banking", icon: <Banknote size={24} />, desc: "Secure digital wallets, blockchain integration, and AI-powered fraud detection.", image: "/assets/service_social_stock_1776416055715.png" },
  { name: "Hospitality & Tourism", icon: <Hotel size={24} />, desc: "Booking engines, guest service automation, and smart amenity management.", image: "/assets/hospitality_no_human_stock_1776416321098.png" },
  { name: "LegalTech & Compliance", icon: <Gavel size={24} />, desc: "Document & case management, secure digital signatures, and automated audit trails.", image: "/assets/about_business_v2_stock_1776416113626.png" }
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
        
        {/* Cinematic Glows - More Subtle */}
        <div className="hero-glow-v3" style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)', '--glow-rgb': '255, 138, 0', opacity: 0.2 } as any} />

        <div className="container relative z-10">
          <div className="hero-v3-inner centered">
            
            {/* Messaging - Centered Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hero-content-modern"
            >
              <div className="hero-eyebrow-modern">
                <span className="badge-dot" />
                <span>Excellence in Digital Engineering</span>
              </div>

              <h1 className="hero-title-modern">
                Crafting the Future of <span className="gradient-text">Digital Marketing & Technology</span>
              </h1>

              <p className="hero-desc-modern">
                From high-performance web development and AI solutions to strategic marketing 
                and creative branding — we deliver end-to-end digital excellence designed for your growth.
              </p>

              <div className="hero-actions-modern">
                <Link href="/services" className="btn btn-primary btn-apple">
                  Explore Solutions
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-apple">
                  Get a Quote
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section overflow-hidden" id="about-preview">
        <div className="container">
          <SectionReveal>
            <div className="about-grid">
              <div className="about-text-content">
                <span className="section-label">Your Growth Partner</span>
                <h2 className="section-title" style={{ textAlign: 'left', maxWidth: '600px' }}>
                  Accelerating Your <span className="gradient-text">Business Success</span> in the Digital Era
                </h2>
                <p className="about-description">
                  At MS Infinex Tech, we combine data-driven marketing with enterprise-grade engineering 
                   to deliver measurable ROI. We don&apos;t just build software; we build the future 
                  of Udaipur&apos;s digital economy through sustainable quality and innovative design.
                </p>
                <div className="about-features">
                  <div className="about-feature">
                    <div className="feature-dot" />
                    <span>ROI-Focused Marketing Strategies</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-dot" />
                    <span>High-Performance Custom Development</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-dot" />
                    <span>Smart AI Business Automation</span>
                  </div>
                </div>
                <div className="about-cta-group" style={{ marginTop: '40px' }}>
                  <Link href="/services" className="btn btn-primary btn-apple">
                    Our Solutions
                  </Link>
                  <Link href="/about" className="btn btn-secondary btn-apple">
                    Learn about us
                  </Link>
                </div>
              </div>
              <div className="about-visual">
                <div className="visual-container glass-card">
                  <motion.img 
                    src="/assets/about_no_human_stock_1776416238612.png" 
                    alt="Business Growth Visualization"
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
      src="/assets/services_cinematic_bg_1776415793060.png" 
      alt="Services Background" 
      fill
      className="object-cover opacity-30"
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
            <AnimatedCounter end={150} suffix="+" label="Projects Completed" icon={<Rocket size={28} />} className="glow-orange" />
            <AnimatedCounter end={80} suffix="+" label="Clients Served" icon={<Users size={28} />} className="glow-orange" />
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





              <div className="cta-tech-content">
                <h2 className="cta-tech-title">
                  Ready to Grow Your <span className="gradient-text">Business?</span>
                </h2>
                <p className="cta-tech-subtitle">
                  We are ready to transform your ideas into reality. Our team is 
                  standing by to engineer your next big milestone.
                </p>
                <div className="cta-tech-buttons">
                  <Link href="/contact" className="btn btn-primary btn-apple">
                    Work With Us
                  </Link>
                  <Link href="/contact" className="btn btn-secondary btn-apple">
                    Get a Free Quote
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
