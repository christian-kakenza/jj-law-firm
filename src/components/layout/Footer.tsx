'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { contactInfo } from '@/data/contactInfo';
import NewsletterForm from '@/components/forms/NewsletterForm';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer id="colophon" className="site-footer">
      <div className="top-footer">
        <div className="footer-overlay overlay" />
        <div className="container">
          <div className="row">
            {/* Column 1 - Firm info */}
            <div className="col-lg-4 col-sm-6">
              <aside className="widget widget_text img-textwidget primary-bg">
                <div className="footer-logo">
                  <Link href="/">
                    <img
                      src="/images/jj-logo-white.svg"
                      alt="J&J Law Firm Logo"
                    />
                  </Link>
                </div>
                <div className="textwidget widget-text">
                  {t('footer.description')}
                </div>
                <div className="footer-locate-link">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      <span className="locate-txt">
                        <strong>{t('footer.kinshasa')} :</strong>
                        <br />
                        {t('footer.kinshasa_address')}
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      <span className="locate-txt">
                        <strong>{t('footer.lubumbashi')} :</strong>
                        <br />
                        {t('footer.lubumbashi_address')}
                      </span>
                    </li>
                    <li>
                      <a href={`tel:${contactInfo.offices.kinshasa.phoneRaw}`}>
                        <i className="fas fa-phone-alt" />
                        <span className="locate-txt">
                          {t('header.phone')} ({t('footer.head_office')})
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${contactInfo.offices.lubumbashi.phoneRaw}`}>
                        <i className="fas fa-phone-alt" />
                        <span className="locate-txt">
                          {contactInfo.offices.lubumbashi.phone} ({t('footer.branch_office')})
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${contactInfo.firm.email}`}>
                        <i className="fas fa-envelope" />
                        <span className="locate-txt">
                          {contactInfo.firm.email}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>

            {/* Column 2 - Navigation */}
            <div className="col-lg-2 col-sm-6">
              <aside className="widget">
                <h5 className="widget-title">{t('footer.navigation')}</h5>
                <ul className="widget-underline">
                  <li>
                    <Link href="/">{t('header.home')}</Link>
                  </li>
                  <li>
                    <Link href="/about">{t('header.about')}</Link>
                  </li>
                  <li>
                    <Link href="/practice-areas">
                      {t('services.all_services')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">{t('team.our_team')}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{t('header.contact')}</Link>
                  </li>
                  <li>
                    <Link href="/faq">{t('header.faq')}</Link>
                  </li>
                </ul>
              </aside>
            </div>

            {/* Column 3 - Key services */}
            <div className="col-lg-2 col-sm-6">
              <aside className="widget">
                <h5 className="widget-title">{t('footer.key_services')}</h5>
                <ul>
                  <li>
                    <Link href="/practice-areas/mining">
                      {t('services.mining')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/practice-areas/ohada">
                      {t('services.ohada')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/practice-areas/insurance">
                      {t('services.insurance')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/practice-areas/real-estate">
                      {t('services.real_estate')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/practice-areas/agricultural">
                      {t('services.agricultural')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/practice-areas/family-law">
                      {t('services.family')}
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>

            {/* Column 4 - Newsletter */}
            <div className="col-lg-4 col-sm-6">
              <aside className="widget news-widget">
                <h5 className="widget-title">{t('footer.newsletter')}</h5>
                <div className="textwidget widget-text">
                  {t('footer.newsletter_desc')}
                </div>

                <NewsletterForm
                  placeholder={t('footer.email_placeholder')}
                  submitLabel={t('footer.subscribe')}
                />

                {/* Social links */}
                <div className="footer-social-links">
                  <p>{t('footer.follow_us')} :</p>
                  <ul>
                    <li>
                      <a
                        href={contactInfo.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={contactInfo.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={contactInfo.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={contactInfo.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp"
                      >
                        <i className="fab fa-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bottom-footer">
        <div className="container">
          <div className="copy-right" dangerouslySetInnerHTML={{
            __html: `${t('footer.copyright_full')} ${new Date().getFullYear()} <strong>J&J LAW FIRM</strong>. ${t('footer.all_rights_reserved')}`
          }} />
          <div
            className="built-by"
            dangerouslySetInnerHTML={{
              __html: `${t('footer.built_by')} <a href="https://ngeni-webapp.vercel.app/fr" target="_blank" rel="noopener noreferrer">Ngeni.AI</a>`
            }}
          />
        </div>
      </div>
    </footer>
  );
}
