export interface PracticeArea {
  slug: string;
  i18nPrefix: string;
  nameKey: string;
  bannerImage: string;
  listingImage: string;
  heroImage: string;
  detailImage: string;
  icon: string;
  serviceIcons: string[];
}

// Order matches original practice-area.ejs listing page
export const practiceAreas: PracticeArea[] = [
  {
    slug: 'commercial',
    i18nPrefix: 'practice_detail_commercial',
    nameKey: 'services.commercial',
    bannerImage: '/images/commerce1.jpg',
    listingImage: '/images/droit1.jpg',
    heroImage: '/images/commerce2.jpg',
    detailImage: '/images/commerce3.jpg',
    icon: 'fas fa-briefcase',
    serviceIcons: ['fas fa-briefcase', 'fas fa-file-contract', 'fas fa-handshake', 'fas fa-gavel', 'fas fa-chart-line'],
  },
  {
    slug: 'banking',
    i18nPrefix: 'practice_detail_banking',
    nameKey: 'services.banking',
    bannerImage: '/images/pretPriveUpdate.jpg',
    listingImage: '/images/droit12.jpg',
    heroImage: '/images/pretPriveUpdate2.jpg',
    detailImage: '/images/pretPriveUpdate3.jpg',
    icon: 'fas fa-university',
    serviceIcons: ['fas fa-university', 'fas fa-file-contract', 'fas fa-handshake', 'fas fa-gavel', 'fas fa-money-bill-wave'],
  },
  {
    slug: 'transport',
    i18nPrefix: 'practice_detail_transport',
    nameKey: 'services.transport',
    bannerImage: '/images/transport1.jpg',
    listingImage: '/images/droit4.jpg',
    heroImage: '/images/transport2.jpg',
    detailImage: '/images/transport3.jpg',
    icon: 'fas fa-truck',
    serviceIcons: ['fas fa-truck', 'fas fa-file-contract', 'fas fa-handshake', 'fas fa-gavel', 'fas fa-ship'],
  },
  {
    slug: 'mining',
    i18nPrefix: 'practice_detail_mining',
    nameKey: 'services.mining',
    bannerImage: '/images/droitMinier3.jpg',
    listingImage: '/images/droitMinier3.jpg',
    heroImage: '/images/DroitMinierUpdate.jpg',
    detailImage: '/images/DroitMinierCarte.jpg',
    icon: 'fas fa-hard-hat',
    serviceIcons: ['fas fa-file-contract', 'fas fa-handshake', 'fas fa-users', 'fas fa-chart-line', 'fas fa-gavel'],
  },
  {
    slug: 'ohada',
    i18nPrefix: 'practice_detail_ohada',
    nameKey: 'services.ohada',
    bannerImage: '/images/ohada1.jpg',
    listingImage: '/images/ohada1.jpg',
    heroImage: '/images/ohadaUpdate.jpg',
    detailImage: '/images/ohadaUpdate2.jpg',
    icon: 'fas fa-balance-scale',
    serviceIcons: ['fas fa-balance-scale', 'fas fa-file-contract', 'fas fa-handshake', 'fas fa-gavel', 'fas fa-globe-africa'],
  },
  {
    slug: 'agricultural',
    i18nPrefix: 'practice_detail_agricultural',
    nameKey: 'services.agricultural',
    bannerImage: '/images/agricole1.jpg',
    listingImage: '/images/droit7.jpg',
    heroImage: '/images/agricole2.jpg',
    detailImage: '/images/agricole3.jpg',
    icon: 'fas fa-tractor',
    serviceIcons: ['fas fa-tractor', 'fas fa-file-contract', 'fas fa-handshake', 'fas fa-gavel', 'fas fa-seedling'],
  },
  {
    slug: 'insurance',
    i18nPrefix: 'practice_detail_insurance',
    nameKey: 'services.insurance',
    bannerImage: '/images/assurance1.jpg',
    listingImage: '/images/droit8.jpg',
    heroImage: '/images/assurance2.jpg',
    detailImage: '/images/assurance3.jpg',
    icon: 'fas fa-umbrella',
    serviceIcons: ['fas fa-umbrella', 'fas fa-file-contract', 'fas fa-handshake', 'fas fa-gavel', 'fas fa-chart-line'],
  },
  {
    slug: 'real-estate',
    i18nPrefix: 'practice_detail_real_estate',
    nameKey: 'services.real_estate',
    bannerImage: '/images/ImmoUpdate@@.jpg',
    listingImage: '/images/droit9.jpg',
    heroImage: '/images/ImmoUbdate.jpg',
    detailImage: '/images/ImmoUpdate@@@@.jpg',
    icon: 'fas fa-building',
    serviceIcons: ['fas fa-building', 'fas fa-file-contract', 'fas fa-handshake', 'fas fa-gavel', 'fas fa-home'],
  },
  {
    slug: 'family-law',
    i18nPrefix: 'practice_detail_family',
    nameKey: 'services.family',
    bannerImage: '/images/family1.jpg',
    listingImage: '/images/droit10.jpg',
    heroImage: '/images/family2.jpg',
    detailImage: '/images/family3.jpg',
    icon: 'fas fa-heart',
    serviceIcons: ['fas fa-heart', 'fas fa-child', 'fas fa-file-contract', 'fas fa-gavel', 'fas fa-handshake'],
  },
  {
    slug: 'telecom',
    i18nPrefix: 'practice_detail_telecom',
    nameKey: 'services.telecom',
    bannerImage: '/images/telecom1.jpg',
    listingImage: '/images/droit11.jpg',
    heroImage: '/images/telecom2.jpg',
    detailImage: '/images/telecom3.jpg',
    icon: 'fas fa-satellite-dish',
    serviceIcons: ['fas fa-satellite-dish', 'fas fa-file-contract', 'fas fa-handshake', 'fas fa-gavel', 'fas fa-wifi'],
  },
  {
    slug: 'intellectual-property',
    i18nPrefix: 'practice_detail_intellectual',
    nameKey: 'services.intellectual',
    bannerImage: '/images/trade1.jpg',
    listingImage: '/images/droit3.jpg',
    heroImage: '/images/trade2.jpg',
    detailImage: '/images/trade3.jpg',
    icon: 'fas fa-copyright',
    serviceIcons: ['fas fa-copyright', 'fas fa-file-contract', 'fas fa-handshake', 'fas fa-gavel', 'fas fa-lightbulb'],
  },
  {
    slug: 'constitutional',
    i18nPrefix: 'practice_detail_constitutional',
    nameKey: 'services.constitutional',
    bannerImage: '/images/admini1.jpg',
    listingImage: '/images/droit2.jpg',
    heroImage: '/images/admini2.jpg',
    detailImage: '/images/admini3.jpg',
    icon: 'fas fa-landmark',
    serviceIcons: ['fas fa-landmark', 'fas fa-balance-scale', 'fas fa-file-alt', 'fas fa-gavel', 'fas fa-university'],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((pa) => pa.slug === slug);
}
