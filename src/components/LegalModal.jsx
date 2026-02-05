import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 m-auto w-full max-w-2xl h-fit max-h-[85vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
                    >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h2 className="text-lg font-semibold text-text-main">{title}</h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 text-text-secondary transition-colors"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto prose prose-sm max-w-none text-text-secondary">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export const PrivacyContent = () => (
    <div className="space-y-4">
        <p><strong>Last Updated: February 5, 2026</strong></p>
        <div>
            <strong>1. Introduction</strong>
            <p>DictateClip ("we") is committed to privacy. We operate under "Privacy by Design."</p>
        </div>
        <div>
            <strong>2. Data Collection</strong>
            <ul className="list-disc pl-5">
                <li>Voice Data: Sent temporarily to OpenAI API for transcription. NOT stored on our servers. Deleted immediately after processing.</li>
                <li>Transcriptions: Stored locally and synced via your personal iCloud (CloudKit). We cannot access them.</li>
                <li>Analytics: Anonymous aggregate data only.</li>
            </ul>
        </div>
        <div>
            <strong>3. Third Parties</strong>
            <ul className="list-disc pl-5">
                <li>OpenAI: Does not use API data for training models.</li>
                <li>Apple iCloud: End-to-end encrypted storage.</li>
            </ul>
        </div>
        <div>
            <strong>4. GDPR (EU)</strong>
            <ul className="list-disc pl-5">
                <li>Controller: DictateClip (Granada, Spain).</li>
                <li>Rights: You may delete data via the app (which removes it from iCloud).</li>
            </ul>
        </div>
        <div>
            <strong>5. Contact</strong>
            <p>support@dictateclip.com</p>
        </div>
    </div>
);

export const TermsContent = () => (
    <div className="space-y-4">
        <p><strong>Last Updated: February 5, 2026</strong></p>
        <div>
            <strong>1. Acceptance</strong>
            <p>By using DictateClip, you agree to these terms.</p>
        </div>
        <div>
            <strong>2. License</strong>
            <p>Revocable, non-exclusive license for personal use on Apple devices.</p>
        </div>
        <div>
            <strong>3. Usage</strong>
            <ul className="list-disc pl-5">
                <li>Free Tier: 4 transcriptions/day.</li>
                <li>Pro: Unlimited (billed via App Store).</li>
            </ul>
        </div>
        <div>
            <strong>4. Disclaimer</strong>
            <p>App provided "as is". AI transcription accuracy is not guaranteed.</p>
        </div>
        <div>
            <strong>5. Liability</strong>
            <p>We are not liable for damages arising from use.</p>
        </div>
        <div>
            <strong>6. Governing Law</strong>
            <p>Laws of Spain.</p>
        </div>
    </div>
);
