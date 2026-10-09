import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Work } from '@/components/Work';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toast />
    </div>
  );
}

export default App;
