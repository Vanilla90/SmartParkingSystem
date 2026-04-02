import { Car, Radio, Cpu, MonitorSmartphone, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Car,
      title: 'Vehicle Enters',
      description: 'Car enters parking slot',
      color: 'bg-blue-500',
    },
    {
      icon: Radio,
      title: 'IR Sensor',
      description: 'Detects presence',
      color: 'bg-green-500',
    },
    {
      icon: Cpu,
      title: 'ESP8266',
      description: 'Processes data',
      color: 'bg-purple-500',
    },
    {
      icon: MonitorSmartphone,
      title: 'Display Updates',
      description: 'LCD / App / Cloud',
      color: 'bg-orange-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, efficient, and reliable parking detection in four easy steps
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-3 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 text-center">{step.title}</h4>
                    <p className="text-sm text-gray-600 text-center">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block w-8 h-8 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">The Complete Process</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#007BFF] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sensor Detection</h4>
                  <p className="text-gray-600">Each parking slot is equipped with an IR sensor that continuously monitors for vehicle presence.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#007BFF] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Data Processing</h4>
                  <p className="text-gray-600">ESP8266 microcontroller reads sensor values and calculates available vs. occupied slots.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#007BFF] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Real-time Updates</h4>
                  <p className="text-gray-600">Information is instantly sent to LCD display, mobile app, and cloud dashboard simultaneously.</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <p className="font-semibold text-[#007BFF] mb-2">ParkEase ensures instant updates across all devices</p>
              <p className="text-gray-700">Our system maintains synchronization across all platforms, providing users with the most accurate parking information available.</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1602208737571-63c54869174a?w=800"
                alt="IoT sensors and technology"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}