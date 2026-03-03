import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import InnerBanner from '@/components/shared/InnerBanner';
import ContactForm from '@/components/forms/ContactForm';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'Contactez-nous', description: 'Contactez le cabinet J&J Law Firm à Kinshasa ou Lubumbashi. Formulaire de contact, numéros de téléphone et adresses.' }
    : { title: 'Contact Us', description: 'Contact J&J Law Firm in Kinshasa or Lubumbashi. Contact form, phone numbers and addresses.' };
  return generatePageMetadata({ ...meta, locale, path: '/contact' });
}

export default function ContactPage() {
  const t = useTranslations();

  return (
    <main id="content" className="site-main">
      <InnerBanner
        backgroundImage="/images/principal1.jpg"
      />

      <div className="contact-page-section">
        <div className="container">
          {/* Google Map */}
          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.834586280008!2d15.3065116!3d-4.305945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3394b5b5b5b5%3A0x1a6a3394b5b5b5b5!2sKinshasa%2C%20RD%20Congo!5e0!3m2!1sfr!2s!4v1633084800000!5m2!1sfr!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="contact-form-inner">
            <div className="row">
              {/* Left Column - Contact Details */}
              <div className="col-lg-6">
                <div className="contact-detail-container">
                  <div className="section-head">
                    <h2 className="section-title">{t('contact_page.section_title')}</h2>
                    <div className="section-disc">
                      <p>{t('contact_page.section_subtitle')}</p>
                    </div>
                    <div className="cta-buttons-wrapper">
                      <div className="cta-primary">
                        <Link href="/reservation" className="btn">
                          <i className="fas fa-calendar-check" /> {t('contact_page.book_appointment_btn')}
                        </Link>
                      </div>
                      <div className="cta-secondary">
                        <Link href="/practice-areas" className="btn btn-outline-primary">
                          <i className="fas fa-balance-scale" /> {t('contact_page.our_specialties_btn')}
                        </Link>
                        <Link href="/team" className="btn btn-outline-primary">
                          <i className="fas fa-users" /> {t('contact_page.our_team_btn')}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="contact-details-list">
                    <ul>
                      {/* Phone Numbers */}
                      <li>
                        <span className="icon">
                          <i className="fas fa-phone-alt" />
                        </span>
                        <div className="details-content">
                          <h5>{t('contact_page.phone_numbers')}</h5>
                          <span>
                            <a href="tel:+243995482416" className="contact-link">
                              <i className="fas fa-building" /> {t('contact_page.head_office')} : +243 995 482 416
                            </a>
                          </span>
                          <span>
                            <a href="tel:+243810369919" className="contact-link">
                              <i className="fas fa-map-marker-alt" /> {t('contact_page.lubumbashi_office')} : +243 810 369 919
                            </a>
                          </span>
                          <span>
                            <a href="tel:+243990183829" className="contact-link">
                              <i className="fas fa-user-tie" /> {t('contact_page.master_john')} : +243 990 183 829
                            </a>
                          </span>
                          <span>
                            <a href="tel:+243815113335" className="contact-link">
                              <i className="fas fa-user-tie" /> {t('contact_page.master_olga')} : +243 815 113 335
                            </a>
                          </span>
                          <span>
                            <a href="tel:+243810648832" className="contact-link">
                              <i className="fas fa-user-tie" /> {t('contact_page.master_daniel')} : +243 810 648 832
                            </a>
                          </span>
                        </div>
                      </li>

                      {/* Office Addresses */}
                      <li>
                        <span className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </span>
                        <div className="details-content">
                          <h5>{t('contact_page.office_addresses')}</h5>
                          <div className="address-item">
                            <strong>
                              <i className="fas fa-city" /> {t('footer.kinshasa')} :
                            </strong>
                            <p>
                              <span dangerouslySetInnerHTML={{ __html: t('contact_page.kinshasa_address_full') }} />
                              <br />
                              <a
                                href="https://maps.google.com/?q=148+A+Boulevard+du+30+Juin+Gombe+Kinshasa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-link"
                              >
                                <i className="fas fa-directions" /> {t('contact_page.view_on_map')}
                              </a>
                            </p>
                          </div>
                          <div className="address-item mt-3">
                            <strong>
                              <i className="fas fa-city" /> {t('footer.lubumbashi')} :
                            </strong>
                            <p>
                              <span dangerouslySetInnerHTML={{ __html: t('contact_page.lubumbashi_address_full') }} />
                              <br />
                              <a
                                href="https://maps.google.com/?q=701+Avenue+Kasa+Vubu+Lubumbashi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-link"
                              >
                                <i className="fas fa-directions" /> {t('contact_page.view_on_map')}
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>

                      {/* Email Addresses */}
                      <li>
                        <span className="icon">
                          <i className="fas fa-envelope" />
                        </span>
                        <div className="details-content">
                          <h5>{t('contact_page.email_addresses')}</h5>
                          <span>
                            <a href="mailto:lawfirmjetj@gmail.com" className="email-link">
                              <i className="fas fa-envelope" /> lawfirmjetj@gmail.com
                            </a>
                          </span>
                          <span>
                            <a href="mailto:Jethrotshimbu@yahoo.fr" className="email-link">
                              <i className="fas fa-user-tie" /> Jethrotshimbu@yahoo.fr
                            </a>
                          </span>
                        </div>
                      </li>

                      {/* Office Hours */}
                      <li>
                        <span className="icon">
                          <i className="fas fa-clock" />
                        </span>
                        <div className="details-content">
                          <h5>{t('contact_page.hours_title')}</h5>
                          <div className="schedule-time">
                            <p>
                              <strong>{t('contact_page.hours_week')}</strong> 8h00 - 18h00
                            </p>
                            <p>
                              <strong>{t('contact_page.hours_saturday')}</strong> 9h00 - 13h00
                            </p>
                            <p>
                              <strong>{t('contact_page.hours_sunday')}</strong> {t('contact_page.closed')}
                            </p>
                            <p>
                              <small className="text-muted">{t('contact_page.by_appointment')}</small>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="col-lg-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
