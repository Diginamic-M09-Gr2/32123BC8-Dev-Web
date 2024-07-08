import React from 'react';
import '../../../pages/realisateurs/realisateurs.css'; // Adjust the import path if needed
import FilmsItem from './FilmsItem'; // Import the FilmItem component

const FilmsList = ({ films, handleFilmClick }) => {
    return (
        <div className="realisateurs-list">
            <h2>Liste de Films</h2>
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