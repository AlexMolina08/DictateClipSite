import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Footer from '../components/Footer';
import LegalModal from '../components/LegalModal';

export default function Home() {
    const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

    return (
        <div className="min-h-screen bg-background-light flex flex-col font-sans text-text-main selection:bg-primary/20 selection:text-primary">
            <Header
                onOpenPrivacy={() => setModalType('privacy')}
                onOpenTerms={() => setModalType('terms')}
            />
            <main role="main" className="flex-grow">
                <Hero />
                <FeatureGrid />
            </main>
            <Footer
                onOpenPrivacy={() => setModalType('privacy')}
                onOpenTerms={() => setModalType('terms')}
            />

            <LegalModal
                isOpen={!!modalType}
                onClose={() => setModalType(null)}
                title={modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                type={modalType}
            />
        </div>
    );
}
