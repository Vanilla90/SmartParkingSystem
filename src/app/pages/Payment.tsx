import { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Building, CheckCircle, Lock, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo_Normal.png';

export default function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'wallet'>('card');
  const [cardData, setCardData] = useState({ cardNumber: '', cardName: '', expiryDate: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (e.target.name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (value.length > 19) return;
    }
    if (e.target.name === 'expiryDate') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) value = value.slice(0, 2) + '/' + value.slice(2, 4);
      if (value.length > 5) return;
    }
    if (e.target.name === 'cvv' && value.length > 3) return;
    setCardData({ ...cardData, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setShowSuccess(true), 1500);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-lg text-gray-600 mb-8">Your payment has been processed securely</p>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src={logo} alt="ParkEase Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold text-[#007BFF]">PARKEASE</span>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-2">Transaction ID</p>
              <p className="text-xl font-bold text-gray-900">TXN{Date.now().toString().slice(-10)}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs text-gray-600">Amount Paid</p>
                <p className="font-bold text-green-600 text-xl">₹135.00</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs text-gray-600">Payment Method</p>
                <p className="font-bold text-gray-900">{paymentMethod === 'card' ? 'Card' : paymentMethod === 'upi' ? 'UPI' : 'Wallet'}</p>
              </div>
            </div>
          </div>
          <button onClick={() => navigate('/')} className="w-full px-8 py-3 bg-[#007BFF] text-white rounded-xl hover:bg-[#0056b3] transition-all font-medium shadow-lg">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-600 hover:text-[#007BFF] transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </button>
          <div className="flex items-center gap-4 mb-4">
            <img src={logo} alt="ParkEase Logo" className="h-16 w-16" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Payment Portal</h1>
              <p className="text-gray-600">Secure and seamless payment integration</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Select Payment Method</h3>
                <div className="grid grid-cols-3 gap-4">
                  {(['card', 'upi', 'wallet'] as const).map((method) => (
                    <button key={method} onClick={() => setPaymentMethod(method)} className={`p-4 rounded-xl border-2 transition-all ${paymentMethod === method ? 'border-[#007BFF] bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      {method === 'card' && <CreditCard className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'card' ? 'text-[#007BFF]' : 'text-gray-400'}`} />}
                      {method === 'upi' && <Smartphone className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'upi' ? 'text-[#007BFF]' : 'text-gray-400'}`} />}
                      {method === 'wallet' && <Building className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'wallet' ? 'text-[#007BFF]' : 'text-gray-400'}`} />}
                      <p className={`text-sm font-semibold ${paymentMethod === method ? 'text-[#007BFF]' : 'text-gray-600'}`}>
                        {method === 'card' ? 'Card' : method === 'upi' ? 'UPI' : 'Wallet'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {paymentMethod === 'card' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-900">Card Details</h3>
                    <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                          <img src={logo} alt="ParkEase" className="h-10 w-10" />
                          <p className="font-bold">VISA</p>
                        </div>
                        <p className="text-xl tracking-wider font-mono mb-6">{cardData.cardNumber || '•••• •••• •••• ••••'}</p>
                        <div className="flex justify-between">
                          <div><p className="text-xs opacity-80 mb-1">Card Holder</p><p className="font-semibold">{cardData.cardName || 'YOUR NAME'}</p></div>
                          <div><p className="text-xs opacity-80 mb-1">Expires</p><p className="font-semibold">{cardData.expiryDate || 'MM/YY'}</p></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number *</label>
                      <input type="text" name="cardNumber" required value={cardData.cardNumber} onChange={handleCardChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none font-mono" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name *</label>
                      <input type="text" name="cardName" required value={cardData.cardName} onChange={handleCardChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none uppercase" placeholder="JOHN DOE" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date *</label>
                        <input type="text" name="expiryDate" required value={cardData.expiryDate} onChange={handleCardChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none font-mono" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">CVV *</label>
                        <input type="password" name="cvv" required value={cardData.cvv} onChange={handleCardChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none font-mono" placeholder="123" maxLength={3} />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-900">UPI Payment</h3>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">UPI ID *</label>
                      <input type="text" required value={upiId} onChange={(e) => setUpiId(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007BFF] focus:outline-none" placeholder="yourname@upi" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {['Google Pay', 'PhonePe', 'Paytm', 'Amazon Pay'].map((app) => (
                        <button key={app} type="button" className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#007BFF] hover:bg-blue-50 transition-all">
                          <p className="font-semibold text-gray-900">{app}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {paymentMethod === 'wallet' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-900">Digital Wallet</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: 'ParkEase Wallet', balance: '₹250', color: 'from-blue-500 to-blue-600' },
                        { name: 'PayPal', balance: '₹1500', color: 'from-indigo-500 to-indigo-600' },
                        { name: 'Apple Pay', balance: '₹750', color: 'from-gray-700 to-gray-900' },
                        { name: 'Google Pay', balance: '₹1000', color: 'from-green-500 to-green-600' },
                      ].map((wallet) => (
                        <button key={wallet.name} type="button" className={`relative p-6 rounded-2xl bg-gradient-to-br ${wallet.color} text-white text-left hover:shadow-xl transition-all`}>
                          <Building className="w-8 h-8 mb-3 opacity-80" />
                          <p className="font-bold mb-1">{wallet.name}</p>
                          <p className="text-sm opacity-90">Balance: {wallet.balance}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3 mt-6">
                  <Lock className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Secure Payment</p>
                    <p className="text-sm text-gray-600">Your payment information is encrypted and secure</p>
                  </div>
                </div>

                <button type="submit" className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white rounded-xl hover:shadow-xl transition-all font-bold text-lg flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" /> Pay ₹135.00
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between"><span className="text-gray-600">Parking Fee</span><span className="font-semibold">₹120.00</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Service Charge</span><span className="font-semibold">₹15.00</span></div>
                <div className="flex justify-between text-green-600"><span>Discount</span><span className="font-semibold">-₹0.00</span></div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl text-[#007BFF]">₹135.00</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {['256-bit SSL encryption', 'PCI DSS compliant', 'Instant confirmation'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}