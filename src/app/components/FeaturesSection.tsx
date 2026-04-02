import { Activity, Smartphone, Monitor, Cloud, Zap, Shield, Bell, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Activity,
      title: 'Real-time Slot Detection',
      description: 'IR sensors detect vehicle presence instantly, providing accurate real-time parking availability data with 98% precision.',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      gradient: 'from-blue-400 to-blue-600',
      stats: { value: '98%', label: 'Accuracy' },
    },
    {
      icon: Smartphone,
      title: 'Mobile App Integration',
      description: 'Live status of parking slots accessible via mobile app for convenient on-the-go access from anywhere.',
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
      gradient: 'from-green-400 to-green-600',
      stats: { value: '24/7', label: 'Access' },
    },
    {
      icon: Monitor,
      title: 'LCD Display at Entrance',
      description: 'Physical display at parking entrance shows total and available slots for immediate visibility without any app.',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
      gradient: 'from-purple-400 to-purple-600',
      stats: { value: 'Live', label: 'Updates' },
    },
    {
      icon: Cloud,
      title: 'Cloud Dashboard',
      description: 'Comprehensive admin view for monitoring, analytics, and management of the entire parking system infrastructure.',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      gradient: 'from-orange-400 to-orange-600',
      stats: { value: '100+', label: 'Metrics' },
    },
  ];

  const additionalFeatures = [
    { icon: Zap, title: 'Instant Notifications', description: 'Get alerts when slots become available' },
    { icon: Shield, title: 'Secure & Reliable', description: '99.9% uptime with encrypted data' },
    { icon: Bell, title: 'Smart Alerts', description: 'Booking reminders and updates' },
    { icon: BarChart3, title: 'Usage Analytics', description: 'Track your parking patterns' },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            🚀 Powerful Features
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">System Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology that makes parking management effortless, efficient, and intelligent
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 cursor-pointer transform hover:scale-105 ${isActive ? 'border-blue-500 scale-105' : 'border-gray-100'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${feature.lightColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 ${feature.lightColor} rounded-full`}>
                    <span className={`font-bold text-lg ${feature.color.replace('bg-', 'text-')}`}>
                      {feature.stats.value}
                    </span>
                    <span className="text-sm text-gray-600">{feature.stats.label}</span>
                  </div>
                </div>
                {isActive && <div className="absolute inset-0 rounded-3xl border-2 border-blue-500 animate-pulse" />}
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#007BFF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative bg-gradient-to-r from-[#007BFF] via-purple-600 to-[#28A745] rounded-3xl p-12 text-white overflow-hidden shadow-2xl">
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4">Seamless Integration Across All Platforms</h3>
            <p className="text-blue-100 max-w-3xl mx-auto text-lg mb-8">
              All features work together in perfect harmony to create a comprehensive parking management solution.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                <span className="font-bold text-2xl">⚡ Fast</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                <span className="font-bold text-2xl">🔒 Secure</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                <span className="font-bold text-2xl">📱 Smart</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                <span className="font-bold text-2xl">🌐 Connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}