// ============================================================
// MS INFINEX — SERVICES DATA (SINGLE SOURCE OF TRUTH)
// 8 Main Services | ~49 Subpages | Udaipur-Focused
// ============================================================

export interface SubpageItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string; // Lucide icon name
  highlights: string[];
  steps?: { title: string; desc: string }[];
  features?: { title: string; desc: string; icon: string }[];
  faqs?: { q: string; a: string }[];
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  color: string; // Hex accent
  gradient: string; // CSS gradient
  image: string;
  subpages: SubpageItem[];
}

// ============================================================
// 1. DIGITAL MARKETING
// ============================================================
const digitalMarketing: ServiceData = {
  slug: 'digital-marketing',
  title: 'Digital Marketing',
  tagline: 'Dominate the Digital Landscape in Udaipur & Beyond',
  description: 'Data-driven digital marketing strategies designed for Udaipur businesses — from local SEO dominance to lead generation campaigns that deliver measurable ROI.',
  icon: 'TrendingUp',
  color: '#f97316',
  gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
  image: '/services/digital-marketing.png',
  subpages: [
    {
      slug: 'local-seo',
      title: 'Local SEO',
      tagline: 'Rank #1 on Google Maps & "Near Me" Searches in Udaipur',
      description: 'Optimize your business for local search dominance. Get found by customers searching for services near them in Udaipur, Rajasthan.',
      icon: 'MapPin',
      highlights: [
        'Google Business Profile optimization & management',
        '"Near Me" keyword targeting for Udaipur businesses',
        'Local citation building across 50+ directories',
        'Review management & reputation building',
        'Geo-targeted content strategy',
        'Local link building from Udaipur-based websites',
        'NAP consistency audit across all platforms',
        'Monthly local ranking reports & analytics'
      ],
      steps: [
        { title: 'Local Audit', desc: 'We analyze your current local presence, citations, and competitor landscape in Udaipur.' },
        { title: 'GBP Optimization', desc: 'Complete Google Business Profile setup with photos, services, posts, and Q&A.' },
        { title: 'Citation Building', desc: 'Consistent NAP listings across 50+ local and national directories.' },
        { title: 'Review Strategy', desc: 'Automated review collection flows and reputation management.' },
        { title: 'Ongoing Optimization', desc: 'Monthly local content, ranking monitoring, and strategy refinement.' }
      ],
      faqs: [
        { q: 'How long does local SEO take to show results?', a: 'Most businesses see significant improvement in Google Maps rankings within 3-6 months of consistent optimization.' },
        { q: 'Do you handle Google Business Profile management?', a: 'Yes! We manage your complete GBP including posts, photos, Q&A responses, and review management.' }
      ]
    },
    {
      slug: 'website-seo',
      title: 'Website SEO (Hotels & Resorts)',
      tagline: 'Boost Direct Bookings with Search Engine Optimization',
      description: 'Specialized SEO strategies for Udaipur\'s hospitality industry — drive direct bookings and reduce OTA dependency.',
      icon: 'Search',
      highlights: [
        'Hospitality-specific keyword research',
        'On-page SEO for hotel & resort websites',
        'Schema markup for rich snippets (reviews, pricing, availability)',
        'Speed optimization for mobile-first indexing',
        'Content strategy for tourism keywords',
        'Backlink outreach to travel blogs & directories',
        'Technical SEO audits & fix implementation',
        'Monthly traffic & booking conversion reports'
      ],
      steps: [
        { title: 'Technical Audit', desc: 'Deep analysis of site speed, mobile usability, and indexation issues.' },
        { title: 'Keyword Strategy', desc: 'Tourism and hospitality keyword mapping for Udaipur market.' },
        { title: 'On-Page Optimization', desc: 'Meta tags, headers, content, and schema implementation.' },
        { title: 'Link Building', desc: 'Outreach to travel bloggers, tourism sites, and local directories.' },
        { title: 'Performance Tracking', desc: 'Weekly ranking reports tied to direct booking conversions.' }
      ],
      faqs: [
        { q: 'Can SEO reduce my dependency on OTAs?', a: 'Absolutely. A strong SEO strategy drives direct bookings, reducing commission costs by 15-30%.' }
      ]
    },
    {
      slug: 'content-marketing',
      title: 'Content Marketing',
      tagline: 'Tell Your Brand Story to Udaipur & the World',
      description: 'Strategic content marketing for tourism, hospitality, and local businesses in Udaipur — blogs, videos, and social content that converts.',
      icon: 'FileText',
      highlights: [
        'Blog writing for tourism & local business niches',
        'Video content scripting & production guidance',
        'Social media content calendars',
        'Infographic & visual content creation',
        'Email newsletter content strategy',
        'Udaipur-focused travel & lifestyle content',
        'SEO-optimized article writing',
        'Content performance analytics & optimization'
      ],
      faqs: [
        { q: 'How often should we publish content?', a: 'For best results, we recommend 2-4 blog posts per month combined with daily social media updates.' }
      ]
    },
    {
      slug: 'lead-generation',
      title: 'Lead Generation',
      tagline: 'Turn Website Visitors into Paying Customers',
      description: 'Build high-converting lead generation funnels designed specifically for Udaipur businesses — from landing pages to automated follow-ups.',
      icon: 'UserPlus',
      highlights: [
        'High-converting landing page design',
        'Lead magnet creation (eBooks, guides, checklists)',
        'CRM integration & lead scoring',
        'Automated email drip sequences',
        'WhatsApp Business API integration',
        'A/B testing for conversion optimization',
        'Retargeting pixel setup & audience building',
        'Monthly lead quality & cost-per-lead reports'
      ],
      faqs: [
        { q: 'What is a good cost per lead for Udaipur businesses?', a: 'Depending on the industry, we typically achieve ₹50-₹300 per qualified lead for local businesses.' }
      ]
    },
    {
      slug: 'whatsapp-email-marketing',
      title: 'WhatsApp & Email Marketing',
      tagline: 'Direct Communication Channels That Convert',
      description: 'Leverage WhatsApp Business API and email marketing automation to nurture leads and drive repeat business in Udaipur.',
      icon: 'MessageCircle',
      highlights: [
        'WhatsApp Business API setup & automation',
        'Broadcast campaigns with rich media',
        'Email marketing automation (Mailchimp, Sendinblue)',
        'Drip campaign design & implementation',
        'Template message creation & approval',
        'Customer segmentation & personalization',
        'Cart abandonment recovery flows',
        'Campaign performance analytics'
      ],
      faqs: [
        { q: 'Is WhatsApp marketing legal?', a: 'Yes, when done through the official WhatsApp Business API with proper opt-in mechanisms, it is fully compliant.' }
      ]
    },
    {
      slug: 'online-reputation-management',
      title: 'Online Reputation Management',
      tagline: 'Build Trust & Credibility Online',
      description: 'Protect and enhance your brand\'s online reputation — manage reviews, build trust signals, and handle crisis communications.',
      icon: 'Shield',
      highlights: [
        'Review monitoring across Google, TripAdvisor, Zomato',
        'Negative review response strategy',
        'Positive review generation campaigns',
        'Brand mention monitoring & alerts',
        'Crisis communication planning',
        'Social listening & sentiment analysis',
        'Competitor reputation benchmarking',
        'Monthly reputation health reports'
      ],
      faqs: [
        { q: 'Can you remove negative reviews?', a: 'We cannot remove genuine reviews, but we can help respond professionally and build a volume of positive reviews to improve your overall rating.' }
      ]
    }
  ]
};

