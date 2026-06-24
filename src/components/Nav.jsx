import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AugeMark } from './AugeMark';
import { AppStoreButton } from './AppStoreButton';
import { COPY } from '../content/copy';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-ink-200/80 bg-cream-100/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-editorial items-center justify-between px-6 py-3.5 md:px-10">
        <Link to="/" className="flex items-center gap-2" aria-label="auge home">
          <AugeMark size={28} />
          <span className="font-sans text-lg font-semibold lowercase tracking-tight text-ink-900">
            auge
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
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
          </div>
          <AppStoreButton label={COPY.nav.cta} className="px-5 py-2.5" />
        </div>
      </nav>
    </header>
  );
}
