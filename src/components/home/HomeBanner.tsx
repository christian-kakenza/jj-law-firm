import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomeBanner() {
  const t = useTranslations();

  return (
    <section className="home-banner">
      <div className="overlay overlay-balance" />
      <div className="container">
        <div className="row align-items-center g-0">
          {/* Left column - text content */}
          <div className="col-lg-6 col-md-6">
            <div className="banner-detail">
              <h2 className="banner-title">{t('home.banner.title')}</h2>
              <p className="banner-info">{t('home.banner.subtitle')}</p>
              <div className="banner-btn-wrapper">
                <Link href="/reservation" className="button-primary">
                  {t('common.book_appointment_btn')}
                </Link>
                <Link href="/about" className="button-white">
                  {t('common.learn_more_btn')}
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - image */}
          <div className="col-lg-6 col-md-6">
            <figure className="banner-img">
              <div className="banner-overlay-img overlay" />
              <img
                src="/images/attorney-jethro-profile.png"
                alt={t('team.master_jethro')}
              />
            </figure>
          </div>
        </div>

        {/* Values cards */}
        <div className="banner-service-content">
          <div className="serice-type">
            <a href="#">
              <h5 className="service-header">
                {t('home.values.accredited.title')}
              </h5>
              <figure className="servie-icon">
                <i aria-hidden="true" className="icon icon-Profile" />
              </figure>
              <p className="service-desc">
                {t('home.values.accredited.desc')}
              </p>
            </a>
          </div>
          <div className="serice-type active">
            <a href="#">
              <h5 className="service-header">
                {t('home.values.specialist.title')}
              </h5>
              <figure className="servie-icon">
                <i aria-hidden="true" className="icon icon-Rating" />
              </figure>
              <p className="service-desc">
                {t('home.values.specialist.desc')}
              </p>
            </a>
          </div>
          <div className="serice-type">
            <a href="#">
              <h5 className="service-header">
                {t('home.values.cost_effective.title')}
              </h5>
              <figure className="servie-icon">
                <i aria-hidden="true" className="icon icon-save-money" />
              </figure>
              <p className="service-desc">
                {t('home.values.cost_effective.desc')}
              </p>
            </a>
          </div>
          <div className="serice-type">
            <a href="#">
              <h5 className="service-header">
                {t('home.values.user_friendly.title')}
              </h5>
              <figure className="servie-icon">
                <i aria-hidden="true" className="icon icon-handshake" />
              </figure>
              <p className="service-desc">
                {t('home.values.user_friendly.desc')}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
