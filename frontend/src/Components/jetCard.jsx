// src/components/JetCard.js
import React from 'react';

const JetCard = ({ jet }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
      <h3 className="text-2xl font-semibold text-gray-800">{jet.name}</h3>
      <p className="text-gray-600">Capacité : {jet.capacity} personnes</p>
      <p className="text-gray-600">Prix par heure : ${jet.price_per_hour}</p>
      <button className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-200">
        Réserver
      </button>
    </div>
  );
};

export default JetCard;
