import ReactMarkdown from 'react-markdown';
import privacyContent from '../content/privacy.md?raw';
import termsContent from '../content/terms.md?raw';

export default function LegalContent({ type }) {
  const content = type === 'privacy' ? privacyContent : termsContent;

  return (
    <article className="prose prose-sm max-w-none text-ink-500 prose-headings:font-display prose-headings:tracking-tight prose-headings:text-ink-900 prose-strong:text-ink-900 prose-a:text-coral-600 hover:prose-a:text-coral-700 md:prose-lg">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
