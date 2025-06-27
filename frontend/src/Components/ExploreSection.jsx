// src/components/ExploreSection.jsx
import React from 'react';
import planeImage from '../assets/element-2.png'; // Ton image à gauche

const ExploreSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#092C3AFF] to-[#184C58FF] py-16">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Image avec animation */}
        <div className="w-full md:w-1/2 animate-slide-left">
          <img
            src={planeImage}
            alt="Private Jet Silhouette"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Texte + bouton */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">Explore Our Offer</h2>
          <p className="text-lg text-justify  text-gray-100 mb-6">
            Discover the elegance, comfort and prestige of our private jet fleet. A personalized air travel experience just a click away.
          </p>
          <a
            href="/jets"
            className="inline-block bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition duration-300"
          >
            Browse Jets
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
