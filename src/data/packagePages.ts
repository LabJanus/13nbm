export type PackageHeroVariant = 'variantOne' | 'variantTwo' | 'variantThree' | 'plain';

export type PackagePage = {
  slug: string;
  title: string;
  description: string;
  heroVariant: PackageHeroVariant;
};

export const packagePages: PackagePage[] = [
  {
    slug: 'paket-1',
    title: 'Paket 1',
    description: 'Nebim ERA Paket 1 — Perakendeye ilk adım için temel çözüm paketi.',
    heroVariant: 'variantOne',
  },
  {
    slug: 'paket-2',
    title: 'Paket 2',
    description: 'Nebim ERA Paket 2 — Büyüyen işletmeler için gelişmiş çözüm paketi.',
    heroVariant: 'variantTwo',
  },
  {
    slug: 'paket-3',
    title: 'Paket 3',
    description: 'Nebim ERA Paket 3 — Kurumsal perakende operasyonları için kapsamlı çözüm paketi.',
    heroVariant: 'variantThree',
  },
  {
    slug: 'custom',
    title: 'Custom Paket',
    description: 'Nebim ERA Custom — İhtiyaçlarınıza özel, tamamen kişiselleştirilmiş çözüm paketi.',
    heroVariant: 'plain',
  },
];

export function getPackagePage(slug: string) {
  return packagePages.find((item) => item.slug === slug);
}
