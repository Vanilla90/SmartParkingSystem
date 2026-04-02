import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div>
                <span className="font-bold text-2xl text-[#007BFF]">PARKEASE</span>
                <p className="text-xs text-gray-600">The Smart Parking System</p>
              </div>
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium">Available Services</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium">System Features</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium">How It Works</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium">Contact</button>
<button onClick={() => window.location.href = '/live-parking'} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium animate-pulse">
  🔴 Live Parking
</button>
          </nav>

          <button
            onClick={() => scrollToSection('services')}
            className="hidden md:block px-6 py-2.5 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-all hover:shadow-lg font-medium"
          >
            Get Started
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('hero')} className="text-left text-gray-700 hover:text-[#007BFF] transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-[#007BFF] transition-colors font-medium">Available Services</button>
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-700 hover:text-[#007BFF] transition-colors font-medium">System Features</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-[#007BFF] transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-700 hover:text-[#007BFF] transition-colors font-medium">How It Works</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-[#007BFF] transition-colors font-medium">Contact</button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-6 py-2.5 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors text-left font-medium"
              >
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}