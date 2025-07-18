import React, { useState } from "react";
import moment from "moment";

const ReservationModal = ({ jet, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [departureLocation, setDepartureLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      jet_id: jet.id,
      firstName,
      lastName,
      email,
      departureLocation,
      arrivalLocation,
      planeType: jet.modele ?? "Private Jet",
      arrivalDate: moment(arrivalDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
      departureDate: moment(departureDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
      passengers: 1,
    };

    fetch("http://127.0.0.1:8000/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Réservation effectuée avec succès !");
        onClose();
      })
      .catch((err) => console.error("Erreur réservation :", err));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
      <div className="bg-white text-black rounded-lg p-6 w-full max-w-xl animate__animated animate__fadeInUp">
        <h2 className="text-xl font-bold mb-4">Réserver le jet <span className="text-blue-600">{jet.nom}</span></h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="px-4 py-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="px-4 py-2 border rounded w-full"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Departure Location"
              value={departureLocation}
              onChange={(e) => setDepartureLocation(e.target.value)}
              required
              className="px-4 py-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Arrival Location"
              value={arrivalLocation}
              onChange={(e) => setArrivalLocation(e.target.value)}
              required
              className="px-4 py-2 border rounded w-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="Arrival Date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              required
              className="px-4 py-2 border rounded w-full"
            />
            <input
              type="date"
              placeholder="Departure Date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
              className="px-4 py-2 border rounded w-full"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Annuler
            </button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Réserver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
