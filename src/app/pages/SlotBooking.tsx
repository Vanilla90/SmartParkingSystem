import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, CreditCard, CheckCircle, MapPin, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo_Normal.png';

export default function SlotBooking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', vehicleNumber: '',
    entryDate: '', entryTime: '', exitDate: '', exitTime: '',
    parkingZone: '', slotPreference: '',
  });
  const [bookingId, setBookingId] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingId('PE' + Date.now().toString().slice(-8));
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
            <p className="text-lg text-gray-600 mb-8">Your parking slot has been successfully reserved</p>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-8 border-2 border-dashed border-blue-300">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src={logo} alt="ParkEase Logo" className="h-12 w-12" />
                <span className="text-2xl font-bold text-[#007BFF]">PARKEASE</span>
              </div>
              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Booking ID</p>
                <p className="text-3xl font-bold text-[#007BFF] tracking-wide">{bookingId}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Name</p>
                  <p className="font-semibold text-gray-900">{formData.name}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Vehicle Number</p>
                  <p className="font-semibold text-gray-900">{formData.vehicleNumber}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Entry</p>
                  <p className="font-semibold text-gray-900">{formData.entryDate} at {formData.entryTime}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Exit</p>
                  <p className="font-semibold text-gray-900">{formData.exitDate} at {formData.exitTime}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Parking Zone</p>
                  <p className="font-semibold text-gray-900">{formData.parkingZone}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Payment Status</p>
                  <p className="font-semibold text-green-600 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Completed
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <button onClick={() => navigate('/')} className="px-8 py-3 bg-[#007BFF] text-white rounded-xl hover:bg-[#0056b3] transition-all font-medium shadow-lg">
                Back to Home
              </button>
              <button
                onClick={() => { setShowConfirmation(false); setFormData({ name: '', email: '', phone: '', vehicleNumber: '', entryDate: '', entryTime: '', exitDate: '', exitTime: '', parkingZone: '', slotPreference: '' }); }}
                className="px-8 py-3 border-2 border-[#007BFF] text-[#007BFF] rounded-xl hover:bg-blue-50 transition-all font-medium"
              >
                New Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-600 hover:text-[#007BFF] transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </button>
          <div className="flex items-center gap-4 mb-4">
            <img src={logo} alt="ParkEase Logo" className="h-16 w-16" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Slot Booking</h1>
              <p className="text-gray-600">Reserve your parking spot in advance</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#007BFF] font-bold">1</span>
                </div>
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none transition-colors" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none transition-colors" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none transition-colors" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"><Car className="w-4 h-4" /> Vehicle Number *</label>
                  <input type="text" name="vehicleNumber" required value={formData.vehicleNumber} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none transition-colors uppercase" placeholder="MH-12-AB-1234" />
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#28A745] font-bold">2</span>
                </div>
                Booking Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> Entry Date *</label>
                  <input type="date" name="entryDate" required value={formData.entryDate} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> Entry Time *</label>
                  <input type="time" name="entryTime" required value={formData.entryTime} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> Exit Date *</label>
                  <input type="date" name="exitDate" required value={formData.exitDate} onChange={handleInputChange} min={formData.entryDate || new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> Exit Time *</label>
                  <input type="time" name="exitTime" required value={formData.exitTime} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none transition-colors" />
                </div>
              </div>
            </div>

            {/* Parking Preferences */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                Parking Preferences
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> Parking Zone *</label>
                  <select name="parkingZone" required value={formData.parkingZone} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none transition-colors">
                    <option value="">Select parking zone</option>
                    <option value="Zone A - Ground Floor">Zone A - Ground Floor</option>
                    <option value="Zone B - Level 1">Zone B - Level 1</option>
                    <option value="Zone C - Level 2">Zone C - Level 2</option>
                    <option value="Zone D - Open Area">Zone D - Open Area</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Slot Preference</label>
                  <select name="slotPreference" value={formData.slotPreference} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none transition-colors">
                    <option value="">No preference</option>
                    <option value="Near Entrance">Near Entrance</option>
                    <option value="Near Exit">Near Exit</option>
                    <option value="Covered">Covered Area</option>
                    <option value="EV Charging">EV Charging Available</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border-2 border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-[#007BFF]" /> Payment Summary
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between"><span className="text-gray-600">Parking Fee (estimated)</span><span className="font-semibold">₹120.00</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Service Fee</span><span className="font-semibold">₹15.00</span></div>
                <div className="border-t-2 border-gray-300 pt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Total Amount</span>
                    <span className="font-bold text-2xl text-[#007BFF]">₹135.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button type="submit" className="flex-1 px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white rounded-xl hover:shadow-xl transition-all font-bold text-lg transform hover:scale-105">
                Confirm Booking & Pay
              </button>
              <button type="button" onClick={() => navigate('/')} className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}