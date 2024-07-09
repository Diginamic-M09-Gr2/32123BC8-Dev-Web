import React from 'react';
import '../pageslist.css';

/**
 * Composant représentant un élément de film.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {object} props.film - Les informations du film.
 * @param {string} props.film.nom - Le nom du film.
 * @param {number} props.film.anneeSortie - L'année de sortie du film.
 * @param {string} props.film.lieuTournage - Le lieu de tournage du film.
 * @param {string} props.film.idIMDB - L'identifiant IMDB du film.
 * @param {number} props.film.rating - La note du film.
 * @param {string} props.film.urlProfile - L'URL de profil du film.
 * @param {string} props.film.langue - La langue du film.
 * @param {string} props.film.resume - Le résumé du film.
 * @param {string} props.film.pays - Le pays d'origine du film.
 * @param {string[]} props.film.genres - Les genres du film.
 * @param {function} props.onClick - La fonction à appeler lors d'un clic sur l'élément.
 * @returns {JSX.Element} Un élément représentant un film.
 */
const FilmsItem = ({ film, onClick }) => {
    return (
        <div className="pages-listitem-frame" onClick={onClick}>
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
