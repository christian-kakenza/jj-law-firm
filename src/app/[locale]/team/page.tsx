import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import { Link } from '@/i18n/routing';
import InnerBanner from '@/components/shared/InnerBanner';
import { attorneys } from '@/data/attorneys';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = locale === 'fr'
    ? { title: 'Notre Équipe', description: 'Rencontrez les avocats du cabinet J&J Law Firm. 7 avocats expérimentés à Kinshasa et Lubumbashi.' }
    : { title: 'Our Team', description: 'Meet the lawyers of J&J Law Firm. 7 experienced attorneys in Kinshasa and Lubumbashi.' };
  return generatePageMetadata({ ...meta, locale, path: '/team' });
}

const positionKeys: Record<string, string[]> = {
  jethro: ['attorney_page.positions.managing_partner', 'attorney_page.positions.economic_social'],
  mizou: ['attorney_page.positions.partner', 'attorney_page.positions.ohada_international'],
  john: ['attorney_page.positions.partner', 'attorney_page.positions.economic_social'],
  olga: ['attorney_page.positions.associate', 'attorney_page.positions.private_judicial'],
  daniel: ['attorney_page.positions.associate', 'attorney_page.positions.private_judicial'],
  emmanuel: ['attorney_page.positions.associate', 'attorney_page.positions.family_civil'],
  seraphin: ['attorney_page.positions.associate', 'attorney_page.positions.public_criminology'],
};

export default function TeamPage() {
  const t = useTranslations();

  return (
    <main id="content" className="site-main">
      <InnerBanner
        backgroundImage="/images/principal1.jpg"
      />

      <div className="team-section">
        <div className="container">
          <div className="attorney-team-wrapper">
            {attorneys.map((attorney) => {
              const positions = positionKeys[attorney.slug] || [];
              return (
                <div key={attorney.slug} className="team-item">
                  <figure className="team-img">
                    <img
                      src={attorney.image}
                      alt={t(attorney.nameKey)}
                    />
                  </figure>
                  <div className="team-content">
                    <aside className="auhtor-detail">
                      <span className="author-desc">
                        {positions.map((key, idx) => (
                          <span key={idx}>
                            {t(key)}
                            <br />
                          </span>
                        ))}
                      </span>
                      <h5 className="author-name">
                        <Link href={`/team/${attorney.slug}`}>
                          {t(attorney.nameKey)}
                        </Link>
                      </h5>
                    </aside>
                    <Link
                      href={`/team/${attorney.slug}`}
                      className="learn-more-mobile"
                    >
                      {t('common.learn_more_btn')} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
