import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="content" className="site-main">
      <section className="inner-banner-wrap">
        <div
          className="inner-baner-container"
          style={{ backgroundImage: 'url(/images/hero-main-1.jpg)' }}
        >
          <div className="overlay balance-patten" />
          <div className="container">
            <div className="inner-banner-content text-center">
              <h1 style={{ fontSize: '120px', color: '#EB9601' }}>404</h1>
              <h2 style={{ color: '#fff', marginBottom: '20px' }}>
                Page non trouvée
              </h2>
              <p style={{ color: '#ccc', marginBottom: '30px' }}>
                La page que vous recherchez n&apos;existe pas ou a été déplacée.
              </p>
              <Link href="/fr" className="button-primary">
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
