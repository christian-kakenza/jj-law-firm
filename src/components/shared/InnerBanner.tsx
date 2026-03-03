import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface InnerBannerProps {
  backgroundImage?: string;
  titleKey?: string;
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function InnerBanner({
  backgroundImage = '/images/principal1.jpg',
  titleKey,
  title,
  breadcrumbs,
}: InnerBannerProps) {
  const t = useTranslations();
  const displayTitle = titleKey ? t(titleKey) : title;

  return (
    <section className="inner-banner-wrap">
      <div
        className="inner-baner-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay balance-patten" />
        <div className="container">
          <div className="inner-banner-content">
            {displayTitle && (
              <h1 className="inner-title">{displayTitle}</h1>
            )}
            {breadcrumbs && (
              <div className="trial-breadcrumb">
                <ul className="breadcrumb">
                  {breadcrumbs.map((crumb, idx) => (
                    <li key={idx} className="breadcrumb-item">
                      {crumb.href ? (
                        <Link href={crumb.href}>{crumb.label}</Link>
                      ) : (
                        <span>{crumb.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
