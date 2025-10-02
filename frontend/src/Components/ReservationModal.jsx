import React, { useEffect, useRef, useState } from "react";
import { FaTimes, FaCheckCircle, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import jetService from "../services/jetService";

export default function ReservationModal({ jet, onClose }) {
  const navigate = useNavigate();
  const backdropRef = useRef(null);
  const firstFieldRef = useRef(null);

  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null); // {available:boolean, message:string}
  const [error, setError] = useState("");

  // --- Accessibilité & UX ---
  useEffect(() => {
    // Focus 1er champ + lock scroll
    firstFieldRef.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const closeIfBackdrop = (e) => {
    if (e.target === backdropRef.current) onClose?.();
  };

  const validate = () => {
    const errs = [];
    if (!departureDate) errs.push("La date de départ est requise.");
    if (!arrivalDate) errs.push("La date d'arrivée est requise.");
    if (departureDate && arrivalDate && arrivalDate <= departureDate) {
      errs.push("La date d'arrivée doit être après la date de départ.");
    }
    if (!passengers || passengers < 1) errs.push("Le nombre de passagers doit être ≥ 1.");
    setError(errs.join(" "));
    return errs.length === 0;
  };

  const checkAvailability = async () => {
    if (!validate()) return;
    setChecking(true);
    setError("");
    setResult(null);

    try {
      const res = await jetService.checkAvailability(jet.id, {
        departure_date: departureDate,
        arrival_date: arrivalDate,
      });
      setResult({
        available: !!res.available,
        message: res.message || (res.available ? "Jet disponible" : "Jet indisponible"),
      });
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        "Impossible de vérifier la disponibilité pour l’instant.";
      setError(msg);
    } finally {
      setChecking(false);
    }
  };

  const goToBooking = () => {
    // On passe le jet via l’URL (ta Booking.jsx lit jet_id depuis query)
    navigate(`/booking?jet_id=${jet.id}`, {
      state: {
        // Facile si tu veux préremplir plus tard
        prefill: { departureDate, arrivalDate, passengers },
      },
    });
    onClose?.();
  };

  return (
    <div
      ref={backdropRef}
      onClick={closeIfBackdrop}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="reservation-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#132F39] text-white shadow-2xl border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 id="reservation-title" className="text-xl font-bold">
            Réserver : {jet?.nom} {jet?.modele ? `– ${jet.modele}` : ""}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Fermer le modal"
            title="Fermer"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          {error && (
            <div className="p-3 rounded-lg border border-red-500 bg-red-500/15 text-red-200 text-sm">
              {error}
            </div>
          )}

          {result && (
            <div
              className={`p-3 rounded-lg border text-sm ${
                result.available
                  ? "border-green-500 bg-green-500/15 text-green-200"
                  : "border-yellow-500 bg-yellow-500/15 text-yellow-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle className={result.available ? "text-green-300" : "text-yellow-300"} />
                <span>{result.message}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="text-sm">
              <span className="block mb-1 text-gray-300">Date de départ</span>
              <div className="relative">
                <input
                  ref={firstFieldRef}
                  type="date"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  min={new Date().toISOString().slice(0, 10)}
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
                <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
              </div>
            </label>

            <label className="text-sm">
              <span className="block mb-1 text-gray-300">Date d'arrivée</span>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  min={departureDate || new Date().toISOString().slice(0, 10)}
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
                <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
              </div>
            </label>
          </div>

          <label className="block text-sm">
            <span className="block mb-1 text-gray-300">Passagers</span>
            <div className="relative">
              <input
                type="number"
                min={1}
                max={jet?.capacite || 50}
                className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value, 10) || 1)}
              />
              <FaUsers className="absolute right-3 top-3 text-gray-400" />
            </div>
            {jet?.capacite && (
              <p className="text-xs text-gray-400 mt-1">
                Capacité max de ce jet : {jet.capacite} passagers
              </p>
            )}
          </label>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 flex flex-col sm:flex-row gap-3 border-t border-white/10">
          <button
            onClick={checkAvailability}
            disabled={checking}
            className="flex-1 bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-300 transition disabled:opacity-60"
          >
            {checking ? "Vérification..." : "Vérifier la disponibilité"}
          </button>

          <button
            onClick={goToBooking}
            disabled={!result?.available}
            className="flex-1 bg-green-500 text-black font-semibold py-2 rounded-lg hover:bg-green-400 transition disabled:opacity-50"
            title={!result?.available ? "Vérifiez d'abord la disponibilité" : "Continuer vers la réservation"}
          >
            Continuer la réservation
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-700 text-white font-semibold py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
