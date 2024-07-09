import axios from 'axios';

// eslint-disable-next-line
const BASE_URL = 'http://localhost:8080'; // Remplacez cela par l'URL réelle de votre backend

/**
 * Service backend pour les opérations liées aux films.
 * @type {Object}
 */
const backendServiceFilms = {
  /**
   * Récupère les films par identifiant de genre.
   * @param {string} genreId Identifiant du genre pour récupérer les films.
   * @returns {Promise<any>} La promesse contenant les données de réponse du serveur.
   * @throws {Error} Si une erreur se produit lors de la requête.
   */
  getFilmsByGenreId: async (genreId) => {
    try {
      const response = await axios.get(`${BASE_URL}/films/by-genre?genreId=${genreId}`);
      console.log('Réponse du serveur :', response.data); // Enregistre les données de la réponse
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default backendServiceFilms;
