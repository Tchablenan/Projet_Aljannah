// src/services/api.js
import axios from 'axios';

// URL de base de votre API Laravel
const API_BASE_URL =   import.meta.env.VITE_API_BASE_URL ??
  import.meta.env.VITE_API_URL ??
  'http://localhost:8000/api';

  console.log('API_BASE_URL =', API_BASE_URL); 

// Instance Axios avec configuration par défaut
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000, // 10 secondes
});

// Intercepteur pour les requêtes (optionnel - pour ajouter des tokens plus tard)
api.interceptors.request.use(
  (config) => {
    // Vous pouvez ajouter un token d'authentification ici si nécessaire
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses (gestion globale des erreurs)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Gestion globale des erreurs
    if (error.response) {
      // Erreur avec réponse du serveur
      console.error('API Error:', error.response.data);
      
      // Vous pouvez gérer des codes d'erreur spécifiques ici
      switch (error.response.status) {
        case 401:
          // Non authentifié
          console.error('Non authentifié');
          break;
        case 403:
          // Accès interdit
          console.error('Accès interdit');
          break;
        case 404:
          // Ressource non trouvée
          console.error('Ressource non trouvée');
          break;
        case 422:
          // Erreur de validation
          console.error('Erreur de validation:', error.response.data);
          break;
        case 500:
          // Erreur serveur
          console.error('Erreur serveur');
          break;
        default:
          console.error('Erreur API:', error.response.status);
      }
    } else if (error.request) {
      // Pas de réponse du serveur
      console.error('Pas de réponse du serveur');
    } else {
      // Erreur lors de la configuration de la requête
      console.error('Erreur de requête:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;