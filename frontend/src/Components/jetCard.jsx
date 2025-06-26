// src/components/JetCard.js
import React from 'react';
import { Link } from 'react-router-dom';  
const JetCard = ({ jet }) => {
  return (
    <div className="bg-gradient-to-r from-[#223941FF] to-[#255e6d] p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
      {/* Image du jet */}
      <img
        src={jet.image}  // L'image est liée à l'objet jet
        alt={jet.name}
        className="w-full h-48 object-cover rounded-lg mb-4" // Assurez-vous que l'image occupe bien l'espace
      />
      {/* Détails du jet */}
      <h3 className="text-2xl font-semibold text-gray-100">{jet.name}</h3>
      <p className="text-gray-100">Capacity: {jet.capacity} persons</p>
      <p className="text-gray-100">Price per hour: ${jet.price_per_hour}</p>

      {/* Bouton pour réserver */}
      <Link to={`/jet/${jet.id}`}>
        <button className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-200">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JetCard;
