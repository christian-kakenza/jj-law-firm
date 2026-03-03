import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import InnerBanner from '@/components/shared/InnerBanner';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'Réservation confirmée', description: 'Votre rendez-vous avec le cabinet J&J Law Firm a été confirmé. Nous vous contacterons pour finaliser les détails.' }
    : { title: 'Reservation Confirmed', description: 'Your appointment with J&J Law Firm has been confirmed. We will contact you to finalize the details.' };
  return generatePageMetadata({ ...meta, locale, path: '/reservation/success' });
}

export default function ReservationSuccessPage() {
  const t = useTranslations();

  return (
    <main id="content" className="site-main">
      <InnerBanner
        backgroundImage="/images/principal1.jpg"
      />

      <section className="reservation-page-section" style={{ textAlign: 'center', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#d4edda',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
              }}
            >
              <i className="fas fa-calendar-check" style={{ fontSize: '40px', color: '#28a745' }} />
            </div>
            <h2 style={{ color: '#565872', marginBottom: '20px' }}>
              {t('success_pages.reservation.title')}
            </h2>
            <p style={{ color: '#666', fontSize: '1.1em', marginBottom: '15px' }}>
              {t('success_pages.reservation.message')}
            </p>
            <p style={{ color: '#888', marginBottom: '40px' }}>
              {t('success_pages.reservation.contact')}
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="button-primary">
                {t('success_pages.back_to_home')}
              </Link>
              <Link href="/contact" className="button-round">
                {t('success_pages.contact_us')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
