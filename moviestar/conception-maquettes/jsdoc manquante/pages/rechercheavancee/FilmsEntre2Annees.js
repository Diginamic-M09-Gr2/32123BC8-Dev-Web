import React, { useState } from 'react';
import backendRechercheService from "../../services/backendRechercheService";

// Composant FilmsEntre2Annees
const FilmsEntre2Annees = ({ onUpdateModalResults }) => {
    // États pour stocker les années de début et de fin, ainsi que la liste des films
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [films, setFilms] = useState([]);

    // Gérer le changement de l'année de début
    const handleBetweenYearsStartYearChange = (e) => {
        setStartYear(e.target.value);
    };

    // Gérer le changement de l'année de fin
    const handleBetweenYearsEndYearChange = (e) => {
        setEndYear(e.target.value);
    };

    // Gérer la recherche des films entre deux années
    const handleFetchFilmsBetweenYears = async () => {
        try {
            // Appeler le service backend pour obtenir les films
            const response = await backendRechercheService.getFilmsReleasedBetweenYears(startYear, endYear);

            // Extraire les résultats de la réponse
            const results = response.data.map(film => `${film.nom} (${film.anneeSortie})`);

            // Mettre à jour les résultats dans le composant parent (si nécessaire)
            onUpdateModalResults(results);

            // Mettre à jour la liste des films dans l'état
            setFilms(response.data);
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    // Rendu du composant
    return (
        <div>
            <h2>Films entre deux années</h2>
            {/* Champ de saisie pour l'année de début */}
            <label>
                Start Year:
                <input type="text" value={startYear} onChange={handleBetweenYearsStartYearChange} />
            </label>
            <br />
            {/* Champ de saisie pour l'année de fin */}
            <label>
                End Year:
                <input type="text" value={endYear} onChange={handleBetweenYearsEndYearChange} />
            </label>
            <br />
            {/* Bouton pour déclencher la recherche des films */}
            <button onClick={handleFetchFilmsBetweenYears}>Fetch Films</button>
            {/* Liste des films */}
            <ul>
                {films.map((film, index) => (
                    <li key={index}>{film.nom} ({film.anneeSortie})</li>
                ))}
            </ul>
        </div>
    );
};

export default FilmsEntre2Annees;
