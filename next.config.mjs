import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old practice area URLs -> new
      { source: '/practice-area-mines', destination: '/fr/practice-areas/mining', permanent: true },
      { source: '/practice-area-constitutionnel', destination: '/fr/practice-areas/constitutional', permanent: true },
      { source: '/practice-area-assurances', destination: '/fr/practice-areas/insurance', permanent: true },
      { source: '/practice-area-immobilier', destination: '/fr/practice-areas/real-estate', permanent: true },
      { source: '/practice-area-droits-homme', destination: '/fr/practice-areas/family-law', permanent: true },
      { source: '/practice-area-detail', destination: '/fr/practice-areas/commercial', permanent: true },
      { source: '/practice-area-ecommerce', destination: '/fr/practice-areas/telecom', permanent: true },
      { source: '/practice-area-pret-prive', destination: '/fr/practice-areas/banking', permanent: true },
      { source: '/practice-area-corporatif', destination: '/fr/practice-areas/agricultural', permanent: true },
      { source: '/practice-area-ohada', destination: '/fr/practice-areas/ohada', permanent: true },
      { source: '/practice-area-intellectuelle', destination: '/fr/practice-areas/intellectual-property', permanent: true },
      { source: '/practice-area-transport', destination: '/fr/practice-areas/transport', permanent: true },
      { source: '/practice-area', destination: '/fr/practice-areas', permanent: true },
      // Old attorney URLs -> new
      { source: '/attorney-detail', destination: '/fr/team/jethro', permanent: true },
      { source: '/attorney-detail-john', destination: '/fr/team/john', permanent: true },
      { source: '/attorney-detail-olga', destination: '/fr/team/olga', permanent: true },
      { source: '/attorney-detail-daniel', destination: '/fr/team/daniel', permanent: true },
      { source: '/attorney-detail-emmanuel', destination: '/fr/team/emmanuel', permanent: true },
      { source: '/attorney-detail-seraphin', destination: '/fr/team/seraphin', permanent: true },
      { source: '/attorney-detail-mizou', destination: '/fr/team/mizou', permanent: true },
      { source: '/attorney', destination: '/fr/team', permanent: true },
      // Old page URLs -> new
      { source: '/about', destination: '/fr/about', permanent: true },
      { source: '/contact', destination: '/fr/contact', permanent: true },
      { source: '/reservation', destination: '/fr/reservation', permanent: true },
      { source: '/faq', destination: '/fr/faq', permanent: true },
      { source: '/legal-notice', destination: '/fr/legal-notice', permanent: true },
      { source: '/feature', destination: '/fr/features', permanent: true },
      { source: '/index', destination: '/fr', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
