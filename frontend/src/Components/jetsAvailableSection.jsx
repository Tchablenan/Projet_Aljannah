// src/pages/HomePage.js
import React from 'react';
import { jetsData } from '../data/jetsData';  // Importer les données des jets
import JetCard from '../Components/jetCard';  // Assurez-vous d'avoir un composant JetCard pour afficher chaque jet

const JetsAvailableSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-12 animate-slide-up">
          Our Available Jets
        </h2>
        
        {/* Grille des jets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jetsData.map((jet) => (
            <JetCard key={jet.id} jet={jet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JetsAvailableSection;
