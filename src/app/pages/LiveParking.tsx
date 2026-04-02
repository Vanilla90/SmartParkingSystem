import { useEffect, useState } from 'react';
import { ArrowLeft, Car, CheckCircle, XCircle, Wifi, WifiOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import mqtt from 'mqtt';
import logo from '../../assets/Logo_Normal.png';

const BROKER_URL = 'wss://cf9a54ea479d4734b1077d5d9c377722.s1.eu.hivemq.cloud:8884/mqtt';
const USERNAME = 'SPS_Project';
const PASSWORD = 'ParkEase@123';
const TOTAL_SLOTS = 4;

interface SlotStatus {
  [key: string]: 'Available' | 'Occupied' | 'Unknown';
}

export default function LiveParking() {
  const navigate = useNavigate();
  const [connected, setConnected] = useState(false);
  const [slots, setSlots] = useState<SlotStatus>({
    'parking/slot1': 'Unknown',
    'parking/slot2': 'Unknown',
    'parking/slot3': 'Unknown',
    'parking/slot4': 'Unknown',
  });
  const [lastUpdated, setLastUpdated] = useState<string>('Waiting for data...');

  const availableCount = Object.values(slots).filter(s => s === 'Available').length;
  const occupiedCount = Object.values(slots).filter(s => s === 'Occupied').length;

  useEffect(() => {
    const client = mqtt.connect(BROKER_URL, {
      username: USERNAME,
      password: PASSWORD,
      reconnectPeriod: 1000,
      keepalive: 10,
      clean: true,
      connectTimeout: 4000,
    });

    client.on('connect', () => {
      setConnected(true);
      client.subscribe('parking/slot1', { qos: 1 });
      client.subscribe('parking/slot2', { qos: 1 });
      client.subscribe('parking/slot3', { qos: 1 });
      client.subscribe('parking/slot4', { qos: 1 });
    });

    client.on('disconnect', () => setConnected(false));
    client.on('error', () => setConnected(false));
    client.on('offline', () => setConnected(false));

    client.on('message', (topic, message) => {
      const status = message.toString() as 'Available' | 'Occupied';
      setSlots(prev => ({ ...prev, [topic]: status }));
      setLastUpdated('Updated: ' + new Date().toLocaleTimeString());
    });

    return () => { client.end(true); };
  }, []);

  const getSlotName = (topic: string) => {
    const num = topic.split('slot')[1];
    return `Slot ${num}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-600 hover:text-[#007BFF] transition-colors mb-4">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logo} alt="ParkEase Logo" className="h-14 w-14" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Live Parking Status</h1>
                <p className="text-gray-600">Real-time slot availability from IR sensors</p>
              </div>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${connected ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {connected ? <Wifi className="w-5 h-5" /> : <WifiOff className="w-5 h-5" />}
              <span className="font-semibold">{connected ? 'Connected' : 'Connecting...'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-gray-100">
            <div className="text-5xl font-bold text-gray-900 mb-2">{TOTAL_SLOTS}</div>
            <div className="text-gray-600 font-medium">Total Slots</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-green-200">
            <div className="text-5xl font-bold text-green-600 mb-2">{availableCount}</div>
            <div className="text-green-600 font-medium">Available</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-red-200">
            <div className="text-5xl font-bold text-red-600 mb-2">{occupiedCount}</div>
            <div className="text-red-600 font-medium">Occupied</div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center text-gray-500 text-sm mb-8">
          🕐 {lastUpdated}
        </div>

        {/* Slot Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(slots).map(([topic, status]) => (
            <div
              key={topic}
              className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all ${
                status === 'Available'
                  ? 'border-green-400'
                  : status === 'Occupied'
                  ? 'border-red-400'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{getSlotName(topic)}</h3>
                <Car className={`w-8 h-8 ${
                  status === 'Available' ? 'text-green-500' :
                  status === 'Occupied' ? 'text-red-500' : 'text-gray-400'
                }`} />
              </div>

              <div className={`flex items-center gap-2 px-4 py-3 rounded-xl ${
                status === 'Available'
                  ? 'bg-green-50'
                  : status === 'Occupied'
                  ? 'bg-red-50'
                  : 'bg-gray-50'
              }`}>
                {status === 'Available' && <CheckCircle className="w-6 h-6 text-green-600" />}
                {status === 'Occupied' && <XCircle className="w-6 h-6 text-red-600" />}
                {status === 'Unknown' && <div className="w-6 h-6 rounded-full border-2 border-gray-300 animate-pulse" />}
                <span className={`font-bold text-lg ${
                  status === 'Available' ? 'text-green-600' :
                  status === 'Occupied' ? 'text-red-600' : 'text-gray-400'
                }`}>
                  {status === 'Unknown' ? 'Waiting...' : status}
                </span>
              </div>

              <div className={`mt-4 h-2 rounded-full ${
                status === 'Available' ? 'bg-green-400' :
                status === 'Occupied' ? 'bg-red-400' : 'bg-gray-200'
              }`} />
            </div>
          ))}
        </div>

        {/* Parking Visual */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Parking Layout</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {Object.entries(slots).map(([topic, status]) => (
              <div
                key={topic}
                className={`w-32 h-24 rounded-xl flex flex-col items-center justify-center border-4 transition-all ${
                  status === 'Available'
                    ? 'bg-green-100 border-green-400'
                    : status === 'Occupied'
                    ? 'bg-red-100 border-red-400'
                    : 'bg-gray-100 border-gray-300'
                }`}
              >
                <Car className={`w-8 h-8 mb-1 ${
                  status === 'Available' ? 'text-green-600' :
                  status === 'Occupied' ? 'text-red-600' : 'text-gray-400'
                }`} />
                <span className="text-sm font-bold text-gray-700">{getSlotName(topic)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded" />
              <span className="text-sm text-gray-600">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-400 rounded" />
              <span className="text-sm text-gray-600">Occupied</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded" />
              <span className="text-sm text-gray-600">Waiting for data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}