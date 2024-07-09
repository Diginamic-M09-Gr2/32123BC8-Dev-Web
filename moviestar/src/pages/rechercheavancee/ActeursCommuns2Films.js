import React, { useState } from 'react';
import backendRechercheService from '../../services/backendRechercheService';
import './ActeursCommuns2Films.css'; // Import the CSS file

const ActeursCommuns2Films = ({ onUpdateModalResults }) => {
    const [filmId1, setFilmId1] = useState(''); // État pour l'ID du premier film
    const [filmId2, setFilmId2] = useState(''); // État pour l'ID du deuxième film
    const [acteurs, setActeurs] = useState([]); // État pour la liste des acteurs communs

    /**
     * Met à jour l'état de l'ID du premier film lorsqu'il y a un changement dans l'input.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement dans l'input.
     */
    const handleActeursInFilmId1Change = (e) => {
        setFilmId1(e.target.value);
    };

    /**
     * Met à jour l'état de l'ID du deuxième film lorsqu'il y a un changement dans l'input.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement dans l'input.
     */
    const handleActeursInFilmId2Change = (e) => {
        setFilmId2(e.target.value);
    };

    /**
     * Effectue une requête pour récupérer les acteurs communs aux deux films et met à jour l'état des acteurs.
     * Appelle également la fonction onUpdateModalResults pour afficher les résultats dans un modal.
     */
    const handleFetchActeursInFilms = async () => {
        try {
            const response = await backendRechercheService.getActeursInFilms(filmId1, filmId2);
            const results = response.data.map(acteur => acteur[0]);
            onUpdateModalResults(`Acteurs communs à deux films`, results);
            setActeurs(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des acteurs :', error);
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
        </div>
    );
};

export default ActeursCommuns2Films;
