import { Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { AugeMark } from '../components/AugeMark';
import { SITE } from '../content/siteConfig';

// Minimal support page. Kept alive so the live App Store supportUrl does not
// 404. No serverless form (the old nodemailer endpoint was insecure and is
// removed). A clean mailto contact instead.
// TODO(launch): confirm support email + whether a form is wanted later.
export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-cream-100">
      <Nav />
      <div className="mx-auto flex w-full max-w-xl flex-grow flex-col items-center justify-center px-6 py-20 text-center md:px-10">
        <AugeMark size={56} />
        <h1 className="mt-8 font-display text-4xl tracking-tightest text-ink-900 md:text-5xl">
          Support
        </h1>
        <p className="mt-5 max-w-sm font-sans text-lg leading-relaxed text-ink-500">
          Questions, feedback, or a bug to report? Email us and we&rsquo;ll get
          back to you.
        </p>
        <a
          href={`mailto:${SITE.supportEmail}`}
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-6 py-3 font-sans text-sm font-medium text-ink-0 transition-colors hover:bg-ink-800"
        >
          {SITE.supportEmail}
        </a>
        <Link
          to="/"
          className="mt-10 font-sans text-sm text-ink-500 transition-colors hover:text-ink-900"
        >
          &larr; Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
