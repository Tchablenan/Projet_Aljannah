import React, { useEffect } from 'react';
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

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#092C3AFF] to-[#184C58FF] py-20 overflow-hidden" id="explore">
      {/* Élément décoratif flottant */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-yellow-600 rounded-full opacity-10 blur-2xl animate__animated animate__fadeInDown animate__slow"></div>

      <div className="container mx-auto px-6 md:px-20 space-y-20">
        {/* Bloc principal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image à gauche */}
          <div className="w-full md:w-1/2 text-center" data-aos="zoom-in">
            <img
              src={planeImage}
              alt={t('explore.image_alt_main')}
              className="w-full max-w-md mx-auto animate-float"
            />
          </div>

          {/* Texte à droite */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6" data-aos="fade-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l6-6m0 0l-6-6m6 6H3" />
              </svg>
              <h2 className="text-4xl sm:text-5xl font-bold text-gradient-aljannah">
                {t('explore.title')}
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-justify text-gray-200 leading-relaxed">
              {t('explore.description')}
            </p>

            {/* Bénéfices visuels */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white text-sm pt-2">
              <li className="flex items-center gap-2">✈️ {t('explore.benefits.booking')}</li>
              <li className="flex items-center gap-2">🔒 {t('explore.benefits.privacy')}</li>
              <li className="flex items-center gap-2">🕒 {t('explore.benefits.flexibility')}</li>
              <li className="flex items-center gap-2">💼 {t('explore.benefits.service')}</li>
            </ul>

            {/* Bouton call-to-action */}
            <a
              href="/jets"
              className="inline-block ripple-click bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition duration-300 hover:scale-105 mt-6"
              data-aos="fade-up"
            >
              {t('explore.button')}
            </a>
          </div>
        </div>

        {/* Galerie animée */}
        <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up">
          <img
            src={interiorImage}
            alt={t('explore.image_alt_interior')}
            className="rounded-lg shadow-lg w-full h-auto transition-transform duration-700 hover:scale-105"
          />
          <img
            src={diningImage}
            alt={t('explore.image_alt_dining')}
            className="rounded-lg shadow-lg w-full h-auto transition-transform duration-700 hover:scale-105"
          />
          <img
            src={amenitiesImage}
            alt={t('explore.image_alt_amenities')}
            className="rounded-lg shadow-lg w-full h-auto transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
