'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

function AnimatedCircle({
  percent,
  color,
  emptyColor,
}: {
  percent: number;
  color: string;
  emptyColor: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setValue(percent), 100);
      return () => clearTimeout(timer);
    }
  }, [inView, percent]);

  return (
    <div ref={ref} className="circle-progressbar" style={{ width: 105, height: 105 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: color,
          trailColor: emptyColor,
          pathTransitionDuration: 2.5,
          strokeLinecap: 'round',
        })}
        strokeWidth={4}
      />
    </div>
  );
}

export default function ScheduleSection({ className = '' }: { className?: string }) {
  const t = useTranslations();

  const isAbout = className.includes('about-schedule');
  const isPracticeArea = className.includes('practice-area-schedule');
  const sectionHeadClass = (isAbout || isPracticeArea) ? 'section-head' : 'section-head-white';

  return (
    <section className={`home-schedule${className ? ' ' + className : ''}`}>
      <div className="overlay gradient-overlay" />
      <div className="container">
        <div className="schedule-wrapper">
          {/* Right side - Schedule info */}
          <div className="right-side-schedule">
            {!isAbout && !isPracticeArea && <div className="overlay balance-patten" />}
            <aside className={sectionHeadClass}>
              <h2 className="section-title">
                {isPracticeArea ? t('practice_area.schedule.title') : t('home.schedule.title')}
              </h2>
              <p className="section-paragraph">
                {isPracticeArea ? t('practice_area.schedule.subtitle') : t('home.schedule.subtitle')}
              </p>

              <div className="timenote">
                <div className="schedule-time">
                  <ul>
                    <li>
                      <h6>{isPracticeArea ? t('practice_area.schedule.hours.weekdays') : t('home.schedule.hours.weekdays')}</h6>
                    </li>
                    <li>
                      <h6>{isPracticeArea ? t('practice_area.schedule.hours.hours') : t('home.schedule.hours.hours')}</h6>
                    </li>
                    <li>
                      <h6>{isPracticeArea ? t('practice_area.schedule.hours.closed') : t('home.schedule.hours.closed')}</h6>
                    </li>
                  </ul>
                </div>
                <div className="note-list">
                  <ul>
                    {isPracticeArea ? (
                      <>
                        <li>
                          <i aria-hidden="true" className="fas fa-check" />
                          <span>{t('practice_area.schedule.expertise_list.business')}</span>
                        </li>
                        <li>
                          <i aria-hidden="true" className="fas fa-check" />
                          <span>{t('practice_area.schedule.expertise_list.mining')}</span>
                        </li>
                        <li>
                          <i aria-hidden="true" className="fas fa-check" />
                          <span>{t('practice_area.schedule.expertise_list.labor')}</span>
                        </li>
                        <li>
                          <i aria-hidden="true" className="fas fa-check" />
                          <span>{t('practice_area.schedule.expertise_list.family')}</span>
                        </li>
                        <li>
                          <i aria-hidden="true" className="fas fa-check" />
                          <span>{t('practice_area.schedule.expertise_list.public')}</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <i aria-hidden="true" className="far fa-check-square" />
                          <span>{t('home.schedule.commitments.client')}</span>
                        </li>
                        <li>
                          <i aria-hidden="true" className="far fa-check-square" />
                          <span>{t('home.schedule.commitments.strategic')}</span>
                        </li>
                        <li>
                          <i aria-hidden="true" className="far fa-check-square" />
                          <span>{t('home.schedule.commitments.integrity')}</span>
                        </li>
                        <li>
                          <i aria-hidden="true" className="far fa-check-square" />
                          <span>{t('home.schedule.commitments.navigate')}</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <div className="schedule-btn">
                {isPracticeArea ? (
                  <>
                    <Link href="/reservation" className="button-primary">
                      <i aria-hidden="true" className="fas fa-calendar-check" />{' '}
                      {t('practice_area.schedule.cta.appointment')}
                    </Link>
                    <Link href="/contact" className="button-secondary ml-3">
                      <i aria-hidden="true" className="fas fa-envelope" />{' '}
                      {t('practice_area.schedule.cta.contact')}
                    </Link>
                  </>
                ) : isAbout ? (
                  <Link href="/contact" className="button-primary">
                    {t('common.hire_us_now')}
                  </Link>
                ) : (
                  <Link href="/reservation" className="button-primary">
                    {t('home.schedule.cta')}
                  </Link>
                )}
              </div>
            </aside>
          </div>

          {/* Left side - Circle progress bars */}
          <div className="left-side-shedule">
            <div className="goal-wrapper">
              <div className="circle-progressbar-yellow">
                <AnimatedCircle
                  percent={95}
                  color="#EB9601"
                  emptyColor="#f1f1f1"
                />
              </div>
              <h5 className="goal-title">{t('home.schedule.legal_solution')}</h5>
            </div>
            <div className="goal-wrapper">
              <div className="circle-progressbar-white">
                <AnimatedCircle
                  percent={98}
                  color="#FFFFFF"
                  emptyColor="#a7a7a7"
                />
              </div>
              <h5 className="goal-title">{t('home.schedule.project_success')}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
