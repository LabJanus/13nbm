import type { Metadata } from 'next';
import { PackagePageView } from '@/components/package/PackagePageView';
import { getPackagePage } from '@/data/packagePages';

const packagePage = getPackagePage('custom');

export const metadata: Metadata = {
  title: 'Custom Paket — Nebim ERA',
  description: packagePage?.description,
};

export default function PaketCustomAliasPage() {
  if (!packagePage) {
    return null;
  }

  return <PackagePageView packagePage={packagePage} />;
}
