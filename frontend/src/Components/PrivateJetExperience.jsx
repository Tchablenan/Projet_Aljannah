import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

import mainImage from '../assets/OIF.webp';
import interior from '../assets/OIP.webp';
import champagne from '../assets/champagne.webp';
import lounge from '../assets/lounge.webp';

const PrivateJetExperience = () => {
  const { t } = useTranslation();
  const [hoveredGalleryIndex, setHoveredGalleryIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Observer pour animations supplémentaires
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#101213FF] to-[#255e6d] text-white py-20 overflow-hidden" id="experience">
      {/* Élément décoratif original amélioré */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-r from-[#4B2E09FF] to-[#6D6825FF] opacity-10 blur-2xl rounded-full animate__animated animate__fadeInDown animate__slow"></div>
      
      {/* Nouveaux éléments décoratifs */}
      <div className="absolute bottom-10 left-10 w-40 h-40 border border-yellow-400/10 rounded-full animate-spin-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-600/5 rounded-full animate-pulse-slow"></div>
      
      {/* Particules flottantes dorées */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/40 rounded-full animate-float-luxury"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlay animé */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 via-transparent to-blue-600/5 transition-all duration-[4000ms]"
        style={{
          opacity: isVisible ? 0.6 : 0.2,
          transform: isVisible ? 'scale(1.1)' : 'scale(0.9)'
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image principale avec animations luxueuses */}
        <div className="w-full md:w-1/2 relative" data-aos="zoom-in">
          <div className="relative group">
            {/* Halo lumineux premium */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-500/15 to-yellow-600/20 rounded-lg blur-xl scale-110 group-hover:scale-125 transition-all duration-1000 animate-pulse-luxury"></div>
            
            {/* Bordure dorée animée */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/30 via-transparent to-yellow-600/30 p-[2px] group-hover:from-yellow-300/50 group-hover:to-yellow-500/50 transition-all duration-700">
              <div className="w-full h-full bg-transparent rounded-lg"></div>
            </div>
            
            <img
              src={mainImage}
              alt={t("privateJetExperience.alt.main")}
              className="w-full max-w-md mx-auto rounded-lg shadow-lg transform transition-all duration-1000 hover:scale-105 hover:-rotate-1 relative z-10"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.05)',
              }}
            />
            
            {/* Reflets dynamiques sur l'image */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg pointer-events-none z-20"></div>
            
            {/* Effet de brillance qui traverse l'image */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:translate-x-full rounded-lg pointer-events-none z-20"></div>
          </div>
        </div>

        {/* Contenu textuel avec animations séquentielles */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6" data-aos="fade-left">
          <div className="relative group">
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient-aljannah animate__animated animate__fadeInDown animate__delay-1s relative overflow-hidden">
              {t("privateJetExperience.title")}
              {/* Effet de brillance sur le titre */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1500 group-hover:translate-x-full"></div>
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-justify text-gray-300 leading-relaxed animate__animated animate__fadeIn animate__delay-2s hover:text-gray-100 transition-colors duration-500 hover:scale-[1.02] transform">
              {t("privateJetExperience.paragraph1")}
            </p>

            <p className="text-lg sm:text-xl text-justify text-gray-300 leading-relaxed animate__animated animate__fadeIn animate__delay-2-5s hover:text-gray-100 transition-colors duration-500 hover:scale-[1.02] transform">
              {t("privateJetExperience.paragraph2")}
            </p>
          </div>

          {/* Bouton CTA premium */}
          <a
            href="/jets"
            className="ripple-click inline-block btn-gradient-aljannah text-black px-6 py-3 rounded-full font-semibold mt-4 hover:bg-yellow-600 hover:text-white transition-all duration-300 hover:scale-105 relative group overflow-hidden shadow-lg hover:shadow-yellow-500/30"
            data-aos="fade-up"
          >
            {/* Effet de brillance sur le bouton */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></div>
            
            <span className="relative z-10 flex items-center gap-2">
              {t("privateJetExperience.cta")}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            {/* Particules dorées au survol */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                  style={{
                    left: `${25 + i * 15}%`,
                    top: `${40 + i * 10}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          </a>
        </div>
      </div>

      {/* Galerie avec animations 3D luxueuses */}
      <div className="mt-16 px-6 md:px-20" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[interior, champagne, lounge].map((image, index) => (
            <div 
              key={index}
              className="aspect-video overflow-hidden rounded-lg shadow-lg relative group cursor-pointer"
              onMouseEnter={() => setHoveredGalleryIndex(index)}
              onMouseLeave={() => setHoveredGalleryIndex(null)}
            >
              {/* Overlay gradient luxueux */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-yellow-600/10 transition-all duration-700 z-10 ${
                hoveredGalleryIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              {/* Bordure dorée animée */}
              <div className={`absolute inset-0 border-2 transition-all duration-500 rounded-lg z-20 ${
                hoveredGalleryIndex === index 
                  ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : 'border-transparent'
              }`}></div>
              
              <img 
                src={image} 
                alt={
                  index === 0 ? t("privateJetExperience.alt.interior") :
                  index === 1 ? t("privateJetExperience.alt.champagne") :
                  t("privateJetExperience.alt.lounge")
                } 
                className={`rounded-lg shadow-md transition-all duration-700 w-full h-full object-cover ${
                  hoveredGalleryIndex === index 
                    ? 'scale-110 rotate-1 brightness-110 contrast-110' 
                    : 'hover:scale-105 transition duration-300'
                }`}
              />
              
              {/* Effet de particules dorées */}
              {hoveredGalleryIndex === index && (
                <div className="absolute inset-0 pointer-events-none z-30">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1.2s'
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Reflet de lumière premium */}
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-300/15 via-transparent to-transparent transition-opacity duration-700 rounded-lg ${
                hoveredGalleryIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              {/* Effet de lueur externe */}
              <div className={`absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-lg blur-lg transition-all duration-700 ${
                hoveredGalleryIndex === index ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
              }`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles CSS personnalisés pour les animations luxueuses */}
      <style jsx>{`
        @keyframes animate-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes animate-pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes animate-float-luxury {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-35px) translateX(-5px) rotate(180deg); 
            opacity: 1;
          }
          75% { 
            transform: translateY(-15px) translateX(15px) rotate(270deg); 
            opacity: 0.6;
          }
        }
        
        @keyframes animate-pulse-luxury {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1);
            filter: blur(20px);
          }
          50% { 
            opacity: 0.4; 
            transform: scale(1.1);
            filter: blur(15px);
          }
        }
        
        .animate-spin-slow {
          animation: animate-spin-slow 25s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: animate-pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float-luxury {
          animation: animate-float-luxury ease-in-out infinite;
        }
        
        .animate-pulse-luxury {
          animation: animate-pulse-luxury 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PrivateJetExperience;