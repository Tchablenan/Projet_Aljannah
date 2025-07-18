import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";
import moment from "moment";
import { FaPlane, FaCalendarAlt } from "react-icons/fa";
const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jetId = searchParams.get("jet_id");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      jet_id: jetId ?? null,
      firstName,
      lastName,
      email,
      departureLocation,
      arrivalLocation,
      planeType: "Private Jet",
      arrivalDate: moment(arrivalDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
      departureDate: moment(departureDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
      passengers: 1,
    };

    fetch("http://127.0.0.1:8000/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => navigate("/confirmation"))
      .catch((err) => console.error("Erreur création :", err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#07171DFF] to-[#184C58FF] text-white px-6 py-12">
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
      <div className="max-w-2xl mx-auto bg-[#132F39] rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-yellow-500">
            ✈️ Réserver votre Jet Privé
          </h1>
          {jetId && (
            <span className="text-sm text-gray-300 italic">
              Jet sélectionné : <strong>ID #{jetId}</strong>
            </span>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Departure Location"
              value={departureLocation}
              onChange={(e) => setDepartureLocation(e.target.value)}
              required
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Arrival Location"
              value={arrivalLocation}
              onChange={(e) => setArrivalLocation(e.target.value)}
              required
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="Arrival Date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              required
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
            <input
              type="date"
              placeholder="Departure Date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-full hover:bg-yellow-600 transition duration-200"
          >
            <FaPlaneDeparture className="inline mr-2" />
            Valider la Réservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
