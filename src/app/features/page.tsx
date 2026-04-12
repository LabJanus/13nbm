import type { Metadata } from 'next';
import { FeaturesPageClient } from './FeaturesPageClient';

export const metadata: Metadata = {
  title: 'Tüm Özellikler — Nebim ERA',
  description:
    "Nebim ERA'nın 160+ özelliği: müşteri yönetimi, ürün katalog, stok, sipariş, satış noktaları, kampanyalar, ödeme, analitik ve destek.",
};

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
