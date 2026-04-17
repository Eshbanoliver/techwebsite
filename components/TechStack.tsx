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
        <div className="tech-header-centered">
          <span className="tech-badge">Our High-Performance Stack</span>
          <h2 className="tech-title">THE MS INFINEX <span className="blue-gradient">TECHNOLOGY MATRIX</span></h2>
          <p className="tech-desc">
            We leverage a world-class production stack and growth-intelligence tools to 
            engineer scalable digital empires and ROI-driven marketing campaigns. Total 
            visibility into the precision tools that power your growth.
          </p>
        </div>

        <div className="tech-matrix-v3">
          {/* Column 1: Branding & Creative */}
          <div className="tech-column glow-purple">
            <div className="column-head">
              <div className="column-icon"><Palette size={24} /></div>
              <h3>Branding & Design</h3>
              <p>Visual Craftsmanship</p>
            </div>
            <div className="column-body">
              {techData['Branding & Design'].map(tech => (
                <div key={tech.name} className="tech-row-item">
                  <Image src={`https://skillicons.dev/icons?i=${tech.slug}`} alt={tech.name} width={24} height={24} unoptimized />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Growth & Paid Ads */}
          <div className="tech-column glow-orange">
            <div className="column-head">
              <div className="column-icon"><Briefcase size={24} /></div>
              <h3>Marketing & Ads</h3>
              <p>ROI & Scale</p>
            </div>
            <div className="column-body">
              {techData['Marketing & Growth'].map(tech => (
                <div key={tech.name} className="tech-row-item">
                  <Image src={`https://skillicons.dev/icons?i=${tech.slug}`} alt={tech.name} width={24} height={24} unoptimized />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Web & App Development */}
          <div className="tech-column glow-cyan">
            <div className="column-head">
              <div className="column-icon"><Layout size={24} /></div>
              <h3>Development</h3>
              <p>Engineering Excellence</p>
            </div>
            <div className="column-body">
              {techData['Development'].map(tech => (
                <div key={tech.name} className="tech-row-item">
                  <Image src={`https://skillicons.dev/icons?i=${tech.slug}`} alt={tech.name} width={24} height={24} unoptimized />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Infrastructure & Cloud */}
          <div className="tech-pink">
            <div className="column-head">
              <div className="column-icon"><Cloud size={24} /></div>
              <h3>Cloud & DevOps</h3>
              <p>Stability & Performance</p>
            </div>
            <div className="column-body">
              {techData['Cloud & DevOps'].map(tech => (
                <div key={tech.name} className="tech-row-item">
                  <Image src={`https://skillicons.dev/icons?i=${tech.slug}`} alt={tech.name} width={24} height={24} unoptimized />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .corporate-tech-section {
          padding: 140px 0;
          background: #0a0c12;
          color: white;
          overflow: hidden;
        }
        .tech-header-centered {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 80px;
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
          font-size: 3.5rem;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 20px;
        }
        .blue-gradient {
          background: linear-gradient(to right, #ff8a00, #ff5c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tech-desc {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }

        .tech-matrix-v3 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .tech-column {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 40px 30px;
          position: relative;
          transition: all 0.5s ease;
          overflow: hidden;
        }

        .tech-pink {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 40px 30px;
          position: relative;
          transition: all 0.5s ease;
          overflow: hidden;
        }

        .tech-column:hover, .tech-pink:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 138, 0, 0.2);
        }

        .column-head {
          margin-bottom: 40px;
          text-align: center;
        }

        .column-icon {
          width: 54px;
          height: 54px;
          background: rgba(255, 138, 0, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #ff8a00;
        }

        .column-head h3 {
          font-size: 1.4rem;
          font-weight: 850;
          margin-bottom: 6px;
        }

        .column-head p {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .column-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tech-row-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.02);
          transition: all 0.3s ease;
        }

        .tech-row-item:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(5px);
        }

        .tech-row-item span {
          font-weight: 700;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Ambient Glows */
        .tech-column::after, .tech-pink::after {
          content: '';
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 150px;
          height: 150px;
          filter: blur(60px);
          opacity: 0.2;
          z-index: 0;
        }

        .glow-purple::after { background: var(--gradient-primary); }
        .glow-orange::after { background: #ff8a00; }
        .glow-cyan::after { background: #00f2ff; }
        .tech-pink::after { background: #ff007a; }

        @media (max-width: 1200px) {
          .tech-matrix-v3 { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .tech-matrix-v3 { grid-template-columns: 1fr; }
          .tech-title { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
}