// ============================================================
// 2. SOCIAL MEDIA MARKETING
// ============================================================
const socialMediaMarketing: ServiceData = {
  slug: 'social-media-marketing',
  title: 'Social Media Marketing',
  tagline: 'Build a Loyal Community Around Your Brand',
  description: 'Creative social media strategies for Udaipur\'s cafes, hotels, boutiques, and local businesses — from daily posting to influencer collaborations.',
  icon: 'Share2',
  color: '#ec4899',
  gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
  image: '/services/social-media.png',
  subpages: [
    {
      slug: 'instagram-marketing',
      title: 'Instagram Marketing (Cafes & Hotels)',
      tagline: 'Grow Your Udaipur Business on Instagram',
      description: 'Specialized Instagram marketing for Udaipur\'s vibrant cafe and hotel scene — aesthetic feeds, stories, and targeted growth.',
      icon: 'Instagram',
      highlights: [
        'Aesthetic feed design & visual branding',
        'Story templates & highlight covers',
        'Hashtag strategy for Udaipur audience',
        'Instagram Shopping setup for products',
        'DM automation & quick replies',
        'Competitor analysis & benchmarking',
        'Monthly growth & engagement reports',
        'Profile optimization for discoverability'
      ],
      faqs: [
        { q: 'How many followers can I gain per month?', a: 'With organic strategies, expect 500-2000 targeted local followers per month depending on your niche and content quality.' }
      ]
    },
    {
      slug: 'reels-short-videos',
      title: 'Reels & Short Videos',
      tagline: 'Capture Attention with Trending Video Content',
      description: 'Create viral-worthy Reels and short videos showcasing Udaipur\'s tourism, food, and lifestyle — the fastest way to grow your reach.',
      icon: 'Video',
      highlights: [
        'Trending audio & format research',
        'Script writing & storyboarding',
        'Professional video shooting & editing',
        'Location-based content for Udaipur spots',
        'Food & hospitality video content',
        'Behind-the-scenes & day-in-life content',
        'Transition effects & motion graphics',
        'Cross-platform publishing (IG, YT Shorts, TikTok)'
      ],
      faqs: [
        { q: 'How many Reels should we post per week?', a: '3-5 Reels per week is the sweet spot for growth. Consistency matters more than perfection.' }
      ]
    },
    {
      slug: 'facebook-management',
      title: 'Facebook Page Management',
      tagline: 'Professional Facebook Presence for Your Business',
      description: 'Complete Facebook page management — from content creation and community engagement to Facebook Events and local group marketing.',
      icon: 'Facebook',
      highlights: [
        'Page setup & optimization',
        'Content calendar creation & posting',
        'Community management & engagement',
        'Facebook Events for local businesses',
        'Group marketing strategy',
        'Facebook Marketplace listings',
        'Customer response management',
        'Performance analytics & reporting'
      ],
      faqs: [
        { q: 'Is Facebook still relevant for businesses?', a: 'Facebook remains the largest social platform in India with over 300M users. It is essential for local business marketing, especially for the 30+ age group.' }
      ]
    },
    {
      slug: 'influencer-collaboration',
      title: 'Influencer Collaboration',
      tagline: 'Partner with Udaipur\'s Top Creators',
      description: 'Connect with Udaipur-based influencers and content creators to amplify your brand reach through authentic, localized collaborations.',
      icon: 'Users',
      highlights: [
        'Udaipur influencer database & outreach',
        'Campaign brief & deliverable planning',
        'Content review & approval workflow',
        'Performance tracking & ROI measurement',
        'Micro-influencer partnerships (5K-50K followers)',
        'Food & travel blogger collaborations',
        'Event coverage & live sessions',
        'Long-term ambassador programs'
      ],
      faqs: [
        { q: 'How much does influencer marketing cost in Udaipur?', a: 'Micro-influencers (5K-50K) typically charge ₹2,000-₹15,000 per post. We negotiate the best rates for our clients.' }
      ]
    },
    {
      slug: 'daily-posting-engagement',
      title: 'Daily Posting & Engagement',
      tagline: 'Keep Your Audience Engaged Every Single Day',
      description: 'Consistent daily content creation and audience engagement to keep your brand top-of-mind with your Udaipur audience.',
      icon: 'CalendarDays',
      highlights: [
        'Daily post creation (graphics + captions)',
        'Story content & polls',
        'Comment response & DM management',
        'Trending topic integration',
        'Festival & local event content',
        'User-generated content curation',
        'Engagement pods & community building',
        'Weekly performance summaries'
      ],
      faqs: [
        { q: 'How far in advance do you plan content?', a: 'We create content calendars 2-4 weeks in advance, with flexibility for trending topics and real-time events.' }
      ]
    },
    {
      slug: 'content-scheduling',
      title: 'Content Scheduling',
      tagline: 'Publish at the Perfect Time, Every Time',
      description: 'Strategic content scheduling using best-in-class tools to ensure your posts reach maximum audience at optimal times.',
      icon: 'Clock',
      highlights: [
        'Best time-to-post analysis for Udaipur audience',
        'Multi-platform scheduling (IG, FB, LinkedIn, Twitter)',
        'Content queue management',
        'Auto-publishing with review workflows',
        'Holiday & festival content pre-planning',
        'Analytics-driven schedule optimization',
        'Bulk scheduling for efficiency',
        'Real-time schedule adjustments'
      ],
      faqs: [
        { q: 'What tools do you use for scheduling?', a: 'We use a combination of Meta Business Suite, Buffer, and custom scheduling tools for maximum flexibility.' }
      ]
    }
  ]
};

