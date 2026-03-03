import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import InnerBanner from '@/components/shared/InnerBanner';
import ReservationForm from '@/components/forms/ReservationForm';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'Prendre Rendez-vous', description: 'Réservez une consultation avec nos avocats. Cabinet J&J Law Firm à Kinshasa et Lubumbashi.' }
    : { title: 'Book an Appointment', description: 'Schedule a consultation with our lawyers. J&J Law Firm in Kinshasa and Lubumbashi.' };
  return generatePageMetadata({ ...meta, locale, path: '/reservation' });
}

export default function ReservationPage() {
  const t = useTranslations();

  return (
    <main id="content" className="site-main">
      <InnerBanner
        backgroundImage="/images/principal1.jpg"
      />

      <div className="reservation-page-section">
        <div className="container">
          <ReservationForm />
        </div>
      </div>
    </main>
  );
}
