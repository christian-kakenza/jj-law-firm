'use client';

import { Link } from '@/i18n/routing';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="content" className="site-main">
      <section className="inner-banner-wrap">
        <div
          className="inner-baner-container"
          style={{ backgroundImage: 'url(/images/hero-main-1.jpg)' }}
        >
          <div className="overlay balance-patten" />
          <div className="container">
            <div className="inner-banner-content" />
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '80px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3em', color: '#8B0000', marginBottom: '20px' }}>
            Erreur
          </h1>
          <p style={{ color: '#666', fontSize: '1.2em', marginBottom: '30px' }}>
            Une erreur est survenue. Veuillez réessayer.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={reset} className="button-primary">
              Réessayer
            </button>
            <Link href="/" className="button-round">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
