import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Remplacez par l'URL réelle de votre backend

/**
 * Service gérant les opérations liées aux données des réalisateurs.
 * @namespace backendRealisateursService
 */
const backendRealisateursService = {
    /**
     * Récupère la liste de tous les réalisateurs.
     * @memberof backendRealisateursService
     * @returns {Promise} Une promesse qui se résout avec la liste des réalisateurs.
     */
    getAllRealisateurs: () => axios.get(`/realisateurs`),

    /**
     * Récupère les détails d'un réalisateur par son ID.
     * @memberof backendRealisateursService
     * @param {number} id - L'ID du réalisateur.
     * @returns {Promise} Une promesse qui se résout avec les détails du réalisateur.
     */
    getRealisateurById: (id) => axios.get(`/realisateurs/${id}`),

    /**
     * Crée un nouveau réalisateur.
     * @memberof backendRealisateursService
     * @param {Object} realisateur - Les données du réalisateur à créer.
     * @returns {Promise} Une promesse qui se résout lors de la création réussie du réalisateur.
     */
    createRealisateur: (realisateur) => axios.post(`/realisateurs`, realisateur),

    /**
     * Met à jour les détails d'un réalisateur par son ID.
     * @memberof backendRealisateursService
     * @param {number} id - L'ID du réalisateur à mettre à jour.
     * @param {Object} realisateur - Les données mises à jour pour le réalisateur.
     * @returns {Promise} Une promesse qui se résout lors de la mise à jour réussie du réalisateur.
     */
    updateRealisateur: (id, realisateur) => axios.put(`/realisateurs/${id}`, realisateur),

    /**
     * Supprime un réalisateur par son ID.
     * @memberof backendRealisateursService
     * @param {number} id - L'ID du réalisateur à supprimer.
     * @returns {Promise} Une promesse qui se résout lors de la suppression réussie du réalisateur.
     */
    deleteRealisateurById: (id) => axios.delete(`/realisateurs/${id}`),

    /**
     * Récupère la liste de films réalisés par un réalisateur.
     * @memberof backendRealisateursService
     * @param {number} id - L'ID du réalisateur.
     * @returns {Promise} Une promesse qui se résout avec la liste des films réalisés par le réalisateur.
     */
    getFilmsByRealisateurId: (id) => axios.get(`/realisateurs/${id}/films`),

    /**
     * Récupère les films associés à un réalisateur par son ID.
     * @memberof backendRealisateursService
     * @param {number} id - L'ID du réalisateur.
     * @returns {Promise} Une promesse qui se résout avec la liste des films associés au réalisateur.
     */
    fetchRealisateurFilms: (id) => axios.get(`/realisateurs/${id}/films`),

    // D'autres méthodes basées sur les requêtes du référentiel
    // Ajoutez plus de méthodes selon vos besoins spécifiques pour l'application
};

export default backendRealisateursService;
