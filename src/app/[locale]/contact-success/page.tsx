import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import InnerBanner from '@/components/shared/InnerBanner';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'Message envoyé', description: 'Votre message a bien été envoyé au cabinet J&J Law Firm. Nous vous répondrons dans les plus brefs délais.' }
    : { title: 'Message Sent', description: 'Your message has been sent to J&J Law Firm. We will respond as soon as possible.' };
  return generatePageMetadata({ ...meta, locale, path: '/contact-success' });
}

export default function ContactSuccessPage() {
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
              <i className="fas fa-check" style={{ fontSize: '40px', color: '#28a745' }} />
            </div>
            <h2 style={{ color: '#565872', marginBottom: '20px' }}>
              {t('success_pages.contact.title')}
            </h2>
            <p style={{ color: '#666', fontSize: '1.1em', marginBottom: '15px' }}>
              {t('success_pages.contact.message')}
            </p>
            <p style={{ color: '#888', marginBottom: '40px' }}>
              {t('success_pages.contact.contact')}
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="button-primary">
                {t('success_pages.back_to_home')}
              </Link>
              <Link href="/practice-areas" className="button-round">
                {t('success_pages.our_specialties')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
