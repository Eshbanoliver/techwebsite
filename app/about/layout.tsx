import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MS Infinix — a leading technology company based in Udaipur, Rajasthan, delivering premium AI, Web, Mobile, and Cloud solutions worldwide.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
