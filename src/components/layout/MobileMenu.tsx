'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/data/navigation';
import { contactInfo } from '@/data/contactInfo';

export default function MobileMenu() {
  const t = useTranslations();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubs, setOpenSubs] = useState<Record<number, boolean>>({});

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenSubs({});
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleSub = (index: number) => {
    setOpenSubs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="mobile-menu-container">
      <div className="slicknav_menu">
        {/* Hamburger button — centered in header */}
        <button
          className={`mobile-hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Overlay */}
        <div
          className={`mobile-overlay${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <nav className={`mobile-nav-panel${menuOpen ? ' active' : ''}`}>
          {/* Panel header */}
          <div className="mobile-nav-header">
            <img src="/images/jj-logo-white.svg" alt="J&J" className="mobile-nav-logo" />
            <button
              className="mobile-nav-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Navigation links */}
          <ul className="mobile-nav-list">
            {mainNavigation.map((item, idx) => (
              <li key={idx} className={`mobile-nav-item${item.children ? ' has-children' : ''}`}>
                {item.children ? (
                  <>
                    <button
                      className="mobile-nav-link mobile-nav-parent"
                      onClick={() => toggleSub(idx)}
                    >
                      <span>{t(item.labelKey)}</span>
                      <i className={`fas fa-chevron-${openSubs[idx] ? 'up' : 'down'} mobile-nav-arrow`} />
                    </button>
                    <ul className={`mobile-sub-menu${openSubs[idx] ? ' open' : ''}`}>
                      {item.children.map((child, cidx) => (
                        <li key={cidx}>
                          <Link
                            href={child.href}
                            className={`mobile-sub-link${child.highlight ? ' highlight' : ''}`}
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.highlight && <i className="fas fa-th-list" style={{ marginRight: 8 }} />}
                            {t(child.labelKey)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(item.labelKey)}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Panel footer — contact info */}
          <div className="mobile-nav-footer">
            <a href={`tel:${contactInfo.offices.kinshasa.phoneRaw}`} className="mobile-nav-cta">
              <i className="fas fa-phone-alt" />
              <span>{contactInfo.offices.kinshasa.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.firm.email}`} className="mobile-nav-cta">
              <i className="fas fa-envelope" />
              <span>{contactInfo.firm.email}</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
