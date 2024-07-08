import React, { useState } from 'react';
import backendRechercheService from "../../services/backendRechercheService";

// Composant FilmsCommuns2Acteurs
const FilmsCommuns2Acteurs = ({ onUpdateModalResults }) => {
    // États pour stocker les identifiants des deux acteurs et la liste des films communs
    const [acteurId1, setActeurId1] = useState('');
    const [acteurId2, setActeurId2] = useState('');
    const [films, setFilms] = useState([]);

    // Gérer le changement de l'identifiant du premier acteur
    const handleFilmsByTwoActeurId1Change = (e) => {
        setActeurId1(e.target.value);
    };

    // Gérer le changement de l'identifiant du deuxième acteur
    const handleFilmsByTwoActeurId2Change = (e) => {
        setActeurId2(e.target.value);
    };

    // Gérer la recherche des films communs entre deux acteurs
    const handleFetchFilmsByTwoActors = async () => {
        try {
            // Appeler le service backend pour obtenir les films communs
            const response = await backendRechercheService.getFilmsByTwoActors(acteurId1, acteurId2);

            // Extraire les résultats de la réponse
            const results = response.data.map(film => `${film[0]} (${film[1]})`);

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
            <h2>Films communs à deux Acteurs</h2>
            {/* Champ de saisie pour l'identifiant du premier acteur */}
            <label>
                Id Premier Acteurs:
                <input type="text" value={acteurId1} onChange={handleFilmsByTwoActeurId1Change}/>
            </label>
            <br/>
            {/* Champ de saisie pour l'identifiant du deuxième acteur */}
            <label>
                Id Deuxieme Acteurs:
                <input type="text" value={acteurId2} onChange={handleFilmsByTwoActeurId2Change}/>
            </label>
            <br/>
            {/* Bouton pour déclencher la recherche des films communs */}
            <button onClick={handleFetchFilmsByTwoActors}>Fetch Films</button>
            {/* Liste des films communs */}
            <ul>
                {films.length > 0 ? (
                    films.map((film, index) => (
                        <li key={index}>
                            <strong>Nom de Films:</strong> {film[0]},
                            <strong> Année de Sortie:</strong> {film[1]}
                        </li>
                    ))
                ) : (
                    <li>No films found</li>
                )}
            </ul>
        </div>
    );
};

export default FilmsCommuns2Acteurs;
