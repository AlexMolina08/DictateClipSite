import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Different } from '../components/Different';
import { Showcase } from '../components/Showcase';
import { Examples } from '../components/Examples';
import { Close } from '../components/Close';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Examples />
        <Different />
        <Showcase />
        <Close />
      </main>
      <Footer />
    </div>
  );
}
