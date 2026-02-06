import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenPrivacy, onOpenTerms }) {
    return (
        <footer role="contentinfo" className="py-12 border-t border-gray-200 bg-background-light">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                    <img src="/logo-gray.png" alt="DictateClip Logo" className="w-6 h-6 rounded-md opacity-80 grayscale" />
                    <span className="text-sm text-text-secondary">© 2026 DictateClip. Granada, Spain.</span>
                </div>

                <div className="flex gap-6">
                    <button
                        onClick={onOpenPrivacy}
                        className="text-sm text-text-secondary hover:text-text-main transition-colors"
                    >
                        Privacy Policy
                    </button>
                    <button
                        onClick={onOpenTerms}
                        className="text-sm text-text-secondary hover:text-text-main transition-colors"
                    >
                        Terms of Service
                    </button>
                    <Link
                        to="/support"
                        className="text-sm text-text-secondary hover:text-text-main transition-colors"
                    >
                        Support
                    </Link>
                </div>
            </div>
        </footer>
    );
}
