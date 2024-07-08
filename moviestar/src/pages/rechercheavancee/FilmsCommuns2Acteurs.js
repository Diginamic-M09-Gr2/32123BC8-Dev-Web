import React, { useState } from 'react';
import backendRechercheService from '../../services/backendRechercheService';
import './FilmsCommuns2Acteurs.css'; // Import the CSS file

const FilmsCommuns2Acteurs = ({ onUpdateModalResults }) => {
    const [acteurId1, setActeurId1] = useState('');
    const [acteurId2, setActeurId2] = useState('');
    const [films, setFilms] = useState([]);

    const handleFilmsByTwoActeurId1Change = (e) => {
        setActeurId1(e.target.value);
    };

    const handleFilmsByTwoActeurId2Change = (e) => {
        setActeurId2(e.target.value);
    };

    const handleFetchFilmsByTwoActors = async () => {
        try {
            const response = await backendRechercheService.getFilmsByTwoActors(acteurId1, acteurId2);
            const results = response.data.map(film => `${film[0]} (${film[1]})`);
            onUpdateModalResults(`Films communs à deux acteurs`, results);
            setFilms(response.data);
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    return (
        <div className="films-communs-container">
            <h3>Films communs à deux Acteurs</h3>
            <label>
                Id Acteur 1:
                <input type="text" value={acteurId1} onChange={handleFilmsByTwoActeurId1Change} />
            </label>
            <label>
                Id Acteur 2:
                <input type="text" value={acteurId2} onChange={handleFilmsByTwoActeurId2Change} />
            </label>
            <button onClick={handleFetchFilmsByTwoActors}>Voir Films</button>
            <ul>
                {films.length > 0 ? (
                    films.map((film, index) => (
                        <li key={index}>
                            {film[0]} ({film[1]})
                        </li>
                    ))
                ) : (
                    <li>Pas de film correspondant</li>
                )}
            </ul>
        </div>
    );
};

export default FilmsCommuns2Acteurs;
