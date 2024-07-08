import React from 'react';
import '../realisateurs/ListRealisateurs.css';

const FilmsItem = ({ film, onClick }) => {
    return (
        <div className="listitem-frame" onClick={onClick}>
            <strong className="cinzel-font">Nom: {film.nom}</strong> <br />
            <span className="bebas-neue-font">Année de sortie: {film.anneeSortie}</span> <br />
            <span className="bebas-neue-font">Lieu de tournage: {film.lieuTournage}</span> <br />
            <span className="bebas-neue-font">ID IMDB: {film.idIMDB}</span> <br />
            <span className="bebas-neue-font">Rating: {film.rating}</span> <br />
            <span className="bebas-neue-font">URL de Profil: {film.urlProfile}</span> <br />
            <span className="bebas-neue-font">Langue: {film.langue}</span> <br />
            <span className="bebas-neue-font">Résumé: {film.resume}</span> <br />
            <span className="bebas-neue-font">Pays: {film.pays}</span> <br />
            <span className="bebas-neue-font">Genres: {film.genres.join(', ')}</span> <br />
        </div>
    );
};

export default FilmsItem;
