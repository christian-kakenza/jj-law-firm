'use client';

import { useTranslations } from 'next-intl';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { end: 320, suffix: '+', labelKey: 'home.expertise.stats.projects' },
  { end: 20, suffix: '+', labelKey: 'home.expertise.stats.awards' },
  { end: 5, suffix: '+', labelKey: 'home.expertise.stats.offices' },
  { end: 2000, suffix: '+', labelKey: 'home.expertise.stats.clients' },
] as const;

export default function CounterSection() {
  const t = useTranslations();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="home-service" ref={ref}>
      <div className="overlay balance-patten" />
      <div className="container">
        <div className="home-service-wrapper">
          <div className="service-left">
            <div className="fact-inner-box">
              <div className="fact-content top-left-content">
                <i aria-hidden="true" className="fas fa-user-graduate" />
                <h5>{t('home.expertise.title')}</h5>
              </div>
              <figure className="fact-image top-right-image" />
              <figure className="fact-image bottom-left-image" />
              <div className="fact-content bottom-right-content">
                <i aria-hidden="true" className="icon icon-idea1" />
                <h5>{t('home.expertise.subtitle')}</h5>
              </div>
            </div>
          </div>

          <div className="service-right">
            <div className="section-head-white">
              <h2 className="section-title">
                {t('home.expertise.section_title')}
              </h2>
              <p className="section-paragraph">
                {t('home.expertise.section_subtitle')}
              </p>
            </div>

            <div className="counter-inner-two-side">
              <div className="row">
                {stats.map((stat, idx) => (
                  <div key={idx} className="counter-item col-6">
                    <div className="counter-no">
                      <span className="counter">
                        {inView ? (
                          <CountUp end={stat.end} duration={2.5} />
                        ) : (
                          stat.end
                        )}
                      </span>
                      {stat.suffix}
                    </div>
                    <div className="Completed">
                      {t(stat.labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
