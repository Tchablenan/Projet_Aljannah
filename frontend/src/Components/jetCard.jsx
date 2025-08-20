import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaMoneyBillWave, FaPlane } from 'react-icons/fa';

const JetCard = ({ jet }) => {
  // Utiliser image_url du backend, avec fallback sur image si nécessaire
  const imageUrl = jet.image_url || 
    (jet.image ? `${import.meta.env.VITE_API_BASE_URL}/storage/${jet.image}` : '/default-jet.jpg');
  
  console.log('🖼️ Image URL:', imageUrl); // Pour debug

  return (
    <div className="bg-gradient-to-r from-[#223941FF] to-[#255e6d] p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
      {/* Image */}
      <img
        src={imageUrl}
        alt={jet.nom}
        className="w-full h-48 object-cover rounded-xl mb-4"
        onError={(e) => {
          console.error('❌ Image failed to load:', imageUrl);
          e.target.src = '/default-jet.jpg'; // Fallback si l'image ne charge pas
        }}
      />
      
      {/* Infos */}
      <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2">
        <FaPlane className="text-blue-600" /> {jet.nom}
      </h3>
      
      {jet.modele && (
        <p className="text-sm text-gray-400 italic mb-2">Model: {jet.modele}</p>
      )}
      
      <div className="flex items-center gap-2 text-gray-100 mt-2">
        <FaUserFriends className="text-green-600" />
        <span className="text-sm">Capacity: {jet.capacite} persons</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-100 mt-1">
        <FaMoneyBillWave className="text-yellow-500" />
        <span className="text-sm">Price: {jet.prix}</span>
      </div>
      
      {/* Bouton */}
      <Link to={`/jet/${jet.id}`}>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JetCard;