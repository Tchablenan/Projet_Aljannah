import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaMoneyBillWave, FaPlane, FaArrowRight } from 'react-icons/fa';

const JetCard = ({ jet }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Utiliser image_url du backend, avec fallback sur image si nécessaire
  const imageUrl = jet.image_url ||
    (jet.image ? `${import.meta.env.VITE_API_BASE_URL}/storage/${jet.image}` : '/default-jet.jpg');
 
  console.log('🖼️ Image URL:', imageUrl); // Pour debug

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    console.error('❌ Image failed to load:', imageUrl);
    e.target.src = '/default-jet.jpg';
  };

  return (
    <div 
      className="group relative overflow-hidden bg-gradient-to-r from-[#223941FF] to-[#255e6d] rounded-2xl shadow-2xl transition-all duration-700 ease-out transform hover:scale-[1.02] hover:shadow-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.3)'
          : '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Effet de brillance animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      {/* Bordure animée */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 z-10">
        {/* Container Image avec overlay */}
        <div className="relative overflow-hidden rounded-xl mb-6 group">
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="w-full h-48 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-xl animate-pulse" />
          )}
          
          {/* Image principale */}
          <img
            src={imageUrl}
            alt={jet.nom}
            className={`w-full h-48 object-cover rounded-xl transition-all duration-700 transform ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            } group-hover:scale-110`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badge premium flottant */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full transform translate-y-[-100px] group-hover:translate-y-0 transition-transform duration-500 delay-200">
            Premium
          </div>
        </div>

        {/* Header avec titre */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-3 group-hover:text-blue-300 transition-colors duration-300">
            <div className="relative">
              <FaPlane className="text-blue-400 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
              <div className="absolute inset-0 bg-blue-400 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              {jet.nom}
            </span>
          </h3>
          
          {jet.modele && (
            <p className="text-sm text-slate-400 italic mt-1 transform translate-x-8 group-hover:translate-x-9 transition-transform duration-300">
              Model: {jet.modele}
            </p>
          )}
        </div>

        {/* Stats avec animations individuelles */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-slate-200 transform group-hover:translate-x-2 transition-all duration-300 delay-100">
            <div className="relative">
              <FaUserFriends className="text-emerald-400 group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute inset-0 bg-emerald-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <span className="text-sm font-medium">Capacity: {jet.capacite} persons</span>
          </div>
          
          <div className="flex items-center gap-3 text-slate-200 transform group-hover:translate-x-2 transition-all duration-300 delay-200">
            <div className="relative">
              <FaMoneyBillWave className="text-yellow-400 group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <span className="text-sm font-medium">Price: {jet.prix}</span>
          </div>
        </div>

        {/* Bouton avec effet sophistiqué */}
        <Link to={`/jet/${jet.id}`}>
          <button className="relative w-full group/btn overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
            {/* Background animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            
            {/* Effet de ripple */}
            <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover/btn:scale-100 opacity-0 group-hover/btn:opacity-100 transition-all duration-500" />
            
            {/* Contenu du bouton */}
            <div className="relative flex items-center justify-center gap-2">
              <span className="transform group-hover/btn:translate-x-[-4px] transition-transform duration-300">
                View Details
              </span>
              <FaArrowRight className="transform group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
            </div>
          </button>
        </Link>
      </div>

      {/* Particules flottantes (effet subtil) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 15}%`,
              animationDelay: `${i * 200}ms`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default JetCard;