import { ArrowRight, TrendingUp, Zap, Sparkles } from 'lucide-react';
import newLogo from '../../assets/Logo_Transparent.png';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-[#007BFF] rounded-full text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4" />
              IoT-Powered Smart Solution
            </div>

            <div>
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent leading-tight">
                PARKEASE
              </h1>
              <p className="text-lg text-gray-600 mt-1">The Smart Parking System</p>
            </div>

            <p className="text-2xl font-semibold text-gray-800">Real-time parking made simple.</p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Find available parking spots instantly with our IoT-based intelligent parking system. Experience hassle-free parking with real-time updates, smart booking, and seamless payment integration.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="group px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 font-medium"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-xl hover:bg-blue-50 transition-all font-medium shadow-sm hover:shadow-lg"
              >
                Learn More
              </button>
            </div>

            <div className="flex gap-8 pt-6">
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-3xl text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-3xl text-gray-900">Live</div>
                  <div className="text-sm text-gray-600">Real-time Updates</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-full blur-3xl opacity-30 animate-pulse" />
                <img
                  src={newLogo}
                  alt="ParkEase Logo"
                  className="relative h-96 w-96 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}