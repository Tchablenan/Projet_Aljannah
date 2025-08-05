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
      <p className="text-center text-white py-10">
        Chargement des informations...
      </p>
    );
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!jet) return null;

  const imageUrl = jet?.image_url ?? "/default-jet.jpg";
  const otherImages = Array.isArray(jet?.other_images) ? jet.other_images : [];

  return (
    <div className="bg-gradient-to-r from-[#07171DFF] to-[#255e6d] min-h-screen text-white px-6 md:px-20 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Retour */}
        <div className="mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300">
          <FaArrowLeft />
          <Link to="/" className="text-sm underline">
            Retour à la liste
          </Link>
        </div>

        {/* Détails principaux */}
        <div className="bg-[#142f39] p-6 rounded-lg shadow-xl" data-aos="fade-up">
          <img
            src={imageUrl}
            alt={jet.nom ?? "Jet"}
            className="w-full h-64 sm:h-[400px] object-cover rounded-lg shadow mb-6"
          />

          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <FaPlane className="text-blue-600" /> {jet.nom}
          </h2>
          {jet.modele && (
            <p className="text-gray-300 italic mb-2">Modèle : {jet.modele}</p>
          )}
          <div className="flex items-center gap-2 mb-4 text-gray-100">
            <FaUserFriends className="text-green-500" />
            <span>Capacité : {jet.capacite} personnes</span>
          </div>
          <div className="flex items-center gap-2 mb-4 text-gray-100">
            <FaMoneyBillWave className="text-green-500" />
            <span>Prix : ${jet.prix}</span>
          </div>
          <div className="text-gray-200 leading-relaxed">
            <h4 className="font-semibold mb-2">Description :</h4>
            <p>{jet.description ?? "—"}</p>
          </div>

          {/* Section des images supplémentaires */}
          {otherImages.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
                Autres images du jet
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {otherImages.map((img, index) => (
                  <img
                    key={index}
                    src={`http://localhost:8000/storage/${img}`}
                    alt={`Other Image ${index + 1}`}
                    className="w-full h-32 sm:h-48 object-cover rounded-lg shadow"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Bouton Réservation */}
          <div className="text-center mt-8 animate__animated animate__fadeInUp">
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-green-600 transition-all duration-300"
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
