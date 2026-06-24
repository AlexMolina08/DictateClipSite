import { Link } from 'react-router-dom';
import { AugeMark } from './AugeMark';
import { SITE } from '../content/siteConfig';
import { COPY } from '../content/copy';

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-cream-100">
      <div className="mx-auto grid max-w-editorial gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr] md:px-10">
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <AugeMark size={24} />
            <span className="font-sans text-sm font-semibold lowercase tracking-tight text-ink-900">
              {COPY.footer.tagline}
            </span>
          </div>
          <p className="mt-3 font-sans text-sm leading-relaxed text-ink-400">
            {COPY.footer.blurb}
          </p>
        </div>

        <nav className="flex flex-col gap-3 md:items-end">
          <a
            href="/#how"
            className="font-sans text-sm text-ink-500 transition-colors hover:text-ink-900"
          >
            How it works
          </a>
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
      </div>

      <div className="mx-auto flex max-w-editorial items-center justify-between border-t border-ink-200/70 px-6 py-6 md:px-10">
        <p className="font-mono text-xs text-ink-400">
          &copy; {new Date().getFullYear()} {SITE.legalEntity}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-300">
          Made on iPhone
        </p>
      </div>
    </footer>
  );
}
