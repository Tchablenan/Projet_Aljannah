// src/components/JetsAvailableSection.jsx
import React, { useEffect, useState } from 'react';
import JetCard from './jetCard';
import { FaPlane, FaSuitcase } from 'react-icons/fa';
import axios from 'axios';

// Configuration de l'API pour Vite
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const JetsAvailableSection = () => {
  const [jets, setJets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJets = async () => {
      try {
        console.log('Fetching jets from:', `${API_BASE_URL}/jets`); // Pour debug
        
        const response = await axios.get(`${API_BASE_URL}/jets`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          timeout: 10000, // 10 secondes de timeout
        });
        
        setJets(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des jets :", error);
        
        // Gestion d'erreurs plus détaillée
        if (error.code === 'ECONNABORTED') {
          setError('Timeout: La requête a pris trop de temps');
        } else if (error.response) {
          setError(`Erreur serveur: ${error.response.status}`);
        } else if (error.request) {
          setError('Erreur de connexion au serveur');
        } else {
          setError('Une erreur est survenue');
        }
        
        setLoading(false);
      }
    };

    fetchJets();
  }, []);

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
            <div className="text-center">
              <p className="text-red-500 text-lg mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg transition-colors"
              >
                Réessayer
              </button>
            </div>
          )}
          
          {!loading && !error && jets.length === 0 && (
            <p className="text-center text-lg">Aucun jet disponible pour le moment.</p>
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