import React, { useState } from 'react';
import backendRechercheService from '../../services/backendRechercheService';
import './FilmsEntre2Annees1Acteur.css'; // Import the CSS file
import Modal from './Modal'; // Assuming correct path to Modal component

const FilmsEntre2Annees1Acteur = ({ onUpdateModalResults }) => {
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [acteurId, setActeurId] = useState('');
    const [films, setFilms] = useState([]);
    const [modalContent, setModalContent] = useState(null);

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
                console.log(`Fetching films for acteurId: ${acteurId}, between ${startYear} and ${endYear}`);
                const response = await backendRechercheService.getFilmsReleasedBetweenYearsAndByActeur(startYear, endYear, acteurId);
                console.log('Response:', response);

                if (response.data && Array.isArray(response.data)) {
                    console.log('Response data:', response.data);
                    const formattedFilms = response.data.map(film => `${film[0]} (${film[1]})`);
                    onUpdateModalResults(formattedFilms);
                    setFilms(response.data);
                    setModalContent(formattedFilms); // Set formatted films for modal
                } else {
                    console.error('Invalid response format:', response);
                }
            } else {
                console.error('Invalid acteurId:', acteurId);
            }
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

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
