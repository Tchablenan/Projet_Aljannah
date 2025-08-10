import React, { useEffect, useState } from "react";
import ReservationModal from "../Components/ReservationModal";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  FaPlane,
  FaUserFriends,
  FaMoneyBillWave,
  FaArrowLeft,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import ImageWithLoader from "../Components/ImageWithLoader";



const JetDetails = () => {
  const { id } = useParams();
  const [jet, setJet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    axios
      .get(`http://localhost:8000/api/jets/${id}`)
      .then((res) => {
        setJet(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API JetDetails:", err);
        setError("Jet introuvable.");
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <p className="text-center text-white py-10">Chargement des informations...</p>
    );
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!jet) return null;

  const imageUrl = jet?.image_url ?? "/default-jet.jpg";
  const otherImages = Array.isArray(jet?.other_images) ? jet.other_images : [];

  return (
    <div className="bg-gradient-to-r from-[#07171DFF] to-[#255e6d] min-h-screen text-white px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Navigation */}
        <div className="mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300">
          <FaArrowLeft />
          <Link to="/" className="text-sm underline">
            Retour à la liste
          </Link>
        </div>

        {/* Bloc principal */}
        <div className="bg-[#142f39] p-6 rounded-lg shadow-xl" data-aos="fade-up">
          <div className="relative group">
            <img
              src={imageUrl}
              alt={jet.nom ?? "Jet"}
              onError={(e) => (e.target.src = "/default-jet.jpg")}
              className="w-full h-64 sm:h-[400px] object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-2 right-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              Vue principale
            </span>
          </div>

          {/* Infos */}
          <h2 className="text-3xl font-bold mt-6 mb-2 flex items-center gap-2">
            <FaPlane className="text-blue-600" /> {jet.nom}
          </h2>
          {jet.modele && (
            <p className="text-gray-300 italic mb-2">Modèle : {jet.modele}</p>
          )}
          <div className="flex flex-wrap gap-6 mb-4 text-gray-100">
            <div className="flex items-center gap-2">
              <FaUserFriends className="text-green-500" />
              <span>Capacité : {jet.capacite} personnes</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-green-500" />
              <span>Prix : ${jet.prix}</span>
            </div>
          </div>

          <div className="text-gray-200 leading-relaxed" data-aos="fade-up">
            <h4 className="font-semibold mb-2">Description :</h4>
            <p>{jet.description ?? "—"}</p>
          </div>

          {/* Galerie d’images supplémentaires */}
          {otherImages.length > 0 && (
            <div className="mt-12 space-y-4" data-aos="fade-up">
              <h3 className="text-2xl font-semibold text-yellow-400 text-center">
                Autres vues du jet
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {otherImages.map((img, index) => (
                  <div key={img || index} className="group relative">
                    <img
                      src={`http://localhost:8000/storage/${img}`}
                      alt={`Vue ${index + 1}`}
                      onError={(e) => (e.target.src = "/default-jet.jpg")}
                      className="rounded-lg shadow-md w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Réservation */}
          <div className="text-center mt-10 animate__animated animate__fadeInUp">
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              ✈️ Réserver ce Jet
            </button>

            {showModal && (
              <ReservationModal jet={jet} onClose={() => setShowModal(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JetDetails;
