// src/components/FilmsList.js
import React from 'react';

/**
 * Composant pour afficher la liste des films.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.films - La liste des films à afficher.
 * @returns {JSX.Element} Composant de liste des films.
 */
const FilmsList = ({ films }) => (
    <ul>
        {films.map((film) => (
            <li key={film.filmId}>{film.nom}</li>
        ))}
    </ul>
);

export default FilmsList;
