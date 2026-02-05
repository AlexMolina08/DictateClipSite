import React from 'react';
import { motion } from 'framer-motion';

export default function Header({ onOpenPrivacy, onOpenTerms }) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-black/5" />
            <div className="relative mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="DictateClip Logo" className="w-8 h-8 rounded-lg shadow-sm" />
                    <span className="font-semibold text-text-main tracking-tight">DictateClip</span>
                </div>

                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-6">
                        {onOpenPrivacy && (
                            <button
                                onClick={onOpenPrivacy}
                                className="text-xs font-normal text-text-secondary hover:text-text-main transition-colors"
                            >
                                Privacy
                            </button>
                        )}
                        {onOpenTerms && (
                            <button
                                onClick={onOpenTerms}
                                className="text-xs font-normal text-text-secondary hover:text-text-main transition-colors"
                            >
                                Terms
                            </button>
                        )}
                    </nav>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-text-main text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-colors"
                    >
                        Download
                    </motion.button>
                </div>
            </div>
        </header>
    );
}
