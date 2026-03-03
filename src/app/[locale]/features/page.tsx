import { generatePageMetadata } from '@/lib/metadata';
import FeaturesContent from './FeaturesContent';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'Nos Atouts', description: 'Découvrez les atouts du cabinet J&J Law Firm : expertise juridique, méthode de travail rigoureuse et objectifs de satisfaction client.' }
    : { title: 'Our Features', description: 'Discover J&J Law Firm strengths: legal expertise, rigorous work methodology and client satisfaction goals.' };
  return generatePageMetadata({ ...meta, locale, path: '/features' });
}

export default function FeaturesPage() {
  return <FeaturesContent />;
}
