import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import InnerBanner from '@/components/shared/InnerBanner';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'Mentions légales', description: 'Mentions légales du cabinet d\'avocats J&J Law Firm. Informations juridiques, conditions d\'utilisation et politique de confidentialité.' }
    : { title: 'Legal Notice', description: 'Legal notice of J&J Law Firm. Legal information, terms of use and privacy policy.' };
  return generatePageMetadata({ ...meta, locale, path: '/legal-notice' });
}

export default function LegalNoticePage() {
  const t = useTranslations();

  return (
    <main id="content" className="site-main">
      <InnerBanner
        backgroundImage="/images/principal1.jpg"
      />

      <div className="policy-page-section">
        <div className="container">
          <div
            className="policy-inner"
            dangerouslySetInnerHTML={{ __html: t('legal_notice.content') }}
          />
        </div>
      </div>
    </main>
  );
}
