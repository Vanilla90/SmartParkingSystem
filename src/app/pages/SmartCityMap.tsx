import { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Navigation, DollarSign, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo_Normal.png';

export default function SmartCityMap() {
  const navigate = useNavigate();
  const [selectedParking, setSelectedParking] = useState<number | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    setUserLocation({ lat: 18.5204, lng: 73.8567 });
  }, []);

  const parkingLocations = [
    { id: 1, name: 'Central Plaza Parking', address: 'FC Road, Shivajinagar', distance: '0.3 km', availableSlots: 24, totalSlots: 50, pricePerHour: 50, rating: 4.8 },
    { id: 2, name: 'Metro Station Parking', address: 'Pune Station Road', distance: '0.7 km', availableSlots: 12, totalSlots: 40, pricePerHour: 40, rating: 4.5 },
    { id: 3, name: 'Shopping Mall Parking', address: 'Phoenix Mall, Viman Nagar', distance: '1.2 km', availableSlots: 45, totalSlots: 100, pricePerHour: 60, rating: 4.9 },
    { id: 4, name: 'Business District Parking', address: 'Hinjewadi IT Park', distance: '1.5 km', availableSlots: 8, totalSlots: 30, pricePerHour: 70, rating: 4.3 },
    { id: 5, name: 'Riverside Parking', address: 'Koregaon Park', distance: '2.1 km', availableSlots: 30, totalSlots: 60, pricePerHour: 50, rating: 4.7 },
  ];

  const getAvailabilityColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return 'text-green-600 bg-green-100';
    if (percentage > 20) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const positions = [
    { top: '30%', left: '60%' },
    { top: '55%', left: '40%' },
    { top: '25%', left: '70%' },
    { top: '70%', left: '55%' },
    { top: '20%', left: '30%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-600 hover:text-[#007BFF] transition-colors mb-4">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </button>
          <div className="flex items-center gap-4">
            <img src={logo} alt="ParkEase Logo" className="h-14 w-14" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Smart City Map</h1>
              <p className="text-gray-600">Find parking near you in Pune</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-[600px] bg-gradient-to-br from-blue-100 to-green-100">
                <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

                {userLocation && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative">
                      <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute" />
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg relative" />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg">
                        You are here
                      </div>
                    </div>
                  </div>
                )}

                {parkingLocations.map((location, index) => (
                  <div
                    key={location.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${selectedParking === location.id ? 'z-30 scale-110' : 'z-10'}`}
                    style={positions[index]}
                    onClick={() => setSelectedParking(location.id)}
                  >
                    <div className={`relative ${selectedParking === location.id ? 'animate-bounce' : ''}`}>
                      <MapPin className={`w-10 h-10 ${selectedParking === location.id ? 'text-[#007BFF]' : 'text-green-600'}`} fill="currentColor" />
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs">
                        {location.availableSlots}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">Legend</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded-full" /><span className="text-gray-700">Your Location</span></div>
                    <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-green-600" fill="currentColor" /><span className="text-gray-700">Parking Available</span></div>
                  </div>
                </div>

                <button className="absolute bottom-4 right-4 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow">
                  <Navigation className="w-6 h-6 text-[#007BFF]" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Parking</h3>
              <div className="space-y-4 max-h-[520px] overflow-y-auto">
                {parkingLocations.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => setSelectedParking(location.id)}
                    className={`p-4 rounded-xl cursor-pointer transition-all border-2 ${selectedParking === location.id ? 'border-[#007BFF] bg-blue-50 shadow-md' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-900">{location.name}</h4>
                        <p className="text-sm text-gray-600">{location.address}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                        <span className="text-sm font-semibold text-gray-900">{location.rating}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className={`px-3 py-2 rounded-lg ${getAvailabilityColor(location.availableSlots, location.totalSlots)}`}>
                        <p className="text-xs font-medium mb-1">Available</p>
                        <p className="font-bold text-lg">{location.availableSlots}/{location.totalSlots}</p>
                      </div>
                      <div className="bg-gray-100 px-3 py-2 rounded-lg">
                        <p className="text-xs font-medium text-gray-600 mb-1">Distance</p>
                        <p className="font-bold text-lg text-gray-900">{location.distance}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-gray-900">₹{location.pricePerHour}/hr</span>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); navigate('/slot-booking'); }}
                        className="px-4 py-2 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors text-sm font-medium"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl shadow-lg p-6 text-white">
              <h4 className="font-bold mb-2">💡 Smart Tip</h4>
              <p className="text-sm text-blue-50">Book in advance to guarantee your parking spot and avoid last-minute hassle!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}