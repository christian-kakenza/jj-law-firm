import type { Metadata } from 'next';

const SITE_URL = 'https://jj-lawfirm.com';
const FIRM_NAME = 'J&J Law Firm';

export function generatePageMetadata({
  title,
  description,
  locale,
  path = '',
}: {
  title: string;
  description: string;
  locale: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${FIRM_NAME}`;
  const url = `${SITE_URL}/${locale}${path}`;
  const alternateLocale = locale === 'fr' ? 'en' : 'fr';
  const alternateUrl = `${SITE_URL}/${alternateLocale}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: locale === 'fr' ? url : alternateUrl,
        en: locale === 'en' ? url : alternateUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: FIRM_NAME,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/jj-logo-color.png`,
          width: 300,
          height: 300,
          alt: FIRM_NAME,
        },
      ],
    },
  };
}
