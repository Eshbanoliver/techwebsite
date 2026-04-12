import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the MS Infinex Tech terms of service. Understand the terms and conditions for using our IT, web development, and digital marketing services in Udaipur, Rajasthan.',
  alternates: {
    canonical: 'https://msinfinextech.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
