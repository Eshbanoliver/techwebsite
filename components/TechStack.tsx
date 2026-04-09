'use client';
import { useState } from 'react';
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
  'Frontend': [
    { name: 'React', slug: 'react', color: '#61DAFB' },
    { name: 'Next.js', slug: 'nextjs', color: '#ffffff' },
    { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
    { name: 'Angular', slug: 'angular', color: '#DD0031' },
    { name: 'HTML5', slug: 'html', color: '#E34F26' },
    { name: 'CSS3', slug: 'css', color: '#1572B6' },
    { name: 'JavaScript', slug: 'js', color: '#F7DF1E' },
    { name: 'Three.js', slug: 'threejs', color: '#ffffff' },
    { name: 'Tailwind CSS', slug: 'tailwind', color: '#06B6D4' },
    { name: 'Framer Motion', slug: 'framer', color: '#0055FF' },
    { name: 'Redux', slug: 'redux', color: '#764ABC' },
    { name: 'Svelte', slug: 'svelte', color: '#FF3E00' },
  ],
  'Backend': [
    { name: 'Node.js', slug: 'nodejs', color: '#339933' },
    { name: 'PostgreSQL', slug: 'postgres', color: '#4169E1' },
    { name: 'Python', slug: 'python', color: '#3776AB' },
    { name: 'Go Lang', slug: 'go', color: '#00ADD8' },
    { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
    { name: 'Redis', slug: 'redis', color: '#DC382D' },
    { name: 'GraphQL', slug: 'graphql', color: '#E10098' },
    { name: 'Express', slug: 'express', color: '#ffffff' },
  ],
  'UI/UX Design': [
    { name: 'Figma', slug: 'figma', color: '#F24E1E' },
    { name: 'Adobe XD', slug: 'xd', color: '#FF61F6' },
    { name: 'Photoshop', slug: 'ps', color: '#31A8FF' },
    { name: 'Illustrator', slug: 'ai', color: '#FF9A00' },
    { name: 'Blender', slug: 'blender', color: '#F5792A' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', slug: 'aws', color: '#FF9900' },
    { name: 'Docker', slug: 'docker', color: '#2496ED' },
    { name: 'Kubernetes', slug: 'kubernetes', color: '#326CE5' },
    { name: 'Google Cloud', slug: 'gcp', color: '#4285F4' },
    { name: 'Terraform', slug: 'terraform', color: '#7B42BC' },
    { name: 'Nginx', slug: 'nginx', color: '#009639' },
  ],
  'AI Development': [
    { name: 'PyTorch', slug: 'pytorch', color: '#EE4C2C' },
    { name: 'TensorFlow', slug: 'tensorflow', color: '#FF6F00' },
    { name: 'Scikit-Learn', slug: 'sklearn', color: '#F7931E' },
    { name: 'OpenAI', slug: 'openai', color: '#412991' },
  ],
  'Digital Marketing': [
    { name: 'Google Ads', slug: 'gads', color: '#4285F4' },
    { name: 'Google Analytics', slug: 'ga', color: '#E37400' },
    { name: 'HubSpot', slug: 'hubspot', color: '#FF7A59' },
  ],
  'Mobile Apps': [
    { name: 'React Native', slug: 'react', color: '#61DAFB' },
    { name: 'Flutter', slug: 'flutter', color: '#02569B' },
    { name: 'Swift', slug: 'swift', color: '#F05138' },
    { name: 'Kotlin', slug: 'kotlin', color: '#7F52FF' },
    { name: 'Firebase', slug: 'firebase', color: '#FFCA28' },
    { name: 'Android', slug: 'android', color: '#3DDC84' },
  ],
};

const categoryLabels: Record<string, string> = {
  'Frontend': 'Visual & Interactive Excellence',
  'Backend': 'Scalable Logic & Architecture',
  'UI/UX Design': 'User-Centric Craftsmanship',
  'Cloud & DevOps': 'Global Infrastructure & Velocity',
  'AI Development': 'Cognitive Solutions & Data Science',
  'Digital Marketing': 'Strategic Growth & Analytics',
  'Mobile Apps': 'Native & Hybrid Mobility',
};

const categoryIcons: Record<string, any> = {
  'Frontend': <Layout size={22} />,
  'Backend': <Database size={22} />,
  'UI/UX Design': <Palette size={22} />,
  'Cloud & DevOps': <Cloud size={22} />,
  'AI Development': <Layers size={22} />,
  'Digital Marketing': <Briefcase size={22} />,
  'Mobile Apps': <Smartphone size={22} />,
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('Frontend');
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
        <div className="tech-layout">
          {/* Left Content Column */}
          <div className="tech-content">
            <span className="tech-badge">Our Technology Matrix</span>
            <h2 className="tech-title">Enterprise <span className="blue-gradient">Engineering</span> Capacity</h2>
            <p className="tech-desc">
              We deploy a production-ready stack designed for scale, security, and developer velocity. 
              Our methodology prioritizes long-term reliability over architecture and fleeting trends.
            </p>

            <div className="tech-tabs-list">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`tech-tab-item ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab)}
                >
                  <div className="tab-indicator" />
                  <div className="tab-icon-frame">
                    {categoryIcons[tab]}
                  </div>
                  <div className="tab-text-content">
                    <span className="tab-name">{tab}</span>
                    <span className="tab-label-sm">{categoryLabels[tab]}</span>
                  </div>
                  <ArrowRight size={14} className="tab-arrow" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="tech-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="tech-matrix-grid"
              >
                {techData[activeTab].map((tech) => (
                  <div key={tech.name} className="tech-matrix-card" style={{ '--color': tech.color } as any}>
                    <div className="card-top">
                      <div className="tech-icon-circle-v3">
                        <img 
                          src={`https://skillicons.dev/icons?i=${tech.slug}`} 
                          alt={tech.name}
                          className="original-brand-icon-v2"
                          loading="lazy"
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
      </div>

      <style jsx>{`
        .corporate-tech-section {
          padding: 140px 0;
          background: #080a10;
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
        .tech-content {
          position: sticky;
          top: 140px;
          height: fit-content;
        }
        .tech-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 8px 16px;
          background: rgba(0, 198, 255, 0.1);
          color: #00c6ff;
          border-radius: 6px;
          margin-bottom: 24px;
        }
        .tech-title {
          font-size: 3.5rem;
          font-weight: 850;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }
        .blue-gradient {
          background: linear-gradient(to right, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tech-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          margin-bottom: 40px;
        }
        .tech-tabs-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .tech-tab-item {
          display: flex;
          align-items: center;
          padding: 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.03);
          border-radius: 20px;
          color: rgba(255,255,255,0.4);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          text-align: left;
        }
        .tab-indicator {
          width: 0;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(to right, rgba(0, 198, 255, 0.1), transparent);
          transition: width 0.4s ease;
          z-index: 0;
        }
        .tab-icon-frame {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
          transition: all 0.4s ease;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .tab-text-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }
        .tab-name {
          font-weight: 850;
          font-size: 1.2rem;
          line-height: 1.2;
        }
        .tab-label-sm {
          font-size: 0.72rem;
          font-weight: 600;
          opacity: 0.4;
          margin-top: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .tab-arrow {
          margin-left: auto;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }
        .tech-tab-item:hover {
          color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.08);
          transform: translateX(5px);
        }
        .tech-tab-item.active {
          color: #00c6ff;
          border-color: rgba(0, 198, 255, 0.3);
          background: rgba(0, 198, 255, 0.05);
        }
        .tech-tab-item.active .tab-icon-frame {
          background: #00c6ff;
          color: white;
          box-shadow: 0 0 20px rgba(0, 198, 255, 0.4);
          border-color: transparent;
        }
        .tech-tab-item.active .tab-indicator {
          width: 100%;
        }
        .tech-tab-item.active .tab-arrow {
          opacity: 1;
          transform: translateX(0);
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
