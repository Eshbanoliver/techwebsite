import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog – Digital Marketing & Tech Insights | MS Infinex Tech Udaipur',
  description: 'Read the latest insights on digital marketing, web development, SEO, social media, AI, and technology trends from MS Infinex Tech, Udaipur\'s leading IT company.',
  keywords: [
    'digital marketing blog Udaipur',
    'IT company blog Rajasthan',
    'web development tips',
    'SEO insights India',
    'MS Infinex Tech blog',
    'technology blog Udaipur',
  ],
  openGraph: {
    title: 'Blog – Digital Marketing & Tech Insights | MS Infinex Tech',
    description: 'Latest insights on digital marketing, web development, SEO, and technology from Udaipur\'s leading IT company.',
    url: 'https://msinfinextech.com/blog',
  },
  alternates: {
    canonical: 'https://msinfinextech.com/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
