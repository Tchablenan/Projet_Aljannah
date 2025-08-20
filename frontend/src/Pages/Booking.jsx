import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";
import moment from "moment";
import { FaPlane, FaCalendarAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Configuration de l'API pour Vite
const API_BASE_URL = import.meta.env.VITE_BASE_API_URL || 'http://localhost:8000/api';

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jetId = searchParams.get("jet_id");
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = {
      jet_id: jetId ?? null,
      firstName,
      lastName,
      email,
      departureLocation,
      arrivalLocation,
      planeType: "Private Jet",
      arrivalDate: moment(arrivalDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
      departureDate: moment(departureDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
      passengers: 1,
    };

    try {
      console.log('Sending booking to:', `${API_BASE_URL}/reservations`);
      
      const response = await fetch(`${API_BASE_URL}/reservations`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log('Booking success:', result);
      navigate("/confirmation");
      
    } catch (err) {
      console.error("Erreur création :", err);
      setError(`Erreur lors de la réservation: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#07171DFF] to-[#184C58FF] text-white px-6 py-12 relative overflow-hidden">
      {/* Éléments décoratifs animés */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-600/5 to-blue-600/5 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-yellow-500/8 to-transparent rounded-full blur-2xl animate-pulse-gentle"></div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-twinkle-booking"
            style={{
              left: `${5 + i * 9}%`,
              top: `${10 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Section Header améliorée */}
      <section className="bg-gradient-to-r from-[#02171FFF] to-[#255e6d] text-white py-16 relative overflow-hidden rounded-xl mb-8 shadow-2xl">
        {/* Overlay décoratif */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 via-transparent to-blue-600/5"></div>
        
        <div className="container mx-auto px-6 md:px-20 flex items-center justify-between gap-12 relative z-10">
          {/* Icône gauche avec animations */}
          <div className={`hidden md:block w-1/5 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <FaPlane className="text-6xl mx-auto text-yellow-600 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float-icon" />
            </div>
          </div>
          
          {/* Contenu central */}
          <div className={`text-center md:text-left md:w-3/5 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up relative group">
              {t("booking.header.title")}
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1500 group-hover:translate-x-full"></div>
            </h2>
            <p className="text-lg text-gray-300 mb-6 animate-slide-up hover:text-gray-100 transition-colors duration-300">
              {t("booking.header.description")}
            </p>
          </div>
          
          {/* Icône droite avec animations */}
          <div className={`hidden md:block w-1/5 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <FaCalendarAlt className="text-6xl mx-auto text-yellow-600 relative z-10 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 animate-float-icon" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
        
        {/* Ligne décorative */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
      </section>

      {/* Formulaire amélioré */}
      <div className={`max-w-2xl mx-auto bg-[#132F39] rounded-lg shadow-2xl p-8 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
      }`} style={{ transitionDelay: '600ms' }}>
        {/* Bordure lumineuse */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/20 via-transparent to-blue-400/20 p-[1px]">
          <div className="w-full h-full bg-[#132F39] rounded-lg"></div>
        </div>
        
        {/* Halo derrière le formulaire */}
        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/10 to-blue-600/10 rounded-xl blur-xl opacity-50"></div>

        <div className="flex items-center justify-between mb-6 relative z-10">
          <h1 className="text-2xl font-bold text-gradient-aljannah relative group">
            {t("booking.form.title")}
            {/* Soulignement animé */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-500 group-hover:w-full"></div>
          </h1>
          {jetId && (
            <span className="text-sm text-gray-300 italic px-3 py-1 bg-yellow-600/20 rounded-full border border-yellow-400/30 animate-pulse-gentle">
              {t("booking.form.selectedJet", { id: jetId })}
            </span>
          )}
        </div>

        {/* Affichage des erreurs amélioré */}
        {error && (
          <div className="mb-4 p-4 bg-red-600 bg-opacity-20 border border-red-500 rounded-lg relative overflow-hidden animate-shake">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
            <p className="text-red-300 relative z-10 flex items-center">
              <span className="mr-2">⚠️</span>
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          {/* Noms avec animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder={t("booking.form.firstName")}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
                required
                disabled={loading}
                className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50 w-full transition-all duration-300 border-2 border-transparent focus:border-yellow-400 focus:bg-gray-600 focus:scale-105 hover:bg-gray-600"
              />
              {/* Effet de lueur */}
              <div className={`absolute inset-0 rounded bg-gradient-to-r from-yellow-400/20 to-blue-400/20 transition-opacity duration-300 pointer-events-none ${
                focusedField === 'firstName' ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
            
            <div className="relative group">
              <input
                type="text"
                placeholder={t("booking.form.lastName")} 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
                required
                disabled={loading}
                className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50 w-full transition-all duration-300 border-2 border-transparent focus:border-yellow-400 focus:bg-gray-600 focus:scale-105 hover:bg-gray-600"
              />
              <div className={`absolute inset-0 rounded bg-gradient-to-r from-yellow-400/20 to-blue-400/20 transition-opacity duration-300 pointer-events-none ${
                focusedField === 'lastName' ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              disabled={loading}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50 transition-all duration-300 border-2 border-transparent focus:border-yellow-400 focus:bg-gray-600 focus:scale-105 hover:bg-gray-600"
            />
            <div className={`absolute inset-0 rounded bg-gradient-to-r from-yellow-400/20 to-blue-400/20 transition-opacity duration-300 pointer-events-none ${
              focusedField === 'email' ? 'opacity-100' : 'opacity-0'
            }`}></div>
          </div>

          {/* Lieux */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder={t("booking.form.departureLocation")} 
                value={departureLocation}
                onChange={(e) => setDepartureLocation(e.target.value)}
                onFocus={() => setFocusedField('departure')}
                onBlur={() => setFocusedField(null)}
                required
                disabled={loading}
                className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50 w-full transition-all duration-300 border-2 border-transparent focus:border-yellow-400 focus:bg-gray-600 focus:scale-105 hover:bg-gray-600"
              />
              <div className={`absolute inset-0 rounded bg-gradient-to-r from-yellow-400/20 to-blue-400/20 transition-opacity duration-300 pointer-events-none ${
                focusedField === 'departure' ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
            
            <div className="relative group">
              <input
                type="text"
                placeholder={t("booking.form.arrivalLocation")}
                value={arrivalLocation}
                onChange={(e) => setArrivalLocation(e.target.value)}
                onFocus={() => setFocusedField('arrival')}
                onBlur={() => setFocusedField(null)}
                required
                disabled={loading}
                className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50 w-full transition-all duration-300 border-2 border-transparent focus:border-yellow-400 focus:bg-gray-600 focus:scale-105 hover:bg-gray-600"
              />
              <div className={`absolute inset-0 rounded bg-gradient-to-r from-yellow-400/20 to-blue-400/20 transition-opacity duration-300 pointer-events-none ${
                focusedField === 'arrival' ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group">
              <input
                type="date"
                placeholder={t("booking.form.arrivalDate")} 
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                onFocus={() => setFocusedField('arrivalDate')}
                onBlur={() => setFocusedField(null)}
                required
                disabled={loading}
                className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50 w-full transition-all duration-300 border-2 border-transparent focus:border-yellow-400 focus:bg-gray-600 focus:scale-105 hover:bg-gray-600"
              />
              <div className={`absolute inset-0 rounded bg-gradient-to-r from-yellow-400/20 to-blue-400/20 transition-opacity duration-300 pointer-events-none ${
                focusedField === 'arrivalDate' ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
            
            <div className="relative group">
              <input
                type="date"
                placeholder={t("booking.form.departureDate")}
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                onFocus={() => setFocusedField('departureDate')}
                onBlur={() => setFocusedField(null)}
                required
                disabled={loading}
                className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50 w-full transition-all duration-300 border-2 border-transparent focus:border-yellow-400 focus:bg-gray-600 focus:scale-105 hover:bg-gray-600"
              />
              <div className={`absolute inset-0 rounded bg-gradient-to-r from-yellow-400/20 to-blue-400/20 transition-opacity duration-300 pointer-events-none ${
                focusedField === 'departureDate' ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          </div>

          {/* Bouton submit premium */}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-gradient-aljannah text-black font-bold py-3 rounded-full hover:bg-yellow-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative group overflow-hidden shadow-lg hover:shadow-yellow-500/30 hover:scale-105"
          >
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></div>
            
            <span className="relative z-10 flex items-center">
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                  {t("booking.form.loading")}
                </>
              ) : (
                <>
                  <FaPlaneDeparture className="inline mr-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12" />
                  {t("booking.form.submit")}
                </>
              )}
            </span>
            
            {/* Particules au survol */}
            {!loading && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${40 + (i % 2) * 20}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '1s'
                    }}
                  />
                ))}
              </div>
            )}
          </button>
        </form>
      </div>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes animate-float-slow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.05;
          }
          25% { 
            transform: translateY(-30px) translateX(20px) rotate(90deg);
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-50px) translateX(-15px) rotate(180deg);
            opacity: 0.08;
          }
          75% { 
            transform: translateY(-20px) translateX(25px) rotate(270deg);
            opacity: 0.12;
          }
        }
        
        @keyframes animate-pulse-gentle {
          0%, 100% { 
            opacity: 0.08; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.15; 
            transform: scale(1.05);
          }
        }
        
        @keyframes animate-twinkle-booking {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(0.5) rotate(0deg);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5) rotate(180deg);
          }
        }
        
        @keyframes animate-float-icon {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes animate-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-float-slow {
          animation: animate-float-slow 20s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: animate-pulse-gentle 5s ease-in-out infinite;
        }
        
        .animate-twinkle-booking {
          animation: animate-twinkle-booking ease-in-out infinite;
        }
        
        .animate-float-icon {
          animation: animate-float-icon 3s ease-in-out infinite;
        }
        
        .animate-shake {
          animation: animate-shake 0.5s ease-in-out;
        }
        
        /* Animations pour les champs de formulaire */
        input:focus {
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
        }
        
        /* Animation personnalisée pour le bouton */
        .btn-gradient-aljannah:hover {
          box-shadow: 0 10px 30px rgba(251, 191, 36, 0.4);
        }
      `}</style>
    </div>
  );
};

export default BookingPage;