import React from 'react';
import { notFound } from 'next/navigation';
import { allServices, getSubpage } from '@/lib/services-data';
import ServiceSubpageLayout from '@/components/ServiceSubpageLayout';

export function generateStaticParams() {
  const params: { service: string; subpage: string }[] = [];
  allServices.forEach(svc => {
    svc.subpages.forEach(sp => {
      params.push({ service: svc.slug, subpage: sp.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ service: string; subpage: string }> }) {
  const { service: svcSlug, subpage: spSlug } = await params;
  const result = getSubpage(svcSlug, spSlug);
  if (!result) return {};
  const { service, subpage } = result;
  return {
    title: `${subpage.title} — ${service.title} in Udaipur | MS Infinex Tech`,
    description: `${subpage.description} Professional ${subpage.title.toLowerCase()} services in Udaipur, Rajasthan by MS Infinex Tech.`,
    keywords: [
      `${subpage.title.toLowerCase()} Udaipur`,
      `${service.title.toLowerCase()} Udaipur`,
      `${subpage.title.toLowerCase()} services Rajasthan`,
      'MS Infinex Tech',
    ],
    openGraph: {
      title: `${subpage.title} – ${service.title} | MS Infinex Tech Udaipur`,
      description: subpage.description,
      url: `https://msinfinextech.com/services/${svcSlug}/${spSlug}`,
    },
    alternates: {
      canonical: `https://msinfinextech.com/services/${svcSlug}/${spSlug}`,
    },
  };
}

export default async function SubpagePage({ params }: { params: Promise<{ service: string; subpage: string }> }) {
  const { service: svcSlug, subpage: spSlug } = await params;
  const result = getSubpage(svcSlug, spSlug);
  if (!result) notFound();

  return (
    <ServiceSubpageLayout
      service={result.service}
      subpage={result.subpage}
    />
  );
}
