// backendServiceGenres.js

// Assurez-vous que vous définissez API_BASE_URL quelque part, peut-être dans un fichier de configuration
const API_BASE_URL = 'http://localhost:8080'; // Remplacez cela par l'URL réelle de votre backend

/**
 * Service gérant les opérations liées aux genres depuis le backend.
 * @namespace backendServiceGenres
 */
const backendServiceGenres = {

    /**
     * Récupère la liste des genres depuis le backend.
     * @memberof backendServiceGenres
     * @returns {Promise} Une promesse qui se résout avec la liste des genres.
     * @throws {Error} Une erreur si la récupération des genres échoue.
     */
    fetchGenres: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/genres`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching genres:', error);
            throw error;
        }
    },

    /**
     * Ajoute un nouveau genre au backend.
     * @memberof backendServiceGenres
     * @param {string} genreName - Le nom du genre à ajouter.
     * @returns {Promise} Une promesse qui se résout avec les données du genre ajouté.
     * @throws {Error} Une erreur si l'ajout du genre échoue.
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
            console.error('Error adding genre:', error);
            throw error;
        }
    },

    /**
     * Modifie un genre existant sur le backend.
     * @memberof backendServiceGenres
     * @param {number} genreId - L'ID du genre à modifier.
     * @param {Object} updatedGenre - Les informations mises à jour pour le genre.
     * @returns {Promise} Une promesse qui se résout avec les données du genre modifié.
     * @throws {Error} Une erreur si la modification du genre échoue.
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
            console.error(`Error updating genre with ID ${genreId}:`, error);
            throw error;
        }
    },

    /**
     * Supprime un genre existant depuis le backend.
     * @memberof backendServiceGenres
     * @param {number} genreId - L'ID du genre à supprimer.
     * @returns {Promise} Une promesse qui se résout avec les données du genre supprimé.
     * @throws {Error} Une erreur si la suppression du genre échoue.
     */
    deleteGenre: async (genreId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/genres/${genreId}`, {
                method: 'DELETE',
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error deleting genre with ID ${genreId}:`, error);
            throw error;
        }
    },
};

export default backendServiceGenres;
