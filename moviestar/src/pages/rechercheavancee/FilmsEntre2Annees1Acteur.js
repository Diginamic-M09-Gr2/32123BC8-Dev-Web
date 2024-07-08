import React, { useState } from 'react';
import backendRechercheService from '../../services/backendRechercheService';
import './FilmsEntre2Annees1Acteur.css'; // Import the CSS file

const FilmsEntre2Annees1Acteur = ({ onUpdateModalResults }) => {
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [acteurId, setActeurId] = useState('');
    const [films, setFilms] = useState([]);

    const handleYearsAndByActeurStartYearChange = (e) => {
        setStartYear(e.target.value);
    };

    const handleYearsAndByActeurEndYearChange = (e) => {
        setEndYear(e.target.value);
    };

    const handleYearsAndByActeurIdChange = (e) => {
        setActeurId(e.target.value);
    };

    const handleFetchFilmsBetweenYearsAndByActeur = async () => {
        try {
            if (!isNaN(acteurId)) {
                const response = await backendRechercheService.getFilmsReleasedBetweenYearsAndByActeur(startYear, endYear, acteurId);
                const results = response.data.map(film => `${film.nom} (${film.anneeSortie})`);
                onUpdateModalResults(results);
                setFilms(response.data);
            } else {
                console.error('Invalid acteurId:', acteurId);
            }
        } catch (error) {
            console.error('Error fetching films:', error);
        }
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
            <button onClick={handleFetchFilmsBetweenYearsAndByActeur}>Voir Films</button>
            <ul>
                {films.length > 0 ? (
                    films.map((film, index) => (
                        <li key={index}>{film.nom} ({film.anneeSortie})</li>
                    ))
                ) : (
                    <li>Renseignez un Id</li>
                )}
            </ul>
        </div>
    );
};

export default FilmsEntre2Annees1Acteur;
