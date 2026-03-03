import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import InnerBanner from '@/components/shared/InnerBanner';
import ScheduleSection from '@/components/home/ScheduleSection';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'À Propos', description: 'Découvrez le cabinet J&J Law Firm, notre mission, nos valeurs et notre équipe d\'avocats expérimentés en RDC.' }
    : { title: 'About Us', description: 'Discover J&J Law Firm, our mission, values and team of experienced lawyers in DRC.' };
  return generatePageMetadata({ ...meta, locale, path: '/about' });
}

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main id="content" className="site-main">
      <InnerBanner
        backgroundImage="/images/principal1.jpg"
      />

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="about-title text-center">{t('about.presentation_title')}</h2>
          <div className="row">
            <div className="col-md-6">
              <p
                className="about-describe info-left"
                dangerouslySetInnerHTML={{
                  __html: t.raw('about.paragraph1') + '<br><br>' + t.raw('about.paragraph2'),
                }}
              />
            </div>
            <div className="col-md-6">
              <p
                className="about-describe info-right"
                dangerouslySetInnerHTML={{
                  __html: t.raw('about.paragraph3') + '<br><br>' + t.raw('about.paragraph4'),
                }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="counter-inner">
            <div className="counter-item-wrap row">
              <div className="col-lg-3 col-sm-6 counter-item">
                <div className="counter-no">
                  <span className="counter">2</span>k+
                </div>
                <div className="Completed">
                  {t('about.stats.consultations')}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 counter-item">
                <div className="counter-no">
                  <span className="counter">95</span>%
                </div>
                <div className="Completed">
                  {t('about.stats.success_rate')}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 counter-item">
                <div className="counter-no">
                  <span className="counter">12</span>+
                </div>
                <div className="Completed">
                  {t('about.stats.lawyers')}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 counter-item">
                <div className="counter-no">
                  <span className="counter">20</span>+
                </div>
                <span className="Completed">
                  {t('about.stats.awards')}
                </span>
              </div>
            </div>
          </div>

          {/* About banner with image */}
          <div className="about-banner">
            <figure className="about-image">
              <img src="/images/icon-service-18.jpg" alt="J&J Law Firm" />
            </figure>
            <div className="about-left-banner">
              <div className="banner-icon">
                <i aria-hidden="true" className="icon icon-trophy1" />
              </div>
              <h3>{t('about.experience_badge')}</h3>
            </div>
            <div className="about-right-banner" />
          </div>
        </div>
      </section>

      {/* Client Logos Slider */}
      <div className="slider-section about-slider">
        <div className="container">
          <div className="client-slider text-center">
            {[20, 21, 22, 23, 24].map((num) => (
              <div key={num} className="client-item">
                <figure>
                  <img src={`/images/icon-service-${num}.png`} alt="Client" />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <ScheduleSection className="about-schedule" />
    </main>
  );
}
