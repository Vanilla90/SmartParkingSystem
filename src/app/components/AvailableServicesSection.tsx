import { Calendar, CreditCard, Camera, Network, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AvailableServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Calendar,
      title: 'Slot Booking',
      description: 'Reserve parking spots in advance through our smart booking system for guaranteed availability.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradientFrom: 'from-blue-400',
      gradientTo: 'to-blue-600',
      path: '/slot-booking',
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Seamless digital payment system for parking fees with multiple secure payment options.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-green-600',
      path: '/payment',
    },
    {
      icon: Camera,
      title: 'Number Plate Recognition',
      description: 'Automatic vehicle identification using AI-powered license plate recognition technology.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradientFrom: 'from-purple-400',
      gradientTo: 'to-purple-600',
      path: null,
    },
    {
      icon: Network,
      title: 'Smart City Integration',
      description: 'Find parking locations near you with our smart city map integration and real-time navigation.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradientFrom: 'from-orange-400',
      gradientTo: 'to-orange-600',
      path: '/smart-city-map',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            ✨ Our Services
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Available Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive suite of smart parking solutions designed to make your parking experience seamless
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isClickable = service.path !== null;
            return (
              <div
                key={index}
                onClick={() => isClickable && navigate(service.path!)}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 ${isClickable ? 'cursor-pointer hover:-translate-y-2' : 'cursor-default hover:-translate-y-1'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                    <Icon className={`w-10 h-10 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                    {service.title}
                    {isClickable && (
                      <ArrowRight className={`w-6 h-6 ${service.color} opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all`} />
                    )}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                  {isClickable && (
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                      <span className={service.color}>Click to explore</span>
                      <div className={`w-2 h-2 rounded-full ${service.bgColor} animate-pulse`} />
                    </div>
                  )}
                  {!isClickable && (
                    <div className="mt-6 inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#007BFF] to-[#28A745] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience Smart Parking?</h3>
            <p className="text-blue-100 max-w-3xl mx-auto mb-8 text-lg">
              Join thousands of satisfied users who have revolutionized their parking experience with ParkEase.
            </p>
            <button
              onClick={() => navigate('/slot-booking')}
              className="px-10 py-4 bg-white text-[#007BFF] rounded-xl hover:shadow-xl transition-all transform hover:scale-105 font-bold text-lg inline-flex items-center gap-2"
            >
              Book Your Slot Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}