'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Stethoscope, 
  ShoppingCart, 
  Banknote, 
  GraduationCap, 
  Truck, 
  Home as HomeIcon, 
  Car, 
  Factory, 
  Layers, 
  Handshake,
  Crown,
  Send,
  Leaf
} from 'lucide-react';
import SectionReveal from './SectionReveal';
import styles from './IndustriesMatrix.module.css';

const industries = [
  { name: "Healthcare", icon: <Stethoscope size={24} />, lightColor: "#fef2f2", iconColor: "#ef4444" },
  { name: "E-commerce", icon: <ShoppingCart size={24} />, lightColor: "#fffbeb", iconColor: "#f59e0b" },
  { name: "FinTech", icon: <Banknote size={24} />, lightColor: "#ecfdf5", iconColor: "#10b981" },
  { name: "Education", icon: <GraduationCap size={24} />, lightColor: "#eff6ff", iconColor: "#3b82f6" },
  { name: "Logistics", icon: <Truck size={24} />, lightColor: "#f5f3ff", iconColor: "#8b5cf6" },
  { name: "Real Estate", icon: <HomeIcon size={24} />, lightColor: "#fdf2f8", iconColor: "#ec4899" },
  { name: "Automotive", icon: <Car size={24} />, lightColor: "#f8fafc", iconColor: "#64748b" },
  { name: "Manufacturing", icon: <Factory size={24} />, lightColor: "#ecfeff", iconColor: "#06b6d4" },
  { name: "SaaS", icon: <Layers size={24} />, lightColor: "#f0f9ff", iconColor: "#0ea5e9" },
  { name: "Social Impact", icon: <Handshake size={24} />, lightColor: "#f0fdf4", iconColor: "#22c55e" }
];

export default function IndustriesMatrix() {
  return (
    <section className={styles['industries-section-v5']} id="industries">
      {/* Doodles */}
      <div className={styles['doodle-crown']}><Crown size={40} strokeWidth={1} /></div>
      <div className={styles['doodle-plane']}><Send size={40} strokeWidth={1} /></div>
      <div className={styles['doodle-bow']}><HomeIcon size={40} strokeWidth={1} /></div>
      <div className={styles['doodle-leaf']}><Leaf size={40} strokeWidth={1} /></div>

      <div className="container">
        <SectionReveal>
          <h2 className={styles['industries-title-v5']}>
            Industries <span className={styles['italic-text']}>We Serve</span>
          </h2>
        </SectionReveal>

        <div className={styles['industries-container-v5']}>
          <div className={styles['industry-pill-grid-v5']}>
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                className={styles['industry-pill-v5']}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className={styles['pill-num-v5']}>{i + 1}</div>
                <div className={styles['pill-icon-box']} style={{ background: ind.lightColor, color: ind.iconColor }}>
                  {ind.icon}
                </div>
                <h3>{ind.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className={styles['industry-visual-v5']}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/assets/industries_guide.png" 
              alt="Ms Infinex Guide" 
              fill
              className={styles['industry-character-img']}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
