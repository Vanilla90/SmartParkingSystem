import { AlertCircle, CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About the Project</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Addressing modern parking challenges with innovative IoT technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* The Problem */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Problem</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Time Waste</p>
                  <p className="text-gray-600">Drivers waste valuable time searching for parking spots in crowded areas</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fuel Consumption</p>
                  <p className="text-gray-600">Unnecessary driving increases fuel consumption and costs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Traffic & Pollution</p>
                  <p className="text-gray-600">Traffic congestion and pollution levels rise significantly</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Our Solution */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#28A745] rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              An IoT-based system using <span className="font-semibold text-[#28A745]">IR sensors</span> and{' '}
              <span className="font-semibold text-[#28A745]">ESP8266</span> to detect empty parking slots and display
              real-time availability across multiple platforms.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#28A745] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">IR Sensors</p>
                  <p className="text-gray-600">Accurately detect vehicle presence in each parking slot</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#28A745] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">ESP8266 Controller</p>
                  <p className="text-gray-600">Processes sensor data and manages communications</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#28A745] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Multi-Platform Display</p>
                  <p className="text-gray-600">LCD, mobile app, and cloud dashboard for instant updates</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}