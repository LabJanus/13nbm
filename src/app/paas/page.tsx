import type { Metadata } from 'next';
import { PaasPageClient } from './PaasPageClient';

export const metadata: Metadata = {
  title: 'Nebim ERA PaaS — Kendi SaaS Uygulamanızı İnşa Edin',
  description:
    "Türkiye'nin ilk yerel perakende PaaS çözümü. MACH mimarisi, Embedded AI, Event-Driven platform ve Nebim Uygulama Mağazası ekosistemi.",
};

export default function PaasPage() {
  return <PaasPageClient />;
}
