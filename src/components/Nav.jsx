import { Link } from 'react-router-dom';
import { AugeMark } from './AugeMark';
import { AppStoreButton } from './AppStoreButton';
import { COPY } from '../content/copy';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-cream-100">
      <nav className="mx-auto flex max-w-editorial items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-2" aria-label="auge home">
          <AugeMark size={28} />
          <span className="font-sans text-lg font-semibold lowercase tracking-tight text-ink-900">
            auge
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
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
