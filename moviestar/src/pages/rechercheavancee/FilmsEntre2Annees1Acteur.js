import React, { useState } from 'react';
import backendRechercheService from '../../services/backendRechercheService';
import './FilmsEntre2Annees1Acteur.css';

/**
 * Composant React pour trouver les films sortis entre deux années avec un acteur spécifique.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Function} props.onUpdateModalResults - Fonction pour mettre à jour les résultats dans un modal.
 * @returns {JSX.Element} Composant FilmsEntre2Annees1Acteur.
 */
const FilmsEntre2Annees1Acteur = ({ onUpdateModalResults }) => {
    const [startYear, setStartYear] = useState(''); // État pour l'année de début
    const [endYear, setEndYear] = useState(''); // État pour l'année de fin
    const [acteurId, setActeurId] = useState(''); // État pour l'ID de l'acteur
    const [films, setFilms] = useState([]); // État pour la liste des films
    const [modalContent, setModalContent] = useState(null); // État pour le contenu du modal

    /**
     * Met à jour l'état de l'année de début lorsqu'il y a un changement dans l'input.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement dans l'input.
     */
    const handleYearsAndByActeurStartYearChange = (e) => {
        setStartYear(e.target.value);
    };

    /**
     * Met à jour l'état de l'année de fin lorsqu'il y a un changement dans l'input.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement dans l'input.
     */
    const handleYearsAndByActeurEndYearChange = (e) => {
        setEndYear(e.target.value);
    };

    /**
     * Met à jour l'état de l'ID de l'acteur lorsqu'il y a un changement dans l'input.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement dans l'input.
     */
    const handleYearsAndByActeurIdChange = (e) => {
        setActeurId(e.target.value);
    };

    /**
     * Effectue une requête pour récupérer les films sortis entre les années spécifiées avec un acteur spécifique
     * et met à jour l'état des films. Appelle également la fonction onUpdateModalResults pour afficher les résultats dans un modal.
     */
    const handleFetchFilmsBetweenYearsAndByActeur = async () => {
        try {
            if (!isNaN(acteurId)) {
                console.log(`Récupération des films pour l'acteur avec l'ID : ${acteurId}, entre ${startYear} et ${endYear}`);
                const response = await backendRechercheService.getFilmsReleasedBetweenYearsAndByActeur(startYear, endYear, acteurId);
                console.log('Réponse :', response);

                if (response.data && Array.isArray(response.data)) {
                    console.log('Données de la réponse :', response.data);
                    const formattedFilms = response.data.map(film => `${film[0]} (${film[1]})`);
                    onUpdateModalResults(formattedFilms);
                    setFilms(response.data);
                    setModalContent(formattedFilms); // Définit les films formatés pour le modal
                } else {
                    console.error('Format de réponse invalide :', response);
                }
            } else {
                console.error('ID acteur invalide :', acteurId);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des films :', error);
        }
    };

    /**
     * Ferme le modal en réinitialisant le contenu du modal.
     */
    const handleCloseModal = () => {
        setModalContent(null);
    };

    return (
        <div className="films-entre-annees-acteur-container">
            <h3>Films entre deux années avec un Acteur commun</h3>
            <label>
                Année début :
                <input type="text" value={startYear} onChange={handleYearsAndByActeurStartYearChange} />
            </label>
            <label>
                Année de fin :
                <input type="text" value={endYear} onChange={handleYearsAndByActeurEndYearChange} />
            </label>
            <label>
                Id Acteur :
                <input type="text" value={acteurId} onChange={handleYearsAndByActeurIdChange} />
            </label>
            <button onClick={handleFetchFilmsBetweenYearsAndByActeur}>Valider</button>
        </div>
    );
};

export default FilmsEntre2Annees1Acteur;
