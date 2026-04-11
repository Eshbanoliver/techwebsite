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
  return {
    title: `${result.subpage.title} — ${result.service.title} | MS Infinex Tech Udaipur`,
    description: result.subpage.description,
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
