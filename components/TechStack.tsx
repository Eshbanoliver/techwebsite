'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  ShieldCheck,
  Zap,
  Layout,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Layers,
  Cpu,
  Palette,
  Briefcase,
  CheckCircle2
} from 'lucide-react';

interface TechItem {
  name: string;
  slug: string;
  color: string;
}

const techData: Record<string, TechItem[]> = {
  'Development': [
    { name: 'React', slug: 'react', color: '#61DAFB' },
    { name: 'Next.js', slug: 'nextjs', color: '#ffffff' },
    { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
    { name: 'Node.js', slug: 'nodejs', color: '#339933' },
    { name: 'Go Lang', slug: 'go', color: '#00ADD8' },
    { name: 'PostgreSQL', slug: 'postgres', color: '#4169E1' },
    { name: 'AWS', slug: 'aws', color: '#FF9900' },
  ],
  'Marketing & Growth': [
    { name: 'Google Ads', slug: 'gads', color: '#4285F4' },
    { name: 'Meta Ads', slug: 'meta', color: '#0668E1' },
    { name: 'SEMrush', slug: 'semrush', color: '#FF642D' },
    { name: 'Google Analytics', slug: 'ga', color: '#E37400' },
    { name: 'Ahrefs', slug: 'ahrefs', color: '#ffffff' },
    { name: 'HubSpot', slug: 'hubspot', color: '#FF7A59' },
  ],
  'Branding & Design': [
    { name: 'Figma', slug: 'figma', color: '#F24E1E' },
    { name: 'Adobe Suite', slug: 'adobe', color: '#FF0000' },
    { name: 'After Effects', slug: 'ae', color: '#CF96FD' },
    { name: 'Photoshop', slug: 'ps', color: '#31A8FF' },
    { name: 'Illustrator', slug: 'ai', color: '#FF9A00' },
    { name: 'Canva', slug: 'canva', color: '#00C4CC' },
  ],
  'Cloud & DevOps': [
    { name: 'Docker', slug: 'docker', color: '#2496ED' },
    { name: 'Kubernetes', slug: 'kubernetes', color: '#326CE5' },
    { name: 'Terraform', slug: 'terraform', color: '#7B42BC' },
    { name: 'Nginx', slug: 'nginx', color: '#009639' },
    { name: 'GitHub', slug: 'github', color: '#ffffff' },
  ],
};

const categoryLabels: Record<string, string> = {
  'Development': 'Enterprise-Grade Engineering',
  'Marketing & Growth': 'Data-Driven Market Intelligence',
  'Branding & Design': 'Visual & Creative Craftsmanship',
  'Cloud & DevOps': 'Scalable Infrastructure & Velocity',
};

const categoryIcons: Record<string, any> = {
  'Development': <Layout size={22} />,
  'Marketing & Growth': <Briefcase size={22} />,
  'Branding & Design': <Palette size={22} />,
  'Cloud & DevOps': <Cloud size={22} />,
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('Development');
  const tabs = Object.keys(techData);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const section = document.getElementById('tech-stack');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="corporate-tech-section" id="tech-stack">
      <div className="container">
        {/* Top Label & Header */}
        <div className="tech-header-centered">
          <span className="tech-badge">Our Technology Matrix</span>
          <h2 className="tech-title">High-Performance <span className="blue-gradient">Technical Studio</span> Capacity</h2>
          <p className="tech-desc">
            We deploy an enterprise-grade stack and precision marketing tools designed for 
            unlimited scale, military-level security, and measurable business growth. Our methodology 
            prioritizes long-term ROI over fleeting industry trends.
          </p>

          <div className="tech-tabs-horizontal">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tech-tab-horizontal-item ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabChange(tab)}
              >
                <div className="tab-icon-frame-sm">
                  {categoryIcons[tab]}
                </div>
                <span className="tab-name-horizontal">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="tech-display-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="tech-matrix-grid"
            >
              {techData[activeTab].map((tech) => (
                <div key={tech.name} className="tech-matrix-card" style={{ '--color': tech.color } as any}>
                  <div className="card-top">
                    <div className="tech-icon-circle-v3">
                      <Image 
                        src={`https://skillicons.dev/icons?i=${tech.slug}`} 
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="original-brand-icon-v2"
                        unoptimized={true}
                      />
                    </div>
                    <div className="card-right-info">
                      <span className="info-label">Architecture</span>
                      <div className="status-container">
                        <CheckCircle2 size={10} color="#4ade80" />
                        <span className="info-value">Stable</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tech-main-detail">
                      <div className="title-row">
                        <h3 className="tech-matrix-name">{tech.name}</h3>
                        <Zap size={14} className="pulse-icon" style={{ color: tech.color }} />
                      </div>
                      <div className="tech-tags">
                        <span className="tag">Official SDK</span>
                        <span className="tag">Production Level</span>
                      </div>
                    </div>
                    <div className="tech-stats-side">
                      <div className="stat-item">
                        <span className="stat-bar"><span className="bar-fill" /></span>
                        <span className="stat-txt">98.4% Reliability</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


      <style jsx>{`
        .corporate-tech-section {
          padding: 140px 0;
          background: #0a0c12; /* Refined deep charcoal */
          position: relative;
          color: white;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .tech-layout {
          display: grid;
          grid-template-columns: 440px 1fr;
          gap: 100px;
          align-items: start;
        }
        .tech-header-centered {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 60px;
        }
        .tech-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 8px 16px;
          background: rgba(255, 138, 0, 0.1);
          color: #ff8a00;
          border-radius: 6px;
          margin-bottom: 24px;
        }
        .tech-title {
          font-size: 4rem;
          font-weight: 850;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -1.5px;
        }
        .blue-gradient {
          background: linear-gradient(to right, #ff8a00, #ff5c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tech-desc {
          font-size: 1.15rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          margin-bottom: 60px;
        }
        .tech-tabs-horizontal {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          padding: 8px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          width: fit-content;
          margin: 0 auto;
        }
        .tech-tab-horizontal-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          border-radius: 14px;
          color: rgba(255,255,255,0.5);
          font-weight: 700;
          transition: all 0.4s ease;
          border: 1px solid transparent;
        }
        .tab-icon-frame-sm {
          opacity: 0.6;
          transition: all 0.4s ease;
        }
        .tech-tab-horizontal-item:hover {
          background: rgba(255,255,255,0.05);
          color: white;
        }
        .tech-tab-horizontal-item.active {
          background: #ff8a00;
          color: white;
          box-shadow: 0 10px 30px rgba(255, 138, 0, 0.3);
        }
        .tech-tab-horizontal-item.active .tab-icon-frame-sm {
          opacity: 1;
          transform: scale(1.1);
        }
        .tab-name-horizontal {
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        .tech-matrix-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        .tech-matrix-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 32px;
          border-radius: 24px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .tech-matrix-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: var(--color);
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .card-right-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .status-container {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .info-label {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 800;
        }
        .info-value {
          font-size: 0.78rem;
          color: #4ade80;
          font-weight: 900;
          text-transform: uppercase;
        }
        .tech-icon-circle-v3 {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s ease;
          border: 1px solid rgba(255,255,255,0.06);
          position: relative;
        }
        .original-brand-icon-v2 {
          width: 32px;
          height: 32px;
          object-fit: contain;
          transition: all 0.5s ease;
        }
        .tech-matrix-card:hover .tech-icon-circle-v3 {
          background: white;
          box-shadow: 0 0 30px rgba(255,255,255,0.1);
          border-color: transparent;
        }
        .tech-matrix-card:hover .original-brand-icon-v2 {
          transform: scale(1.15) rotate(3deg);
        }
        .card-body {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
        }
        .tech-main-detail {
          flex: 1;
        }
        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .tech-matrix-name {
          font-size: 1.4rem;
          font-weight: 850;
          color: white;
          letter-spacing: -1px;
        }
        .pulse-icon {
          opacity: 0.6;
          animation: mini-pulse 2s infinite;
        }
        .tech-stats-side {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          min-width: 120px;
        }
        .stat-bar {
          width: 100%;
          height: 5px;
          background: rgba(255,255,255,0.08);
          border-radius: 3px;
          overflow: hidden;
          display: block;
        }
        .bar-fill {
          display: block;
          width: 88%;
          height: 100%;
          background: var(--color);
          box-shadow: 0 0 12px var(--color);
        }
        .stat-txt {
          font-size: 0.68rem;
          font-weight: 900;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tag {
          font-size: 0.64rem;
          font-weight: 800;
          padding: 6px 12px;
          background: rgba(255,255,255,0.04);
          border-radius: 8px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.5px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .tech-matrix-card:hover .tag {
          background: rgba(255,255,255,0.08);
          color: white;
          border-color: var(--color);
        }

        @keyframes mini-pulse {
          0% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.4; transform: scale(1); }
        }

        @media (max-width: 1300px) {
          .tech-layout { grid-template-columns: 1fr; gap: 50px; }
          .tech-content { position: relative; top: 0; text-align: center; max-width: 800px; margin: 0 auto; }
          .tech-tabs-list { flex-direction: row; flex-wrap: wrap; justify-content: center; }
          .tech-tab-item { width: auto; padding: 16px 24px; border-radius: 12px; }
          .tab-icon-frame { margin-right: 12px; width: 36px; height: 36px; }
        }
        @media (max-width: 768px) {
          .tech-title { font-size: 2.8rem; }
          .tech-matrix-grid { grid-template-columns: 1fr; }
          .tech-icon-circle-v3 { width: 56px; height: 56px; }
          .original-brand-icon-v2 { width: 28px; height: 28px; }
        }
      `}</style>
    </section>
  );
}
