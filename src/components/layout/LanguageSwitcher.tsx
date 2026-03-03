'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const switchLocale = (newLocale: 'fr' | 'en') => {
    if (newLocale === locale) {
      setOpen(false);
      return;
    }
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(fr|en)/, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <div className="language-selector" style={{ marginRight: '20px' }} ref={ref}>
      <button
        className="language-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <i className="fas fa-globe" />
        <span>{locale === 'en' ? 'ENGLISH' : 'FRANÇAIS'}</span>
        <i className="fas fa-chevron-down" />
      </button>

      <div
        className="language-dropdown"
        style={{ display: open ? 'block' : 'none' }}
      >
        <a
          href="#"
          className={`language-option ${locale === 'fr' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            switchLocale('fr');
          }}
        >
          <span>🇫🇷</span>
          <span>Français</span>
          {locale === 'fr' && <i className="fas fa-check" />}
        </a>
        <a
          href="#"
          className={`language-option ${locale === 'en' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            switchLocale('en');
          }}
        >
          <span>🇬🇧</span>
          <span>English</span>
          {locale === 'en' && <i className="fas fa-check" />}
        </a>
      </div>
    </div>
  );
}
