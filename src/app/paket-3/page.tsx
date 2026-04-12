import type { Metadata } from 'next';
import { PackagePageView } from '@/components/package/PackagePageView';
import { getPackagePage } from '@/data/packagePages';

const packagePage = getPackagePage('paket-3');

export const metadata: Metadata = {
  title: 'Paket 3 — Nebim ERA',
  description: packagePage?.description,
};

export default function PaketThreeAliasPage() {
  if (!packagePage) {
    return null;
  }

  return <PackagePageView packagePage={packagePage} />;
}
