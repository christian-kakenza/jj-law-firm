'use client';

import { useTranslations } from 'next-intl';

const categoryIcons: Record<string, string> = {
  strategic: 'fas fa-chess-knight',
  litigation: 'fas fa-gavel',
  sectoral: 'fas fa-industry',
  tailored: 'fas fa-cogs',
};

const serviceEmojis: Record<string, string> = {
  fundamental: '📋',
  litigation: '⚖️',
  sectoral: '🏢',
  complementary: '🛡️',
};

export default function FaqAccordions() {
  const t = useTranslations();

  return (
    <div className="accordion-content" id="accordion-tab-one" role="tablist">
      {/* Mission */}
      <div id="accordion-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="accordion-A">
        <div className="card-header" role="tab" id="qus-A">
          <h5 className="mb-0">
            <a
              data-bs-toggle="collapse"
              href="#collapse-one"
              aria-expanded="true"
              aria-controls="collapse-one"
            >
              {t('faq_page.mission.title')}
            </a>
          </h5>
        </div>
        <div
          id="collapse-one"
          className="collapse show"
          data-bs-parent="#accordion-tab-one"
          role="tabpanel"
          aria-labelledby="qus-A"
        >
          <div className="card-body">
            <p className="mission-statement">{t('faq_page.mission.statement')}</p>
            <p className="mission-subtitle">{t('faq_page.mission.subtitle')}</p>
            <ul className="mission-objectives">
              {(t.raw('faq_page.mission.objectives') as string[]).map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Offer */}
      <div id="accordion-B" className="card tab-pane" role="tabpanel" aria-labelledby="accordion-B">
        <div className="card-header" role="tab" id="qus-B">
          <h5 className="mb-0">
            <a
              className="collapsed"
              data-bs-toggle="collapse"
              href="#collapse-two"
              aria-expanded="false"
              aria-controls="collapse-two"
            >
              {t('faq_page.offer.title')}
            </a>
          </h5>
        </div>
        <div
          id="collapse-two"
          className="collapse"
          data-bs-parent="#accordion-tab-one"
          role="tabpanel"
          aria-labelledby="qus-B"
        >
          <div className="card-body">
            <p className="service-intro">{t('faq_page.offer.intro')}</p>
            {(['strategic', 'litigation', 'sectoral', 'tailored'] as const).map((cat) => (
              <div key={cat} className="service-category">
                <h6><i className={categoryIcons[cat]} /> {t(`faq_page.offer.categories.${cat}`)}</h6>
                <ul className="service-list">
                  {(t.raw(`faq_page.offer.${cat}_list`) as string[]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div id="accordion-C" className="card tab-pane" role="tabpanel" aria-labelledby="accordion-C">
        <div className="card-header" role="tab" id="qus-C">
          <h5 className="mb-0">
            <a
              className="collapsed"
              data-bs-toggle="collapse"
              href="#collapse-three"
              aria-expanded="false"
              aria-controls="collapse-three"
            >
              {t('faq_page.process.title')}
            </a>
          </h5>
        </div>
        <div
          id="collapse-three"
          className="collapse"
          data-bs-parent="#accordion-tab-one"
          role="tabpanel"
          aria-labelledby="qus-C"
        >
          <div className="card-body">
            <p className="process-intro">{t('faq_page.process.intro')}</p>
            <div className="process-steps">
              {(t.raw('faq_page.process.steps') as Array<{ number: string; title: string; subtitle: string; details: string[] }>).map((step) => (
                <div key={step.number} className="process-step">
                  <div className="step-header">
                    <span className="step-number">{step.number}</span>
                    <span className="step-title">{step.title}</span>
                    <span className="step-subtitle">{step.subtitle}</span>
                  </div>
                  <ul className="step-details">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Detail */}
      <div id="accordion-D" className="card tab-pane" role="tabpanel" aria-labelledby="accordion-D">
        <div className="card-header" role="tab" id="qus-D">
          <h5 className="mb-0">
            <a
              className="collapsed"
              data-bs-toggle="collapse"
              href="#collapse-four"
              aria-expanded="false"
              aria-controls="collapse-four"
            >
              {t('faq_page.services_detail.title')}
            </a>
          </h5>
        </div>
        <div
          id="collapse-four"
          className="collapse"
          data-bs-parent="#accordion-tab-one"
          role="tabpanel"
          aria-labelledby="qus-D"
        >
          <div className="card-body">
            <p className="services-intro">{t('faq_page.services_detail.intro')}</p>
            <div className="service-categories">
              {(['fundamental', 'litigation', 'sectoral', 'complementary'] as const).map((cat) => (
                <div key={cat} className="service-category">
                  <div className="category-header">
                    <div className="category-icon">{serviceEmojis[cat]}</div>
                    <h5 className="category-title">{t(`faq_page.services_detail.${cat}.title`)}</h5>
                  </div>
                  <ul className="service-list">
                    {(t.raw(`faq_page.services_detail.${cat}.items`) as Array<{ name: string; desc: string }>).map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.name}</strong> :{' '}
                        <span className="service-desc">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
