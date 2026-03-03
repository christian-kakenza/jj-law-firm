'use client';

import { useTranslations } from 'next-intl';
import InnerBanner from '@/components/shared/InnerBanner';
import { Link } from '@/i18n/routing';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

function AnimatedCircle({ percent }: { percent: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) setValue(percent);
  }, [inView, percent]);

  return (
    <div ref={ref} style={{ width: 120, height: 120 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathTransitionDuration: 1.5,
          textColor: '#565872',
          pathColor: '#565872',
          trailColor: '#e0e0e0',
          textSize: '20px',
        })}
      />
    </div>
  );
}

const cards = [
  { key: '1', icon: 'fas fa-award', href: '/team' },
  { key: '2', icon: 'fas fa-gavel', href: '/practice-areas', active: true },
  { key: '3', icon: 'fas fa-hand-holding-usd', href: '/contact' },
  { key: '4', icon: 'fas fa-handshake', href: '/about' },
  { key: '5', icon: 'fas fa-balance-scale', href: '/reservation' },
  { key: '6', icon: 'fas fa-user-graduate', href: '/about' },
];

const goals = [
  { percent: 97, key: '1', href: '/reservation' },
  { percent: 95, key: '2', href: '/practice-areas' },
  { percent: 98, key: '3', href: '/about' },
];

export default function FeaturesContent() {
  const t = useTranslations();

  return (
    <main id="content" className="site-main">
      <InnerBanner
        backgroundImage="/images/principal1.jpg"
      />

      {/* Feature Cards Section */}
      <section className="feature-section">
        <div className="container">
          <div className="featuer-service-content">
            {cards.map((card) => (
              <div key={card.key} className={`serice-type${card.active ? ' active' : ''}`}>
                <div className="service-card">
                  <h5 className="service-header">
                    {t(`feature_page.card_${card.key}_title`)}
                  </h5>
                  <figure className="servie-icon">
                    <i className={card.icon} />
                  </figure>
                  <p className="service-desc">
                    {t(`feature_page.card_${card.key}_desc`)}
                  </p>
                  <Link href={card.href} className="service-link">
                    <i className="fas fa-arrow-right" /> {t(`feature_page.card_${card.key}_link`)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Operation Section */}
      <section className="featuer-working-operation">
        <div className="container">
          <div className="working-operation-wrapper">
            <div className="operation-info">
              <div className="section-head">
                <h2 className="section-title">{t('feature_page.method_title')}</h2>
                <p className="section-paragraph">{t('feature_page.method_paragraph')}</p>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">9</div>
                    <div className="stat-label">{t('feature_page.stat_specializations')}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">{t('feature_page.stat_experience')}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">{t('feature_page.stat_success_rate')}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">2000+</div>
                    <div className="stat-label">{t('feature_page.stat_clients')}</div>
                  </div>
                </div>
                <div className="section-btn">
                  <Link href="/practice-areas" className="button-primary">
                    {t('feature_page.btn_specialties')}
                  </Link>
                  <Link href="/contact" className="button-secondary">
                    {t('feature_page.btn_contact')}
                  </Link>
                </div>
              </div>
            </div>
            <div className="operation-chart">
              {goals.map((goal) => (
                <div key={goal.key} className="goal-wrapper">
                  <div className="circle-progressbar-dark circle-progressbar">
                    <AnimatedCircle percent={goal.percent} />
                  </div>
                  <h5 className="goal-title">{t(`feature_page.goal_${goal.key}_title`)}</h5>
                  <span className="goal-info">{t(`feature_page.goal_${goal.key}_desc`)}</span>
                  <Link href={goal.href} className="goal-link">
                    {t(`feature_page.goal_${goal.key}_link`)}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
