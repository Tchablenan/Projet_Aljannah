// src/pages/HomePage.js
import React, { useState } from 'react';
import heroPlane from '../assets/hero.png';  // Image de l'avion


import { Link } from 'react-router-dom';
import '../styles/animations.css';  // Assurez-vous d'avoir ce fichier pour les animations
import AboutSection from '../Components/AboutSection';  // Section "About Us"
import ExploreSection from '../Components/ExploreSection';  // Section "Explore Our Jets"
import OurServices from '../Components/OurServices';  // Section "Our Services"
import PrivateJetExperience from '../Components/PrivateJetExperience';  // Section "The Private Jet Experience"
import WhyChooseUs from '../Components/WhyChooseUs';
const HomePage = () => {
  // Gestion de l'état du formulaire
  const [planeType, setPlaneType] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  // Informations du client
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

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
 
      <section className="relative h-screen bg-gradient-to-r from-[#1b4f61] to-[#255e6d] text-white flex flex-col md:flex-row items-center justify-center md:justify-between  ">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Contenu centré avec texte et boutons */}
        <div className="relative z-10 flex flex-col items-center text-center md:text-left md:items-start">
        <div className="mb-16"></div>
          <h3 className="text-lg text-yellow-500 font-semibold mb-2 animate-slide-up md:text-2xl">
            Welcome To Aljannah Address!
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight  animate-slide-up">
            Luxury Experience<br />With Our Private Jet
          </h1>
          <p className="text-gray-200 mb-8 animate-slide-up text-sm md:text-lg">
            Enjoy full discretion, flexibility, and luxury. No queues. No delays. Just prestige air travel tailored to your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-200">
              Contact Us
            </button>
            <button className="border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition duration-200">
              About Us
            </button>
          </div>
        </div>

        {/* Image avion à droite */}
        <div className="mt-10 md:mt-0 w-full md:w-1/2">
          <img
            src={heroPlane}
            alt="Private Jet"
            className="max-w-full h-auto animate-float"
          />
        </div>
      </section>

      {/* Section "About Us" */}
      <AboutSection />



      {/* Nouvelle section pour visiter le catalogue des jets */}
      
         <ExploreSection />
      <PrivateJetExperience /> {/* Ajouter la section "The Private Jet Experience" ici */}
                <WhyChooseUs /> {/* Ajouter la section "Why Choose Us" ici */}
     
      {/* Section des jets disponibles */}

          {/* Formulaire de réservation */}
      <section className="bg-gradient-to-r from-[#02171FFF] to-[#184C58FF] text-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          <form onSubmit={handleSubmit} className="w-full bg-gradient-to-r from-[#02171FFF] to-[#184C58FF] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl mb-6 text-center text-yellow-500">Book Your Flight</h2>

            {/* Section pour le nom, prénom, et email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md"
                />
              </div>

              <div className="flex flex-col sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md"
                />
              </div>
            </div>

            {/* Sélecteur du type d'avion */}
            <div className="mb-6">
              <label htmlFor="planeType" className="block text-sm font-medium text-gray-300 mb-2">Plane Type</label>
              <div className="relative">
                <select
                  id="planeType"
                  value={planeType}
                  onChange={(e) => setPlaneType(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                >
                  <option value="">Select Your Plane</option>
                  <option value="hawker">Hawker 800XPi</option>
                  <option value="kingAir">Beechcraft King Air</option>
                  <option value="challenger">Challenger 604</option>
                </select>
              </div>
            </div>

            {/* Sélecteur de date d'arrivée */}
            <div className="mb-6">
              <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-300 mb-2">Arrival Date</label>
              <div className="relative">
                <input
                  type="text"
                  id="arrivalDate"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  placeholder="MM / DD / YY"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <i className="far fa-calendar-alt"></i>
                </div>
              </div>
            </div>

            {/* Sélecteur de date de départ */}
            <div className="mb-6">
              <label htmlFor="departureDate" className="block text-sm font-medium text-gray-300 mb-2">Departure Date</label>
              <div className="relative">
                <input
                  type="text"
                  id="departureDate"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  placeholder="MM / DD / YY"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <i className="far fa-calendar-alt"></i>
                </div>
              </div>
            </div>

            {/* Sélecteur de passagers */}
            <div className="flex items-center space-x-2 mb-6">
              <i className="far fa-user text-yellow-500"></i>
              <select
                id="passengers"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num + 1}>{num + 1} Passenger{num > 0 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            {/* Code promo */}
         

            {/* Bouton de réservation */}
            <button type="submit" className="w-full bg-yellow-500 text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-600 transition duration-200">
              <i className="fas fa-plane-departure mr-2"></i> Book Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
