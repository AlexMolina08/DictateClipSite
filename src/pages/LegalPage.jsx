import { Link } from 'react-router-dom';
import LegalContent from '../components/LegalContent';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { SITE } from '../content/siteConfig';

export default function LegalPage({ type }) {
  const title = type === 'privacy' ? 'Privacy Policy' : 'Terms of Service';

  return (
    <div className="flex min-h-screen flex-col bg-cream-100">
      <Nav />
      <div className="mx-auto w-full max-w-3xl flex-grow px-6 py-16 md:px-10">
        <Link
          to="/"
          className="mb-8 inline-block font-sans text-sm text-ink-500 transition-colors hover:text-ink-900"
        >
          &larr; Back to Home
        </Link>
        <h1 className="mb-10 font-display text-4xl tracking-tightest text-ink-900 md:text-5xl">
          {title}
        </h1>
        <div className="border border-ink-200 bg-cream-50 p-8 md:p-10">
          <LegalContent type={type} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
