import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import { Link } from '@/i18n/routing';
import InnerBanner from '@/components/shared/InnerBanner';
import ScheduleSection from '@/components/home/ScheduleSection';
import { practiceAreas } from '@/data/practiceAreas';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'Domaines de Pratique', description: 'Nos 12 domaines de spécialisation : droit minier, droit des affaires, droit OHADA, droit immobilier et plus.' }
    : { title: 'Practice Areas', description: 'Our 12 areas of specialization: mining law, business law, OHADA law, real estate law and more.' };
  return generatePageMetadata({ ...meta, locale, path: '/practice-areas' });
}

export default function PracticeAreasPage() {
  const t = useTranslations();

  return (
    <main id="content" className="site-main">
      <InnerBanner
        backgroundImage="/images/principal1.jpg"
      />

      <section className="practice-area-section home-legal-area">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">
              {t('practice_area.section_title')}
            </h2>
            <p className="section-subtitle">
              {t('practice_area.section_subtitle')}
            </p>
          </div>

          <div className="legal-area-list">
            {practiceAreas.map((area) => (
              <div
                key={area.slug}
                className="legal-area-detail"
              >
                <figure className="area-img">
                  <img src={area.listingImage} alt={t(area.nameKey)} />
                </figure>
                <div className="area-content-wrapper">
                  <div className="area-detail">
                    <h5 className="role-title">{t(area.nameKey)}</h5>
                    <span className="area-role-btn">
                      <Link href={`/practice-areas/${area.slug}`}>
                        {t('practice_area.learn_more')}{' '}
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </span>
                  </div>
                  <div className="legal-area-icon">
                    <i className={area.icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScheduleSection className="about-schedule practice-area-schedule" />
    </main>
  );
}
