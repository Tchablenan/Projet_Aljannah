// src/pages/HomePage.js
import React, { useState } from "react";
import heroPlane from "../assets/hero.png"; // Image de l'avion

import { Link } from "react-router-dom";
import "../styles/animations.css"; // Assurez-vous d'avoir ce fichier pour les animations
import AboutSection from "../Components/AboutSection"; // Section "About Us"
import ExploreSection from "../Components/ExploreSection"; // Section "Explore Our Jets"
import OurServices from "../Components/OurServices"; // Section "Our Services"
import PrivateJetExperience from "../Components/PrivateJetExperience"; // Section "The Private Jet Experience"
import WhyChooseUs from "../Components/WhyChooseUs";
const HomePage = () => {
  // Gestion de l'état du formulaire
  const [planeType, setPlaneType] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  // Informations du client
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      planeType,
      arrivalDate,
      departureDate,
      passengers,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Section d'introduction avec dégradé de bleu */}
      <section className="relative bg-gradient-to-r from-[#1b4f61] to-[#255e6d] text-white px-4 sm:px-6 md:px-20 py-25 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
          {/* Image avion */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroPlane}
              alt="Private Jet"
              className="w-full max-w-[320px] sm:max-w-[450px] h-auto animate-float "
            />
          </div>

          {/* Contenu texte */}
          <div className="text-center md:text-left w-full md:w-1/2 space-y-6 animate__animated animate__fadeIn animate__delay-3s">
            <h1 className="text-xl sm:text-2xl text-yellow-500 font-semibold ">
              Welcome To Aljannah Address!
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
              Luxury Experience
              <br className="hidden sm:block" /> With Our Private Jet
            </h1>

            <p className="text-gray-200 text-justify text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Enjoy full discretion, flexibility, and luxury. No queues. No
              delays. Just prestige air travel tailored to your lifestyle. Every
              detail is curated to provide you with a smooth, secure, and
              sophisticated journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center animate__animated animate__fadeInUp animate__delay-4s">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-200 hover:scale-105">
                Contact Us
              </button>
              <button className="border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition duration-200 hover:scale-105">
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Section "About Us" */}
      <AboutSection />
      {/* Nouvelle section pour visiter le catalogue des jets */}
      <ExploreSection />
      <PrivateJetExperience />{" "}
      {/* Ajouter la section "The Private Jet Experience" ici */}
      <WhyChooseUs /> {/* Ajouter la section "Why Choose Us" ici */}
      {/* Section des jets disponibles */}
    </div>
  );
};

export default HomePage;
