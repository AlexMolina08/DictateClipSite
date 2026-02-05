import React from 'react';
import ReactMarkdown from 'react-markdown';
import privacyContent from '../content/privacy.md?raw';
import termsContent from '../content/terms.md?raw';

export default function LegalContent({ type }) {
    const content = type === 'privacy' ? privacyContent : termsContent;

    return (
        <article className="prose prose-sm md:prose-base max-w-none text-text-secondary prose-headings:text-text-main prose-strong:text-text-main prose-a:text-primary hover:prose-a:text-primary-dark">
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
}
