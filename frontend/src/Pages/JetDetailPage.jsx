// src/pages/JetDetailPage.js
import React from "react";
import { useParams } from "react-router-dom"; // Pour récupérer les paramètres d'URL
import { jetsData } from "../data/jetsData"; // Importer les données des jets
import { FaPlane, FaCalendarAlt } from "react-icons/fa";
const JetDetailPage = () => {
  const { id } = useParams(); // Récupérer l'id du jet à partir de l'URL
  const jet = jetsData.find((jet) => jet.id === parseInt(id)); // Trouver le jet en fonction de l'id

  if (!jet) {
    return <p>Jet not found!</p>; // Si le jet n'existe pas, afficher un message d'erreur
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Section des détails du jet */}
      <section className="bg-gradient-to-r from-[#02171FFF] to-[#255e6d] text-white py-16">
        <div className="container mx-auto px-6 md:px-20 flex items-center justify-between gap-12">
          {/* Icône de gauche (avion) */}
          <div className="hidden md:block w-1/5">
            <FaPlane className="text-6xl mx-auto text-yellow-500" />
          </div>

          {/* Titre et description */}
          <div className="text-center md:text-left md:w-3/5">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">
              {jet.name}t
            </h2>
            <p className="text-lg text-gray-300 mb-6 animate-slide-up">
              <p className="text-lg mb-6">Capacity: {jet.capacity} persons</p>
              <p className="text-lg mb-6">
                Price per hour: ${jet.price_per_hour}
              </p>
            </p>
          </div>

          {/* Icône de droite (calendrier) */}
          <div className="hidden md:block w-1/5">
            <FaCalendarAlt className="text-6xl mx-auto text-yellow-500" />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#1b4f61] to-[#255e6d] text-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          {/* Affichage de l'image */}
          <img
            src={jet.image} // Lien de l'image
            alt={jet.name}
            className="w-200 h-96 object-cover rounded-lg mb-8" // Classe Tailwind CSS pour bien gérer l'image
          />

          <h3 className="text-2xl font-semibold text-yellow-500">
            Jet Description
          </h3>
          <p className="text-gray-300 mt-4">
            This jet is the perfect choice for those looking to experience
            luxury travel with maximum comfort and style. It is equipped with
            all the amenities you need for a smooth and relaxing journey.
          </p>

          {/* Ajouter d'autres informations ici comme la description, les services disponibles, etc. */}

          <button className="mt-6 bg-yellow-500 text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-600 transition duration-200">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default JetDetailPage;
