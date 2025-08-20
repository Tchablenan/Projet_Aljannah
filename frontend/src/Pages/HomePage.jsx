// src/pages/HomePage.js
import React, { useState } from "react";
import heroPlane from "../assets/hero.png"; // Image de l'avion

import { Link } from "react-router-dom";
import "../styles/animations.css"; // Assurez-vous d'avoir ce fichier pour les animations
import AboutSection from "../Components/AboutSection"; // Section "About Us"
import ExploreSection from "../Components/ExploreSection"; // Section "Explore Our Jets"
import OurServices from "../Components/OurServices"; // Section "Our Services"
import PrivateJetExperience from "../Components/PrivateJetExperience"; // Section "The Private Jet Experience"
import WhyChooseUs from "../Components/WhyChooseUs";
import { useTranslation } from 'react-i18next';


const HomePage = () => {
  
const { t } = useTranslation();

  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Section d'introduction avec dégradé de bleu */}
      <section className="relative bg-gradient-to-r from-[#1b4f61] to-[#255e6d] text-white px-4 sm:px-6 md:px-20 py-50 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
          {/* Image avion */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroPlane}
              alt="Private Jet"
              className="w-full max-w-[320px] sm:max-w-[450px] h-auto animate-float "
            />
          </div>

          {/* Contenu texte */}
          <div className="text-center md:text-left w-full md:w-1/2 space-y-6 animate__animated animate__fadeIn animate__delay-3s">
            <h1 className="text-xl sm:text-2xl text-gradient-aljannah font-semibold ">
              {t('intro.welcome')}
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
              {t('intro.title')}
              <br className="hidden sm:block" /> {t('intro.subtitle')}
            </h1>

            <p className="text-gray-200 text-justify text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              {t('intro.description')}
            </p>

          
          </div>
        </div>
      </section>

      {/* Section "About Us" */}
      <div ></div>
      <AboutSection />
      {/* Nouvelle section pour visiter le catalogue des jets */}
      <ExploreSection />
      <PrivateJetExperience />{" "}
      {/* Ajouter la section "The Private Jet Experience" ici */}
      <WhyChooseUs /> {/* Ajouter la section "Why Choose Us" ici */}
      {/* Section des jets disponibles */}
    </div>
  );
};

export default HomePage;
