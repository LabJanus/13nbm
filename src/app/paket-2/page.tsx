import type { Metadata } from 'next';
import { PackagePageView } from '@/components/package/PackagePageView';
import { getPackagePage } from '@/data/packagePages';

const packagePage = getPackagePage('paket-2');

export const metadata: Metadata = {
  title: 'Paket 2 — Nebim ERA',
  description: packagePage?.description,
};

export default function PaketTwoAliasPage() {
  if (!packagePage) {
    return null;
  }

  return <PackagePageView packagePage={packagePage} />;
}
