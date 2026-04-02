import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { AvailableServicesSection } from '../components/AvailableServicesSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { AboutSection } from '../components/AboutSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AvailableServicesSection />
        <FeaturesSection />
        <AboutSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}