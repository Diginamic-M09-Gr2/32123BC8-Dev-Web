import axios from 'axios';

/**
 * Service backend pour les opérations liées aux réalisateurs.
 * @type {Object}
 */
const backendRealisateursService = {
    /**
     * Récupère tous les réalisateurs paginés.
     * @param {number} [page=0] Numéro de la page à récupérer.
     * @param {number} [size=10] Nombre d'éléments par page.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getAllRealisateurs: (page = 0, size = 10) =>
        axios.get(`/realisateurs?page=${page}&size=${size}`),

    /**
     * Récupère un réalisateur par son identifiant.
     * @param {string} id Identifiant du réalisateur à récupérer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getRealisateurById: (id) => axios.get(`/realisateurs/${id}`),

    /**
     * Crée un nouveau réalisateur.
     * @param {Object} realisateur Les données du réalisateur à créer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    createRealisateur: (realisateur) => axios.post(`/realisateurs`, realisateur),

    /**
     * Met à jour un réalisateur existant.
     * @param {string} id Identifiant du réalisateur à mettre à jour.
     * @param {Object} realisateur Les nouvelles données du réalisateur.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    updateRealisateur: (id, realisateur) => axios.put(`/realisateurs/${id}`, realisateur),

    /**
     * Supprime un réalisateur par son identifiant.
     * @param {string} id Identifiant du réalisateur à supprimer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    deleteRealisateurById: (id) => axios.delete(`/realisateurs/${id}`),

    /**
     * Récupère les films associés à un réalisateur par son identifiant.
     * @param {string} id Identifiant du réalisateur pour récupérer les films.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsByRealisateurId: (id) => axios.get(`/realisateurs/${id}/films`),

    /**
     * Alias pour récupérer les films associés à un réalisateur par son identifiant.
     * @param {string} id Identifiant du réalisateur pour récupérer les films.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    fetchRealisateurFilms: (id) => axios.get(`/realisateurs/${id}/films`),
};

export default backendRealisateursService;
