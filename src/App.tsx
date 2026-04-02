import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './app/pages/Home';
import SlotBooking from './app/pages/SlotBooking';
import Payment from './app/pages/Payment';
import SmartCityMap from './app/pages/SmartCityMap';
import LiveParking from './app/pages/LiveParking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slot-booking" element={<SlotBooking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/smart-city-map" element={<SmartCityMap />} />
        <Route path="/live-parking" element={<LiveParking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;