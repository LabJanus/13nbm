import type { Metadata } from 'next';
import { PackagePageView } from '@/components/package/PackagePageView';
import { getPackagePage } from '@/data/packagePages';

const packagePage = getPackagePage('paket-1');

export const metadata: Metadata = {
  title: 'Paket 1 — Nebim ERA',
  description: packagePage?.description,
};

export default function PaketOneAliasPage() {
  if (!packagePage) {
    return null;
  }

  return <PackagePageView packagePage={packagePage} />;
}
