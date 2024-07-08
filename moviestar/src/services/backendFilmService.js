import axios from "axios";

const backendFilmService = {
    getAllFilms: (page=0, size=10) =>
        axios.get(`/films?page=${page}&size=${size}`),
    getFilmById: (id) => axios.get(`/films/${id}`),
    createFilm: (film) => axios.post(`/films`, film),
    updateFilm: (id, film) => axios.put(`/films/${id}`, film),
    deleteFilmById: (id) => axios.delete(`/films/${id}`),
    getFilmsByGenres: (genreTypes) => axios.get(`/films/byGenres`, { params: { genreTypes } }),
    getFilmsByGenre: (genreType) => axios.get(`/films/byGenre`, { params: { genreType } }),
    getActorsAndCharactersByFilmId: (id) => axios.get(`/films/${id}/actors-and-characters`),
    getFilmsReleasedBetweenYears: (startYear, endYear) => axios.get(`/films/released-between-years`, { params: { startYear, endYear } }),
    getFilmsByTwoActors: (acteurId1, acteurId2) => axios.get(`/films/by-two-actors`, { params: { acteurId1, acteurId2 } }),
    getFilmsByGenreId: (genreId) => axios.get(`/films/by-genre`, { params: { genreId } }),
    getFilmsBetweenYearsAndByActeur: (startYear, endYear, acteurId) =>
        axios.get(`/films/betweenYearsAndByActeur`, { params: { startYear, endYear, acteurId } }),
};

export default backendFilmService;