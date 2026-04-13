import type { Metadata } from 'next';
import { LegacyHtmlPage } from '@/components/legacy/LegacyHtmlPage';
import { getLegacyPageMetadata } from '@/lib/legacySite';

export const metadata: Metadata = getLegacyPageMetadata('');

export default function HomePage() {
  return <LegacyHtmlPage pageSlug="" />;
}
