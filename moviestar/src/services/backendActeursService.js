import axios from 'axios';

/**
 * Gestion des erreurs pour les requêtes API.
 * @param {Error} error L'erreur survenue lors de la requête.
 * @throws {Error} Lance à nouveau l'erreur pour la gestion par l'appelant.
 */
const handleError = (error) => {
    console.error('Erreur lors de la requête API :', error);

    if (error.response) {
        console.error('Données de la réponse :', error.response.data);
        console.error('Statut de la réponse :', error.response.status);
        console.error('En-têtes de la réponse :', error.response.headers);
    } else if (error.request) {
        console.error('Aucune réponse reçue. Requête :', error.request);
    } else {
        console.error("Erreur lors de l'initialisation de la requête :", error.message);
    }

    throw error;
};

/**
 * Service backend pour les opérations liées aux acteurs.
 * @type {Object}
 */
const backendActeursService = {
    /**
     * Récupère tous les acteurs paginés.
     * @param {number} [page=0] Numéro de la page à récupérer.
     * @param {number} [size=10] Nombre d'éléments par page.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getAllActeurs: (page = 0, size = 10) =>
        axios.get(`/acteurs?page=${page}&size=${size}`).catch(handleError),

    /**
     * Récupère un acteur par son identifiant.
     * @param {string} id Identifiant de l'acteur à récupérer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getActeurById: (id) =>
        axios.get(`/acteurs/${id}`).catch(handleError),

    /**
     * Crée un nouvel acteur.
     * @param {Object} acteur Les données de l'acteur à créer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    createActeur: (acteur) =>
        axios.post(`/acteurs`, acteur).catch(handleError),

    /**
     * Met à jour un acteur existant.
     * @param {string} id Identifiant de l'acteur à mettre à jour.
     * @param {Object} acteur Les nouvelles données de l'acteur.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    updateActeur: (id, acteur) =>
        axios.put(`/acteurs/${id}`, acteur).catch(handleError),

    /**
     * Supprime un acteur par son identifiant.
     * @param {string} id Identifiant de l'acteur à supprimer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    deleteActeurById: (id) =>
        axios.delete(`/acteurs/${id}`).catch(handleError),

    /**
     * Récupère les films associés à un acteur par son identifiant.
     * @param {string} id Identifiant de l'acteur pour récupérer les films.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsByActeurId: (id) =>
        axios.get(`/acteurs/${id}/films`).catch(handleError),

    /**
     * Alias pour récupérer les films associés à un acteur par son identifiant.
     * @param {string} id Identifiant de l'acteur pour récupérer les films.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    fetchActeurFilms: (id) =>
        axios.get(`/acteurs/${id}/films`).catch(handleError),
};

export default backendActeursService;
