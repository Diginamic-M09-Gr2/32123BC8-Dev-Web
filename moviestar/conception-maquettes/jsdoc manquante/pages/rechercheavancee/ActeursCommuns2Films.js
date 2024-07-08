import React, { useState } from 'react';
import backendRechercheService from "../../services/backendRechercheService";

// Composant ActeursCommuns2Films
const ActeursCommuns2Films = ({ onUpdateModalResults }) => {
    // États pour stocker les identifiants des deux films et la liste des acteurs communs
    const [filmId1, setFilmId1] = useState('');
    const [filmId2, setFilmId2] = useState('');
    const [acteurs, setActeurs] = useState([]);

    // Gérer le changement de l'identifiant du premier film
    const handleActeursInFilmId1Change = (e) => {
        setFilmId1(e.target.value);
    };

    // Gérer le changement de l'identifiant du deuxième film
    const handleActeursInFilmId2Change = (e) => {
        setFilmId2(e.target.value);
    };

    // Gérer la recherche des acteurs communs
    const handleFetchActeursInFilms = async () => {
        try {
            // Appeler le service backend pour obtenir les acteurs communs
            const response = await backendRechercheService.getActeursInFilms(filmId1, filmId2);

            // Extraire les résultats de la réponse
            const results = response.data.map(acteur => acteur[0]);

            // Mettre à jour les résultats dans le composant parent (si nécessaire)
            onUpdateModalResults(results);

            // Mettre à jour la liste des acteurs dans l'état
            setActeurs(response.data);
        } catch (error) {
            console.error('Error fetching acteurs:', error);
        }
    };

    // Rendu du composant
    return (
        <div>
            <h2>Acteurs communs à deux Films</h2>
            {/* Champ de saisie pour l'identifiant du premier film */}
            <label>
                Id Films 1:
                <input type="text" value={filmId1} onChange={handleActeursInFilmId1Change} />
            </label>
            <br />
            {/* Champ de saisie pour l'identifiant du deuxième film */}
            <label>
                Id Films 2:
                <input type="text" value={filmId2} onChange={handleActeursInFilmId2Change} />
            </label>
            <br />
            {/* Bouton pour déclencher la recherche des acteurs communs */}
            <button onClick={handleFetchActeursInFilms}>Valider</button>
            {/* Liste des acteurs communs */}
            <ul>
                {acteurs.length > 0 ? (
                    acteurs.map((acteur, index) => (
                        <li key={index}>
                            <strong>Acteurs:</strong> {acteur[0]},
                        </li>
                    ))
                ) : (
                    <li>Renseigner un id valide</li>
                )}
            </ul>
        </div>
    );
};

export default ActeursCommuns2Films;