// ============================================================
// 3. PAID ADS
// ============================================================
const paidAds: ServiceData = {
  slug: 'paid-ads',
  title: 'Paid Ads',
  tagline: 'Instant Visibility, Maximum ROI',
  description: 'Strategic paid advertising campaigns on Google, Meta, and YouTube — designed for Udaipur businesses that want immediate results and measurable growth.',
  icon: 'Megaphone',
  color: '#8b5cf6',
  gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
  image: '/services/paid-ads.png',
  subpages: [
    {
      slug: 'google-ads',
      title: 'Google Ads (Hotels, Taxi, Tours)',
      tagline: 'Appear on Top of Google When Customers Search',
      description: 'High-performance Google Ads campaigns targeting tourists and locals searching for hotels, taxis, and tour services in Udaipur.',
      icon: 'Search',
      highlights: [
        'Search campaigns for "hotel in Udaipur" keywords',
        'Google Hotel Ads integration',
        'Local service ads for taxis & tour operators',
        'Display ads on travel & tourism websites',
        'Call-only campaigns for instant bookings',
        'Smart bidding & budget optimization',
        'Negative keyword management',
        'Weekly performance reports with ROAS tracking'
      ],
      faqs: [
        { q: 'What budget should I start with for Google Ads?', a: 'For Udaipur businesses, we recommend starting with ₹15,000-₹30,000/month to gather enough data for optimization.' }
      ]
    },
    {
      slug: 'meta-ads',
      title: 'Meta Ads (Cafes, Boutiques, Events)',
      tagline: 'Reach Your Ideal Customers on Facebook & Instagram',
      description: 'Targeted Meta (Facebook & Instagram) advertising campaigns for Udaipur\'s cafes, boutiques, and event businesses.',
      icon: 'Target',
      highlights: [
        'Audience targeting by location, interests, behavior',
        'Carousel & video ad formats',
        'Lead generation campaign setup',
        'Event promotion campaigns',
        'Lookalike audience creation',
        'Dynamic product ads for boutiques',
        'A/B creative testing',
        'Cost-per-result optimization'
      ],
      faqs: [
        { q: 'What is the minimum budget for Meta Ads?', a: 'We recommend a minimum of ₹10,000/month for meaningful results with proper testing and optimization.' }
      ]
    },
    {
      slug: 'youtube-ads',
      title: 'YouTube Ads (Travel Promotions)',
      tagline: 'Showcase Udaipur to the World Through Video',
      description: 'Video advertising on YouTube to promote Udaipur\'s tourism, hotels, and travel experiences to a global audience.',
      icon: 'Play',
      highlights: [
        'In-stream ads for travel content',
        'Discovery ads for tourism keywords',
        'Bumper ads for brand awareness',
        'Custom audience targeting (travel enthusiasts)',
        'Video creative production support',
        'YouTube channel optimization',
        'View-through conversion tracking',
        'Campaign performance analytics'
      ],
      faqs: [
        { q: 'How much do YouTube Ads cost per view?', a: 'Typically ₹0.50-₹3 per view depending on targeting and competition. Travel content performs exceptionally well.' }
      ]
    },
    {
      slug: 'lead-generation-campaigns',
      title: 'Lead Generation Campaigns',
      tagline: 'Fill Your Pipeline with Qualified Leads',
      description: 'Multi-platform lead generation campaigns that capture high-intent prospects for your Udaipur business.',
      icon: 'UserPlus',
      highlights: [
        'Cross-platform lead campaigns (Google + Meta)',
        'Landing page design & optimization',
        'Instant lead notification via WhatsApp',
        'CRM auto-sync for lead management',
        'Lead quality scoring & filtering',
        'Cost-per-lead optimization',
        'Follow-up automation sequences',
        'Monthly qualified lead reports'
      ],
      faqs: [
        { q: 'What is a qualified lead?', a: 'A qualified lead is someone who matches your target customer profile, has shown genuine interest, and has the intent to purchase or inquire.' }
      ]
    },
    {
      slug: 'retargeting-ads',
      title: 'Retargeting Ads',
      tagline: 'Bring Back Visitors Who Didn\'t Convert',
      description: 'Advanced retargeting strategies that re-engage website visitors and past customers with personalized ad experiences.',
      icon: 'RefreshCw',
      highlights: [
        'Website visitor retargeting (Google + Meta)',
        'Cart abandonment retargeting for e-commerce',
        'Dynamic product retargeting',
        'Cross-platform retargeting sequences',
        'Custom audience segmentation',
        'Frequency capping for ad fatigue prevention',
        'Sequential messaging strategy',
        'Conversion lift measurement'
      ],
      faqs: [
        { q: 'How effective is retargeting?', a: 'Retargeted visitors are 70% more likely to convert. It\'s one of the highest-ROI advertising strategies available.' }
      ]
    },
    {
      slug: 'product-selling-campaigns',
      title: 'Product Selling Campaigns',
      tagline: 'Sell More Products with Performance Marketing',
      description: 'E-commerce and product-focused ad campaigns designed to drive direct sales and maximize your advertising ROI.',
      icon: 'ShoppingCart',
      highlights: [
        'Product catalog ad setup',
        'Collection & instant experience ads',
        'Google Shopping campaigns',
        'Dynamic product ads across platforms',
        'Conversion tracking & attribution',
        'Seasonal sale campaign planning',
        'Inventory-aware ad automation',
        'ROAS optimization & scaling'
      ],
      faqs: [
        { q: 'What ROAS should I expect?', a: 'For well-optimized campaigns, we typically achieve 3x-8x ROAS depending on the product category and price point.' }
      ]
    }
  ]
};

