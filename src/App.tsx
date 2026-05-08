import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUse from './components/WhyUse';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyUse />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
