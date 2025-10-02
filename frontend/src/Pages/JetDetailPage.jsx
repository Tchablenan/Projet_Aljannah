import React, { useEffect, useState } from "react";
import ReservationModal from "../Components/ReservationModal";
import { useParams, Link } from "react-router-dom";
import {
  FaPlane,
  FaUserFriends,
  FaMoneyBillWave,
  FaArrowLeft,
  FaImages,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import jetService from "../services/jetService";
import { useTranslation } from "react-i18next";

const JetDetails = () => {
  const { id } = useParams();
  const [jet, setJet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });

    loadJetDetails();
    
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [id]);

  const loadJetDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const jetData = await jetService.getJetById(id); // ✅ CORRECTION ICI
      setJet(jetData);
      
      if (jetData?.image_url) {
        setSelectedImage(jetData.image_url);
      }
      
    } catch (error) {
      console.error("❌ Erreur lors du chargement des détails du jet:", error);
      
      let errorMessage = "Impossible de charger les détails de ce jet";
      
      if (error.response?.status === 404) {
        errorMessage = "Ce jet n'existe pas ou a été supprimé";
      } else if (error.message?.includes('Failed to fetch')) {
        errorMessage = "Erreur de connexion au serveur";
      } else if (error.response?.status === 500) {
        errorMessage = "Erreur du serveur, veuillez réessayer plus tard";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (e, imageIndex = null) => {
    console.warn("Erreur de chargement d'image:", e.target.src);
    
    const fallbackImages = [
      "https://via.placeholder.com/800x400/2c3e50/ffffff?text=Image+Non+Disponible",
      "https://via.placeholder.com/800x400/34495e/ffffff?text=Jet+Image",
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3e%3crect width='100%25' height='100%25' fill='%23f8f9fa'/%3e%3ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%23666'%3eImage non disponible%3c/text%3e%3c/svg%3e"
    ];
    
    const currentFallbackIndex = e.target.dataset.fallbackIndex || 0;
    
    if (currentFallbackIndex < fallbackImages.length - 1) {
      e.target.dataset.fallbackIndex = parseInt(currentFallbackIndex) + 1;
      e.target.src = fallbackImages[parseInt(currentFallbackIndex) + 1];
    }
  };

  const handleRetry = () => {
    setIsVisible(false);
    setTimeout(() => {
      loadJetDetails();
      setIsVisible(true);
    }, 300);
  };

  // États de chargement avec animation améliorée
  if (loading) {
    return (
      <div className="bg-gradient-to-br from-[#07171DFF] via-[#1a2f3a] to-[#255e6d] min-h-screen text-white flex items-center justify-center relative overflow-hidden">
        {/* Particules flottantes en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute bg-blue-400/20 rounded-full animate-float"
              style={{
                width: `${20 + i * 10}px`,
                height: `${20 + i * 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>
        
        <div className="text-center space-y-6 z-10">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent border-t-yellow-500 border-r-blue-500 mx-auto"></div>
            <div className="animate-ping absolute inset-0 rounded-full h-16 w-16 border-2 border-yellow-500/30"></div>
          </div>
          <div className="space-y-2 animate-pulse">
            <p className="text-xl font-semibold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Chargement des informations du jet
            </p>
            <div className="flex justify-center space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={`dot-${i}`}
                  className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .animate-float {
            animation: float linear infinite;
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-[#07171DFF] via-[#1a2f3a] to-[#255e6d] min-h-screen text-white flex items-center justify-center px-6 relative overflow-hidden">
        {/* Effet de particules d'erreur */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={`error-particle-${i}`}
              className="absolute bg-red-500/10 rounded-full animate-pulse"
              style={{
                width: `${30 + i * 15}px`,
                height: `${30 + i * 15}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>
        
        <div className="text-center space-y-8 max-w-md z-10 animate-fade-in">
          <div className="relative">
            <div className="text-red-400 text-8xl mb-4 animate-bounce">
              <FaInfoCircle className="mx-auto drop-shadow-lg" />
            </div>
            <div className="absolute inset-0 text-red-400/20 text-8xl mb-4 animate-ping">
              <FaInfoCircle className="mx-auto" />
            </div>
          </div>
          
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold text-red-400 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Oops ! Une erreur s'est produite
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">{error}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={handleRetry}
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 justify-center"
            >
              <span className="group-hover:rotate-180 transition-transform duration-500">🔄</span>
              Réessayer
            </button>
            <Link
              to="/"
              className="group bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 justify-center"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
          .animate-slide-up {
            opacity: 0;
            animation: slide-up 0.6s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }

  if (!jet) return null;

  // Traitement des données du jet avec URLs corrigées
  const baseStorageUrl = import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || 'http://127.0.0.1:8000';
  
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return `${baseStorageUrl}/storage/${imagePath}`;
  };

  const imageUrl = getImageUrl(jet.image_url) || getImageUrl(jet.image) || "https://via.placeholder.com/800x400/2c3e50/ffffff?text=Pas+d%27Image";
  const otherImages = Array.isArray(jet?.other_images) ? jet.other_images.filter(img => img).map(getImageUrl) : [];
  const allImages = [imageUrl, ...otherImages].filter(Boolean);
  const currentImage = selectedImage || imageUrl;

  return (
    <>
      <div className={`bg-gradient-to-br from-[#07171DFF] via-[#1a2f3a] to-[#255e6d] min-h-screen text-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation avec animation améliorée */}
        <div className="px-6 md:px-20 py-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent animate-shimmer"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-all duration-500 group transform hover:scale-105"
              data-aos="fade-right"
            >
              <div className="bg-blue-500/20 p-2 rounded-full group-hover:bg-blue-500/30 transition-all duration-300 group-hover:rotate-12">
                <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              </div>
              <span className="underline decoration-2 underline-offset-4 hover:decoration-4 transition-all duration-300">
                Retour à la liste des jets
              </span>
            </Link>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="px-6 md:px-20 pb-16">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Header avec animations de texte */}
            <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-r from-[#142f39] to-[#1a3c47] p-8 rounded-xl shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold flex items-center gap-4 group">
                      <div className="relative">
                        <FaPlane className="text-blue-400 group-hover:text-blue-300 transition-all duration-300 transform group-hover:translate-x-2" />
                        <div className="absolute inset-0 text-blue-400/30 group-hover:animate-ping">
                          <FaPlane />
                        </div>
                      </div>
                      <span className="bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent animate-gradient">
                        {jet.nom || "Jet Sans Nom"}
                      </span>
                    </h1>
                    {jet.modele && (
                      <div className="overflow-hidden">
                        <p className="text-xl text-gray-300 transform animate-slide-in-bottom" style={{ animationDelay: '0.5s' }}>
                          <span className="text-yellow-400 font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Modèle:
                          </span> 
                          <span className="ml-2">{jet.modele}</span>
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-6 lg:flex-col lg:items-end">
                    <div className="group bg-green-500/20 border-2 border-green-500/50 rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-green-500/30 hover:border-green-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                      <FaUserFriends className="text-green-400 group-hover:animate-bounce" />
                      <span className="font-semibold text-lg">{jet.capacite || "N/A"} personnes</span>
                    </div>
                    <div className="group bg-yellow-500/20 border-2 border-yellow-500/50 rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-yellow-500/30 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                      <FaMoneyBillWave className="text-yellow-400 group-hover:animate-pulse" />
                      <span className="font-bold text-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        ${jet.prix || "Sur demande"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section images avec animations avancées */}
            <div className="relative group" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#142f39] to-[#1a3c47] p-8 rounded-xl shadow-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500">
                
                {/* Image principale avec effet de parallax */}
                <div className="mb-8">
                  <div className="relative group overflow-hidden rounded-xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10"></div>
                    <img
                      src={currentImage}
                      alt={jet.nom || "Jet"}
                      onError={handleImageError}
                      onLoad={() => setImageLoaded(true)}
                      className={`w-full h-64 sm:h-96 lg:h-[500px] object-cover transition-all duration-700 transform group-hover:scale-110 ${imageLoaded ? 'blur-0' : 'blur-sm'}`}
                      loading="lazy"
                    />
                    
                    {/* Overlay avec animation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"></div>
                    
                    {/* Badge animé */}
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 z-30 transform translate-x-0 group-hover:-translate-x-2 group-hover:-translate-y-1 transition-transform duration-300">
                      <FaImages className="animate-pulse" />
                      Vue principale
                    </span>
                    
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
                  </div>
                </div>

                {/* Miniatures avec animations en cascade */}
                {allImages.length > 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-yellow-400 flex items-center gap-3 group">
                      <FaImages className="group-hover:rotate-12 transition-transform duration-300" />
                      <span>Galerie ({allImages.length} {allImages.length > 1 ? 'images' : 'image'})</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {allImages.map((img, index) => (
                        <div
                          key={`jet-image-${jet.id}-${index}`}
                          className="animate-fade-in-scale"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <button
                            onClick={() => setSelectedImage(img)}
                            className={`relative group overflow-hidden rounded-lg transition-all duration-500 transform hover:-translate-y-2 ${
                              currentImage === img 
                                ? 'ring-2 ring-yellow-400 scale-105 shadow-yellow-400/50 shadow-lg' 
                                : 'hover:ring-2 hover:ring-blue-400 hover:shadow-blue-400/30 hover:shadow-lg'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Vue ${index + 1} - ${jet.nom || 'Jet'}`}
                              onError={(e) => handleImageError(e, index)}
                              className="w-full h-20 sm:h-24 object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Effet de sélection */}
                            {currentImage === img && (
                              <div className="absolute top-1 right-1 z-10 animate-bounce">
                                <div className="bg-yellow-400 rounded-full p-1">
                                  <FaCheckCircle className="text-black text-sm" />
                                </div>
                              </div>
                            )}
                            
                            {/* Numéro d'image */}
                            <div className="absolute bottom-1 left-1 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {index + 1}
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Description avec animation de typewriter */}
            {jet.description && (
              <div className="relative group" data-aos="fade-up" data-aos-delay="400">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-[#142f39] to-[#1a3c47] p-8 rounded-xl shadow-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500">
                  <h3 className="text-2xl font-semibold text-yellow-400 mb-6 flex items-center gap-3 group">
                    <div className="bg-yellow-500/20 p-2 rounded-full group-hover:bg-yellow-500/30 transition-all duration-300 group-hover:rotate-12">
                      <FaInfoCircle className="group-hover:animate-spin" />
                    </div>
                    <span>Description</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
                  </h3>
                  <div className="text-gray-200 leading-relaxed text-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <p className="hover:text-white transition-colors duration-300">{jet.description}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Section réservation avec animations spectaculaires */}
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="relative group inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl blur-xl group-hover:blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 p-8 rounded-xl shadow-2xl border-2 border-green-400/50 group-hover:border-green-300 transition-all duration-500">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                      {t("jetdetails.title")}
                    </h3>
                    <p className="text-green-100 text-lg leading-relaxed max-w-md mx-auto">
                      {t("jetdetails.content")}
                    </p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="group relative bg-white text-green-700 font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 text-lg flex items-center gap-3 mx-auto overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 group-hover:animate-bounce">✈️</span>
                      <span className="relative z-10">{t("jetdetails.bouton")}</span>
                      
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal de réservation avec transition améliorée */}
            {showModal && (
              <div className="fixed inset-0 z-50 animate-fade-in">
                <ReservationModal 
                  jet={jet} 
                  onClose={() => setShowModal(false)} 
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes slide-in-bottom {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-slide-in-bottom {
          opacity: 0;
          animation: slide-in-bottom 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-scale {
          opacity: 0;
          animation: fade-in-scale 0.6s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        /* Effets de hover personnalisés */
        .group:hover .animate-spin {
          animation-duration: 2s;
        }
      `}</style>
    </>
  );
};

export default JetDetails;