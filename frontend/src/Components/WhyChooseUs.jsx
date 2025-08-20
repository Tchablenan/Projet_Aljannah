import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import planeInteriorImage from '../assets/nettoyer-l-interieur-de-l-avion.jpg';
import scheduleImage from '../assets/schedule.png';
import qualityImage from '../assets/qualite.jpg';
import customerServiceImage from '../assets/sourire.jpg';

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observer pour animations d'entrée
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#why-choose-us');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const cardData = [
    {
      image: planeInteriorImage,
      alt: t("whyChooseUs.alt.interior"),
      titleKey: "whyChooseUs.cards.security.title",
      textKey: "whyChooseUs.cards.security.text",
      icon: "🛡️",
      delay: 0
    },
    {
      image: scheduleImage,
      alt: t("whyChooseUs.alt.schedule"),
      titleKey: "whyChooseUs.cards.schedule.title",
      textKey: "whyChooseUs.cards.schedule.text",
      icon: "⏰",
      delay: 200
    },
    {
      image: qualityImage,
      alt: t("whyChooseUs.alt.quality"),
      titleKey: "whyChooseUs.cards.quality.title",
      textKey: "whyChooseUs.cards.quality.text",
      icon: "⭐",
      delay: 400
    },
    {
      image: customerServiceImage,
      alt: t("whyChooseUs.alt.customer"),
      titleKey: "whyChooseUs.cards.customer.title",
      textKey: "whyChooseUs.cards.customer.text",
      icon: "🤝",
      delay: 600
    }
  ];

  return (
    <section 
      className="bg-gradient-to-r from-[#101213FF] to-[#255e6d] text-gray-900 py-16 relative overflow-hidden"
      id="why-choose-us"
    >
      {/* Éléments décoratifs animés */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-yellow-600/10 to-blue-600/10 rounded-full blur-3xl animate-float-decoration"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-500/8 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-twinkle"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.4}s`
            }}
          />
        ))}
      </div>

      {/* Lignes décoratives */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 md:px-20 text-center relative z-10">
        {/* Titre avec animations premium */}
        <div className="relative mb-12 group">
          <h2 
            className={`text-4xl font-extrabold text-gradient-aljannah transition-all duration-1000 relative overflow-hidden ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {t("whyChooseUs.title")}
            
            {/* Effet de brillance sur le titre */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 transition-transform duration-1500 group-hover:translate-x-full"></div>
          </h2>
          
          {/* Ligne dorée sous le titre */}
          <div 
            className={`mx-auto mt-4 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-all duration-1000 ${
              isVisible ? 'w-24 h-1' : 'w-0 h-1'
            }`}
            style={{ transitionDelay: '500ms' }}
          ></div>
        </div>

        {/* Grille des cartes avec animations séquentielles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-[#0B2B3BFF] to-[#255e6d] p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-500 relative group overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${card.delay}ms`,
                animation: hoveredCard === index ? 'cardFloat 0.3s ease-out forwards' : 'none'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Bordure lumineuse animée */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/30 via-blue-400/20 to-yellow-400/30 p-[1px] transition-all duration-500 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="w-full h-full bg-gradient-to-r from-[#0B2B3BFF] to-[#255e6d] rounded-lg"></div>
              </div>
              
              {/* Halo lumineux derrière la carte */}
              <div className={`absolute -inset-4 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-xl blur-xl transition-all duration-700 ${
                hoveredCard === index ? 'opacity-100 scale-110' : 'opacity-0 scale-95'
              }`}></div>

              {/* Contenu de la carte */}
              <div className="relative z-10">
                {/* Container image avec effets */}
                <div className="relative mb-4 group/image overflow-hidden rounded-lg">
                  {/* Overlay avec icône */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center transition-all duration-500 z-10 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <span className="text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>
                      {card.icon}
                    </span>
                  </div>
                  
                  <img 
                    src={card.image} 
                    alt={card.alt} 
                    className={`w-full h-40 object-cover rounded-lg transition-all duration-700 ${
                      hoveredCard === index 
                        ? 'scale-110 rotate-1 brightness-110 contrast-110' 
                        : 'scale-100'
                    }`}
                  />
                  
                  {/* Reflet sur l'image */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-lg transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Particules sur l'image */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 pointer-events-none z-20">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: '1s'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Titre avec animation */}
                <h3 className={`text-xl font-semibold text-yellow-500 mb-4 transition-all duration-300 ${
                  hoveredCard === index ? 'text-yellow-300 transform -translate-y-1' : ''
                }`}>
                  <span className="relative">
                    {t(card.titleKey)}
                    {/* Soulignement animé */}
                    <div className={`absolute -bottom-1 left-0 bg-yellow-400 transition-all duration-500 ${
                      hoveredCard === index ? 'w-full h-0.5' : 'w-0 h-0.5'
                    }`}></div>
                  </span>
                </h3>

                {/* Texte avec animation */}
                <p className={`text-lg text-gray-100 transition-all duration-300 ${
                  index === 0 || index === 2 ? 'text-justify' : ''
                } ${
                  hoveredCard === index ? 'text-white transform translate-y-1' : ''
                }`}>
                  {t(card.textKey)}
                </p>
              </div>

              {/* Effet de brillance qui traverse la carte */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 transition-all duration-1000 pointer-events-none ${
                hoveredCard === index ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
              }`}></div>
              
              {/* Points lumineux aux coins */}
              <div className={`absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full transition-all duration-500 ${
                hoveredCard === index ? 'opacity-100 scale-150' : 'opacity-0 scale-50'
              }`}></div>
              <div className={`absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full transition-all duration-500 ${
                hoveredCard === index ? 'opacity-100 scale-150' : 'opacity-0 scale-50'
              }`} style={{ transitionDelay: '100ms' }}></div>
              <div className={`absolute bottom-2 left-2 w-2 h-2 bg-blue-400 rounded-full transition-all duration-500 ${
                hoveredCard === index ? 'opacity-100 scale-150' : 'opacity-0 scale-50'
              }`} style={{ transitionDelay: '200ms' }}></div>
              <div className={`absolute bottom-2 right-2 w-2 h-2 bg-yellow-400 rounded-full transition-all duration-500 ${
                hoveredCard === index ? 'opacity-100 scale-150' : 'opacity-0 scale-50'
              }`} style={{ transitionDelay: '300ms' }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes animate-float-decoration {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.1;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-30px) translateX(-10px) rotate(180deg);
            opacity: 0.15;
          }
          75% { 
            transform: translateY(-10px) translateX(15px) rotate(270deg);
            opacity: 0.25;
          }
        }
        
        @keyframes animate-pulse-slow {
          0%, 100% { 
            opacity: 0.1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.2; 
            transform: scale(1.05);
          }
        }
        
        @keyframes animate-twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(0.5);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5);
          }
        }
        
        @keyframes cardFloat {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        
        .animate-float-decoration {
          animation: animate-float-decoration 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: animate-pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: animate-twinkle ease-in-out infinite;
        }
        
        /* Gestion de l'animation py-16 pour la carte schedule */
        .grid > div:nth-child(2) {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;