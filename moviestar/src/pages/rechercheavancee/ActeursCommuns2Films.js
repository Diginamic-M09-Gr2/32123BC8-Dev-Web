import React, { useState } from 'react';
import backendRechercheService from '../../services/backendRechercheService';
import './ActeursCommuns2Films.css'; // Import the CSS file

const ActeursCommuns2Films = ({ onUpdateModalResults }) => {
    const [filmId1, setFilmId1] = useState('');
    const [filmId2, setFilmId2] = useState('');
    const [acteurs, setActeurs] = useState([]);

    const handleActeursInFilmId1Change = (e) => {
        setFilmId1(e.target.value);
    };

    const handleActeursInFilmId2Change = (e) => {
        setFilmId2(e.target.value);
    };

    const handleFetchActeursInFilms = async () => {
        try {
            const response = await backendRechercheService.getActeursInFilms(filmId1, filmId2);
            const results = response.data.map(acteur => acteur[0]);
            onUpdateModalResults(`Acteurs communs à deux films`, results);
            setActeurs(response.data);
        } catch (error) {
            console.error('Error fetching acteurs:', error);
        }
    };

    return (
        <div className="acteurs-communs-container">
            <h3>Acteurs communs à deux Films</h3>
            <label>
                Id Film 1:
                <input type="text" value={filmId1} onChange={handleActeursInFilmId1Change} />
            </label>
            <label>
                Id Film 2:
                <input type="text" value={filmId2} onChange={handleActeursInFilmId2Change} />
            </label>
            <button onClick={handleFetchActeursInFilms}>Valider</button>
            <ul>
                {acteurs.length > 0 ? (
                    acteurs.map((acteur, index) => (
                        <li key={index}>{acteur[0]}</li>
                    ))
                ) : (
                    <li>Renseignez un id valide</li>
                )}
            </ul>
        </div>
    );
};

export default ActeursCommuns2Films;
