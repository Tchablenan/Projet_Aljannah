import React, { useEffect } from 'react';
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

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#101213FF] to-[#255e6d] text-white py-20 overflow-hidden" id="experience">
      <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-r from-[#4B2E09FF] to-[#6D6825FF] opacity-10 blur-2xl rounded-full animate__animated animate__fadeInDown animate__slow"></div>

      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2" data-aos="zoom-in">
          <img
            src={mainImage}
            alt={t("privateJetExperience.alt.main")}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg transform transition duration-1000 hover:scale-105"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left space-y-6" data-aos="fade-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient-aljannah animate__animated animate__fadeInDown animate__delay-1s">
            {t("privateJetExperience.title")}
          </h2>

          <p className="text-lg sm:text-xl text-justify text-gray-300 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
            {t("privateJetExperience.paragraph1")}
          </p>

          <p className="text-lg sm:text-xl text-justify text-gray-300 leading-relaxed animate__animated animate__fadeIn animate__delay-2-5s">
            {t("privateJetExperience.paragraph2")}
          </p>

          <a
            href="/jets"
            className="ripple-click inline-block btn-gradient-aljannah  text-black px-6 py-3 rounded-full font-semibold mt-4 hover:bg-yellow-600 hover:text-white transition duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            {t("privateJetExperience.cta")}
          </a>
        </div>
      </div>

      <div className="mt-16 px-6 md:px-20" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img src={interior} alt={t("privateJetExperience.alt.interior")} className="rounded-lg shadow-md hover:scale-105 transition duration-300" />
          </div>
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img src={champagne} alt={t("privateJetExperience.alt.champagne")} className="rounded-lg shadow-md hover:scale-105 transition duration-300" />
          </div>
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img src={lounge} alt={t("privateJetExperience.alt.lounge")} className="rounded-lg shadow-md hover:scale-105 transition duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateJetExperience;
