// src/components/JetsAvailableSection.jsx
import React from 'react';
import { jetsData } from '../data/jetsData';  // Importer les données des jets
import JetCard from './jetCard';  // Composant pour afficher chaque jet
import { FaPlane, FaSuitcase } from 'react-icons/fa'; // Icônes d'avion et de valise

const JetsAvailableSection = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#0B2027FF] to-[#255e6d] text-white py-16">
        <div className="container mx-auto px-6 md:px-20 flex items-center justify-between gap-12">
          
          {/* Icône de gauche (valise) */}
          <div className="hidden md:block w-1/5">
            <FaSuitcase className="text-6xl mx-auto text-yellow-500" />
          </div>

          {/* Titre et description */}
          <div className="text-center md:text-left md:w-3/5">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">Our Available Jets</h2>
            <p className="text-lg text-gray-300 mb-6 animate-slide-up">
              Explore our wide selection of private jets available for your next luxury flight. Choose your preferred jet, book now, and fly in style.
            </p>
          </div>

          {/* Icône de droite (avion) */}
          <div className="hidden md:block w-1/5">
            <FaPlane className="text-6xl mx-auto text-yellow-500" />
          </div>

        </div>
      </section>

      {/* Grille des jets */}
      <section className="bg-gradient-to-r from-[#07171DFF] to-[#255e6d] text-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jetsData.map((jet) => (
              <JetCard key={jet.id} jet={jet} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JetsAvailableSection;
