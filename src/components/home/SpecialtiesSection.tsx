import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function SpecialtiesSection() {
  const t = useTranslations();

  return (
    <section className="home-legal-area">
      <div className="container">
        <div className="top-section-head text-center col-lg-8 offset-lg-2">
          <h2 className="section-title">{t('home.specialties.title')}</h2>
          <p className="section-paragraph">
            {t('home.specialties.subtitle')}
          </p>
        </div>

        <div className="legal-area-list">
          {/* Droit Minier */}
          <div className="legal-area-detail">
            <figure className="area-img">
              <img src="/images/droitMinier2Update.jpg" alt={t('services.mining')} />
            </figure>
            <div className="area-content-wrapper">
              <div className="area-detail">
                <h5 className="role-title">{t('home.specialties.mining')}</h5>
                <span className="area-role-btn">
                  <Link href="/practice-areas/mining">
                    {t('home.specialties.learn_more')}{' '}
                    <i aria-hidden="true" className="icon icon-arrow-right" />
                  </Link>
                </span>
              </div>
              <div className="legal-area-icon">
                <i aria-hidden="true" className="fas fa-hard-hat" />
              </div>
            </div>
          </div>

          {/* Droit de la Famille */}
          <div className="legal-area-detail item-3">
            <figure className="area-img">
              <img src="/images/familyUpdate.jpg" alt={t('services.family')} />
            </figure>
            <div className="area-content-wrapper">
              <div className="area-detail">
                <h5 className="role-title">{t('home.specialties.family')}</h5>
                <span className="area-role-btn">
                  <Link href="/practice-areas/family-law">
                    {t('home.specialties.learn_more')}{' '}
                    <i aria-hidden="true" className="icon icon-arrow-right" />
                  </Link>
                </span>
              </div>
              <div className="legal-area-icon">
                <i aria-hidden="true" className="fas fa-heart" />
              </div>
            </div>
          </div>

          {/* Droit OHADA */}
          <div className="legal-area-detail">
            <figure className="area-img">
              <img src="/images/ohada1.jpg" alt={t('services.ohada')} />
            </figure>
            <div className="area-content-wrapper">
              <div className="area-detail">
                <h5 className="role-title">{t('services.ohada')}</h5>
                <span className="area-role-btn">
                  <Link href="/practice-areas/ohada">
                    {t('home.specialties.learn_more')}{' '}
                    <i aria-hidden="true" className="icon icon-arrow-right" />
                  </Link>
                </span>
              </div>
              <div className="legal-area-icon">
                <i aria-hidden="true" className="fas fa-gavel" />
              </div>
            </div>
          </div>
        </div>

        <div className="legal-area-btn text-center">
          <Link href="/practice-areas" className="button-primary">
            {t('common.other_practice_areas')}
          </Link>
        </div>
      </div>
    </section>
  );
}
