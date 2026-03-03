import { generatePageMetadata } from '@/lib/metadata';
import InnerBanner from '@/components/shared/InnerBanner';
import FaqQuestionForm from '@/components/forms/FaqQuestionForm';
import FaqAccordions from '@/components/shared/FaqAccordions';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'FAQ', description: 'Questions fréquemment posées sur nos services juridiques. Cabinet J&J Law Firm en RDC.' }
    : { title: 'FAQ', description: 'Frequently asked questions about our legal services. J&J Law Firm in DRC.' };
  return generatePageMetadata({ ...meta, locale, path: '/faq' });
}

const advantageItems = [
  { id: 'F', q: 'client_management', a: 'client_management_answer', collapse: 'collapse-six' },
  { id: 'G', q: 'best_advantage', a: 'best_advantage_answer', collapse: 'collapse-seven' },
  { id: 'H', q: 'affordable', a: 'affordable_answer', collapse: 'collapse-eight' },
  { id: 'I', q: 'main_objective', a: 'main_objective_answer', collapse: 'collapse-nine' },
];

export default function FaqPage() {
  const t = useTranslations();

  return (
    <main id="content" className="site-main">
      <InnerBanner
        backgroundImage="/images/principal1.jpg"
      />

      <div className="faq-page-section">
        <div className="container">
          {/* First row: FAQ accordions + Question form */}
          <div className="faq-page-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-right-info">
                  <div className="section-head">
                    <h2 className="section-title">
                      {t('faq_page.section_title')}
                    </h2>
                    <p className="section-paragraph">
                      {t('faq_page.section_paragraph')}
                    </p>
                  </div>
                  <FaqAccordions />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="qsn-form-container">
                  <div className="section-head-white text-center">
                    <h4 className="section-title">
                      {t('faq_page.form.title')}
                    </h4>
                    <p className="section-paragraph">
                      {t('faq_page.form.subtitle')}
                    </p>
                  </div>
                  <FaqQuestionForm />
                </div>
              </div>
            </div>
          </div>

          {/* Second row: Testimonial + Advantages */}
          <div className="faq-page-container">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="faq-testimonial">
                  <figure className="faq-image">
                    <div className="overlay rise-sun-patten" />
                    <img src="/images/hero-main-2.jpg" alt="" />
                  </figure>
                  <div className="testimonial-content">
                    <span className="quote-icon">
                      <i className="fas fa-quote-left" />
                    </span>
                    <p dangerouslySetInnerHTML={{ __html: t.raw('faq_page.testimonial.quote') }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content-wrap">
                  <div className="section-head">
                    <h2 className="section-title">{t('faq_page.advantages.title')}</h2>
                    <p className="section-paragraph">
                      {t('faq_page.advantages.paragraph')}
                    </p>
                  </div>
                  <div className="accordion-content" id="accordion-tab-two" role="tablist">
                    {advantageItems.map((item, idx) => (
                      <div
                        key={item.id}
                        id={`accordion-${item.id}`}
                        className={`card tab-pane${idx === 0 ? ' fade show active' : ''}`}
                        role="tabpanel"
                        aria-labelledby={`accordion-${item.id}`}
                      >
                        <div className="card-header" role="tab" id={`qus-${item.id}`}>
                          <h5 className="mb-0">
                            <a
                              className={idx > 0 ? 'collapsed' : undefined}
                              data-bs-toggle="collapse"
                              href={`#${item.collapse}`}
                              aria-expanded={idx === 0}
                              aria-controls={item.collapse}
                            >
                              {t(`faq_page.advantages.questions.${item.q}`)}
                            </a>
                          </h5>
                        </div>
                        <div
                          id={item.collapse}
                          className={`collapse${idx === 0 ? ' show' : ''}`}
                          data-bs-parent="#accordion-tab-two"
                          role="tabpanel"
                          aria-labelledby={`qus-${item.id}`}
                        >
                          <div className="card-body">
                            {t(`faq_page.advantages.questions.${item.a}`)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
