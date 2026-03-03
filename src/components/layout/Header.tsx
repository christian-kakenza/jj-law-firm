'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { useEffect } from 'react';
import { mainNavigation } from '@/data/navigation';
import { contactInfo } from '@/data/contactInfo';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import SidebarPanel from './SidebarPanel';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const isHomepage = /^\/[a-z]{2}\/?$/.test(pathname);

  useEffect(() => {
    const header = document.getElementById('masthead');
    if (header) {
      const h = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    }

    // Sticky header on scroll
    const handleScroll = () => {
      const masthead = document.getElementById('masthead');
      const bottomHeader = document.querySelector('.bottom-header') as HTMLElement;
      if (!masthead || !bottomHeader) return;

      const headerHeight = bottomHeader.offsetHeight;

      if (window.innerWidth >= 992) {
        if (window.scrollY > headerHeight) {
          masthead.classList.add('fixed-header');
        } else {
          masthead.classList.remove('fixed-header');
        }
      } else {
        const fullHeight = headerHeight * 2;
        if (window.scrollY > fullHeight) {
          masthead.classList.add('fixed-header');
        } else {
          masthead.classList.remove('fixed-header');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`site-header site-header-transparent${isHomepage ? '' : ' top-header-other-page'}`}
      id="masthead"
    >
      {/* Top header */}
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 d-flex justify-content-between align-items-center">
              {/* FAQ & Legal links */}
              <div
                className="legal-list"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                  marginLeft: '20px',
                }}
              >
                <Link
                  href="/faq"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {t('header.faq')}
                </Link>
                <Link
                  href="/legal-notice"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {t('header.legal')}
                </Link>
              </div>

              {/* Language selector */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bottom-header">
        <div className="container">
          <div className="hb-group d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="site-identity col-lg-2">
              <p className="site-title">
                <Link href="/">
                  <img
                    src="/images/jj-logo-white.svg"
                    alt="J&J Law Firm Logo"
                  />
                </Link>
              </p>
            </div>

            {/* Desktop Navigation */}
            <div className="main-navigation col-lg-10 justify-content-end d-flex align-items-center">
              <nav
                id="navigation"
                className="navigation d-none d-lg-inline-block"
              >
                <ul>
                  {mainNavigation.map((item, idx) => (
                    <li
                      key={idx}
                      className={
                        item.children ? 'menu-item-has-children' : ''
                      }
                    >
                      {item.children ? (
                        <>
                          <a href="#">{t(item.labelKey)}</a>
                          <ul>
                            {item.children.map((child, cidx) => (
                              <li
                                key={cidx}
                                className={
                                  cidx === 0 && child.highlight
                                    ? ''
                                    : cidx === 1
                                    ? 'submenu-divider'
                                    : ''
                                }
                              >
                                <Link
                                  href={child.href}
                                  style={
                                    child.highlight
                                      ? {
                                          backgroundColor: '#565872',
                                          color: 'white',
                                          display: 'block',
                                          padding: '10px 20px',
                                        }
                                      : undefined
                                  }
                                >
                                  {t(child.labelKey)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link href={item.href}>{t(item.labelKey)}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Phone CTA */}
              <div className="bottom-sub-menu d-flex align-items-center">
                <div className="header-contact-info">
                  <a href={`tel:${contactInfo.offices.kinshasa.phoneRaw}`}>
                    <div className="header-contact-inner">
                      <span className="icon">
                        <i className="fas fa-phone-alt" />
                      </span>
                      <div className="details-content">
                        <span className="content-title">
                          {t('header.talk_to_expert')}
                        </span>
                        <h6>{t('header.phone')}</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu (hamburger below header bar, centered) */}
        <MobileMenu />
      </div>

      {/* Sidebar attorney panel */}
      <SidebarPanel />
    </header>
  );
}
