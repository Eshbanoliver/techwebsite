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
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart3,
  Search as SearchIcon,
  MousePointer2,
  Share2
} from 'lucide-react';
import styles from './TechStack.module.css';

interface TechItem {
  name: string;
  slug?: string;
  icon?: any;
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
    { name: 'Google Ads', icon: <Target size={20} />, color: '#4285F4' },
    { name: 'Meta Ads', icon: <Share2 size={20} />, color: '#0668E1' },
    { name: 'SEMrush', icon: <SearchIcon size={20} />, color: '#FF642D' },
    { name: 'Analytics', icon: <BarChart3 size={20} />, color: '#E37400' },
    { name: 'Performance', icon: <TrendingUp size={20} />, color: '#ffffff' },
    { name: 'Paid Search', icon: <MousePointer2 size={20} />, color: '#FF7A59' },
  ],
  'Branding & Design': [
    { name: 'Figma', slug: 'figma', color: '#F24E1E' },
    { name: 'Adobe Suite', icon: <Palette size={20} />, color: '#FF0000' },
    { name: 'After Effects', slug: 'ae', color: '#CF96FD' },
    { name: 'Photoshop', slug: 'ps', color: '#31A8FF' },
    { name: 'Illustrator', slug: 'ai', color: '#FF9A00' },
    { name: 'Canva', icon: <Layers size={20} />, color: '#00C4CC' },
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
    <section className={styles['corporate-tech-section']} id="tech-stack">
      <div className="container">
        <div className={styles['tech-header-centered']}>
          <span className={styles['tech-badge']}>Our High-Performance Stack</span>
          <h2 className={styles['tech-title']}>THE MS INFINEX <span className={styles['blue-gradient']}>TECHNOLOGY MATRIX</span></h2>
          <p className={styles['tech-desc']}>
            We leverage a world-class production stack and growth-intelligence tools to 
            engineer scalable digital empires and ROI-driven marketing campaigns. Total 
            visibility into the precision tools that power your growth.
          </p>
        </div>

        <div className={styles['tech-matrix-v3']}>
          {/* Column 1: Branding & Creative */}
          <div className={`${styles['tech-column']} ${styles['glow-purple']}`}>
            <div className={styles['column-head']}>
              <div className={styles['column-icon']}><Palette size={24} /></div>
              <h3>Branding & Design</h3>
              <p>Visual Craftsmanship</p>
            </div>
            <div className={styles['column-body']}>
              {techData['Branding & Design'].map(tech => (
                <div key={tech.name} className={styles['tech-row-item']}>
                  {tech.icon ? tech.icon : tech.slug ? <Image src={`https://skillicons.dev/icons?i=${tech.slug}`} alt={tech.name} width={24} height={24} unoptimized /> : null}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Growth & Paid Ads */}
          <div className={`${styles['tech-column']} ${styles['glow-orange']}`}>
            <div className={styles['column-head']}>
              <div className={styles['column-icon']}><Briefcase size={24} /></div>
              <h3>Marketing & Ads</h3>
              <p>ROI & Scale</p>
            </div>
            <div className={styles['column-body']}>
              {techData['Marketing & Growth'].map(tech => (
                <div key={tech.name} className={styles['tech-row-item']}>
                  {tech.icon ? tech.icon : tech.slug ? <Image src={`https://skillicons.dev/icons?i=${tech.slug}`} alt={tech.name} width={24} height={24} unoptimized /> : null}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Web & App Development */}
          <div className={`${styles['tech-column']} ${styles['glow-cyan']}`}>
            <div className={styles['column-head']}>
              <div className={styles['column-icon']}><Layout size={24} /></div>
              <h3>Development</h3>
              <p>Engineering Excellence</p>
            </div>
            <div className={styles['column-body']}>
              {techData['Development'].map(tech => (
                <div key={tech.name} className={styles['tech-row-item']}>
                  {tech.icon ? tech.icon : tech.slug ? <Image src={`https://skillicons.dev/icons?i=${tech.slug}`} alt={tech.name} width={24} height={24} unoptimized /> : null}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Infrastructure & Cloud */}
          <div className={styles['tech-pink']}>
            <div className={styles['column-head']}>
              <div className={styles['column-icon']}><Cloud size={24} /></div>
              <h3>Cloud & DevOps</h3>
              <p>Stability & Performance</p>
            </div>
            <div className={styles['column-body']}>
              {techData['Cloud & DevOps'].map(tech => (
                <div key={tech.name} className={styles['tech-row-item']}>
                  {tech.icon ? tech.icon : tech.slug ? <Image src={`https://skillicons.dev/icons?i=${tech.slug}`} alt={tech.name} width={24} height={24} unoptimized /> : null}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
