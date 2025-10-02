import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import JetCard from './jetCard';
import { FaPlane, FaSuitcase, FaRocket } from 'react-icons/fa';
import jetService from '../services/jetService'

const JetsAvailableSection = () => {
  const { t } = useTranslation();
  const [jets, setJets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchJets = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await jetService.getJets();
        const jetsData = response.data || []; // Récupérer response.data
        
        setJets(Array.isArray(jetsData) ? jetsData : []);
        setIsVisible(true);
      } catch (error) {
        console.error("❌ Jet loading error:", error);

        let errorMessage = t("jets.error.default");

        if (error.message?.includes('Failed to fetch')) {
          errorMessage = t("jets.error.fetch");
        } else if (error.message?.includes('CORS')) {
          errorMessage = t("jets.error.cors");
        } else if (error.response?.status === 404) {
          errorMessage = t("jets.error.notFound");
        } else if (error.response?.status === 500) {
          errorMessage = t("jets.error.server");
        } else if (error.message?.includes('Expected JSON')) {
          errorMessage = t("jets.error.json");
        } else {
          errorMessage = error.message || 'Erreur inconnue';
        }

        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchJets();
  }, [t]);

  const handleRetry = () => {
    window.location.reload();
  };

  const AnimatedIcon = ({ children, delay = 0 }) => (
    <div 
      className="transform transition-all duration-1000 hover:scale-110 hover:rotate-6"
      style={{ 
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}ms`
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
          75% { transform: translateY(-5px) rotate(1deg); }
        }
      `}</style>
    </div>
  );

  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-400/30 rounded-full animate-spin border-t-blue-400"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-yellow-400/30 rounded-full animate-spin animate-reverse border-b-yellow-400" style={{ animationDelay: '0.5s' }}></div>
        <FaRocket className="absolute inset-0 m-auto text-2xl text-white animate-pulse" />
      </div>
      <div className="text-center">
        <p className="text-lg font-medium text-white mb-2">Loading Jets...</p>
        <div className="flex space-x-1 justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Section Header avec animations */}
      <section className="bg-gradient-to-r from-[#0B2027FF] to-[#255e6d] text-white py-32 relative overflow-hidden">
        {/* Particules de fond animées */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 md:px-20 flex items-center justify-between gap-12 relative z-10">
          <div className="hidden md:block w-1/5">
            <AnimatedIcon delay={0}>
              <FaSuitcase className="text-6xl mx-auto text-yellow-500 filter drop-shadow-lg" />
            </AnimatedIcon>
          </div>
          
          <div className="text-center md:text-left md:w-3/5">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 transform transition-all duration-1000 translate-y-0 opacity-100">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {t("jets.title")}
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
              {t("jets.subtitle")}
            </p>
            
            {/* Ligne décorative animée */}
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto md:mx-0 rounded-full transform transition-all duration-1000 delay-500 scale-x-100"></div>
          </div>
          
          <div className="hidden md:block w-1/5">
            <AnimatedIcon delay={1000}>
              <FaPlane className="text-6xl mx-auto text-yellow-500 filter drop-shadow-lg" />
            </AnimatedIcon>
          </div>
        </div>

        {/* Vague animée en bas */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              className="fill-[#07171DFF] animate-pulse"
            />
          </svg>
        </div>
      </section>

      {/* Section Jets */}
      <section className="bg-gradient-to-r from-[#07171DFF] to-[#255e6d] text-white py-16 relative">
        <div className="container mx-auto px-6 md:px-20">
          {loading && (
            <div className="text-center py-20">
              <LoadingSpinner />
              <p className="text-lg mt-4">{t("jets.loading")}</p>
            </div>
          )}

          {error && (
            <div className="text-center transform transition-all duration-500 scale-100 opacity-100">
              <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 border-2 border-red-500/50 rounded-2xl p-8 mb-8 backdrop-blur-sm">
                <div className="text-6xl mb-4 animate-bounce">❌</div>
                <h3 className="text-red-400 text-2xl mb-4 font-bold">{t("jets.error.title")}</h3>
                <p className="text-red-300 text-lg mb-6">{error}</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleRetry}
                    className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      🔄 <span className="group-hover:animate-spin inline-block">{t("jets.error.retry")}</span>
                    </span>
                  </button>
                  <button
                    onClick={() => console.log('Debug info in console')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    🔍 {t("jets.error.debug")}
                  </button>
                </div>
              </div>
            </div>
          )}

          {!loading && !error && jets.length === 0 && (
            <div className="text-center py-20 transform transition-all duration-500 scale-100 opacity-100">
              <div className="text-6xl mb-4 animate-pulse">✈️</div>
              <p className="text-xl mb-4">{t("jets.empty")}</p>
              <p className="text-sm text-gray-400">{t("jets.emptyHint")}</p>
            </div>
          )}

          {!loading && !error && jets.length > 0 && (
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {jets.map((jet, index) => (
                <div
                  key={jet.id}
                  className="transform transition-all duration-700"
                  style={{
                    animation: `slideInUp 0.8s ease-out forwards`,
                    animationDelay: `${index * 150}ms`,
                    opacity: 0
                  }}
                >
                  <JetCard jet={jet} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-reverse {
            animation-direction: reverse;
          }
        `}</style>
      </section>
    </>
  );
};

export default JetsAvailableSection;