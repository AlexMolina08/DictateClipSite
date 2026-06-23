import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { ClipRail } from '../components/ClipRail';
import { Showreel } from '../components/Showreel';
import { Close } from '../components/Close';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Nav />
      <main>
        <Hero />
        <ClipRail />
        <Showreel />
        <Close />
      </main>
      <Footer />
    </div>
  );
}
