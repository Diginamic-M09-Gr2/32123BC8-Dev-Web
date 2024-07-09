import axios from 'axios';

/**
 * Service backend pour les opérations de recherche avancée.
 * @type {Object}
 */
const backendRechercheService = {
    /**
     * Récupère les acteurs présents dans deux films spécifiés.
     * @param {number} filmId1 Identifiant du premier film.
     * @param {number} filmId2 Identifiant du deuxième film.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getActeursInFilms: (filmId1, filmId2) =>
        axios.get(`/acteurs/in-films`, {
            params: {
                filmId1: parseInt(filmId1),
                filmId2: parseInt(filmId2),
            },
        }),

    /**
     * Récupère les films associés à deux acteurs spécifiés.
     * @param {number} acteurId1 Identifiant du premier acteur.
     * @param {number} acteurId2 Identifiant du deuxième acteur.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsByTwoActors: (acteurId1, acteurId2) =>
        axios.get(`/films/by-two-actors`, {
            params: {
                acteurId1: parseInt(acteurId1),
                acteurId2: parseInt(acteurId2),
            },
        }),

    /**
     * Récupère les films sortis entre deux années spécifiées.
     * @param {number} startYear Année de début de la période.
     * @param {number} endYear Année de fin de la période.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsReleasedBetweenYears: (startYear, endYear) =>
        axios.get(`/films/released-between-years`, {
            params: {
                startYear: parseInt(startYear),
                endYear: parseInt(endYear),
            },
        }),

    /**
     * Récupère les films sortis entre deux années spécifiées et associés à un acteur spécifié.
     * @param {number} startYear Année de début de la période.
     * @param {number} endYear Année de fin de la période.
     * @param {number} acteurId Identifiant de l'acteur pour filtrer les films.
     * @returns {Promise<AxiosResponse<any>>} La promesse contenant la réponse de la requête.
     */
    getFilmsReleasedBetweenYearsAndByActeur: (startYear, endYear, acteurId) =>
        axios.get(`/films/betweenYearsAndByActeur`, {
            params: {
                startYear: parseInt(startYear),
                endYear: parseInt(endYear),
                acteurId: parseInt(acteurId)
            },
        }),
};

export default backendRechercheService;
