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
import { getJetById } from "../services/jetApiService";
import { useTranslation } from "react-i18next";

const JetDetails = () => {
  const { id } = useParams();
  const [jet, setJet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
 const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      offset: 50,
      easing: 'ease-in-out'
    });

    loadJetDetails();
  }, [id]);

  const loadJetDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const jetData = await getJetById(id);
      setJet(jetData);
      
      if (jetData?.image_url) {
        setSelectedImage(jetData.image_url);
      }
      
    } catch (error) {
      console.error("❌ Erreur lors du chargement des détails du jet:", error);
      
      let errorMessage = "Impossible de charger les détails de ce jet";
      
      if (error.message.includes('404')) {
        errorMessage = "Ce jet n'existe pas ou a été supprimé";
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = "Erreur de connexion au serveur";
      } else if (error.message.includes('500')) {
        errorMessage = "Erreur du serveur, veuillez réessayer plus tard";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Fonction améliorée pour gérer les erreurs d'images
  const handleImageError = (e, imageIndex = null) => {
    console.warn("Erreur de chargement d'image:", e.target.src);
    
    // Essayer différentes images de fallback
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
    loadJetDetails();
  };

  // États de chargement et d'erreur
  if (loading) {
    return (
      <div className="bg-gradient-to-r from-[#07171DFF] to-[#255e6d] min-h-screen text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="text-lg">Chargement des informations du jet...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-r from-[#07171DFF] to-[#255e6d] min-h-screen text-white flex items-center justify-center px-6">
        <div className="text-center space-y-6 max-w-md">
          <div className="text-red-400 text-6xl mb-4">
            <FaInfoCircle className="mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-red-400">Oops ! Une erreur s'est produite</h2>
          <p className="text-gray-300 text-lg">{error}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 justify-center"
            >
              🔄 Réessayer
            </button>
            <Link
              to="/"
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <FaArrowLeft /> Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!jet) return null;

  // Traitement des données du jet avec URLs corrigées
  const baseStorageUrl = import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || 'http://127.0.0.1:8000';
  
  // Correction des URLs d'images
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    
    // Si c'est déjà une URL complète, la retourner
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // Construire l'URL complète pour les images stockées
    return `${baseStorageUrl}/storage/${imagePath}`;
  };

  const imageUrl = getImageUrl(jet.image_url) || getImageUrl(jet.image) || "https://via.placeholder.com/800x400/2c3e50/ffffff?text=Pas+d%27Image";
  const otherImages = Array.isArray(jet?.other_images) ? jet.other_images.filter(img => img).map(getImageUrl) : [];
  const allImages = [imageUrl, ...otherImages].filter(Boolean);
  const currentImage = selectedImage || imageUrl;




  return (
    
    <div className="bg-gradient-to-r from-[#07171DFF] to-[#255e6d] min-h-screen text-white">
      {/* Navigation */}
      <div className="px-6 md:px-20 py-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="underline">Retour à la liste des jets</span>
          </Link>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="px-6 md:px-20 pb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header avec informations de base */}
          <div className="bg-gradient-to-r from-[#142f39] to-[#1a3c47] p-28 rounded-xl shadow-2xl" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold flex items-center gap-3">
                  <FaPlane className="text-blue-400" />
                  {jet.nom || "Jet Sans Nom"}
                </h1>
                {jet.modele && (
                  <p className="text-xl text-gray-300">
                    <span className="text-yellow-400 font-semibold">Modèle:</span> {jet.modele}
                  </p>
                )}
              </div>
              
              <div className="flex flex-wrap gap-6 lg:flex-col lg:items-end">
                <div className="bg-green-500/20 border border-green-500 rounded-lg px-4 py-2 flex items-center gap-2">
                  <FaUserFriends className="text-green-400" />
                  <span className="font-semibold">{jet.capacite || "N/A"} personnes</span>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg px-4 py-2 flex items-center gap-2">
                  <FaMoneyBillWave className="text-yellow-400" />
                  <span className="font-semibold text-xl">${jet.prix || "Sur demande"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section images */}
          <div className="bg-gradient-to-br from-[#142f39] to-[#1a3c47] p-8 rounded-xl shadow-2xl" data-aos="fade-up" data-aos-delay="100">
            
            {/* Image principale */}
            <div className="mb-8">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={currentImage}
                  alt={jet.nom || "Jet"}
                  onError={handleImageError}
                  className="w-full h-64 sm:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                  <FaImages />
                  Vue principale
                </span>
              </div>
            </div>

            {/* Miniatures avec keys corrigées */}
            {allImages.length > 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400 flex items-center gap-2">
                  <FaImages />
                  Galerie ({allImages.length} {allImages.length > 1 ? 'images' : 'image'})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {allImages.map((img, index) => (
                    <button
                      key={`jet-image-${jet.id}-${index}`} // ✅ Key unique corrigée
                      onClick={() => setSelectedImage(img)}
                      className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
                        currentImage === img 
                          ? 'ring-2 ring-yellow-400 scale-105' 
                          : 'hover:scale-105 hover:ring-2 hover:ring-blue-400'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Vue ${index + 1} - ${jet.nom || 'Jet'}`}
                        onError={(e) => handleImageError(e, index)}
                        className="w-full h-20 sm:h-24 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {currentImage === img && (
                        <div className="absolute top-1 right-1">
                          <FaCheckCircle className="text-yellow-400 text-sm" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          {jet.description && (
            <div className="bg-gradient-to-br from-[#142f39] to-[#1a3c47] p-8 rounded-xl shadow-2xl" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                <FaInfoCircle />
                Description
              </h3>
              <div className="text-gray-200 leading-relaxed text-lg">
                <p>{jet.description}</p>
              </div>
            </div>
          )}

          {/* Section réservation */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-xl shadow-2xl inline-block">
              <h3 className="text-2xl font-bold mb-4">{t("jetdetails.title")}</h3>
              <p className="text-green-100 mb-6">
               {t("jetdetails.content")}
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-white text-green-700 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-lg flex items-center gap-2 mx-auto animate__animated animate__pulse animate__infinite"
              >
                ✈️ {t("jetdetails.bouton")}
              </button>
            </div>
          </div>

          {/* Modal de réservation */}
          {showModal && (
            <ReservationModal 
              jet={jet} 
              onClose={() => setShowModal(false)} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JetDetails;