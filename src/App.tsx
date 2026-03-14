import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { About } from './sections/About';
import { Products } from './sections/Products';
import { Projects } from './sections/Projects';
import { Stats } from './sections/Stats';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Products />
        <Projects />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
