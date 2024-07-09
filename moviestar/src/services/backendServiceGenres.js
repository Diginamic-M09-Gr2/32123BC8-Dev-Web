const API_BASE_URL = 'http://localhost:8080'; // Remplacez par l'URL de votre backend

/**
 * Service backend pour les opérations liées aux genres.
 * @type {Object}
 */
const backendServiceGenres = {
    /**
     * Récupère la liste des genres depuis le backend.
     * @returns {Promise<any>} La promesse contenant les données des genres.
     * @throws {Error} Si une erreur se produit lors de la récupération des genres.
     */
    fetchGenres: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/genres`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erreur lors de la récupération des genres :', error);
            throw error;
        }
    },

    /**
     * Ajoute un nouveau genre dans la base de données du backend.
     * @param {string} genreName Nom du genre à ajouter.
     * @returns {Promise<any>} La promesse contenant les données de réponse du serveur après l'ajout.
     * @throws {Error} Si une erreur se produit lors de l'ajout du genre.
     */
    addGenre: async (genreName) => {
        try {
            const response = await fetch(`${API_BASE_URL}/genres`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: genreName }),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erreur lors de l\'ajout du genre :', error);
            throw error;
        }
    },

    /**
     * Met à jour un genre existant dans la base de données du backend.
     * @param {string} genreId Identifiant du genre à mettre à jour.
     * @param {Object} updatedGenre Nouvelles données du genre à mettre à jour.
     * @returns {Promise<any>} La promesse contenant les données de réponse du serveur après la mise à jour.
     * @throws {Error} Si une erreur se produit lors de la mise à jour du genre.
     */
    updateGenre: async (genreId, updatedGenre) => {
        try {
            const response = await fetch(`${API_BASE_URL}/genres/${genreId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedGenre),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Erreur lors de la mise à jour du genre avec l'identifiant ${genreId} :`, error);
            throw error;
        }
    },

    /**
     * Supprime un genre existant de la base de données du backend.
     * @param {string} genreId Identifiant du genre à supprimer.
     * @returns {Promise<any>} La promesse contenant les données de réponse du serveur après la suppression.
     * @throws {Error} Si une erreur se produit lors de la suppression du genre.
     */
    deleteGenre: async (genreId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/genres/${genreId}`, {
                method: 'DELETE',
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Erreur lors de la suppression du genre avec l'identifiant ${genreId} :`, error);
            throw error;
        }
    },
};

export default backendServiceGenres;
