// src/services/realisateurService.js
import axios from 'axios';


const backendRealisateursService = {
    getAllRealisateurs: (page = 0, size = 10) =>
        axios.get(`/realisateurs?page=${page}&size=${size}`),
    getRealisateurById: (id) => axios.get(`/realisateurs/${id}`),
    createRealisateur: (realisateur) => axios.post(`/realisateurs`, realisateur),
    updateRealisateur: (id, realisateur) => axios.put(`/realisateurs/${id}`, realisateur),
    deleteRealisateurById: (id) => axios.delete(`/realisateurs/${id}`),
    getFilmsByRealisateurId: (id) => axios.get(`/realisateurs/${id}/films`),
    fetchRealisateurFilms: (id) => axios.get(`/realisateurs/${id}/films`),

    // Additional methods based on repository queries
    // Add more methods as needed for your specific requirements
};

export default backendRealisateursService;