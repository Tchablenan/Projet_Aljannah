import React, { useEffect, useState } from 'react';
import JetCard from './jetCard';
import { FaPlane, FaSuitcase } from 'react-icons/fa';
import { getJets } from '../services/jetApiService';

const JetsAvailableSection = () => {
  const [jets, setJets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJets = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const jetsData = await getJets();
        setJets(Array.isArray(jetsData) ? jetsData : []);
        
      } catch (error) {
        console.error("❌ Erreur lors du chargement des jets :", error);
        
        let errorMessage = 'Une erreur est survenue lors du chargement des jets';
        
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Impossible de se connecter au serveur. Vérifiez que votre serveur Laravel est démarré sur http://127.0.0.1:8000';
        } else if (error.message.includes('CORS')) {
          errorMessage = 'Erreur CORS : Le serveur bloque la requête cross-origin';
        } else if (error.status === 404) {
          errorMessage = 'L\'endpoint /api/jets est introuvable (404)';
        } else if (error.status === 500) {
          errorMessage = 'Erreur serveur interne (500) - Vérifiez les logs Laravel';
        } else if (error.message.includes('Expected JSON')) {
          errorMessage = 'Le serveur ne retourne pas du JSON valide';
        } else {
          errorMessage = error.message;
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchJets();
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };
 
  return (
    <>
      <section className="bg-gradient-to-r from-[#0B2027FF] to-[#255e6d] text-white py-32">
        <div className="container mx-auto px-6 md:px-20 flex items-center justify-between gap-12">
          <div className="hidden md:block w-1/5">
            <FaSuitcase className="text-6xl mx-auto text-yellow-500" />
          </div>
          <div className="text-center md:text-left md:w-3/5">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">Our Available Jets</h2>
            <p className="text-lg text-gray-300 mb-6 animate-slide-up">
              Explore our wide selection of private jets available for your next luxury flight.
            </p>
          </div>
          <div className="hidden md:block w-1/5">
            <FaPlane className="text-6xl mx-auto text-yellow-500" />
          </div>
        </div>
      </section>
      
      <section className="bg-gradient-to-r from-[#07171DFF] to-[#255e6d] text-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          {loading && (
            <div className="text-center">
              <p className="text-lg">Chargement des jets...</p>
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mt-4"></div>
            </div>
          )}
         
          {error && (
            <div className="text-center bg-red-900/30 border border-red-500 rounded-lg p-6 mb-8">
              <h3 className="text-red-400 text-xl mb-2">❌ Erreur</h3>
              <p className="text-red-300 text-lg mb-4">{error}</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleRetry}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg transition-colors"
                >
                  🔄 Réessayer
                </button>
                <button
                  onClick={() => console.log('Debug info in console')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  🔍 Debug Console
                </button>
              </div>
            </div>
          )}
         
          {!loading && !error && jets.length === 0 && (
            <div className="text-center">
              <p className="text-lg mb-4">Aucun jet disponible pour le moment.</p>
              <p className="text-sm text-gray-400">Vérifiez que votre base de données contient des jets.</p>
            </div>
          )}
         
          {!loading && !error && jets.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {jets.map(jet => (
                <JetCard key={jet.id} jet={jet} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JetsAvailableSection;