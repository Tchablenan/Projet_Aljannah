import React, { useEffect } from 'react';
import planeImage from '../assets/element-2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';


const ExploreSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#092C3AFF] to-[#184C58FF] py-20 overflow-hidden">
      {/* Élément décoratif flottant */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-yellow-400 rounded-full opacity-10 blur-2xl animate__animated animate__fadeInDown animate__slow"></div>

      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Image à gauche */}
        <div className="w-full md:w-1/2 text-center" data-aos="zoom-in">
          <img
            src={planeImage}
            alt="Private Jet Silhouette"
            className="w-full max-w-md mx-auto animate-float"
          />
        </div>

        {/* Texte à droite */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6" data-aos="fade-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l6-6m0 0l-6-6m6 6H3" />
            </svg>
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow-500">
              Explore Our Offer
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-justify text-gray-200 leading-relaxed">
            Discover the elegance, comfort, and prestige of our private jet fleet.
            A personalized air travel experience is just a click away.
          </p>

          {/* Bénéfices visuels */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white text-sm pt-2">
            <li className="flex items-center gap-2">✈️ Instant Booking</li>
            <li className="flex items-center gap-2">🔒 Full Privacy</li>
            <li className="flex items-center gap-2">🕒 Flexible Scheduling</li>
            <li className="flex items-center gap-2">💼 Business-Class Service</li>
          </ul>

          {/* Bouton call-to-action avec effet clic */}
          <a
            href="/jets"
            className="inline-block ripple-click bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition duration-300 hover:scale-105 mt-6"
            data-aos="fade-up"
          >
            Browse Jets
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
