import type { Metadata } from 'next';
import { HomePageClient } from './HomePageClient';

export const metadata: Metadata = {
  title: 'Nebim ERA — Bütünleşik Perakende Ticaretinin Geleceği',
  description:
    'Perakendede çok kanallı dönem bitti, bütünleşik dönem başladı. Nebim ERA ile fiziksel mağaza, e-ticaret ve pazaryeri süreçlerinizi tek platformdan yönetin.',
};

export default function HomePage() {
  return <HomePageClient />;
}