// ============================================================
// 4. WEB DEVELOPMENT
// ============================================================
const webDevelopment: ServiceData = {
  slug: 'web-development',
  title: 'Web Development',
  tagline: 'Build Your Digital Foundation in Udaipur',
  description: 'Professional web development services for Udaipur businesses — from stunning business websites to powerful e-commerce platforms and custom solutions.',
  icon: 'Globe',
  color: '#3b82f6',
  gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
  image: '/services/web-development.png',
  subpages: [
    {
      slug: 'business-website',
      title: 'Business Website Development',
      tagline: 'Your 24/7 Digital Storefront',
      description: 'Professional, conversion-focused business websites designed for Udaipur\'s hotels, restaurants, shops, and service providers.',
      icon: 'Building2',
      highlights: [
        'Responsive design for all devices',
        'Fast loading speeds (under 3 seconds)',
        'Contact forms with WhatsApp integration',
        'Google Maps & location integration',
        'Multi-language support (Hindi/English)',
        'Social media feed integration',
        'Blog/news section for content marketing',
        'SSL certificate & security setup'
      ],
      steps: [
        { title: 'Discovery', desc: 'Understanding your business, goals, competitors, and target audience in Udaipur.' },
        { title: 'Design', desc: 'Custom UI/UX design with your brand colors, imagery, and messaging.' },
        { title: 'Development', desc: 'Clean, fast code with modern frameworks. Mobile-first approach.' },
        { title: 'Content', desc: 'SEO-optimized content writing, image optimization, and media setup.' },
        { title: 'Launch', desc: 'Testing, domain setup, hosting config, and go-live with monitoring.' }
      ],
      faqs: [
        { q: 'How much does a business website cost?', a: 'Business websites start from ₹15,000 for a basic 5-page site. Custom designs with advanced features range from ₹30,000-₹1,00,000+.' }
      ]
    },
    {
      slug: 'ecommerce-development',
      title: 'E-commerce Development',
      tagline: 'Sell Online 24/7 with a Powerful Store',
      description: 'Full-featured e-commerce websites for Udaipur businesses — sell products online with secure payments, inventory management, and automated shipping.',
      icon: 'ShoppingBag',
      highlights: [
        'Shopify / WooCommerce / custom builds',
        'Secure payment gateway integration (Razorpay, Paytm, UPI)',
        'Product catalog with filters & search',
        'Inventory & order management system',
        'Automated shipping & tracking integration',
        'Customer accounts & wishlists',
        'Discount codes & promotional features',
        'Mobile-optimized checkout flow'
      ],
      faqs: [
        { q: 'Which platform is best for my store?', a: 'It depends on your scale. Shopify is great for quick launches, WooCommerce for flexibility, and custom builds for unique requirements.' }
      ]
    },
    {
      slug: 'custom-web-solutions',
      title: 'Custom Web Solutions',
      tagline: 'Tailored Software for Unique Business Needs',
      description: 'Custom web applications built from scratch — booking systems, CRMs, portals, and management dashboards for Udaipur businesses.',
      icon: 'Settings',
      highlights: [
        'Custom booking & reservation systems',
        'CRM & lead management portals',
        'Admin dashboards & analytics',
        'Membership & subscription platforms',
        'API development & third-party integrations',
        'Database design & management',
        'Role-based access control',
        'Scalable cloud-hosted architecture'
      ],
      faqs: [
        { q: 'How long does a custom web app take?', a: 'Timelines vary from 4-16 weeks depending on complexity. We provide detailed project plans after the discovery phase.' }
      ]
    },
    {
      slug: 'website-design',
      title: 'Website Design (UI/UX)',
      tagline: 'Beautiful Designs That Convert Visitors to Customers',
      description: 'User-centered website design focused on aesthetics, usability, and conversion — making your Udaipur business stand out online.',
      icon: 'Palette',
      highlights: [
        'Custom UI/UX design from scratch',
        'Wireframing & prototyping',
        'Brand-consistent visual design',
        'Mobile-responsive layouts',
        'Accessibility compliance (WCAG)',
        'Interactive animations & micro-interactions',
        'User testing & feedback iterations',
        'Design system & component library'
      ],
      faqs: [
        { q: 'Do you provide design revisions?', a: 'Yes, all our design packages include 2-3 rounds of revisions to ensure you are 100% satisfied with the final design.' }
      ]
    },
    {
      slug: 'maintenance-support',
      title: 'Maintenance & Support',
      tagline: 'Keep Your Website Running Perfectly',
      description: 'Ongoing website maintenance, security updates, and technical support — so you can focus on running your business.',
      icon: 'Wrench',
      highlights: [
        'Monthly security updates & patches',
        'Performance monitoring & optimization',
        'Content updates & page additions',
        'Backup management (daily/weekly)',
        'Uptime monitoring (99.9% SLA)',
        'Bug fixes & troubleshooting',
        'Plugin/dependency updates',
        'Priority support via WhatsApp/email'
      ],
      faqs: [
        { q: 'What does maintenance cost?', a: 'Maintenance plans start from ₹3,000/month for basic care to ₹15,000/month for comprehensive support with priority response.' }
      ]
    },
    {
      slug: 'seo-friendly-development',
      title: 'SEO-Friendly Development',
      tagline: 'Built for Google from Day One',
      description: 'Websites built with SEO best practices baked in — clean code, fast loading, proper structure, and technical SEO foundations.',
      icon: 'Search',
      highlights: [
        'Semantic HTML5 & structured data',
        'Core Web Vitals optimization',
        'XML sitemap & robots.txt setup',
        'Open Graph & social meta tags',
        'Image optimization & lazy loading',
        'Clean URL structure',
        'Internal linking strategy',
        'Mobile-first development'
      ],
      faqs: [
        { q: 'Will my website rank on Google immediately?', a: 'SEO-friendly development gives you a strong foundation, but ranking takes ongoing SEO effort. Most sites see results within 3-6 months.' }
      ]
    }
  ]
};

