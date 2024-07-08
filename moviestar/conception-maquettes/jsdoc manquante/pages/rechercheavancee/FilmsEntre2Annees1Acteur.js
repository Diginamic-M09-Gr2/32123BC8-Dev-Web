import React, { useState } from 'react';
import backendRechercheService from "../../services/backendRechercheService";

// Composant FilmsEntre2Annees1Acteur
const FilmsEntre2Annees1Acteur = ({ onUpdateModalResults }) => {
    // États pour stocker les années de début et de fin, l'identifiant de l'acteur, et la liste des films
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [acteurId, setActeurId] = useState('');
    const [films, setFilms] = useState([]);

    // Gérer le changement de l'année de début
    const handleYearsAndByActeurStartYearChange = (e) => {
        setStartYear(e.target.value);
    };

    // Gérer le changement de l'année de fin
    const handleYearsAndByActeurEndYearChange = (e) => {
        setEndYear(e.target.value);
    };

    // Gérer le changement de l'identifiant de l'acteur
    const handleYearsAndByActeurIdChange = (e) => {
        setActeurId(e.target.value);
    };

    // Gérer la recherche des films entre deux années avec un acteur commun
    const handleFetchFilmsBetweenYearsAndByActeur = async () => {
        try {
            // Vérifier si acteurId est un nombre valide
            if (!isNaN(acteurId)) {
                // Appeler le service backend pour obtenir les films
                const response = await backendRechercheService.getFilmsReleasedBetweenYearsAndByActeur(startYear, endYear, acteurId);

                // Extraire les résultats de la réponse
                const results = response.data.map(film => `${film.nom} (${film.anneeSortie})`);

                // Mettre à jour les résultats dans le composant parent (si nécessaire)
                onUpdateModalResults(results);

                // Mettre à jour la liste des films dans l'état
                setFilms(response.data);
            } else {
                console.error('Invalid acteurId:', acteurId);
            }
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    // Rendu du composant
    return (
        <div>
            <h2>Films entre deux années avec un Acteur commun</h2>
            {/* Champ de saisie pour l'année de début */}
            <label>
                Start Year:
                <input type="text" value={startYear} onChange={handleYearsAndByActeurStartYearChange}/>
            </label>
            <br/>
            {/* Champ de saisie pour l'année de fin */}
            <label>
                End Year:
                <input type="text" value={endYear} onChange={handleYearsAndByActeurEndYearChange}/>
            </label>
            {/* Champ de saisie pour l'identifiant de l'acteur */}
            <label>
                Acteur Id:
                <input type="text" value={acteurId} onChange={handleYearsAndByActeurIdChange}/>
            </label>
            <br/>
            {/* Bouton pour déclencher la recherche des films */}
            <button onClick={handleFetchFilmsBetweenYearsAndByActeur}>Fetch Films</button>
            {/* Liste des films */}
            <ul>
                {films.length > 0 ? (
                    films.map((film, index) => (
                        <li key={index}>
                            <strong>Nom de Films:</strong> {film[0]},
                            <strong> Année de Sortie:</strong> {film[1]}
                        </li>
                    ))
                ) : (
                    <li>Renseigner un Id</li>
                )}
            </ul>
        </div>
    );
};

export default FilmsEntre2Annees1Acteur;
