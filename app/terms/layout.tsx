import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the MS Infinix terms of service. Understand the terms and conditions for using our services and website.',
};

export default function TermsLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