// ============================================================
// 5. APP & WEB APP DEVELOPMENT
// ============================================================
const appDevelopment: ServiceData = {
  slug: 'app-development',
  title: 'App & Web App Development',
  tagline: 'Build the Next Big App for Udaipur',
  description: 'Mobile app and progressive web app development for Udaipur startups and businesses — from concept to launch on App Store & Play Store.',
  icon: 'Smartphone',
  color: '#10b981',
  gradient: 'linear-gradient(135deg, #10b981, #059669)',
  image: '/services/app-development.png',
  subpages: [
    {
      slug: 'mobile-app-development',
      title: 'Mobile App Development',
      tagline: 'Native & Cross-Platform Apps That Users Love',
      description: 'Build high-performance mobile apps for iOS and Android — from booking apps for hotels to delivery apps for local businesses.',
      icon: 'Smartphone',
      highlights: [
        'React Native & Flutter cross-platform development',
        'Native iOS (Swift) & Android (Kotlin) development',
        'App Store & Play Store publishing',
        'Push notification systems',
        'In-app payments & subscription models',
        'Offline functionality & data sync',
        'Analytics & crash reporting integration',
        'Post-launch support & updates'
      ],
      faqs: [
        { q: 'Should I build native or cross-platform?', a: 'For most Udaipur businesses, cross-platform (React Native/Flutter) offers 80% cost savings while delivering near-native performance.' }
      ]
    },
    {
      slug: 'web-app-development',
      title: 'Web App Development',
      tagline: 'Powerful Applications Accessible from Any Browser',
      description: 'Progressive web applications that work like native apps — no downloads required. Perfect for business tools and customer portals.',
      icon: 'Monitor',
      highlights: [
        'Progressive Web App (PWA) development',
        'Single Page Application (SPA) architecture',
        'Real-time features (chat, notifications)',
        'Responsive & installable design',
        'Service workers for offline support',
        'Cloud-hosted scalable infrastructure',
        'API-driven architecture',
        'Cross-browser compatibility'
      ],
      faqs: [
        { q: 'What is a PWA?', a: 'A Progressive Web App looks and feels like a native app but runs in a browser. Users can install it without going to an app store.' }
      ]
    },
    {
      slug: 'business-startup-solutions',
      title: 'Business & Startup Solutions',
      tagline: 'MVP to Market-Leader: Your Tech Partner',
      description: 'End-to-end app development for startups and growing businesses — lean MVPs, investor-ready prototypes, and scalable products.',
      icon: 'Rocket',
      highlights: [
        'MVP (Minimum Viable Product) development',
        'Investor-ready prototypes & pitch decks',
        'Product roadmap & feature prioritization',
        'Agile development sprints',
        'Market validation & user testing',
        'Scalable architecture from day one',
        'Equity/revenue-share partnership models',
        'Growth & scaling technical support'
      ],
      faqs: [
        { q: 'How much does an MVP cost?', a: 'A basic MVP typically costs ₹1,00,000-₹5,00,000 depending on features. We offer flexible payment plans for startups.' }
      ]
    },
    {
      slug: 'ui-ux-design',
      title: 'UI/UX Design',
      tagline: 'Interfaces That Delight & Convert',
      description: 'User-centered app design with intuitive navigation, beautiful visuals, and seamless user journeys.',
      icon: 'Palette',
      highlights: [
        'User research & persona mapping',
        'Wireframing & interactive prototyping (Figma)',
        'Visual design with brand consistency',
        'Micro-interaction & animation design',
        'Usability testing & heuristic evaluation',
        'Design system & component library',
        'Accessibility-first design approach',
        'Design handoff for developers'
      ],
      faqs: [
        { q: 'Do you provide Figma files?', a: 'Yes, all our designs are created in Figma with organized layers, components, and a complete design system for easy developer handoff.' }
      ]
    },
    {
      slug: 'backend-api-development',
      title: 'Backend & API Development',
      tagline: 'The Invisible Engine Powering Your App',
      description: 'Robust backend systems and RESTful/GraphQL APIs that handle your business logic, data, and third-party integrations.',
      icon: 'Server',
      highlights: [
        'Node.js / Python / PHP backend development',
        'RESTful & GraphQL API design',
        'Database design (MongoDB, PostgreSQL, MySQL)',
        'Authentication & authorization (JWT, OAuth)',
        'Third-party API integrations',
        'Cloud deployment (AWS, GCP, Azure)',
        'Auto-scaling & load balancing',
        'API documentation & testing'
      ],
      faqs: [
        { q: 'Which backend technology do you recommend?', a: 'Node.js for real-time apps, Python for data-heavy solutions, and PHP for cost-effective web solutions. We recommend based on your specific needs.' }
      ]
    },
    {
      slug: 'app-maintenance',
      title: 'Maintenance & Support',
      tagline: 'Keep Your App Running Smoothly',
      description: 'Ongoing app maintenance, bug fixes, feature updates, and performance optimization for published applications.',
      icon: 'Wrench',
      highlights: [
        'Bug fixes & performance optimization',
        'OS version compatibility updates',
        'Feature enhancements & new releases',
        'Server monitoring & uptime management',
        'User feedback implementation',
        'App Store optimization (ASO)',
        'Security audits & vulnerability fixes',
        'Analytics review & growth recommendations'
      ],
      faqs: [
        { q: 'Is app maintenance necessary?', a: 'Yes! Mobile OS updates break things regularly. Maintenance ensures your app stays functional, secure, and competitive.' }
      ]
    },
    {
      slug: 'advanced-features',
      title: 'Advanced Features (Local Needs)',
      tagline: 'Udaipur-Specific App Features',
      description: 'Location-based features, regional language support, and integrations tailored to Udaipur and Rajasthan\'s unique business needs.',
      icon: 'Zap',
      highlights: [
        'GPS & location-based services',
        'Hindi/Rajasthani language support',
        'UPI & local payment gateway integration',
        'WhatsApp Business API integration',
        'Aadhaar & OTP verification',
        'Regional content management',
        'Local delivery & logistics integration',
        'Government compliance & GST features'
      ],
      faqs: [
        { q: 'Can you integrate with Indian payment systems?', a: 'Yes, we integrate with all major Indian payment gateways — Razorpay, Paytm, PhonePe, Google Pay, and UPI.' }
      ]
    }
  ]
};

