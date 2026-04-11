import React from 'react';
import { notFound } from 'next/navigation';
import { 
  BrainCircuit, Layout, Smartphone, Code, Palette, Cloud, TrendingUp, Target, 
  ShieldCheck, Zap, Cpu, Users, Star, CheckCircle, Rocket, Mail, Phone, MapPin, ArrowRight 
} from 'lucide-react';
import ServiceDetailClient from '@/components/ServiceDetailClient';


interface ContentSection {
  title: string;
  subtitle?: string;
  content: string;
  items?: string[];
  layout: 'split' | 'full' | 'grid' | 'vibrant';
  image?: string;
}

interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  metaDescription: string;
  icon: React.ReactNode;
  glow: string;
  metrics: { end: number; suffix: string; label: string; icon: React.ReactNode }[];
  whyUs: string[];
  sections: ContentSection[];
  techStack: string[];
  faqs: { question: string; answer: string }[];
}

const serviceData: Record<string, ServiceDetail> = {
  'ai-ml': {
    title: 'AI & Machine Learning',
    subtitle: 'Autonomous Intelligence: The Next Frontier of Enterprise Growth',
    description: 'We engineer self-evolving neural ecosystems that translate raw data into strategic dominance. Our AI solutions don\'t just automate; they innovate, learn, and scale your business logic at digital speeds.',
    metaDescription: 'Expert AI and Machine Learning services. We build custom NLP, Computer Vision, and Predictive Analytics solutions for modern enterprises.',
    icon: <BrainCircuit size={48} />,
    glow: 'glow-cyan',
    techStack: ['TensorFlow', 'PyTorch', 'OpenAI SDK', 'NVIDIA CUDA', 'Scikit-learn', 'Hugging Face', 'AWS SageMaker', 'LangChain'],
    metrics: [
      { end: 95, suffix: '%', label: 'Inference Accuracy', icon: <Target size={24} /> },
      { end: 40, suffix: '%', label: 'Op-Ex Reduction', icon: <Zap size={24} /> },
      { end: 500, suffix: '+', label: 'Models Deployed', icon: <Cpu size={24} /> },
    ],
    whyUs: [
      'Proprietary Neural Core Architecture (PNCA)',
      'Deterministic AI Output Verification',
      'Zero-Latency Inference Pipelines',
      'Ethical & Explainable AI Frameworks',
      'Full-Stack Data Engineering Pipeline'
    ],
    sections: [
      {
        title: 'The Autonomous Renaissance',
        subtitle: 'Our Philosophy',
        layout: 'full',
        content: `In the modern digital landscape, data is no longer just an asset; it is the raw fuel for institutional intelligence. At MS Infinex, we view Artificial Intelligence not as a bolt-on feature, but as a fundamental architectural layer that redefines what is possible for your organization.\n\nour approach to 'The Autonomous Renaissance' involves moving beyond simple automation. We build systems that possess 'Contextual Awareness'—the ability to understand the nuance of your business environment and make decisions that align with your long-term strategic goals. This transition from reactive software to proactive intelligence is the defining shift of the 21st-century economy.\n\nWe focus on 'Neural Sychronization,' where AI models are perfectly tuned to the specific frequency of your operational data. This eliminates the 'hallucination' risks often associated with off-the-shelf generalized models and provides you with a source of truth that is both accurate and actionable. We are not just building tools; we are engineering the next generation of your workforce—digital, tireless, and infinitely scalable.`
      },
      {
        title: 'Neural Architecture & LLM Orchestration',
        subtitle: 'The Core Engine',
        layout: 'split',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000',
        content: `Our engineering team specializes in the orchestration of Large Language Models (LLMs) and custom neural networks to solve high-complexity business problems. We don't just 'use' AI; we architect it.\n\nKey components of our technical stack include advanced Retrieval-Augmented Generation (RAG) pipelines, which allow your AI to access and process your private documentation in real-time without the need for expensive re-training. We also implement 'Agentic Workflows,' where multiple AI agents collaborate to complete complex tasks—from market research to automated code generation.\n\nWe provide the 'Neural Backbone' that connects your disparate data sources into a unified intelligence stream. Whether you are looking to automate customer support via hyper-intelligent chatbots or predict market trends using deep learning, our architecture is built to withstand the rigors of enterprise-scale traffic.`,
        items: ['Vector Database Integration (Pinecone/Milvus)', 'Fine-tuning of Llama 3 & GPT-4o', 'Prompt Engineering & Prompt Leaking Protection', 'Scalable Kubernetes-based Model Serving']
      }
    ],
    faqs: [
      { question: 'What is the ROI of an AI implementation?', answer: 'Typical implementations see a 30-50% increase in operational efficiency within the first 6 months.' }
    ]
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'High-Performance Ecosystems',
    description: 'We craft lightning-fast web experiences that convert. Our engineering team focuses on scalability and high-conversion architectures.',
    metaDescription: 'Custom Web Development. Next.js, TypeScript, and high-performance web engineering.',
    icon: <Layout size={48} />,
    glow: 'glow-blue',
    techStack: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
    metrics: [
      { end: 99, suffix: '%', label: 'Lighthouse Score', icon: <Zap size={24} /> },
      { end: 10, suffix: 'M+', label: 'Monthly Reach', icon: <Users size={24} /> },
      { end: 250, suffix: '+', label: 'Platforms Built', icon: <Code size={24} /> },
    ],
    whyUs: [
      'Edge-Native Performance',
      'Zero-CLS Engineering',
      'Accessibility-First',
      'Atomic Component Design'
    ],
    sections: [
      {
        title: 'Architecting High-Performance Ecosystems',
        subtitle: 'Our Approach',
        layout: 'full',
        content: `Performance is a fundamental design requirement. We leverage SSR and ISR to deliver content at planetary scale with near-zero latency.`
      }
    ],
    faqs: [
      { question: 'Why Next.js?', answer: 'It provides the perfect balance between developer velocity and end-user performance.' }
    ]
  },
  'mobile-apps': {
    title: 'Mobile Apps',
    subtitle: 'Next-Gen Mobility',
    description: 'Native and cross-platform apps designed for the way people live.',
    metaDescription: 'Expert iOS and Android app development using React Native and Flutter.',
    icon: <Smartphone size={48} />,
    glow: 'glow-purple',
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    metrics: [
      { end: 4.9, suffix: '/5', label: 'Store Rating', icon: <Star size={24} /> },
      { end: 5, suffix: 'M+', label: 'Downloads', icon: <Rocket size={24} /> },
      { end: 120, suffix: 'fps', label: 'UI Performance', icon: <Zap size={24} /> },
    ],
    whyUs: ['Native-Grade Performance', 'Offline-First Data'],
    sections: [{ title: 'The Pocket Powerhouse', layout: 'full', content: 'We build mobile experiences that are frictionless.' }],
    faqs: [{ question: 'Native or Cross-platform?', answer: 'We evaluate based on your features and budget.' }]
  },
  'software-development': {
    title: 'Software Development',
    subtitle: 'Enterprise Stability',
    description: 'Custom enterprise software designed for complex business logic.',
    metaDescription: 'Custom enterprise software, ERP, and CRM solutions.',
    icon: <Code size={48} />,
    glow: 'glow-pink',
    techStack: ['Python', 'Go', 'Rust', 'Docker'],
    metrics: [
      { end: 99.99, suffix: '%', label: 'System Reliability', icon: <ShieldCheck size={24} /> },
      { end: 60, suffix: '%', label: 'Velocity Increase', icon: <Zap size={24} /> },
      { end: 1.2, suffix: 'M', label: 'Lines Audited', icon: <Code size={24} /> },
    ],
    whyUs: ['Microservices Mastery', 'Legacy Modernization'],
    sections: [{ title: 'The Industrial Backbone', layout: 'full', content: 'We engineer business systems, not just software.' }],
    faqs: [{ question: 'Modernizing legacy?', answer: 'Yes, using the Strangler Fig pattern.' }]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Emotionally Intelligent Systems',
    description: 'We design psychological and aesthetic experiences.',
    metaDescription: 'Premium UI/UX Design and Design Systems.',
    icon: <Palette size={48} />,
    glow: 'glow-orange',
    techStack: ['Figma', 'Framer', 'Adobe CC'],
    metrics: [
      { end: 300, suffix: '%', label: 'Conversion Lift', icon: <TrendingUp size={24} /> },
      { end: 85, suffix: '%', label: 'User Retention', icon: <Users size={24} /> },
      { end: 40, suffix: '%', label: 'Time-to-Value', icon: <Zap size={24} /> },
    ],
    whyUs: ['Cognitive Psych Design', 'Scalable Systems'],
    sections: [{ title: 'Beyond Aesthetics', layout: 'full', content: 'Evidence-based design for digital products.' }],
    faqs: []
  },
  'cloud-devops': {
    title: 'Cloud & DevOps',
    subtitle: 'Global Scaling',
    description: 'Automated cloud infrastructures and CI/CD pipelines.',
    metaDescription: 'Expert Cloud & DevOps services with Terraform and Kubernetes.',
    icon: <Cloud size={48} />,
    glow: 'glow-green',
    techStack: ['AWS', 'Azure', 'Kubernetes'],
    metrics: [
      { end: 10, suffix: 'x', label: 'Deploy Speed', icon: <Zap size={24} /> },
      { end: 99.99, suffix: '%', label: 'Uptime SLA', icon: <ShieldCheck size={24} /> },
      { end: 200, suffix: '+', label: 'Clusters Managed', icon: <Cloud size={24} /> },
    ],
    whyUs: ['Serverless Orchestration', 'DevSecOps Core'],
    sections: [{ title: 'The Invisible Layer', layout: 'full', content: 'Infrastructure as Code for agile delivery.' }],
    faqs: []
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Algorithmic Growth',
    description: 'Performance marketing driven by data insights.',
    metaDescription: 'Data-driven Digital Marketing and SEO strategies.',
    icon: <TrendingUp size={48} />,
    glow: 'glow-blue',
    techStack: ['Google Ads', 'GA4', 'Semrush'],
    metrics: [
      { end: 500, suffix: '%', label: 'Organic Growth', icon: <TrendingUp size={24} /> },
      { end: 2.5, suffix: 'M+', label: 'Ad Impressions', icon: <Target size={24} /> },
      { end: 15, suffix: '%', label: 'Reduced CAC', icon: <Zap size={24} /> },
    ],
    whyUs: ['Algorithmic Bidding', 'Content Clusters'],
    sections: [{ title: 'Performance-First', layout: 'full', content: 'Contextual dominance for modern brands.' }],
    faqs: []
  },
  'branding': {
    title: 'Branding & Logo',
    subtitle: 'Strategic Visual Identity',
    description: 'We build iconic, timeless brands for the tech world.',
    metaDescription: 'Strategic Brand Identity and Logo Design.',
    icon: <Target size={48} />,
    glow: 'glow-orange',
    techStack: ['Illustrator', 'Pantone', 'InDesign'],
    metrics: [
      { end: 100, suffix: '%', label: 'Recognition', icon: <Star size={24} /> },
      { end: 50, suffix: '+', label: 'Brand Booklets', icon: <Palette size={24} /> },
      { end: 25, suffix: 'yr', label: 'Visual Longevity', icon: <Target size={24} /> },
    ],
    whyUs: ['Archetypal Positioning', 'Minimalist Aesthetic'],
    sections: [{ title: 'Engineering Identity', layout: 'full', content: 'Visual languages that communicate complexity.' }],
    faqs: []
  },
  'enterprise-solutions': {
    title: 'Enterprise Solutions',
    subtitle: 'Mission-Critical Architecture',
    description: 'Specialized architectural solutions for high-demand environments.',
    metaDescription: 'Enterprise tech, high-availability, and compliance engineering.',
    icon: <ShieldCheck size={48} />,
    glow: 'glow-blue',
    techStack: ['Kafka', 'Cassandra', 'Snowflake'],
    metrics: [
      { end: 99.999, suffix: '%', label: 'SLA Reliability', icon: <ShieldCheck size={24} /> },
      { end: 1, suffix: 'PB+', label: 'Data Handled', icon: <Cpu size={24} /> },
      { end: 150, suffix: 'ms', label: 'Global Latency', icon: <Zap size={24} /> },
    ],
    whyUs: ['HA Cluster Mastery', 'Planetary-Scale Engines'],
    sections: [{ title: 'Engineering Certainty', layout: 'full', content: 'Absolute continuity for global enterprises.' }],
    faqs: []
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = serviceData[slug];
  if (!data) return {};
  
  return {
    title: `${data.title} | Infinex Technical Solutions`,
    description: data.metaDescription,
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      images: [`/services/${slug}.png`],
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = serviceData[slug];

  if (!data) return notFound();

  return <ServiceDetailClient data={data} />;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }));
}
