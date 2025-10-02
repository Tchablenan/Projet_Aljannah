// src/services/jetService.js
import api from './api';

const jetService = {
  /**
   * Récupérer la liste des jets avec pagination et filtres
   * @param {Object} params - Paramètres de filtrage
   * @returns {Promise}
   */
  getJets: async (params = {}) => {
    try {
      const response = await api.get('/jets', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Récupérer les détails d'un jet spécifique
   * @param {number} jetId - ID du jet
   * @returns {Promise}
   */
  getJetById: async (jetId) => {
    try {
      const response = await api.get(`/jets/${jetId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Rechercher des jets avec filtres avancés
   * @param {Object} searchParams - Paramètres de recherche
   * @returns {Promise}
   */
  searchJets: async (searchParams) => {
    try {
      const response = await api.get('/jets/search', { params: searchParams });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Vérifier la disponibilité d'un jet pour des dates spécifiques
   * @param {number} jetId - ID du jet
   * @param {Object} dates - Dates de départ et d'arrivée
   * @returns {Promise}
   */
  checkAvailability: async (jetId, dates) => {
    try {
      const response = await api.post(`/jets/${jetId}/check-availability`, dates);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Récupérer les catégories de jets avec compteurs
   * @returns {Promise}
   */
  getCategories: async () => {
    try {
      const response = await api.get('/jets/categories');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Récupérer la plage de prix des jets
   * @returns {Promise}
   */
  getPriceRange: async () => {
    try {
      const response = await api.get('/jets/price-range');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default jetService;