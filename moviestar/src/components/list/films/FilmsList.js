import React from 'react';
import '../../../pages/realisateurs/realisateurs.css';
import FilmsItem from './FilmsItem';

/**
 * Composant représentant une liste de films.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {array} props.films - La liste des films.
 * @param {function} props.handleFilmClick - La fonction à appeler lors du clic sur un film.
 * @returns {JSX.Element} Un élément représentant une liste de films.
 */
const FilmsList = ({ films, handleFilmClick }) => {
    return (
        <div className="pages-list">
            <ul>
                {films.map((film, index) => (
                    <li key={index}>
                        <FilmsItem
                            film={film}
                            onClick={() => handleFilmClick(film)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmsList;
