import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import LegalContent from '../components/LegalContent';

export default function LegalPage({ type }) {
    const title = type === 'privacy' ? 'Privacy Policy' : 'Terms of Service';

    return (
        <div className="min-h-screen bg-background-light flex flex-col font-sans text-text-main selection:bg-primary/20 selection:text-primary">
            <div className="flex-grow max-w-3xl mx-auto w-full px-6 py-12">
                <Link to="/" className="inline-block mb-8 text-sm text-text-secondary hover:text-text-main transition-colors">
                    &larr; Back to Home
                </Link>

                <h1 className="text-3xl font-bold mb-8">{title}</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <LegalContent type={type} />
                </div>
            </div>

            <footer className="py-8 text-center text-sm text-text-secondary opacity-60">
                &copy; {new Date().getFullYear()} DictateClip.
            </footer>
        </div>
    );
}
