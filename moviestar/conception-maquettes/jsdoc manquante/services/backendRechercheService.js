import axios from 'axios';

/**
 * Service gérant les opérations liées à la recherche avancée.
 * @namespace backendRechercheService
 */
const backendRechercheService = {
    /**
     * Récupère les acteurs présents dans deux films spécifiés.
     * @memberof backendRechercheService
     * @param {number} filmId1 - L'ID du premier film.
     * @param {number} filmId2 - L'ID du deuxième film.
     * @returns {Promise} Une promesse qui se résout avec les acteurs communs aux deux films.
     */
    getActeursInFilms: (filmId1, filmId2) =>
        axios.get(`/acteurs/in-films`, {
            params: {
                filmId1: parseInt(filmId1),
                filmId2: parseInt(filmId2),
            },
        }),

    /**
     * Récupère les films communs à deux acteurs spécifiés.
     * @memberof backendRechercheService
     * @param {number} acteurId1 - L'ID du premier acteur.
     * @param {number} acteurId2 - L'ID du deuxième acteur.
     * @returns {Promise} Une promesse qui se résout avec les films communs aux deux acteurs.
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
     * @memberof backendRechercheService
     * @param {number} startYear - Année de début.
     * @param {number} endYear - Année de fin.
     * @returns {Promise} Une promesse qui se résout avec les films sortis entre les deux années.
     */
    getFilmsReleasedBetweenYears: (startYear, endYear) =>
        axios.get(`/films/released-between-years`, {
            params: {
                startYear: parseInt(startYear),
                endYear: parseInt(endYear),
            },
        }),

    /**
     * Récupère les films sortis entre deux années spécifiées et associés à un acteur particulier.
     * @memberof backendRechercheService
     * @param {number} startYear - Année de début.
     * @param {number} endYear - Année de fin.
     * @param {number} acteurId - L'ID de l'acteur.
     * @returns {Promise} Une promesse qui se résout avec les films associés à l'acteur entre les deux années.
     */
    getFilmsReleasedBetweenYearsAndByActeur: (startYear, endYear, acteurId) =>
        axios.get(`/films/betweenYearsAndByActeur`, {
            params: {
                startYear: parseInt(startYear),
                endYear: parseInt(endYear),
                acteurId: parseInt(acteurId),
            },
        }),
};

export default backendRechercheService;
