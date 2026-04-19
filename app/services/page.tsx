'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SectionReveal from '@/components/SectionReveal';
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false });
import { 
  TrendingUp, Share2, Megaphone, Globe, Smartphone, Paintbrush, 
  Brain, ShoppingCart, ArrowRight, CheckCircle, Rocket
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={32} />,
  Share2: <Share2 size={32} />,
  Megaphone: <Megaphone size={32} />,
  Globe: <Globe size={32} />,
  Smartphone: <Smartphone size={32} />,
  Paintbrush: <Paintbrush size={32} />,
  Brain: <Brain size={32} />,
  ShoppingCart: <ShoppingCart size={32} />,
};

const services = [
  {
    icon: 'TrendingUp',
    title: 'Digital Marketing',
    desc: 'Local SEO, content marketing, lead generation & reputation management for Udaipur businesses.',
    slug: 'digital-marketing',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
    subpages: ['Local SEO', 'Website SEO', 'Content Marketing', 'Lead Generation', 'WhatsApp & Email', 'Reputation Management'],
  },
  {
    icon: 'Share2',
    title: 'Social Media Marketing',
    desc: 'Instagram, Reels, Facebook & influencer collaborations for cafes, hotels & lifestyle brands.',
    slug: 'social-media-marketing',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
    subpages: ['Instagram Marketing', 'Reels & Short Videos', 'Facebook Management', 'Influencer Collaboration', 'Daily Posting', 'Content Scheduling'],
  },
  {
    icon: 'Megaphone',
    title: 'Paid Ads',
    desc: 'Google Ads, Meta Ads & YouTube campaigns that drive instant visibility and measurable ROI.',
    slug: 'paid-ads',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    subpages: ['Google Ads', 'Meta Ads', 'YouTube Ads', 'Lead Gen Campaigns', 'Retargeting', 'Product Selling'],
  },
  {
    icon: 'Globe',
    title: 'Web Development',
    desc: 'Business websites, e-commerce, custom solutions & SEO-friendly development for local businesses.',
    slug: 'web-development',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    subpages: ['Business Website', 'E-commerce', 'Custom Solutions', 'UI/UX Design', 'Maintenance', 'SEO-Friendly Dev'],
  },
  {
    icon: 'Smartphone',
    title: 'App & Web App Development',
    desc: 'Mobile apps, PWAs, startup MVPs & backend systems built for Udaipur entrepreneurs.',
    slug: 'app-development',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    subpages: ['Mobile App Dev', 'Web App Dev', 'Startup Solutions', 'UI/UX Design', 'Backend & API', 'Maintenance', 'Advanced Features'],
  },
  {
    icon: 'Paintbrush',
    title: 'Graphic Design & Branding',
    desc: 'Logos, social media design, marketing materials & complete brand identity for local brands.',
    slug: 'graphic-design',
    color: '#f43f5e',
    gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
    subpages: ['Logo & Brand Identity', 'Social Media Design', 'Marketing Materials', 'Creative Content', 'Local Branding'],
  },
  {
    icon: 'Brain',
    title: 'AI Solutions for Businesses',
    desc: 'Practical AI chatbots, automation tools & data insights designed for Udaipur entrepreneurs.',
    slug: 'ai-solutions',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    subpages: ['AI Chatbots', 'AI Marketing Tools', 'AI for Local Business', 'Data & Insights', 'AI Integration', 'Automation'],
  },
  {
    icon: 'ShoppingCart',
    title: 'E-Commerce Management',
    desc: 'Amazon, Flipkart & Meesho account management — from setup to scaling your online sales.',
    slug: 'ecommerce-management',
    color: '#eab308',
    gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
    subpages: ['Account Setup', 'Product Listing', 'Order Management', 'Ads & Promos', 'Account Growth', 'Analytics', 'Local Seller Support'],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ServicesPage(): React.JSX.Element {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <ParticleBackground />
        <div className="container relative z-10" style={{ textAlign: 'center', padding: '120px 24px 80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label" style={{ marginBottom: '24px' }}>Our Services</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 950, letterSpacing: '-3px', marginBottom: '24px', lineHeight: 1.1 }}>
              Everything Your Udaipur Business <span className="gradient-text">Needs to Grow</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              From digital marketing to AI solutions — we provide end-to-end technology and marketing services tailored for Udaipur&apos;s thriving business ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="section">
        <div className="container">
          <div className="svc-listing-grid">
            {services.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link href={`/services/${svc.slug}`} className="svc-listing-card">
                  <div className="svc-listing-accent" style={{ background: svc.gradient }} />
                  <div className="svc-listing-body">
                    <div className="svc-listing-icon" style={{ color: svc.color, background: `${svc.color}15`, borderColor: `${svc.color}25` }}>
                      {iconMap[svc.icon]}
                    </div>
                    <h2 className="svc-listing-title">{svc.title}</h2>
                    <p className="svc-listing-desc">{svc.desc}</p>
                    <div className="svc-listing-tags">
                      {svc.subpages.slice(0, 4).map(sp => (
                        <span key={sp} className="svc-listing-tag" style={{ color: svc.color, background: `${svc.color}10`, borderColor: `${svc.color}20` }}>{sp}</span>
                      ))}
                      {svc.subpages.length > 4 && (
                        <span className="svc-listing-tag" style={{ color: svc.color, background: `${svc.color}10`, borderColor: `${svc.color}20` }}>+{svc.subpages.length - 4} more</span>
                      )}
                    </div>
                    <div className="svc-listing-cta" style={{ color: svc.color }}>
                      Explore Services <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
