import axios from "axios";

/**
 * Service backend pour les opérations liées aux films.
 * @type {Object}
 */
const backendFilmService = {
    /**
     * Récupère tous les films paginés.
     * @param {number} [page=0] Numéro de la page à récupérer.
     * @param {number} [size=10] Nombre d'éléments par page.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getAllFilms: (page=0, size=10) =>
        axios.get(`/films?page=${page}&size=${size}`),

    /**
     * Récupère un film par son identifiant.
     * @param {string} id Identifiant du film à récupérer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmById: (id) => axios.get(`/films/${id}`),

    /**
     * Crée un nouveau film.
     * @param {Object} film Les données du film à créer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    createFilm: (film) => axios.post(`/films`, film),

    /**
     * Met à jour un film existant.
     * @param {string} id Identifiant du film à mettre à jour.
     * @param {Object} film Les nouvelles données du film.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    updateFilm: (id, film) => axios.put(`/films/${id}`, film),

    /**
     * Supprime un film par son identifiant.
     * @param {string} id Identifiant du film à supprimer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    deleteFilmById: (id) => axios.delete(`/films/${id}`),

    /**
     * Récupère les films par types de genres.
     * @param {string[]} genreTypes Tableau des types de genres à filtrer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsByGenres: (genreTypes) => axios.get(`/films/byGenres`, { params: { genreTypes } }),

    /**
     * Récupère les films par un type de genre spécifique.
     * @param {string} genreType Type de genre à filtrer.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsByGenre: (genreType) => axios.get(`/films/byGenre`, { params: { genreType } }),

    /**
     * Récupère les acteurs et les personnages d'un film par son identifiant.
     * @param {string} id Identifiant du film pour récupérer les acteurs et personnages.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getActorsAndCharactersByFilmId: (id) => axios.get(`/films/${id}/actors-and-characters`),

    /**
     * Récupère les films sortis entre deux années spécifiées.
     * @param {number} startYear Année de début de la période.
     * @param {number} endYear Année de fin de la période.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsReleasedBetweenYears: (startYear, endYear) => axios.get(`/films/released-between-years`, { params: { startYear, endYear } }),

    /**
     * Récupère les films associés à deux acteurs spécifiés.
     * @param {string} acteurId1 Identifiant du premier acteur.
     * @param {string} acteurId2 Identifiant du deuxième acteur.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsByTwoActors: (acteurId1, acteurId2) => axios.get(`/films/by-two-actors`, { params: { acteurId1, acteurId2 } }),

    /**
     * Récupère les films par identifiant de genre.
     * @param {string} genreId Identifiant du genre pour récupérer les films.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsByGenreId: (genreId) => axios.get(`/films/by-genre`, { params: { genreId } }),

    /**
     * Récupère les films entre deux années et par identifiant d'acteur spécifié.
     * @param {number} startYear Année de début de la période.
     * @param {number} endYear Année de fin de la période.
     * @param {string} acteurId Identifiant de l'acteur pour filtrer les films.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsBetweenYearsAndByActeur: (startYear, endYear, acteurId) =>
        axios.get(`/films/betweenYearsAndByActeur`, { params: { startYear, endYear, acteurId } }),
};

export default backendFilmService;
