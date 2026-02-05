import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light flex flex-col font-sans text-text-main selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
