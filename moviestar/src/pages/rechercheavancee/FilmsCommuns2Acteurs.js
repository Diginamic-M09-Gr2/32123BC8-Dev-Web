import React, { useState } from 'react';
import backendRechercheService from '../../services/backendRechercheService';
import './FilmsCommuns2Acteurs.css'; // Import the CSS file

const FilmsCommuns2Acteurs = ({ onUpdateModalResults }) => {
    const [acteurId1, setActeurId1] = useState(''); // État pour l'ID du premier acteur
    const [acteurId2, setActeurId2] = useState(''); // État pour l'ID du deuxième acteur
    const [films, setFilms] = useState([]); // État pour la liste des films communs

    /**
     * Met à jour l'état de l'ID du premier acteur lorsqu'il y a un changement dans l'input.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement dans l'input.
     */
    const handleFilmsByTwoActeurId1Change = (e) => {
        setActeurId1(e.target.value);
    };

    /**
     * Met à jour l'état de l'ID du deuxième acteur lorsqu'il y a un changement dans l'input.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement dans l'input.
     */
    const handleFilmsByTwoActeurId2Change = (e) => {
        setActeurId2(e.target.value);
    };

    /**
     * Effectue une requête pour récupérer les films communs aux deux acteurs et met à jour l'état des films.
     * Appelle également la fonction onUpdateModalResults pour afficher les résultats dans un modal.
     */
    const handleFetchFilmsByTwoActors = async () => {
        try {
            const response = await backendRechercheService.getFilmsByTwoActors(acteurId1, acteurId2);
            const results = response.data.map(film => `${film[0]} (${film[1]})`);
            onUpdateModalResults(`Films communs à deux acteurs`, results);
            setFilms(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des films :', error);
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
            <button onClick={handleFetchFilmsByTwoActors}>Valider</button>
        </div>
    );
};

export default FilmsCommuns2Acteurs;
