import { generatePageMetadata } from '@/lib/metadata';
import HomeBanner from '@/components/home/HomeBanner';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import ScheduleSection from '@/components/home/ScheduleSection';
import SpecialtiesSection from '@/components/home/SpecialtiesSection';
import CounterSection from '@/components/home/CounterSection';
import ClientTestimonialsCarousel from '@/components/home/ClientTestimonialsCarousel';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'Cabinet d\'Avocats en RDC', description: 'J&J Law Firm - Cabinet d\'avocats à Kinshasa et Lubumbashi. Expertise en droit minier, droit des affaires, droit OHADA et plus.' }
    : { title: 'Law Firm in DRC', description: 'J&J Law Firm - Law firm in Kinshasa and Lubumbashi. Expertise in mining law, business law, OHADA law and more.' };
  return generatePageMetadata({ ...meta, locale });
}

export default function HomePage() {
  return (
    <main>
      <HomeBanner />
      <TestimonialSlider />
      <ScheduleSection />
      <SpecialtiesSection />
      <CounterSection />
      <ClientTestimonialsCarousel />
    </main>
  );
}
