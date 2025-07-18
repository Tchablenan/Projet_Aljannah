import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Confirmation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#07171DFF] to-[#184C58FF] text-white px-6 py-12">
      <div className="bg-[#132F39] rounded-lg shadow-lg p-8 max-w-lg text-center animate__animated animate__fadeInUp">
        <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Reservation Confirmée ✈️</h1>
        <p className="text-gray-300 mb-6">
          Merci pour votre réservation. Vous recevrez une confirmation par email avec les détails du vol.
        </p>

        <Link to="/" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition duration-200">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
