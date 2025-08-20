import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgIntro from '../assets/sourire.jpg';
import imgComfort from '../assets/qualite.jpg';
import imgFleet from '../assets/jet.jpg';

const AboutSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });

    // Observer pour détecter quand les éléments sont visibles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observer tous les blocs
    document.querySelectorAll('[data-observe]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        /* Gradient animé pour le fond */
        .about-section {
          background: linear-gradient(-45deg, #02171FFF, #184C58FF, #1a5d6e, #02171FFF);
          background-size: 400% 400%;
          animation: gradientShift 12s ease infinite;
          position: relative;
          overflow: hidden;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Éléments décoratifs flottants */
        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          animation: floatShape 15s ease-in-out infinite;
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation-delay: -5s;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          bottom: 15%;
          left: 15%;
          animation-delay: -10s;
        }

        @keyframes floatShape {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-30px) rotate(90deg); opacity: 0.6; }
          75% { transform: translateY(-15px) rotate(180deg); opacity: 0.4; }
        }

        /* Amélioration des images */
        .enhanced-image {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .enhanced-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          z-index: 1;
          transition: left 0.8s ease;
        }

        .enhanced-image:hover::before {
          left: 100%;
        }

        .enhanced-image:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .enhanced-image img {
          transition: all 0.5s ease;
          display: block;
          width: 100%;
          height: auto;
        }

        .enhanced-image:hover img {
          filter: brightness(1.1) contrast(1.1);
        }

        /* Animation du texte */
        .text-content {
          position: relative;
        }

        .animated-text {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animated-text.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .title-highlight {
          position: relative;
          display: inline-block;
        }

        .title-highlight::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          transition: width 0.8s ease;
          border-radius: 2px;
        }

        .title-highlight.visible::after {
          width: 100%;
        }

        /* Boutons améliorés */
        .btn-enhanced {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: #000;
          border: none;
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(251, 191, 36, 0.5);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: white;
          color: #000;
          border-color: white;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2);
        }

        .btn-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.6s ease;
        }

        .btn-enhanced:hover::before {
          left: 100%;
        }

        /* Animation des conteneurs */
        .content-block {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .content-block.slide-left {
          transform: translateX(-50px);
        }

        .content-block.slide-right {
          transform: translateX(50px);
        }

        .content-block.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Effets de particules */
        .text-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(251, 191, 36, 0.6);
          border-radius: 50%;
          animation: particleFloat 3s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% { opacity: 0; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-20px); }
        }

        /* Responsive amélioré */
        @media (max-width: 768px) {
          .floating-shapes { display: none; }
          .enhanced-image { margin: 1rem 0; }
          .content-block { transform: translateY(30px); }
          .content-block.visible { transform: translateY(0); }
        }
      `}</style>

      <section
        id="about"
        className="about-section text-white py-20 relative"
      >
        {/* Formes décoratives flottantes */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-20 space-y-16 relative z-10">
          
          {/* Bloc 1 */}
          <div 
            className="grid md:grid-cols-2 gap-10 items-center" 
            data-aos="fade-up"
            data-observe
            id="block1"
          >
            <div className={`content-block slide-left ${isVisible.block1 ? 'visible' : ''}`}>
              <div className="text-content">
                <h2 className={`text-4xl font-bold text-gradient-aljannah mb-6 title-highlight ${isVisible.block1 ? 'visible' : ''}`}>
                  {t('about.title')}
                  <div className="text-particle" style={{top: '10px', right: '20px'}}></div>
                </h2>
                <p className={`text-gray-200 text-lg leading-relaxed animated-text ${isVisible.block1 ? 'visible' : ''}`} style={{transitionDelay: '0.3s'}}>
                  {t('about.paragraph1')}
                </p>
              </div>
            </div>
            <div className={`content-block slide-right ${isVisible.block1 ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
              <div className="enhanced-image">
                <img
                  src={imgIntro}
                  alt={t('about.image_alt1')}
                  className="object-cover w-full h-auto"
                  data-aos="zoom-in"
                />
              </div>
            </div>
          </div>

          {/* Bloc 2 */}
          <div 
            className="grid md:grid-cols-2 gap-10 items-center" 
            data-aos="fade-up"
            data-observe
            id="block2"
          >
            <div className={`content-block slide-left ${isVisible.block2 ? 'visible' : ''}`}>
              <div className="enhanced-image">
                <img
                  src={imgComfort}
                  alt={t('about.image_alt2')}
                  className="object-cover w-full h-auto"
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <div className={`content-block slide-right ${isVisible.block2 ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
              <div className="text-content">
                <p className={`text-gray-200 text-lg leading-relaxed animated-text ${isVisible.block2 ? 'visible' : ''}`}>
                  {t('about.paragraph2')}
                </p>
              </div>
            </div>
          </div>

          {/* Bloc 3 */}
          <div 
            className="grid md:grid-cols-2 gap-10 items-center" 
            data-aos="fade-up"
            data-observe
            id="block3"
          >
            <div className={`content-block slide-left ${isVisible.block3 ? 'visible' : ''}`}>
              <div className="text-content">
                <p className={`text-gray-200 text-lg leading-relaxed animated-text mb-8 ${isVisible.block3 ? 'visible' : ''}`}>
                  {t('about.paragraph3')}
                </p>
                <div className={`flex gap-4 animated-text ${isVisible.block3 ? 'visible' : ''}`} style={{transitionDelay: '0.4s'}} data-aos="fade-up">
                  <button className="btn-enhanced btn-primary px-6 py-3 rounded-full">
                    {t('about.button1')}
                  </button>
                  <button className="btn-enhanced btn-secondary px-6 py-3 rounded-full">
                    {t('about.button2')}
                  </button>
                </div>
              </div>
            </div>
            <div className={`content-block slide-right ${isVisible.block3 ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
              <div className="enhanced-image">
                <img
                  src={imgFleet}
                  alt={t('about.image_alt3')}
                  className="object-cover w-full h-auto"
                  data-aos="zoom-in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;