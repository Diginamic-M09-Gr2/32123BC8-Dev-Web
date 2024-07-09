import React from 'react';
import './filminfo.css';

/**
 * Composant représentant les informations sur les films d'un réalisateur sélectionné.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.selectedRealisateur - Le réalisateur sélectionné, contenant les détails de sa filmographie.
 * @param {string} props.selectedRealisateur.nom - Le nom du réalisateur.
 * @param {Array} props.selectedRealisateur.films - La liste des films du réalisateur.
 * @returns {JSX.Element} Composant React pour afficher les informations sur les films du réalisateur sélectionné.
 */
const FilmInfo = ({ selectedRealisateur }) => {
    return (
        <div className="film-info">
            {selectedRealisateur && (
                <>
                    <h2>Filmographie de {selectedRealisateur.nom}</h2>
                    {selectedRealisateur.films ? (
                        <ul>
                            {selectedRealisateur.films.map((film, index) => (
                                <li key={index}>
                                    <p><strong>Titre:</strong> {film[0] || 'Inconnu'}</p>
                                    <p><strong>Année de Sortie:</strong> {film[1] || 'Inconnue'}</p>
                                    <p><strong>Langue:</strong> {film[2] || 'Inconnue'}</p>
                                    <p><strong>Pays:</strong> {film[3] || 'Inconnu'}</p>
                                    <p><strong>Rating:</strong> {film[4] || 'Inconnu'}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Pas de Films Disponibles</p>
                    )}
                </>
            )}
        </div>
    );
};

export default FilmInfo;