// ============================================================
// 6. GRAPHIC DESIGN & BRANDING
// ============================================================
const graphicDesign: ServiceData = {
  slug: 'graphic-design',
  title: 'Graphic Design & Branding',
  tagline: 'Visual Identity That Makes Udaipur Notice',
  description: 'Creative graphic design and strategic branding for Udaipur businesses — logos, social media designs, marketing materials, and complete brand identity packages.',
  icon: 'Paintbrush',
  color: '#f43f5e',
  gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
  image: '/services/graphic-design.png',
  subpages: [
    {
      slug: 'logo-brand-identity',
      title: 'Logo & Brand Identity',
      tagline: 'Create a Brand That Udaipur Remembers',
      description: 'Professional logo design and complete brand identity development — from color palettes to brand guidelines for your Udaipur business.',
      icon: 'Gem',
      highlights: [
        'Custom logo design (3-5 concepts)',
        'Brand color palette & typography selection',
        'Brand guidelines document',
        'Business card & letterhead design',
        'Brand story & messaging framework',
        'Favicon & app icon design',
        'Brand pattern & texture library',
        'Social media profile kit'
      ],
      faqs: [
        { q: 'How many logo options do I get?', a: 'We provide 3-5 initial concepts based on your brief, with unlimited revisions on the final selected design.' }
      ]
    },
    {
      slug: 'social-media-design',
      title: 'Social Media Design',
      tagline: 'Scroll-Stopping Social Graphics',
      description: 'Eye-catching social media graphics, templates, and content designs tailored for Udaipur\'s food, travel, and lifestyle brands.',
      icon: 'Image',
      highlights: [
        'Instagram post & story templates',
        'Facebook cover & ad designs',
        'YouTube thumbnails & channel art',
        'LinkedIn professional graphics',
        'Holiday & festival special designs',
        'Food photography styling & editing',
        'Brand-consistent design system',
        'Monthly design packages available'
      ],
      faqs: [
        { q: 'Can I get a monthly design subscription?', a: 'Yes! We offer monthly packages starting from ₹8,000 for consistent, high-quality social media designs.' }
      ]
    },
    {
      slug: 'marketing-materials',
      title: 'Marketing Materials',
      tagline: 'Print & Digital Marketing Collateral',
      description: 'Professional marketing materials — brochures, flyers, menus, catalogs, and packaging design for Udaipur businesses.',
      icon: 'FileStack',
      highlights: [
        'Brochure & flyer design',
        'Restaurant menu design & layout',
        'Product catalog design',
        'Banner & poster design',
        'Packaging design & mockups',
        'Event invitation & ticket design',
        'Vehicle wrap & signage design',
        'Print-ready file preparation'
      ],
      faqs: [
        { q: 'Do you handle printing too?', a: 'We provide print-ready files in all required formats. We can also connect you with trusted local printers in Udaipur.' }
      ]
    },
    {
      slug: 'creative-content-design',
      title: 'Creative Content Design',
      tagline: 'Infographics, Presentations & Beyond',
      description: 'Creative visual content including infographics, presentations, animations, and data visualizations for impactful communication.',
      icon: 'Sparkles',
      highlights: [
        'Infographic design & data visualization',
        'Presentation design (Pitch decks)',
        'Motion graphics & animated content',
        'Email newsletter design',
        'E-book & guide design',
        'Certificate & award design',
        'Icon & illustration design',
        'Interactive PDF design'
      ],
      faqs: [
        { q: 'Can you design investor pitch decks?', a: 'Yes, we specialize in creating compelling, data-rich pitch decks that help Udaipur startups secure funding.' }
      ]
    },
    {
      slug: 'local-business-branding',
      title: 'Local Business Branding',
      tagline: 'Stand Out in Udaipur\'s Competitive Market',
      description: 'Complete branding packages designed specifically for Udaipur\'s local businesses — cafes, boutiques, hotels, and retail stores.',
      icon: 'Store',
      highlights: [
        'Cafe & restaurant branding packages',
        'Hotel & resort visual identity',
        'Retail store branding & signage',
        'Boutique fashion branding',
        'Salon & spa visual identity',
        'Street food & dhaba modern branding',
        'Cultural & heritage-inspired designs',
        'Complete brand launch support'
      ],
      faqs: [
        { q: 'How long does a full branding project take?', a: 'A complete branding project typically takes 2-4 weeks from initial brief to final delivery of all brand assets.' }
      ]
    }
  ]
};

