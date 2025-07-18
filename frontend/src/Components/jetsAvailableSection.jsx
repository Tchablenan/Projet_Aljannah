// src/components/JetsAvailableSection.jsx
import React, { useEffect, useState } from 'react';
import JetCard from './jetCard';
import { FaPlane, FaSuitcase } from 'react-icons/fa';
import axios from 'axios';

const JetsAvailableSection = () => {
  const [jets, setJets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/jets') // ⚠️ adapte à ton URL/API réelle
      .then(response => {
        setJets(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des jets :", error);
        setError('Une erreur est survenue');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r from-[#0B2027FF] to-[#255e6d] text-white py-16">
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
          {loading && <p className="text-center text-lg">Chargement...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && jets.length === 0 && <p className="text-center">Aucun jet disponible pour le moment.</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jets.map(jet => (
              <JetCard key={jet.id} jet={jet} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JetsAvailableSection;
