// src/services/reservationService.js
import api from './api';

const reservationService = {
  /**
   * Créer une nouvelle réservation
   * @param {Object} reservationData - Données de la réservation
   * @returns {Promise}
   */
createReservation: async (reservationData) => {
  try {
    // 🔒 Sécurise: convertit toujours camelCase -> snake_case
    const payload = reservationService.formatReservationData(reservationData);

    // Log utile en dev
    // console.log("PAYLOAD envoyé à l'API:", payload);

    const response = await api.post('/reservations', payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      throw {
        type: 'validation',
        message: error.response.data.message,
        errors: error.response.data.errors || {}
      };
    }
    throw error;
  }
},


  /**
   * Vérifier le statut d'une réservation
   * @param {number} reservationId - ID de la réservation
   * @param {string} email - Email du client
   * @returns {Promise}
   */
  checkReservationStatus: async (reservationId, email) => {
    try {
      const response = await api.get(`/reservations/${reservationId}/status`, {
        params: { email }
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw {
          type: 'not_found',
          message: 'Réservation non trouvée'
        };
      }
      throw error;
    }
  },

  /**
   * Formater les données de réservation avant envoi
   * @param {Object} formData - Données brutes du formulaire
   * @returns {Object} Données formatées
   */
formatReservationData: (formData) => {
  
  return {
    first_name: formData.firstName || formData.first_name,
    last_name: formData.lastName || formData.last_name,
    email: formData.email,
    phone: formData.phone || null,
    departure_location: formData.departureLocation || formData.departure_location,
    arrival_location: formData.arrivalLocation || formData.arrival_location,
    departure_date: formData.departureDate || formData.departure_date,
    arrival_date: formData.arrivalDate || formData.arrival_date,
    passengers: parseInt(formData.passengers, 10),
    jet_id: parseInt(formData.jetId || formData.jet_id, 10),
    message: formData.message || null
  };
  
},

  /**
   * Valider les données de réservation côté client
   * @param {Object} data - Données à valider
   * @returns {Object} { isValid: boolean, errors: {} }
   */
  validateReservationData: (data) => {
    const errors = {};

    if (!data.first_name || data.first_name.trim() === '') {
      errors.first_name = 'Le prénom est requis';
    }

    if (!data.last_name || data.last_name.trim() === '') {
      errors.last_name = 'Le nom est requis';
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Email invalide';
    }

    if (!data.departure_location || data.departure_location.trim() === '') {
      errors.departure_location = 'Le lieu de départ est requis';
    }

    if (!data.arrival_location || data.arrival_location.trim() === '') {
      errors.arrival_location = "Le lieu d'arrivée est requis";
    }

    if (!data.departure_date) {
      errors.departure_date = 'La date de départ est requise';
    }

    if (!data.arrival_date) {
      errors.arrival_date = "La date d'arrivée est requise";
    }

    if (data.departure_date && data.arrival_date) {
      const departure = new Date(data.departure_date);
      const arrival = new Date(data.arrival_date);
      
      if (arrival <= departure) {
        errors.arrival_date = "La date d'arrivée doit être après le départ";
      }

      if (departure < new Date()) {
        errors.departure_date = 'La date de départ doit être future';
      }
    }

    if (!data.passengers || data.passengers < 1) {
      errors.passengers = 'Le nombre de passagers est requis';
    }

    if (!data.jet_id) {
      errors.jet_id = 'Veuillez sélectionner un jet';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};

export default reservationService;