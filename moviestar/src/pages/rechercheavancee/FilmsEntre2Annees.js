import React, { useState } from 'react';
import backendRechercheService from '../../services/backendRechercheService';
import './FilmsEntre2Annees.css'; // Import the CSS file

const FilmsEntre2Annees = ({ onUpdateModalResults }) => {
    const [startYear, setStartYear] = useState(''); // État pour l'année de début
    const [endYear, setEndYear] = useState(''); // État pour l'année de fin
    const [films, setFilms] = useState([]); // État pour la liste des films

    /**
     * Met à jour l'état de l'année de début lorsqu'il y a un changement dans l'input.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement dans l'input.
     */
    const handleBetweenYearsStartYearChange = (e) => {
        setStartYear(e.target.value);
    };

    /**
     * Met à jour l'état de l'année de fin lorsqu'il y a un changement dans l'input.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement dans l'input.
     */
    const handleBetweenYearsEndYearChange = (e) => {
        setEndYear(e.target.value);
    };

    /**
     * Effectue une requête pour récupérer les films sortis entre les années spécifiées et met à jour l'état des films.
     * Appelle également la fonction onUpdateModalResults pour afficher les résultats dans un modal.
     */
    const handleFetchFilmsBetweenYears = async () => {
        try {
            const response = await backendRechercheService.getFilmsReleasedBetweenYears(startYear, endYear);
            const results = response.data.map(film => `${film.nom} (${film.anneeSortie})`);
            onUpdateModalResults(results);
            setFilms(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des films :', error);
        }
    };

    return (
        <div className="films-entre-annees-container">
            <h3>Films entre deux années</h3>
            <label>
                Année début :
                <input type="text" value={startYear} onChange={handleBetweenYearsStartYearChange} />
            </label>
            <label>
                Année de fin :
                <input type="text" value={endYear} onChange={handleBetweenYearsEndYearChange} />
            </label>
            <button onClick={handleFetchFilmsBetweenYears}>Valider</button>
        </div>
    );
};

export default FilmsEntre2Annees;
