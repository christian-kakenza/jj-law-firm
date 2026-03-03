import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import InnerBanner from '@/components/shared/InnerBanner';
import { generatePageMetadata } from '@/lib/metadata';
import { practiceAreas, getPracticeAreaBySlug } from '@/data/practiceAreas';
import { contactInfo } from '@/data/contactInfo';

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = await params;
  const area = getPracticeAreaBySlug(slug);

  if (!area) {
    return generatePageMetadata({
      title: locale === 'fr' ? 'Domaine non trouvé' : 'Practice Area Not Found',
      description: '',
      locale,
      path: `/practice-areas/${slug}`,
    });
  }

  const t = await getTranslations({ locale });
  const name = t(area.nameKey);

  const meta = locale === 'fr'
    ? {
        title: `${name}`,
        description: `${name} - Cabinet J&J Law Firm. Découvrez notre expertise, nos services et notre approche en ${name.toLowerCase()}.`,
      }
    : {
        title: `${name}`,
        description: `${name} - J&J Law Firm. Discover our expertise, services and approach in ${name.toLowerCase()}.`,
      };
  return generatePageMetadata({ ...meta, locale, path: `/practice-areas/${slug}` });
}

export default function PracticeAreaDetailPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const t = useTranslations();
  const area = getPracticeAreaBySlug(params.slug);

  if (!area) {
    notFound();
  }

  const prefix = area.i18nPrefix;

  // Get related practice areas (exclude current)
  const relatedAreas = practiceAreas
    .filter((pa) => pa.slug !== area.slug)
    .slice(0, 8);

  return (
    <main id="content" className="site-main">
      <InnerBanner backgroundImage={area.bannerImage} />

      <section className="practice-detail-section">
        <div className="container">
          <div className="practice-inner-detail">
            <div className="row">
              {/* Main content - 8 columns */}
              <div className="col-lg-8">
                <div className="right-sidebar">
                  <h3 className="practice-title">{t(`${prefix}.title`)}</h3>
                  <figure className="practice-img">
                    <img src={area.heroImage} alt={t(`${prefix}.title`)} />
                  </figure>
                  <p className="practice-paragraph">
                    {t(`${prefix}.intro_1`)}
                  </p>
                  <p className="practice-paragraph">
                    {t(`${prefix}.intro_2`)}
                  </p>

                  {/* Expertise section */}
                  <article className="practice-summary">
                    <h5 className="practice-summary-title">
                      {t(`${prefix}.expertise_title`)}
                    </h5>
                    <p>{t(`${prefix}.expertise_text`)}</p>

                    <div className="practical-summary-wrapper">
                      <figure className="practical-summary-img">
                        <img
                          src={area.detailImage}
                          alt={t(`${prefix}.expertise_title`)}
                        />
                      </figure>
                      <div className="practical-summary-info">
                        <p>{t(`${prefix}.approach_text`)}</p>
                        <p>{t(`${prefix}.services_title`)}</p>
                        <ul>
                          {[1, 2, 3, 4, 5].map((i) => (
                            <li key={i}>
                              <i className={area.serviceIcons[i - 1] || 'fas fa-check-circle'} />{' '}
                              {t(`${prefix}.service_${i}`)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action card */}
                    <div className="practice-action">
                      <div className="action-card">
                        <h5 className="action-title">
                          {t(`${prefix}.action_title`)}
                        </h5>
                        <p>{t(`${prefix}.action_text`)}</p>
                        <div className="action-buttons">
                          <Link
                            href="/contact"
                            className="btn btn-primary"
                          >
                            <i className="fas fa-envelope" />{' '}
                            {t(`${prefix}.action_contact`)}
                          </Link>
                          <Link
                            href="/reservation"
                            className="btn btn-secondary"
                          >
                            <i className="fas fa-calendar-check" />{' '}
                            {t(`${prefix}.action_appointment`)}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              {/* Sidebar - 4 columns */}
              <div className="col-lg-4">
                <div className="left-sidebar">
                  {/* Process accordion */}
                  <div className="widget-bg faq-widget">
                    <h5 className="bg-title">
                      {t(`${prefix}.process_title`)}
                    </h5>
                    <div id="sidebar-tab-content" className="accordion-content" role="tablist">
                      {[1, 2, 3].map((i) => {
                        const collapseIds = ['one', 'two', 'three'];
                        const accordionIds = ['A', 'B', 'C'];
                        return (
                          <div
                            key={i}
                            id={`accordion-${accordionIds[i - 1]}`}
                            className={`card tab-pane${i === 1 ? ' fade show active' : ''}`}
                            role="tabpanel"
                            aria-labelledby={`accordion-${accordionIds[i - 1]}`}
                          >
                            <div className="card-header" role="tab" id={`qus-${accordionIds[i - 1]}`}>
                              <h6 className="mb-0">
                                <a
                                  className={i > 1 ? 'collapsed' : ''}
                                  data-bs-toggle="collapse"
                                  href={`#collapse-${collapseIds[i - 1]}`}
                                  aria-expanded={i === 1}
                                  aria-controls={`collapse-${collapseIds[i - 1]}`}
                                >
                                  {t(`${prefix}.process_${i}_title`)}
                                </a>
                              </h6>
                            </div>
                            <div
                              id={`collapse-${collapseIds[i - 1]}`}
                              className={`collapse${i === 1 ? ' show' : ''}`}
                              data-bs-parent="#sidebar-tab-content"
                              role="tabpanel"
                              aria-labelledby={`qus-${accordionIds[i - 1]}`}
                            >
                              <div className="card-body">
                                {t(`${prefix}.process_${i}_desc`)}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Related practice areas */}
                  <div className="widget widget-bg icon-list-content">
                    <h5 className="bg-title">
                      {t(`${prefix}.other_practices`)}
                    </h5>
                    <ul>
                      {relatedAreas.map((ra) => (
                        <li key={ra.slug}>
                          <Link href={`/practice-areas/${ra.slug}`}>
                            <i className={ra.icon} /> {t(ra.nameKey)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sidebar contact */}
                  <div className="widget-bg sidebar-contact">
                    <div className="overlay" />
                    <h5>{t(`${prefix}.sidebar_title`)}</h5>
                    <p>{t(`${prefix}.sidebar_text`)}</p>
                    <div className="contact-options">
                      <a
                        href={`tel:${contactInfo.offices.kinshasa.phoneRaw}`}
                        className="contact-phone"
                      >
                        <i className="fas fa-phone-alt" />{' '}
                        {contactInfo.offices.kinshasa.phone}
                      </a>
                      <a
                        href={`tel:${contactInfo.offices.lubumbashi.phoneRaw}`}
                        className="contact-phone"
                      >
                        <i className="fas fa-phone-alt" />{' '}
                        {contactInfo.offices.lubumbashi.phone}
                      </a>
                      <Link href="/faq" className="btn-appointment">
                        <i className="fas fa-question-circle" />{' '}
                        {t(`${prefix}.sidebar_faq`)}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
