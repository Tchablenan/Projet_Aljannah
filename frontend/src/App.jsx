// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import AdminDashboard from './Pages/AdminDashboard';
// src/index.js (ou src/App.js)
import 'font-awesome/css/font-awesome.min.css';
import JetsAvailableSection from './Components/jetsAvailableSection'; // La page des jets
import Booking from './Pages/Booking'; // La page de réservation
import JetDetailPage from './Pages/JetDetailPage'; 
import Confirmation from './Pages/Confirmation';

import "aos/dist/aos.css";
import Footer from './Components/Footer';

const App = () => {



  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/jets" element={<JetsAvailableSection />} /> {/* La page des jets */}
        <Route path="/booking" element={<Booking />} /> {/* La page de réservation */}
        <Route path="/jet/:id" element={<JetDetailPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
