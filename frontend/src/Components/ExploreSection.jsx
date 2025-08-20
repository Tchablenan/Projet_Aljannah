import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

// Images illustratives
import planeImage from '../assets/element-2.png';
import interiorImage from '../assets/hawker.jpeg'; // image de cabine luxueuse
import diningImage from '../assets/jet-dining.jpeg'; // image repas à bord
import amenitiesImage from '../assets/jet-interior.jpeg'; // image services à bord

const ExploreSection = () => {
  const { t } = useTranslation();
  const [hoveredGalleryIndex, setHoveredGalleryIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Observer pour animations supplémentaires
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('explore');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#092C3AFF] to-[#184C58FF] py-20 overflow-hidden" id="explore">
      {/* Élément décoratif flottant amélioré */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-yellow-600 rounded-full opacity-10 blur-2xl animate__animated animate__fadeInDown animate__slow"></div>
      
      {/* Nouveaux éléments décoratifs */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-yellow-400/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 left-20 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/60 rounded-full animate-float-particles"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-20 space-y-20">
        {/* Bloc principal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image à gauche avec animations améliorées */}
          <div className="w-full md:w-1/2 text-center" data-aos="zoom-in">
            <div className="relative group">
              {/* Halo lumineux derrière l'image */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-blue-400/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition-all duration-700 animate-pulse-slow"></div>
              
              <img
                src={planeImage}
                alt={t('explore.image_alt_main')}
                className="w-full max-w-md mx-auto animate-float relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 drop-shadow-2xl"
              />
              
              {/* Reflet dynamique */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
            </div>
          </div>

          {/* Texte à droite avec nouvelles animations */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6" data-aos="fade-left">
            <div className="flex items-center justify-center md:justify-start gap-2 group">
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse-glow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l6-6m0 0l-6-6m6 6H3" />
                </svg>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gradient-aljannah relative overflow-hidden group">
                {t('explore.title')}
                {/* Effet de brillance sur le titre */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 group-hover:translate-x-full"></div>
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-justify text-gray-200 leading-relaxed hover:text-gray-100 transition-colors duration-300">
              {t('explore.description')}
            </p>

            {/* Bénéfices visuels avec animations améliorées */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white text-sm pt-2">
              {[
                { emoji: '✈️', text: t('explore.benefits.booking') },
                { emoji: '🔒', text: t('explore.benefits.privacy') },
                { emoji: '🕒', text: t('explore.benefits.flexibility') },
                { emoji: '💼', text: t('explore.benefits.service') }
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:translate-x-2 group">
                  <span className="text-lg  group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: `${index * 1}s` }}>
                    {benefit.emoji}
                  </span>
                  <span className="group-hover:text-yellow-300 transition-colors duration-300">{benefit.text}</span>
                </li>
              ))}
            </ul>

            {/* Bouton call-to-action amélioré */}
            <a
              href="/jets"
              className="inline-block relative group bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-300 hover:scale-105 mt-6 overflow-hidden shadow-lg hover:shadow-yellow-500/25"
              data-aos="fade-up"
            >
              {/* Effet de brillance sur le bouton */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                {t('explore.button')}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              
              {/* Particules au survol */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                    style={{
                      left: `${30 + i * 15}%`,
                      top: `${45 + i * 10}%`,
                      animationDelay: `${i * 0.15}s`
                    }}
                  />
                ))}
              </div>
            </a>
          </div>
        </div>

        {/* Galerie animée avec animations 3D */}
        <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up">
          {[interiorImage, diningImage, amenitiesImage].map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              onMouseEnter={() => setHoveredGalleryIndex(index)}
              onMouseLeave={() => setHoveredGalleryIndex(null)}
            >
              {/* Overlay avec gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500 z-10 ${
                hoveredGalleryIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              <img
                src={image}
                alt={index === 0 ? t('explore.image_alt_interior') : index === 1 ? t('explore.image_alt_dining') : t('explore.image_alt_amenities')}
                className={`w-full h-auto transition-all duration-700 ${
                  hoveredGalleryIndex === index 
                    ? 'scale-110 rotate-1 brightness-110' 
                    : 'scale-100 hover:scale-105'
                }`}
              />
              
              {/* Bordure lumineuse animée */}
              <div className={`absolute inset-0 border-2 transition-all duration-500 rounded-lg ${
                hoveredGalleryIndex === index 
                  ? 'border-yellow-400 shadow-lg shadow-yellow-400/25' 
                  : 'border-transparent'
              }`}></div>
              
              {/* Effet de particules */}
              {hoveredGalleryIndex === index && (
                <div className="absolute inset-0 pointer-events-none z-20">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1s'
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Reflet de lumière */}
              <div className={`absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent transition-opacity duration-500 ${
                hoveredGalleryIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes animate-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes animate-float-particles {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          50% { transform: translateY(-25px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(10px); }
        }
        
        @keyframes animate-pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes animate-pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(251, 191, 36, 0.5); }
          50% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.8), 0 0 30px rgba(251, 191, 36, 0.6); }
        }
        
        .animate-spin-slow {
          animation: animate-spin-slow 20s linear infinite;
        }
        
        .animate-float-particles {
          animation: animate-float-particles ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: animate-pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: animate-pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ExploreSection;