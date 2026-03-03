'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { contactInfo } from '@/data/contactInfo';

export default function SidebarPanel() {
  const t = useTranslations();
  const [active, setActive] = useState(false);

  return (
    <>
      {/* Trigger button - used in header */}
      <button
        className="sidebar-trigger"
        onClick={() => setActive(true)}
        aria-label="Open sidebar"
        style={{ display: 'none' }}
        id="sidebarTrigger"
      />

      <section
        className={active ? 'sidebar-section active' : 'sidebar-section'}
        id="attorneySidepannel"
      >
        <div className="sidebar-content" id="attorneySidepannelchild">
          <div className="sidebar-close-section">
            <button className="close-btn" onClick={() => setActive(false)}>
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Attorney Profile */}
          <div className="sub-section-detail attorney-profile">
            <h6 className="head-title">{t('team.head_of_cabinet')}</h6>
            <figure className="attorney-image">
              <img
                src="/images/attorney-jethro-formal.png"
                alt="Maître Jethro Muyombi Tshimbu"
              />
            </figure>
            <h5 className="attorney-name">Jethro Muyombi Tshimbu</h5>
            <p className="attorney-position text-primary">
              {t('team.managing_partner')}
            </p>
            <p className="attorney-description">{t('team.jethro_bio')}</p>

            {/* Specializations */}
            <div className="specializations-box">
              <h6 className="section-subtitle">
                {t('team.expertise_areas')} :
              </h6>
              <ul className="expertise-items">
                <li>
                  <i className="fas fa-gavel" /> {t('team.expertise_economic')}
                </li>
                <li>
                  <i className="fas fa-balance-scale" />{' '}
                  {t('team.expertise_ohada')}
                </li>
                <li>
                  <i className="fas fa-mountain" />{' '}
                  {t('team.expertise_mining')}
                </li>
                <li>
                  <i className="fas fa-briefcase" />{' '}
                  {t('team.expertise_corporate')}
                </li>
                <li>
                  <i className="fas fa-landmark" />{' '}
                  {t('team.expertise_agricultural')}
                </li>
              </ul>
            </div>

            {/* Direct contact */}
            <div className="direct-contact">
              <a
                href="mailto:Jethrotshimbu@yahoo.fr"
                className="btn btn-outline-primary btn-sm btn-block"
              >
                <i className="fas fa-envelope" /> {t('team.send_email')}
              </a>
              <a
                href={`tel:${contactInfo.offices.lubumbashi.phoneRaw}`}
                className="btn btn-outline-success btn-sm btn-block mt-2"
              >
                <i className="fas fa-phone" /> {t('team.call_now')}
              </a>
            </div>
          </div>

          {/* Firm Info */}
          <div className="sub-section-detail cabinet-info">
            <h6 className="head-title">{t('team.our_firm')}</h6>
            <p className="tagline">
              <em>{t('team.tagline')}</em>
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="contact-text">
                  <strong>{t('footer.kinshasa')} :</strong>
                  <br />
                  {t('footer.kinshasa_address')}
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="contact-text">
                  <strong>{t('footer.lubumbashi')} :</strong>
                  <br />
                  {t('footer.lubumbashi_address')}
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="contact-text">
                  <strong>{t('header.phone')} :</strong>
                  <br />
                  <a
                    href={`tel:${contactInfo.offices.kinshasa.phoneRaw}`}
                    className="phone-link"
                  >
                    {contactInfo.offices.kinshasa.phone}
                  </a>
                  <br />
                  <a
                    href={`tel:${contactInfo.offices.lubumbashi.phoneRaw}`}
                    className="phone-link"
                  >
                    {contactInfo.offices.lubumbashi.phone}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="contact-text">
                  <strong>Email :</strong>
                  <br />
                  <a href={`mailto:${contactInfo.firm.email}`}>
                    {contactInfo.firm.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="languages-section">
              <h6 className="section-subtitle">{t('team.languages')} :</h6>
              <div className="language-tags">
                {contactInfo.languages.map((lang) => (
                  <span key={lang} className="badge">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="sidebar-action">
            <Link href="/reservation" className="btn btn-primary btn-block">
              <i className="fas fa-calendar-check" />{' '}
              {t('team.book_appointment')}
            </Link>
            <p className="text-center mt-2">
              <Link href="/team/jethro" className="text-muted small">
                {t('team.view_full_profile')}{' '}
                <i className="fas fa-arrow-right" />
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
