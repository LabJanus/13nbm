import { getLegacyPage, type LegacyPageSlug } from '@/lib/legacySite';

type LegacyHtmlPageProps = {
  pageSlug: LegacyPageSlug;
};

export function LegacyHtmlPage({ pageSlug }: LegacyHtmlPageProps) {
  const page = getLegacyPage(pageSlug);

  return (
    <div className="legacy-page-shell" data-legacy-page={pageSlug || 'home'}>
      <div className="era-top-band" aria-hidden="true" />
      <div
        className="legacy-html"
        data-legacy-html
        dangerouslySetInnerHTML={{ __html: page.markup }}
        suppressHydrationWarning
      />
    </div>
  );
}
