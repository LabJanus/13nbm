import type { Metadata } from 'next';
import { CertifiedPageClient } from './CertifiedPageClient';

export const metadata: Metadata = {
  title: 'Nebim Certified Donanim Ekosistemi — Nebim ERA',
  description:
    'Nebim ERA Perakende Satis ile entegre calisan PAX Elys, YN OKC, EFT-POS ve magaza mobil cihazlari.',
};

export default function CertifiedPage() {
  return <CertifiedPageClient />;
}
