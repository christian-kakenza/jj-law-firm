export interface NavItem {
  labelKey: string;
  href: string;
  children?: NavItem[];
  highlight?: boolean;
}

export const mainNavigation: NavItem[] = [
  {
    labelKey: 'header.home',
    href: '/',
  },
  {
    labelKey: 'header.about',
    href: '/about',
  },
  {
    labelKey: 'header.services',
    href: '#',
    children: [
      { labelKey: 'services.all_services', href: '/practice-areas', highlight: true },
      { labelKey: 'services.mining', href: '/practice-areas/mining' },
      { labelKey: 'services.constitutional', href: '/practice-areas/constitutional' },
      { labelKey: 'services.insurance', href: '/practice-areas/insurance' },
      { labelKey: 'services.real_estate', href: '/practice-areas/real-estate' },
      { labelKey: 'services.family', href: '/practice-areas/family-law' },
      { labelKey: 'services.commercial', href: '/practice-areas/commercial' },
      { labelKey: 'services.telecom', href: '/practice-areas/telecom' },
      { labelKey: 'services.banking', href: '/practice-areas/banking' },
      { labelKey: 'services.agricultural', href: '/practice-areas/agricultural' },
      { labelKey: 'services.ohada', href: '/practice-areas/ohada' },
      { labelKey: 'services.intellectual', href: '/practice-areas/intellectual-property' },
      { labelKey: 'services.transport', href: '/practice-areas/transport' },
    ],
  },
  {
    labelKey: 'header.team',
    href: '#',
    children: [
      { labelKey: 'team.our_team', href: '/team', highlight: true },
      { labelKey: 'team.master_jethro', href: '/team/jethro' },
      { labelKey: 'team.master_ngoy', href: '/team/john' },
      { labelKey: 'team.master_olga', href: '/team/olga' },
      { labelKey: 'team.master_daniel', href: '/team/daniel' },
      { labelKey: 'team.master_emmanuel', href: '/team/emmanuel' },
      { labelKey: 'team.master_kabamba', href: '/team/seraphin' },
      { labelKey: 'team.master_mizou', href: '/team/mizou' },
    ],
  },
  {
    labelKey: 'header.contact',
    href: '/contact',
  },
];
