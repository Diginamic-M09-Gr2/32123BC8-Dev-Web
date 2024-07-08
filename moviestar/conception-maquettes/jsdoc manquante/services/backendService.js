import axios from 'axios';

/**
 * Service gérant les opérations liées à la communication avec le backend.
 * @namespace backendService
 */
const backendService = {
    /**
     * Récupère la liste des acteurs.
     * @memberof backendService
     * @returns {Promise} Une promesse qui se résout avec la liste des acteurs.
     * @throws {Error} Une erreur si la récupération des acteurs échoue.
     */
    fetchActeurs: async () => {
        try {
            const response = await axios.get('/acteurs/250/films');
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des acteurs :', error);
            throw error;
        }
    },

    /**
     * Récupère la liste des films.
     * @memberof backendService
     * @returns {Promise} Une promesse qui se résout avec la liste des films.
     * @throws {Error} Une erreur si la récupération des films échoue.
     */
    fetchFilms: async () => {
        try {
            const response = await axios.get('/films');
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des films :', error);
            throw error;
        }
    },

    /**
     * Récupère les détails d'un film spécifié par son ID.
     * @memberof backendService
     * @param {number} filmId - L'ID du film.
     * @returns {Promise} Une promesse qui se résout avec les détails du film.
     * @throws {Error} Une erreur si la récupération des détails du film échoue.
     */
    fetchFilmDetails: async (filmId) => {
        try {
            const response = await axios.get(`/films/${filmId}`);
            return response.data;
        } catch (error) {
            console.error(`Erreur lors de la récupération des détails du film pour l'ID ${filmId} :`, error);
            throw error;
        }
    },
};

export default backendService;