// ============================================================
// 7. AI SOLUTIONS FOR BUSINESSES
// ============================================================
const aiSolutions: ServiceData = {
  slug: 'ai-solutions',
  title: 'AI Solutions for Businesses',
  tagline: 'Smart AI Tools for Udaipur Entrepreneurs',
  description: 'Practical, affordable AI solutions designed for Udaipur\'s local businesses — chatbots, automation, marketing AI, and data insights that drive real results.',
  icon: 'Brain',
  color: '#06b6d4',
  gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
  image: '/services/ai-solutions.png',
  subpages: [
    {
      slug: 'ai-chatbots',
      title: 'AI Chatbots & Automation',
      tagline: '24/7 Customer Support Without the Headcount',
      description: 'Intelligent chatbots for WhatsApp, website, and social media — handle customer queries, take bookings, and generate leads automatically.',
      icon: 'MessageSquare',
      highlights: [
        'WhatsApp AI chatbot for instant responses',
        'Website chat widget with lead capture',
        'Multi-language support (Hindi + English)',
        'Booking & reservation automation',
        'FAQ auto-response system',
        'Human handoff for complex queries',
        'Integration with CRM & order systems',
        'Conversation analytics & insights'
      ],
      faqs: [
        { q: 'Can the chatbot speak Hindi?', a: 'Yes! Our AI chatbots support Hindi, English, and even Hinglish to communicate naturally with your Udaipur customers.' }
      ]
    },
    {
      slug: 'ai-marketing-tools',
      title: 'AI Marketing Tools',
      tagline: 'Marketing on Autopilot with AI',
      description: 'AI-powered marketing tools that write copies, generate images, analyze competitors, and optimize campaigns automatically.',
      icon: 'Wand2',
      highlights: [
        'AI-generated ad copy & social captions',
        'Automated A/B testing & optimization',
        'AI image generation for social media',
        'Competitor analysis & trend detection',
        'Predictive customer behavior modeling',
        'Email subject line optimization',
        'Content idea generation & planning',
        'ROI prediction for campaigns'
      ],
      faqs: [
        { q: 'Will AI replace my marketing team?', a: 'No! AI tools augment your team by handling repetitive tasks, allowing your people to focus on strategy and creativity.' }
      ]
    },
    {
      slug: 'ai-local-businesses',
      title: 'AI for Local Businesses',
      tagline: 'Simple AI Solutions for Udaipur Shops & Services',
      description: 'Easy-to-use AI tools designed for non-technical business owners — smart inventory, customer insights, and automated workflows.',
      icon: 'Store',
      highlights: [
        'Smart inventory prediction & alerts',
        'Customer purchase pattern analysis',
        'Automated billing & invoicing',
        'Voice-based order taking (Hindi)',
        'Footfall counting & peak hour analysis',
        'Price optimization suggestions',
        'WhatsApp order automation for shops',
        'Simple dashboard for business insights'
      ],
      faqs: [
        { q: 'Do I need technical knowledge to use AI tools?', a: 'Not at all! Our solutions are designed with simple interfaces that any business owner can use without any technical background.' }
      ]
    },
    {
      slug: 'data-insights',
      title: 'Data & Insights',
      tagline: 'Turn Your Business Data into Actionable Insights',
      description: 'Data analytics and visualization dashboards that help Udaipur businesses understand customer behavior, track performance, and make informed decisions.',
      icon: 'BarChart3',
      highlights: [
        'Custom analytics dashboards',
        'Sales & revenue trend analysis',
        'Customer segmentation & profiling',
        'Google Analytics setup & reporting',
        'Social media analytics consolidation',
        'Automated weekly/monthly reports',
        'Data visualization & infographics',
        'Actionable recommendation reports'
      ],
      faqs: [
        { q: 'What data do you need from my business?', a: 'We work with whatever data you have — sales records, website traffic, social media stats, customer lists. We\'ll help organize and analyze it all.' }
      ]
    },
    {
      slug: 'ai-integration',
      title: 'AI Integration Services',
      tagline: 'Add AI Superpowers to Your Existing Systems',
      description: 'Integrate AI capabilities into your existing website, app, or business systems — smart search, recommendations, and automated processes.',
      icon: 'Puzzle',
      highlights: [
        'AI search for websites & apps',
        'Product recommendation engines',
        'Automated email & message personalization',
        'AI-powered document processing',
        'Smart form auto-fill & validation',
        'Sentiment analysis for reviews',
        'Image recognition & categorization',
        'API integration with AI services'
      ],
      faqs: [
        { q: 'Can you add AI to my existing website?', a: 'Yes! We can integrate AI features like chatbots, smart search, and recommendations into any existing website or application.' }
      ]
    },
    {
      slug: 'automation-productivity',
      title: 'Automation & Productivity',
      tagline: 'Automate Repetitive Tasks, Focus on Growth',
      description: 'Business process automation using AI and no-code tools — reduce manual work, minimize errors, and boost team productivity.',
      icon: 'Zap',
      highlights: [
        'Workflow automation (Zapier, Make)',
        'Document generation & templates',
        'Automated social media posting',
        'Invoice & payment reminders',
        'Employee task management automation',
        'Data entry & reporting automation',
        'Email filtering & response automation',
        'Custom automation for unique workflows'
      ],
      faqs: [
        { q: 'How much time can automation save?', a: 'Most businesses save 10-20 hours per week by automating repetitive tasks like data entry, reporting, and follow-ups.' }
      ]
    }
  ]
};

