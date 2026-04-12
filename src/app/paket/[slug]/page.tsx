import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PackagePageView } from '@/components/package/PackagePageView';
import { getPackagePage, packagePages } from '@/data/packagePages';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return packagePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const packagePage = getPackagePage(slug);

  if (!packagePage) {
    return {};
  }

  return {
    title: `${packagePage.title} — Nebim ERA`,
    description: packagePage.description,
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const packagePage = getPackagePage(slug);

  if (!packagePage) {
    notFound();
  }

  return <PackagePageView packagePage={packagePage} />;
}
