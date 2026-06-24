import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Legal + support are off the hot path — code-split so the landing stays light.
const LegalPage = lazy(() => import('./pages/LegalPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-cream-100" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
