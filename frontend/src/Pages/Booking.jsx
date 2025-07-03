import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Utilisation de React Router pour la navigation
import { FaPlane, FaCalendarAlt } from "react-icons/fa";
import moment from "moment"; // Import de moment.js

const BookingPage = () => {
  const navigate = useNavigate();

  // Gestion de l'état du formulaire
  const [planeType, setPlaneType] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Formater les dates au format YYYY-MM-DD
    const formattedArrivalDate = moment(arrivalDate, "MM/DD/YYYY").format("YYYY-MM-DD");
    const formattedDepartureDate = moment(departureDate, "MM/DD/YYYY").format("YYYY-MM-DD");

    const reservationData = {
      firstName,
      lastName,
      email,
      departureLocation,
      arrivalLocation,
      planeType,
      arrivalDate: formattedArrivalDate,  // Utilisation de la date formatée
      departureDate: formattedDepartureDate,  // Utilisation de la date formatée
      passengers,
    };

    console.log(reservationData);  // Vérification des données avant envoi

    // Envoyer les données à l'API
    fetch("http://127.0.0.1:8000/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Reservation Successful", data);
        navigate("/confirmation");
      })
      .catch((error) => {
        console.error("There was an error creating the reservation: ", error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <section className="bg-gradient-to-r from-[#02171FFF] to-[#255e6d] text-white py-16">
        <div className="container mx-auto px-6 md:px-20 flex items-center justify-between gap-12">
          <div className="hidden md:block w-1/5">
            <FaPlane className="text-6xl mx-auto text-yellow-500" />
          </div>
          <div className="text-center md:text-left md:w-3/5">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">
              Booking Your Private Jet
            </h2>
            <p className="text-lg text-gray-300 mb-6 animate-slide-up">
              Secure your private jet experience with us. Choose your preferred
              jet, schedule your flight, and enjoy a seamless travel experience
              like no other.
            </p>
          </div>
          <div className="hidden md:block w-1/5">
            <FaCalendarAlt className="text-6xl mx-auto text-yellow-500" />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#02171FFF] to-[#184C58FF] text-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-gradient-to-r from-[#02171FFF] to-[#184C58FF] p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
          >
            <h2 className="text-2xl mb-6 text-center text-yellow-500">
              Book Your Flight
            </h2>

            {/* Section pour le nom, prénom, et email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md"
                />
              </div>

              <div className="flex flex-col sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md"
                />
              </div>
            </div>

            {/* Lieu de départ */}
            <div className="mb-6">
              <label
                htmlFor="departureLocation"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Departure Location
              </label>
              <input
                type="text"
                id="departureLocation"
                value={departureLocation}
                onChange={(e) => setDepartureLocation(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                placeholder="e.g. Accra"
              />
            </div>

            {/* Lieu d’arrivée */}
            <div className="mb-6">
              <label
                htmlFor="arrivalLocation"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Arrival Location
              </label>
              <input
                type="text"
                id="arrivalLocation"
                value={arrivalLocation}
                onChange={(e) => setArrivalLocation(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                placeholder="e.g. Dubai International"
              />
            </div>

            {/* Sélecteur du type d'avion */}
            <div className="mb-6">
              <label
                htmlFor="planeType"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Plane Type
              </label>
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
              <label
                htmlFor="arrivalDate"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Arrival Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="arrivalDate"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  placeholder="MM / DD / YY"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                />
              </div>
            </div>

            {/* Sélecteur de date de départ */}
            <div className="mb-6">
              <label
                htmlFor="departureDate"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Departure Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="departureDate"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  placeholder="MM / DD / YY"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                />
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
                  <option key={num} value={num + 1}>
                    {num + 1} Passenger{num > 0 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Code promo */}

            {/* Bouton de réservation */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-600 transition duration-200"
            >
              <i className="fas fa-plane-departure mr-2"></i> Book Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
