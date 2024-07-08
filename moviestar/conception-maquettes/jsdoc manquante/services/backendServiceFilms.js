import axios from 'axios';

/**
 * Service gérant les opérations liées à la récupération des films par genre depuis le backend.
 * @namespace backendServiceFilms
 */
const backendServiceFilms = {
    /**
     * Récupère la liste des films en fonction d'un ID de genre spécifié.
     * @memberof backendServiceFilms
     * @param {number} genreId - L'ID du genre pour lequel récupérer les films.
     * @returns {Promise} Une promesse qui se résout avec la liste des films correspondant au genre.
     * @throws {Error} Une erreur si la récupération des films par genre échoue.
     */
    getFilmsByGenreId: async (genreId) => {
        try {
            const response = await axios.get(`http://localhost:8080/films/by-genre?genreId=${genreId}`);
            console.log('Réponse du serveur :', response.data); // Journalise les données de réponse
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default backendServiceFilms;
