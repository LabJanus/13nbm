import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegacyHtmlPage } from '@/components/legacy/LegacyHtmlPage';
import { getLegacyPageMetadata, isLegacyPageSlug, legacyStaticSlugs } from '@/lib/legacySite';

type LegacyRoutePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return legacyStaticSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LegacyRoutePageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isLegacyPageSlug(slug)) {
    return {};
  }

  return getLegacyPageMetadata(slug);
}

export default async function LegacyRoutePage({ params }: LegacyRoutePageProps) {
  const { slug } = await params;

  if (!isLegacyPageSlug(slug)) {
    notFound();
  }

  return <LegacyHtmlPage pageSlug={slug} />;
}
