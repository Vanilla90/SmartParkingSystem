import { Mail, MapPin, Phone } from 'lucide-react';
import logo from '../../assets/Logo_Normal.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ParkEase Logo" className="h-14 w-14 object-contain" />
              <div>
                <span className="font-bold text-2xl text-[#007BFF]">PARKEASE</span>
                <p className="text-xs text-gray-400">Smart Parking System</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">Smart solutions for smarter cities.</p>
            <p className="text-sm text-gray-500">© 2026 ParkEase. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'Available Services', id: 'services' },
                { label: 'System Features', id: 'features' },
                { label: 'About', id: 'about' },
                { label: 'How It Works', id: 'how-it-works' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-bold text-lg mb-4">Technology</h4>
            <ul className="space-y-2 text-gray-400">
              <li>IR Sensors</li>
              <li>ESP8266</li>
              <li>IoT Integration</li>
              <li>Cloud Platform</li>
              <li>Mobile Apps</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:parkease@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    parkease@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+918237175249" className="text-gray-300 hover:text-white transition-colors">
                    8237175249
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-300">Pune City, Maharashtra</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Made by Manasi • Empowering smarter parking solutions
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}