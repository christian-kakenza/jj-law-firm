'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Slider from 'react-slick';
import { Link } from '@/i18n/routing';

const testimonials = [
  {
    textKey: 'home.team.testimonials.jethro',
    nameKey: 'team.master_jethro',
    roleKey: 'team.managing_partner',
    image: '/images/attorney-jethro-thumb.jpg',
    link: '/team/jethro',
  },
  {
    textKey: 'home.team.testimonials.john',
    nameKey: 'team.master_ngoy',
    roleKey: 'team.partner',
    image: '/images/attorney-john-thumb.jpg',
    link: '/team/john',
  },
  {
    textKey: 'home.team.testimonials.mizou',
    nameKey: 'team.master_mizou',
    roleKey: 'team.associate',
    image: '/images/attorney-mizou-thumb.jpg',
    link: '/team/mizou',
  },
] as const;

export default function TestimonialSlider() {
  const t = useTranslations();
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      setSlidesToShow(window.innerWidth >= 992 ? 2 : 1);
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1200,
    slidesToShow,
    slidesToScroll: 1,
    adaptiveHeight: false,
    variableWidth: false,
    centerMode: false,
    arrows: false,
  };

  return (
    <section className="home-testimonial-section">
      <div className="container">
        <div className="home-testimonial-wrapper">
          <div className="section-head">
            <h2 className="section-title">{t('home.team.title')}</h2>
            <p className="section-paragraph">{t('home.team.subtitle')}</p>
            <Link href="/team" className="testimonial-btn button-primary">
              {t('common.discover_full_team')}
            </Link>
          </div>
          <div className="review-slider-wrapper">
            <div className="testimonial-slider">
              <Slider {...sliderSettings}>
                {testimonials.map((item, idx) => (
                  <div key={idx} className="home-testimonial-content">
                    <div className="testimonila-detail">
                      <figure className="testimonila-icon">
                        <i aria-hidden="true" className="icon icon-quote2" />
                      </figure>
                      <p>{t(item.textKey)}</p>
                    </div>
                    <div className="author-detail">
                      <figure className="author-img">
                        <Link href={item.link}>
                          <img src={item.image} alt={t(item.nameKey)} />
                        </Link>
                      </figure>
                      <div className="author-info">
                        <h5 className="author-name">
                          <Link href={item.link}>{t(item.nameKey)}</Link>
                        </h5>
                        <span className="author-desc">{t(item.roleKey)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
