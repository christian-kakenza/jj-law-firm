import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import InnerBanner from '@/components/shared/InnerBanner';
import { generatePageMetadata } from '@/lib/metadata';
import { attorneys, getAttorneyBySlug } from '@/data/attorneys';
import { practiceAreas } from '@/data/practiceAreas';

export function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = await params;
  const attorney = getAttorneyBySlug(slug);

  if (!attorney) {
    return generatePageMetadata({
      title: locale === 'fr' ? 'Avocat non trouvé' : 'Attorney Not Found',
      description: '',
      locale,
      path: `/team/${slug}`,
    });
  }

  const t = await getTranslations({ locale });
  const name = t(attorney.nameKey);
  const position = t(`${attorney.i18nPrefix}.position`);

  const meta = locale === 'fr'
    ? {
        title: `${name}`,
        description: `${name}, ${position} au cabinet J&J Law Firm. Découvrez son parcours, ses compétences et ses domaines d'expertise.`,
      }
    : {
        title: `${name}`,
        description: `${name}, ${position} at J&J Law Firm. Discover their background, skills and areas of expertise.`,
      };

  return generatePageMetadata({ ...meta, locale, path: `/team/${slug}` });
}

export default function AttorneyDetailPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const t = useTranslations();
  const attorney = getAttorneyBySlug(params.slug);

  if (!attorney) {
    notFound();
  }

  const prefix = attorney.i18nPrefix;

  // Helper: returns null if key is missing (next-intl returns the key itself when missing)
  const safeT = (key: string): string | null => {
    const result = t(key);
    return result === key ? null : result;
  };

  // Build experience items dynamically
  const experienceItems: string[] = [];
  for (let i = 1; i <= attorney.expCount; i++) {
    const text = safeT(`${prefix}.exp_${i}`);
    if (text) experienceItems.push(text);
  }

  // Build skill labels - Jethro uses stats_cases/stats_clients/stats_partners, others use skill_1/2/3
  const skillKeys = attorney.slug === 'jethro'
    ? [
        { key: `${prefix}.stats_cases`, percent: 95 },
        { key: `${prefix}.stats_clients`, percent: 85 },
        { key: `${prefix}.stats_partners`, percent: 90 },
      ]
    : [
        { key: `${prefix}.skill_1`, percent: 92 },
        { key: `${prefix}.skill_2`, percent: 88 },
        { key: `${prefix}.skill_3`, percent: 95 },
      ];

  // Get practice areas for this attorney
  const attorneyPracticeAreas = attorney.practiceAreaSlugs
    .map((slug) => practiceAreas.find((pa) => pa.slug === slug))
    .filter(Boolean);

  // Check for languages
  const languagesLabel = safeT(`${prefix}.languages`);
  const languagesSpoken = safeT(`${prefix}.languages_spoken`);

  // Check for publications
  const publicationsTitle = safeT(`${prefix}.publications_title`);
  const publications: string[] = [];
  for (let i = 1; i <= 7; i++) {
    const text = safeT(`${prefix}.publication_${i}`);
    if (text) publications.push(text);
    else break;
  }

  return (
    <main id="content" className="site-main">
      <InnerBanner backgroundImage="/images/principal1.jpg" />

      <section className="team-detail-section">
        <div className="container">
          {/* Top section: Photo + Bio */}
          <div className="team-detail-info">
            <div className="row g-0">
              <div className="col-md-5">
                <div className="author-img-wrapper">
                  <figure className="team-fig">
                    <img src={attorney.image} alt={t(`${prefix}.name`)} />
                  </figure>
                </div>
              </div>
              <div className="col-md-7">
                <div className="author-bio-date">
                  <h6 className="author-title">{t(`${prefix}.position`)}</h6>
                  <h2 className="author-name">{t(`${prefix}.name`)}</h2>
                  <p className="author-disc">{t(`${prefix}.bio`)}</p>

                  {/* Contact info */}
                  <div className="author-contact-info">
                    <ul>
                      <li>
                        <strong>{t(`${prefix}.email`)} : </strong>
                        <a href={`mailto:${attorney.email}`}>
                          {attorney.email}
                        </a>
                      </li>
                      <li>
                        <strong>{t(`${prefix}.phone`)} : </strong>
                        <a href={`tel:${attorney.phoneRaw}`}>
                          {attorney.phone}
                        </a>
                      </li>
                      <li>
                        <strong>{safeT(`${prefix}.specialties`) || t(`${prefix}.specializations`)} : </strong>
                        <span>
                          {attorneyPracticeAreas.map((pa, idx) => (
                            <span key={pa!.slug}>
                              {idx > 0 && ', '}
                              {t(pa!.nameKey)}
                            </span>
                          ))}
                        </span>
                      </li>
                      <li>
                        <strong>{safeT(`${prefix}.practice_areas`) || t(`${prefix}.expertise_areas`)} : </strong>
                        {attorneyPracticeAreas.map((pa, idx) => (
                          <span key={pa!.slug}>
                            {idx > 0 && ', '}
                            <Link href={`/practice-areas/${pa!.slug}`}>
                              {t(pa!.nameKey)}
                            </Link>
                          </span>
                        ))}
                      </li>
                      {languagesSpoken && languagesLabel && (
                        <li>
                          <strong>{languagesLabel} : </strong>
                          <span>{languagesSpoken}</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Qualifications */}
                  <div className="qualification">
                    <h5 className="qualification-title">
                      {safeT(`${prefix}.qualifications`) || t(`${prefix}.education_title`)} :
                    </h5>
                    {[1, 2, 3, 4, 5, 6].map((i) => {
                      const text = safeT(`${prefix}.education_${i}`);
                      if (!text) return null;
                      return (
                        <div key={i} className="experience-detail">
                          <h6 className="certificate">
                            <i aria-hidden="true" className={i === 6 && attorney.slug === 'jethro' ? 'fas fa-user-graduate' : 'fas fa-graduation-cap'} /> {text}
                          </h6>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="experience-info">
            <h5 className="experience-heading">
              {t(`${prefix}.professional_experience`)} :
            </h5>
            <ul className="experience-list">
              {experienceItems.map((exp, idx) => (
                <li key={idx}>
                  <strong>{exp}</strong>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications (if any) */}
          {publications.length > 0 && publicationsTitle && (
            <div className="publications-section mt-5">
              <h5 className="experience-heading">{publicationsTitle} :</h5>
              <div className="publications-list">
                <ul>
                  {publications.map((pub, idx) => (
                    <li key={idx}><strong>{pub}</strong></li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Skills + Achievements section */}
          <div className="experience-wrappered row">
            <div className="col-md-6">
              <div className="skill-container">
                {skillKeys.map((skill, idx) => {
                  const label = safeT(skill.key);
                  if (!label) return null;
                  return (
                    <div key={idx} className="skill-wrapper">
                      <p className="skill-titile">{label}</p>
                      <div className="progress-wrapper">
                        <div className="ab-progress example" data-progress data-value={skill.percent}>
                          <div className="progress-bar-wrap">
                            <div
                              className="ab-progress-bar"
                              style={{ width: `${skill.percent}%` }}
                            />
                          </div>
                        </div>
                        <span className="progress-percent">
                          {skill.percent}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6">
              <div className="experience-list">
                <ul>
                  {[1, 2, 3, 4, 5, 6].map((i) => {
                    const text = safeT(`${prefix}.achievement_${i}`);
                    if (!text) return null;
                    return (
                      <li key={i}>
                        <i aria-hidden="true" className={attorney.achievementIcons[i - 1] || 'fas fa-check-circle'} /> {text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Other attorneys CTA */}
          <div className="other-attorneys-section mt-5">
            <div className="section-header text-center">
              <h3 className="section-title">
                {t(`${prefix}.other_attorneys_title`)}
              </h3>
              <p className="section-subtitle">
                {t(`${prefix}.other_attorneys_subtitle`)}
              </p>
            </div>
            <div className="text-center mt-4">
              <Link href="/team" className="button-primary">
                {t(`${prefix}.other_attorneys_btn`)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
