export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'social-media-trends-2025',
    title: "Social Media Evolution: How Udaipur Brands Can Win in 2025",
    excerpt: "The landscape of social media is shifting from broad reach to deep community engagement. Learn the strategies that are driving real growth for local businesses.",
    category: "Social Media",
    author: {
      name: "Eshban Oliver",
      role: "Digital Strategist",
      avatar: "EO"
    },
    date: "April 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    featured: true
  },
  {
    id: 'ai-automation-efficiency',
    title: "AI Automation: Reducing Operational Costs by 40%",
    excerpt: "Discover how custom AI agents and workflow automation are revolutionizing small to mid-sized enterprises by handling repetitive tasks with precision.",
    category: "AI Solutions",
    author: {
      name: "Pratiksha Mehta",
      role: "AI Lead",
      avatar: "PM"
    },
    date: "April 08, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'branding-identity-ux',
    title: "The Psychology of Branding: Creating Lasting Visual Identities",
    excerpt: "Branding is more than just a logo. We dive deep into the color theory and emotional triggers that build brand loyalty in competitive markets.",
    category: "Branding",
    author: {
      name: "Vikram Rajawat",
      role: "Creative Director",
      avatar: "VR"
    },
    date: "April 05, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1572044160444-ad60f128bde4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'seo-local-dominance',
    title: "Dominating Local Search: A Guide for Udaipur Retailers",
    excerpt: "Local SEO is the lifeline of physical businesses. Here is our step-by-step blueprint to ranking #1 for 'Best [Service] in Udaipur'.",
    category: "Digital Marketing",
    author: {
      name: "Aryan Sharma",
      role: "SEO Specialist",
      avatar: "AS"
    },
    date: "March 30, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1562577309-2592a4e7605d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'ecommerce-scaling-strategies',
    title: "E-Commerce Scaling: From 100 to 10,000 Monthly Orders",
    excerpt: "Scaling an online store requires more than just ads. We analyze the technical infrastructure and conversion rate optimization needed for massive growth.",
    category: "E-Commerce",
    author: {
      name: "Neha Singhal",
      role: "Growth Engineer",
      avatar: "NS"
    },
    date: "March 25, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'app-development-innovations',
    title: "The Flutter vs React Native Debate in 2025",
    excerpt: "Choosing the right framework for your mobile app can save you months of dev time. We compare the latest performance metrics for cross-platform solutions.",
    category: "App Dev",
    author: {
      name: "Rahul Gupta",
      role: "Mobile Architect",
      avatar: "RG"
    },
    date: "March 20, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800"
  }
];
