import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ – Frequently Asked Questions | MS Infinex Tech Udaipur',
  description: 'Find answers to frequently asked questions about MS Infinex Tech\'s IT and digital marketing services in Udaipur, Rajasthan. Learn about our pricing, process, technologies, and support.',
  keywords: ['MS Infinex Tech FAQ', 'IT company Udaipur questions', 'digital marketing Udaipur FAQ', 'web development pricing Udaipur'],
  openGraph: {
    title: 'FAQ – MS Infinex Tech | IT & Digital Marketing Company in Udaipur',
    description: 'Common questions about our IT services, digital marketing solutions, pricing, and process. Based in Udaipur, Rajasthan.',
    url: 'https://msinfinextech.com/faq',
  },
  alternates: {
    canonical: 'https://msinfinextech.com/faq',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
