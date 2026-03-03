export interface Attorney {
  slug: string;
  i18nPrefix: string;
  nameKey: string;
  image: string;
  thumbImage: string;
  email: string;
  phone: string;
  phoneRaw: string;
  practiceAreaSlugs: string[];
  expCount: number;
  achievementIcons: string[];
}

export const attorneys: Attorney[] = [
  {
    slug: 'jethro',
    i18nPrefix: 'attorney_detail',
    nameKey: 'team.master_jethro',
    image: '/images/attorney-jethro.jpg',
    thumbImage: '/images/attorney-jethro-thumb.jpg',
    email: 'Jethrotshimbu@yahoo.fr',
    phone: '+243 810 369 919',
    phoneRaw: '+243810369919',
    practiceAreaSlugs: ['mining', 'commercial', 'ohada', 'agricultural'],
    expCount: 11,
    achievementIcons: ['fas fa-balance-scale', 'fas fa-star', 'fas fa-history', 'fas fa-certificate', 'fas fa-chart-line', 'fas fa-lightbulb'],
  },
  {
    slug: 'mizou',
    i18nPrefix: 'attorney_detail_mizou',
    nameKey: 'team.master_mizou',
    image: '/images/attorney-mizou.jpg',
    thumbImage: '/images/attorney-mizou-thumb.jpg',
    email: 'lawfirmjetj@gmail.com',
    phone: '+243 995 482 416',
    phoneRaw: '+243995482416',
    practiceAreaSlugs: ['ohada', 'banking', 'agricultural'],
    expCount: 6,
    achievementIcons: ['fas fa-balance-scale', 'fas fa-university', 'fas fa-seedling', 'fas fa-handshake', 'fas fa-certificate', 'fas fa-lightbulb'],
  },
  {
    slug: 'john',
    i18nPrefix: 'attorney_detail_john',
    nameKey: 'team.master_ngoy',
    image: '/images/attorney-ngoy.jpg',
    thumbImage: '/images/attorney-john-thumb.jpg',
    email: 'lawfirmjetj@gmail.com',
    phone: '+243 995 482 416',
    phoneRaw: '+243995482416',
    practiceAreaSlugs: ['constitutional', 'family-law', 'commercial'],
    expCount: 7,
    achievementIcons: ['fas fa-network-wired', 'fas fa-gavel', 'fas fa-brain', 'fas fa-language', 'fas fa-landmark', 'fas fa-handshake'],
  },
  {
    slug: 'olga',
    i18nPrefix: 'attorney_detail_olga',
    nameKey: 'team.master_olga',
    image: '/images/attorney-olga.jpg',
    thumbImage: '/images/attorney-olga.jpg',
    email: 'lawfirmjetj@gmail.com',
    phone: '+243 995 482 416',
    phoneRaw: '+243995482416',
    practiceAreaSlugs: ['family-law', 'insurance', 'real-estate'],
    expCount: 6,
    achievementIcons: ['fas fa-heart', 'fas fa-shield-alt', 'fas fa-users', 'fas fa-handshake', 'fas fa-certificate', 'fas fa-star'],
  },
  {
    slug: 'daniel',
    i18nPrefix: 'attorney_detail_daniel',
    nameKey: 'team.master_daniel',
    image: '/images/attorney-daniel.jpg',
    thumbImage: '/images/attorney-daniel.jpg',
    email: 'lawfirmjetj@gmail.com',
    phone: '+243 995 482 416',
    phoneRaw: '+243995482416',
    practiceAreaSlugs: ['banking', 'commercial', 'ohada'],
    expCount: 6,
    achievementIcons: ['fas fa-university', 'fas fa-briefcase', 'fas fa-chart-line', 'fas fa-handshake', 'fas fa-certificate', 'fas fa-lightbulb'],
  },
  {
    slug: 'emmanuel',
    i18nPrefix: 'attorney_detail_emmanuel',
    nameKey: 'team.master_emmanuel',
    image: '/images/attorney-emmanuel.jpg',
    thumbImage: '/images/attorney-emmanuel.jpg',
    email: 'lawfirmjetj@gmail.com',
    phone: '+243 995 482 416',
    phoneRaw: '+243995482416',
    practiceAreaSlugs: ['telecom', 'intellectual-property', 'commercial'],
    expCount: 6,
    achievementIcons: ['fas fa-satellite-dish', 'fas fa-copyright', 'fas fa-briefcase', 'fas fa-handshake', 'fas fa-certificate', 'fas fa-lightbulb'],
  },
  {
    slug: 'seraphin',
    i18nPrefix: 'attorney_detail_seraphin',
    nameKey: 'team.master_kabamba',
    image: '/images/attorney-seraphin.jpg',
    thumbImage: '/images/attorney-seraphin.jpg',
    email: 'lawfirmjetj@gmail.com',
    phone: '+243 995 482 416',
    phoneRaw: '+243995482416',
    practiceAreaSlugs: ['transport', 'commercial', 'mining'],
    expCount: 8,
    achievementIcons: ['fas fa-balance-scale', 'fas fa-gavel', 'fas fa-brain', 'fas fa-certificate', 'fas fa-chart-line', 'fas fa-handshake'],
  },
];

export function getAttorneyBySlug(slug: string): Attorney | undefined {
  return attorneys.find((a) => a.slug === slug);
}
