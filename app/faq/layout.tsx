import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers to frequently asked questions about MS Infinix services, pricing, process, and technology stack.',
};

export default function FAQLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
