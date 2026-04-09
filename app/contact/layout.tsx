import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with MS Infinix. Contact us for project inquiries, quotes, and partnerships. Located in Udaipur, Rajasthan, India.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