// ============================================================
// 8. E-COMMERCE MARKETPLACE MANAGEMENT
// ============================================================
const ecommerceManagement: ServiceData = {
  slug: 'ecommerce-management',
  title: 'E-Commerce Marketplace Management',
  tagline: 'Sell Everywhere, Managed from Udaipur',
  description: 'Complete marketplace management for Amazon, Flipkart, Meesho, and other platforms — from account setup to growth optimization for Udaipur sellers.',
  icon: 'ShoppingCart',
  color: '#eab308',
  gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
  image: '/services/ecommerce.png',
  subpages: [
    {
      slug: 'account-setup',
      title: 'Account Setup',
      tagline: 'Launch Your Online Store in Days',
      description: 'Complete marketplace account setup and configuration for Amazon, Flipkart, Meesho, and other platforms.',
      icon: 'UserPlus',
      highlights: [
        'Amazon Seller Central account setup',
        'Flipkart seller registration & approval',
        'Meesho supplier onboarding',
        'GSTIN & documentation support',
        'Brand registry & trademark filing',
        'Storefront design & customization',
        'Shipping partner integration',
        'Initial product listing setup'
      ],
      faqs: [
        { q: 'Do I need GST registration to sell online?', a: 'Yes, GST registration is mandatory for selling on Amazon & Flipkart. We can connect you with CA partners in Udaipur for quick registration.' }
      ]
    },
    {
      slug: 'product-listing',
      title: 'Product Listing & Optimization',
      tagline: 'Listings That Rank & Convert',
      description: 'SEO-optimized product listings with compelling descriptions, A+ content, and professional photography guidance.',
      icon: 'Package',
      highlights: [
        'Keyword-optimized product titles',
        'Compelling bullet points & descriptions',
        'A+ / Enhanced Brand Content (EBC)',
        'Product photography guidelines & editing',
        'Category & attribute optimization',
        'Competitor pricing analysis',
        'Variation listing management',
        'Search rank tracking & improvement'
      ],
      faqs: [
        { q: 'How important is product photography?', a: 'Critical! Products with professional photos see 2-3x higher conversion rates. We provide photography guidelines and editing services.' }
      ]
    },
    {
      slug: 'order-management',
      title: 'Order & Inventory Management',
      tagline: 'Seamless Operations, Happy Customers',
      description: 'End-to-end order processing and inventory management across multiple marketplace channels.',
      icon: 'Package',
      highlights: [
        'Multi-channel order processing',
        'Inventory tracking & auto-replenishment alerts',
        'SKU management & organization',
        'Returns & refund management',
        'Shipping partner coordination',
        'FBA / Fulfillment setup & management',
        'Stock forecasting & planning',
        'Order analytics & reporting'
      ],
      faqs: [
        { q: 'Can you manage orders across multiple platforms?', a: 'Yes, we use multi-channel tools to manage orders from Amazon, Flipkart, your website, and other platforms from a single dashboard.' }
      ]
    },
    {
      slug: 'marketplace-ads',
      title: 'Ads & Promotions',
      tagline: 'Boost Visibility & Sales on Marketplaces',
      description: 'Marketplace-specific advertising — Amazon PPC, Flipkart Ads, Lightning Deals, and promotional campaign management.',
      icon: 'Megaphone',
      highlights: [
        'Amazon Sponsored Products & Brands',
        'Flipkart Product Listing Ads',
        'Lightning Deal & sale event management',
        'Coupon & promotional offer setup',
        'ACoS optimization & bid management',
        'Keyword targeting & negative keywords',
        'Campaign structure & organization',
        'Weekly ad performance reports'
      ],
      faqs: [
        { q: 'What budget should I allocate for marketplace ads?', a: 'Start with 10-15% of your target revenue as ad budget. We optimize to reduce ACoS while scaling sales over time.' }
      ]
    },
    {
      slug: 'account-growth',
      title: 'Account Growth',
      tagline: 'Scale from ₹0 to ₹10 Lakhs Monthly Revenue',
      description: 'Strategic account growth services to scale your marketplace business — from launch phase to high-volume selling.',
      icon: 'TrendingUp',
      highlights: [
        'Growth strategy & roadmap planning',
        'New product launch strategies',
        'Review building & social proof',
        'Account health monitoring',
        'Buy Box optimization',
        'Competitor intelligence & counter-strategies',
        'Expansion to new categories',
        'Seasonal planning & inventory scaling'
      ],
      faqs: [
        { q: 'How long does it take to start getting sales?', a: 'With proper listing optimization and ads, most sellers see their first sales within 1-2 weeks of going live.' }
      ]
    },
    {
      slug: 'analytics-reporting',
      title: 'Analytics & Reporting',
      tagline: 'Data-Driven Decisions for Maximum Profit',
      description: 'Comprehensive analytics and reporting for your marketplace business — track sales, costs, profitability, and growth metrics.',
      icon: 'BarChart3',
      highlights: [
        'Sales & revenue dashboards',
        'Profitability analysis per product',
        'Ad spend & ROAS tracking',
        'Inventory health reports',
        'Customer review sentiment analysis',
        'Competitor price tracking',
        'Monthly business review presentations',
        'Custom KPI tracking & alerts'
      ],
      faqs: [
        { q: 'What metrics do you track?', a: 'We track all key e-commerce metrics — sales, units, conversion rate, ACoS, organic rank, review score, inventory days, and profitability per SKU.' }
      ]
    },
    {
      slug: 'local-business-support',
      title: 'Local Business Support',
      tagline: 'Helping Udaipur Artisans & Sellers Go National',
      description: 'Specialized support for Udaipur\'s local artisans, handicraft makers, and traditional businesses to sell their products nationally through marketplaces.',
      icon: 'MapPin',
      highlights: [
        'Handicraft & artisan product listing',
        'GI (Geographical Indication) product marketing',
        'Photography for traditional products',
        'Packaging design for shipping safety',
        'Bulk listing for large catalogs',
        'Government e-commerce scheme guidance',
        'Training workshops for sellers',
        'One-on-one mentorship program'
      ],
      faqs: [
        { q: 'Can small artisans afford marketplace management?', a: 'We offer special affordable packages for Udaipur artisans and small sellers, starting from ₹5,000/month. We believe in growing together.' }
      ]
    }
  ]
};

// ============================================================
// EXPORT ALL SERVICES
// ============================================================
export const allServices: ServiceData[] = [
  digitalMarketing,
  socialMediaMarketing,
  paidAds,
  webDevelopment,
  appDevelopment,
  graphicDesign,
  aiSolutions,
  ecommerceManagement
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return allServices.find(s => s.slug === slug);
}

export function getSubpage(serviceSlug: string, subpageSlug: string): { service: ServiceData; subpage: SubpageItem } | undefined {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return undefined;
  const subpage = service.subpages.find(sp => sp.slug === subpageSlug);
  if (!subpage) return undefined;
  return { service, subpage };
}
