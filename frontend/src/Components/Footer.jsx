import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPlane, FaArrowUp, FaStar } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import 'animate.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Observer pour animer le footer quand il devient visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('animated-footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  // Gestion du bouton "Retour en haut"
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: FaFacebook, name: 'Facebook', color: 'hover:text-blue-500', href: '#' },
    { icon: SiTiktok, name: 'TikTok', color: 'hover:text-black hover:bg-white hover:rounded-full', href: '#' },
    { icon: FaInstagram, name: 'Instagram', color: 'hover:text-pink-500', href: '#' },
    { icon: FaWhatsapp, name: 'WhatsApp', color: 'hover:text-green-500', href: '#' }
  ];

  const navigationLinks = [
    { key: 'jets', href: '/jets' },
    { key: 'about', href: '/about' },
    { key: 'experience', href: '/experience' },
    { key: 'contact', href: '/contact' }
  ];

  return (
    <>
      <footer 
        id="animated-footer"
        className="relative bg-gradient-to-br from-[#07171D] via-[#0f252d] to-[#184C58FF] text-white pt-16 pb-8 overflow-hidden"
      >
        {/* Particules d'arrière-plan animées */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute bg-yellow-400/10 rounded-full animate-float"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        {/* Vagues décoratives en haut */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-16 animate-wave"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="rgba(255, 255, 255, 0.05)"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-20 relative z-10">
          {/* Contenu principal du footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gradient-to-r border-gray-700/50 pb-12">
            
            {/* Section Branding avec animations */}
            <div 
              className={`space-y-6 text-center md:text-left transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="group">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent hover:from-yellow-300 hover:to-yellow-700 transition-all duration-500 flex items-center justify-center md:justify-start gap-3">
                  <FaPlane className="text-yellow-400 group-hover:rotate-12 group-hover:translate-x-1 transition-all duration-300" />
                  {t("footer.brand.title")}
                </h2>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                  {t("footer.brand.tagline")}
                </p>
                <p className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  {t("footer.brand.description")}
                </p>
              </div>

              {/* Étoiles décoratives */}
              <div className="flex justify-center md:justify-start gap-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={`star-${i}`}
                    className="text-yellow-400 text-sm animate-twinkle"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Section Navigation avec animations */}
            <div 
              className={`space-y-6 text-center md:text-left transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <h3 className="text-xl font-semibold text-white relative inline-block">
                {t("footer.links.title")}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
              </h3>
              
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li 
                    key={link.key}
                    className="transform transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <a 
                      href={link.href} 
                      className="group relative text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm flex items-center justify-center md:justify-start gap-2"
                    >
                      <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-2 transition-all duration-300"></span>
                      <span className="relative">
                        {t(`footer.links.${link.key}`)}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Réseaux Sociaux avec animations spectaculaires */}
            <div 
              className={`space-y-6 text-center md:text-left transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <h3 className="text-xl font-semibold text-white">
                {t("footer.social.title")}
              </h3>
              
              <div className="flex justify-center md:justify-start gap-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <div key={social.name} className="relative group">
                      <a 
                        href={social.href}
                        className={`relative block p-3 text-xl text-yellow-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 ${
                          social.name === 'TikTok' 
                            ? 'hover:text-black hover:bg-white hover:rounded-full' 
                            : social.color
                        }`}
                        onMouseEnter={() => setHoveredSocial(social.name)}
                        onMouseLeave={() => setHoveredSocial(null)}
                      >
                        {/* Cercle de fond animé */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        
                        {/* Icône */}
                        <IconComponent className="relative z-10 group-hover:animate-bounce" />
                        
                        {/* Effet de brillance */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full transform -rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        
                        {/* Halo lumineux */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-blue-400/30 rounded-full blur-lg scale-0 group-hover:scale-150 transition-all duration-500"></div>
                      </a>
                      
                      {/* Tooltip */}
                      {hoveredSocial === social.name && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap animate-fade-in">
                          {social.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Message de contact */}
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <p className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                  ✈️ {t("footer.social.cta", "Suivez-nous pour les dernières actualités")}
                </p>
              </div>
            </div>
          </div>

          {/* Section Copyright avec animation */}
          <div 
            className={`text-center text-sm text-gray-400 mt-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            <div className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors duration-300">
              <span>© {currentYear}</span>
              <span className="font-semibold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                {t("footer.brand.title")}
              </span>
              <span>•</span>
              <span>{t("footer.copyright")}</span>
            </div>
            
            {/* Barre de progression décorative */}
            <div className="mt-4 mx-auto w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Bouton retour en haut */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-3 rounded-full shadow-lg hover:shadow-yellow-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 group animate-bounce-in"
          >
            <FaArrowUp className="group-hover:animate-bounce" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>
        )}
      </footer>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* Effet de gradient animé pour les bordures */
        .border-gradient-to-r {
          border-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent) 1;
        }

        /* Amélioration des performances pour les animations */
        .transform {
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </>
  );
};

export default Footer;