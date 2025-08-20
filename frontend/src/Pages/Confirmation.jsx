import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Confirmation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Animation d'entrée séquentielle
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setShowSuccess(true), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#07171DFF] to-[#184C58FF] text-white px-6 py-12 relative overflow-hidden">
      {/* Éléments décoratifs animés */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-green-600/8 to-yellow-600/8 rounded-full blur-3xl animate-float-celebration"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-yellow-500/10 to-green-500/8 rounded-full blur-2xl animate-pulse-success"></div>
      
      {/* Particules de célébration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-confetti ${
              i % 3 === 0 ? 'bg-yellow-400/60 w-2 h-2' :
              i % 3 === 1 ? 'bg-green-400/60 w-1.5 h-1.5' :
              'bg-blue-400/60 w-1 h-1'
            }`}
            style={{
              left: `${10 + i * 7}%`,
              top: `${5 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Rayons de succès */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showSuccess ? 'opacity-100' : 'opacity-0'}`}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-t from-transparent via-yellow-400/30 to-transparent animate-ray"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${i * 45}deg) translateY(-50px)`,
              transformOrigin: 'bottom',
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Card principale avec animations premium */}
      <div 
        className={`bg-[#132F39] rounded-lg shadow-2xl p-8 max-w-lg text-center relative overflow-hidden transition-all duration-1000 ${
          isVisible ? 'animate__animated animate__fadeInUp scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Bordure lumineuse success */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/30 via-yellow-400/20 to-green-400/30 p-[2px]">
          <div className="w-full h-full bg-[#132F39] rounded-lg"></div>
        </div>
        
        {/* Halo de succès */}
        <div className={`absolute -inset-6 bg-gradient-to-r from-green-600/20 to-yellow-600/20 rounded-xl blur-xl transition-all duration-1000 ${
          showSuccess ? 'opacity-100 scale-110' : 'opacity-0 scale-95'
        }`}></div>

        <div className="relative z-10">
          {/* Icône de succès avec animations */}
          <div className="relative mb-4 group">
            {/* Cercles concentriques animés */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
              showSuccess ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}>
              <div className="w-20 h-20 border-2 border-green-400/30 rounded-full animate-ping"></div>
              <div className="absolute w-16 h-16 border-2 border-green-400/50 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute w-12 h-12 border-2 border-green-400/70 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
            </div>
            
            {/* Icône principale avec effet de succès */}
            <FaCheckCircle 
              className={`text-green-400 text-5xl mx-auto relative z-10 transition-all duration-1000 ${
                showSuccess ? 'animate-success-bounce' : ''
              }`} 
            />
            
            {/* Particules autour de l'icône */}
            {showSuccess && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-sparkle"
                    style={{
                      left: `${30 + Math.cos(i * 60 * Math.PI / 180) * 35}px`,
                      top: `${30 + Math.sin(i * 60 * Math.PI / 180) * 35}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Titre avec animation */}
          <h1 
            className={`text-3xl font-bold mb-2 relative group transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Reservation Confirmée
            </span>
            <span className="ml-2 inline-block animate-bounce" style={{ animationDelay: '1s' }}>
              ✈️
            </span>
            
            {/* Effet de brillance sur le titre */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 transition-transform duration-1500 group-hover:translate-x-full"></div>
          </h1>

          {/* Texte descriptif */}
          <p 
            className={`text-gray-300 mb-6 leading-relaxed transition-all duration-1000 hover:text-gray-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Merci pour votre réservation. Vous recevrez une confirmation par email avec les détails du vol.
          </p>

          {/* Éléments décoratifs de confirmation */}
          <div 
            className={`flex justify-center items-center gap-4 mb-6 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="flex items-center text-sm text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Confirmé
            </div>
            <div className="flex items-center text-sm text-yellow-400">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              Email envoyé
            </div>
            <div className="flex items-center text-sm text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              En traitement
            </div>
          </div>

          {/* Bouton de retour premium */}
          <Link 
            to="/" 
            className={`inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 relative group overflow-hidden shadow-lg hover:shadow-yellow-500/30 hover:scale-105 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></div>
            
            <span className="relative z-10 flex items-center">
              Retour à l'accueil
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            {/* Particules au survol */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                  style={{
                    left: `${25 + i * 15}%`,
                    top: `${40 + (i % 2) * 20}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          </Link>
        </div>

        {/* Effet de brillance qui traverse la carte */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent transform -skew-x-12 transition-all duration-2000 pointer-events-none ${
          showSuccess ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
        }`}></div>
      </div>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes animate-float-celebration {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.08;
          }
          25% { 
            transform: translateY(-40px) translateX(30px) rotate(90deg) scale(1.1);
            opacity: 0.12;
          }
          50% { 
            transform: translateY(-60px) translateX(-20px) rotate(180deg) scale(0.9);
            opacity: 0.15;
          }
          75% { 
            transform: translateY(-30px) translateX(40px) rotate(270deg) scale(1.05);
            opacity: 0.1;
          }
        }
        
        @keyframes animate-pulse-success {
          0%, 100% { 
            opacity: 0.1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.2; 
            transform: scale(1.1);
          }
        }
        
        @keyframes animate-confetti {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-100px) translateX(20px) rotate(180deg);
            opacity: 1;
          }
          100% { 
            transform: translateY(-200px) translateX(-30px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes animate-ray {
          0%, 100% { 
            opacity: 0;
            transform: scaleY(0);
          }
          50% { 
            opacity: 1;
            transform: scaleY(1);
          }
        }
        
        @keyframes animate-success-bounce {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(0.9); }
          30% { transform: scale(1.1); }
          50% { transform: scale(1.05); }
          70% { transform: scale(1.02); }
          80%, 90% { transform: scale(1); }
        }
        
        @keyframes animate-sparkle {
          0%, 100% { 
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% { 
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
        }
        
        .animate-float-celebration {
          animation: animate-float-celebration 25s ease-in-out infinite;
        }
        
        .animate-pulse-success {
          animation: animate-pulse-success 4s ease-in-out infinite;
        }
        
        .animate-confetti {
          animation: animate-confetti ease-out infinite;
        }
        
        .animate-ray {
          animation: animate-ray 2s ease-in-out infinite;
        }
        
        .animate-success-bounce {
          animation: animate-success-bounce 1.5s ease-out;
        }
        
        .animate-sparkle {
          animation: animate-sparkle 1.5s ease-in-out infinite;
        }
        
        /* Animation de gradient pour le titre */
        .bg-gradient-to-r {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Confirmation;