import React, { useState } from 'react';
import backendRechercheService from '../../services/backendRechercheService';
import './FilmsEntre2Annees.css'; // Import the CSS file

const FilmsEntre2Annees = ({ onUpdateModalResults }) => {
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [films, setFilms] = useState([]);

    const handleBetweenYearsStartYearChange = (e) => {
        setStartYear(e.target.value);
    };

    const handleBetweenYearsEndYearChange = (e) => {
        setEndYear(e.target.value);
    };

    const handleFetchFilmsBetweenYears = async () => {
        try {
            const response = await backendRechercheService.getFilmsReleasedBetweenYears(startYear, endYear);
            const results = response.data.map(film => `${film.nom} (${film.anneeSortie})`);
            onUpdateModalResults(results);
            setFilms(response.data);
        } catch (error) {
            console.error('Error fetching films:', error);
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
