'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useRef, useEffect } from 'react';

const serviceRouteMap: Record<string, string> = {
  '/practice-area-mines': '/practice-areas/mining',
  '/practice-area-corporatif': '/practice-areas/agricultural',
  '/practice-area-transport': '/practice-areas/transport',
  '/practice-area-immobilier': '/practice-areas/real-estate',
  '/practice-area-pret-prive': '/practice-areas/banking',
};

const clientKeys = [
  { nameKey: 'testimonials.client1.name', locationKey: 'testimonials.client1.location', testimonialKey: 'testimonials.client1.testimonial', serviceKey: 'testimonials.client1.service', serviceLinkKey: 'testimonials.client1.service_link', stars: 5 },
  { nameKey: 'testimonials.client2.name', locationKey: 'testimonials.client2.location', testimonialKey: 'testimonials.client2.testimonial', serviceKey: 'testimonials.client2.service', serviceLinkKey: 'testimonials.client2.service_link', stars: 5 },
  { nameKey: 'testimonials.client3.name', locationKey: 'testimonials.client3.location', testimonialKey: 'testimonials.client3.testimonial', serviceKey: 'testimonials.client3.service', serviceLinkKey: 'testimonials.client3.service_link', stars: 5 },
  { nameKey: 'testimonials.client4.name', locationKey: 'testimonials.client4.location', testimonialKey: 'testimonials.client4.testimonial', serviceKey: 'testimonials.client4.service', serviceLinkKey: 'testimonials.client4.service_link', stars: 4 },
  { nameKey: 'testimonials.client5.name', locationKey: 'testimonials.client5.location', testimonialKey: 'testimonials.client5.testimonial', serviceKey: 'testimonials.client5.service', serviceLinkKey: 'testimonials.client5.service_link', stars: 5 },
] as const;

function StarRating({ count }: { count: number }) {
  return (
    <div className="rating">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </div>
  );
}

export default function ClientTestimonialsCarousel() {
  const t = useTranslations();
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate items for infinite scroll effect
    const items = Array.from(track.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });
  }, []);

  return (
    <section className="testimonials-carousel-section">
      <div className="container">
        <div className="section-head col-md-8 offset-md-2 text-center">
          <h2 className="section-title">{t('home.testimonials.title')}</h2>
          <p className="section-paragraph">
            {t('home.testimonials.subtitle')}
          </p>
        </div>

        <div
          className="testimonials-wrapper"
          onMouseEnter={() => {
            if (trackRef.current)
              trackRef.current.style.animationPlayState = 'paused';
          }}
          onMouseLeave={() => {
            if (trackRef.current)
              trackRef.current.style.animationPlayState = 'running';
          }}
          onTouchStart={() => {
            if (trackRef.current)
              trackRef.current.style.animationPlayState = 'paused';
          }}
          onTouchEnd={() => {
            if (trackRef.current)
              trackRef.current.style.animationPlayState = 'running';
          }}
        >
          <div className="testimonials-track" ref={trackRef}>
            {clientKeys.map((client, idx) => {
              const oldLink = t(client.serviceLinkKey);
              const newHref = serviceRouteMap[oldLink] || '/practice-areas';
              return (
                <div key={idx} className="testimonial-item">
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="client-info">
                        <h4>{t(client.nameKey)}</h4>
                        <span className="client-location">
                          {t(client.locationKey)}
                        </span>
                      </div>
                      <StarRating count={client.stars} />
                    </div>
                    <div className="testimonial-body">
                      <p>&quot;{t(client.testimonialKey)}&quot;</p>
                    </div>
                    <div className="testimonial-footer">
                      <Link href={newHref} className="service-type-link">
                        <span className="service-type">
                          {t(client.serviceKey)}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
