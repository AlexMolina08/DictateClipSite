import { Link } from 'react-router-dom';
import { AugeMark } from './AugeMark';
import { SITE } from '../content/siteConfig';
import { COPY } from '../content/copy';

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-cream-100">
      <div className="mx-auto flex max-w-editorial flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row md:px-10">
        <div className="flex items-center gap-2">
          <AugeMark size={24} />
          <span className="font-sans text-sm font-semibold lowercase tracking-tight text-ink-900">
            {COPY.footer.tagline}
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            to="/privacy"
            className="font-sans text-sm text-ink-500 transition-colors hover:text-ink-900"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="font-sans text-sm text-ink-500 transition-colors hover:text-ink-900"
          >
            Terms
          </Link>
          <Link
            to="/support"
            className="font-sans text-sm text-ink-500 transition-colors hover:text-ink-900"
          >
            Support
          </Link>
        </nav>

        <p className="font-mono text-xs text-ink-400">
          &copy; {new Date().getFullYear()} {SITE.legalEntity}
        </p>
      </div>
    </footer>
  );
}
