import axios from 'axios';


const handleError = (error) => {
    console.error('Error during API request:', error);

    if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
    } else if (error.request) {
        console.error('No response received. Request:', error.request);
    } else {
        console.error('Error setting up the request:', error.message);
    }

    throw error;
};

const backendActeursService = {
    getAllActeurs: (page = 0, size = 10) =>
        axios.get(`/acteurs?page=${page}&size=${size}`).catch(handleError),

    getActeurById: (id) =>
        axios.get(`/acteurs/${id}`).catch(handleError),

    createActeur: (acteur) =>
        axios.post(`/acteurs`, acteur).catch(handleError),

    updateActeur: (id, acteur) =>
        axios.put(`/acteurs/${id}`, acteur).catch(handleError),

    deleteActeurById: (id) =>
        axios.delete(`/acteurs/${id}`).catch(handleError),

    getFilmsByActeurId: (id) =>
        axios.get(`/acteurs/${id}/films`).catch(handleError),

    fetchActeurFilms: (id) =>
        axios.get(`/acteurs/${id}/films`).catch(handleError),

    // Additional methods based on repository queries
    // Add more methods as needed for your specific requirements
};

export default backendActeursService;
