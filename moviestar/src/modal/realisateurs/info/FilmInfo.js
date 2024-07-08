import React from 'react';
import './filminfo.css';

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
                                    <p><strong>Titre:</strong> {film[0] || 'Unknown'}</p>
                                    <p><strong>Année de Sortie:</strong> {film[1] || 'Unknown'}</p>
                                    <p><strong>Langue:</strong> {film[2] || 'Unknown'}</p>
                                    <p><strong>Pays:</strong> {film[3] || 'Unknown'}</p>
                                    <p><strong>Rating:</strong> {film[4] || 'Unknown'}</p>
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
