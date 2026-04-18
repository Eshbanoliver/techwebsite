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
  ShoppingCart,
  Layers
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false });
const AnimatedCounter = dynamic(() => import('@/components/AnimatedCounter'), { ssr: false });
const ModernTestimonialDesign = dynamic(() => import('@/components/ModernTestimonialDesign'), { ssr: false });
const TechStack = dynamic(() => import('@/components/TechStack'), { ssr: false });
const CategorizedFAQ = dynamic(() => import('@/components/CategorizedFAQ'), { ssr: false });
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
  { icon: <Globe size={24} />, title: 'Web Development', desc: 'Dynamic websites and e-commerce platforms built for speed and conversions.', slug: 'web-development', glow: 'glow-blue', bg: '/assets/service_webdev_stock_1776416031626.png' },
  { icon: <Smartphone size={24} />, title: 'App Development', desc: 'Native-feel mobile apps and PWAs designed for exceptional user experience.', slug: 'app-development', glow: 'glow-green', bg: '/assets/service_appdev_stock_v2_1776416681623.png' },
  { icon: <Paintbrush size={24} />, title: 'Branding & Design', desc: 'High-end visual identity and logo design to make your brand stand out.', slug: 'graphic-design', glow: 'glow-cyan', bg: '/assets/service_branding_stock_1776416084682.png' },
  { icon: <Brain size={24} />, title: 'AI Solutions', desc: 'Smart AI chatbots and automation to streamline your business operations.', slug: 'ai-solutions', glow: 'glow-indigo', bg: '/assets/about_no_human_stock_1776416238612.png' },
  { icon: <ShoppingCart size={24} />, title: 'Marketplace Management', desc: 'Expert Amazon and Flipkart management to grow your national sales.', slug: 'ecommerce-management', glow: 'glow-teal', bg: '/assets/industry_ecommerce_visual_1776415874745.png' },
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


const industries = [
  { name: "E-commerce & Retail", icon: <ShoppingCart size={22} />, desc: "High-conversion growth engines with intelligent inventory and global payment maturity.", image: "/assets/industry_ecommerce_visual_1776415874745.png" },
  { name: "Fintech & Banking", icon: <Banknote size={22} />, desc: "Secure transaction ecosystems, blockchain protocols, and AI fraud prevention systems.", image: "/assets/service_social_stock_1776416055715.png" },
  { name: "Healthcare & MedTech", icon: <Stethoscope size={22} />, desc: "HIPAA-compliant platforms, diagnostic AI, and data-driven patient experience nodes.", image: "/assets/industry_healthcare_visual_1776415815696.png" },
  { name: "Enterprise SaaS", icon: <Layers size={22} />, desc: "High-velocity product architectures designed for unlimited scale and global multi-tenancy.", image: "/assets/about_business_v2_stock_1776416113626.png" },
  { name: "EdTech & Learning", icon: <GraduationCap size={22} />, desc: "Interactive digital classrooms and high-engagement LMS ecosystems for the modern age.", image: "/assets/about_business_growth_visual_1776415616126.png" },
  { name: "Travel & Hospitality", icon: <Hotel size={22} />, desc: "Comprehensive booking logic, guest automation, and immersive tourism experiences.", image: "/assets/hospitality_no_human_stock_1776416321098.png" },
  { name: "Real Estate & PropTech", icon: <HomeIcon size={22} />, desc: "Marketplace intelligence, virtual tours, and secure property transaction engines.", image: "/assets/industry_hospitality_visual_1776415839091.png" },
  { name: "Logistics & Supply", icon: <Truck size={22} />, desc: "Real-time visibility, route optimization logic, and intelligence-driven supply chains.", image: "/assets/service_webdev_stock_1776416031626.png" },
  { name: "Media & Entertainment", icon: <Zap size={22} />, desc: "Immersive streaming pipelines, digital asset management, and viral content tech.", image: "/assets/services_cinematic_bg_1776415793060.png" },
  { name: "Impact & Nonprofits", icon: <Handshake size={22} />, desc: "High-transparency donation engines and community-centric global impact platforms.", image: "/assets/about_no_human_stock_1776416238612.png" }
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
            <AnimatedCounter end={98} suffix="%" label="Client Satisfaction" icon={<Users size={28} />} className="glow-orange" />
            <AnimatedCounter end={10} suffix="+" label="Years of Developer Experience" icon={<Calendar size={28} />} className="glow-purple" />
            <AnimatedCounter end={30} suffix="+" label="Technologies Used" icon={<Cpu size={28} />} className="glow-pink" />
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US (REDESIGNED) ===== */}
      <section className="section overflow-hidden" id="why-choose-us-modern">
        <div className="container">
          <div className="why-grid-v2">
            <div className="why-content-v2">
              <motion.div {...fadeUp}>
                <span className="section-label">Institutional Authority</span>
                <h2 className="section-title" style={{ textAlign: 'left', fontSize: '3.5rem', marginBottom: '24px' }}>
                  WHY <span className="gradient-text">CHOOSE US</span>
                </h2>
                <p className="about-description" style={{ maxWidth: '95%' }}>
                   MS Infinex Tech is a high-performance digital studio in Udaipur dedicated to 
                  bridging the gap between complex engineering and human-centric design. We don&apos;t 
                  just build websites; we engineer sustainable growth ecosystems.
                </p>

                <div className="why-stats-row">
                  <div className="why-stat-item">
                    <div className="why-stat-value">98%</div>
                    <div className="why-stat-label">Client Progress ROI</div>
                  </div>
                  <div className="why-stat-item">
                    <div className="why-stat-value">250+</div>
                    <div className="why-stat-label">Project Deployments</div>
                  </div>
                </div>

                <div className="why-features-row">
                  <div className="why-feat-box glow-orange">
                    <h4>Strategic Precision</h4>
                    <p>Data-backed roadmaps for long-term growth.</p>
                  </div>
                  <div className="why-feat-box glow-orange">
                    <h4>Technical Mastery</h4>
                    <p>Scalable code architectures without compromises.</p>
                  </div>
                  <div className="why-feat-box glow-orange">
                    <h4>Agile Execution</h4>
                    <p>Rapid delivery with global quality standards.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="why-visual-v2">
              <motion.div 
                className="why-image-wrapper"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image 
                  src="/assets/services_cinematic_bg_1776415793060.png" 
                  alt="Futuristic Digital Engineering Visualization" 
                  fill
                  className="object-cover"
                />
                <div className="why-image-overlay" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <TechStack />

      <section className="industries-section-v5" id="industries">
        <div className="container">
          <SectionReveal>
            <div className="section-header-centered">
              <h2 className="industries-title-v5">
                Industries <span className="italic-text">We Serve</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="industry-pill-grid">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                className="industry-pill-card"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="pill-number-badge">{i + 1}</div>
                <div className="pill-content">
                  <h3>{ind.name.split(' & ')[0]}</h3>
                  {ind.name.includes(' & ') && <span className="pill-sub">& {ind.name.split(' & ')[1]}</span>}
                </div>
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
          <ModernTestimonialDesign />
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Knowledge Base</span>
              <h2 className="section-title">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="section-subtitle">
                Expert insights and transparent answers to the most common queries across 
                our entire technical and marketing ecosystem.
              </p>
            </div>
          </SectionReveal>
        </div>
        <CategorizedFAQ />
      </section>
    </>
  );
}
