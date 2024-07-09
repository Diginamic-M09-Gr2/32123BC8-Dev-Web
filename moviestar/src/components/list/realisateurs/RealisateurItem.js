import React from 'react';
import '../pageslist.css';

/**
 * Composant représentant un élément de réalisateur.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {object} props.realisateur - Les informations du réalisateur.
 * @param {string} props.realisateur.nom - Le nom du réalisateur.
 * @param {string} props.realisateur.dateNaissance - La date de naissance du réalisateur.
 * @param {string} props.realisateur.lieuNaissance - Le lieu de naissance du réalisateur.
 * @param {string} props.realisateur.idIMDB - L'identifiant IMDB du réalisateur.
 * @param {function} props.onClick - La fonction à appeler lors d'un clic sur l'élément.
 * @returns {JSX.Element} Un élément représentant un réalisateur.
 */
const RealisateurItem = ({ realisateur, onClick }) => {
    return (
        <div className="pages-listitem-frame" onClick={onClick}>
            <strong className="cinzel-font">{realisateur.nom}</strong> <br />
            <span className="bebas-neue-font">Date de naissance: {realisateur.dateNaissance}</span> <br />
            <span className="bebas-neue-font">Lieu de naissance: {realisateur.lieuNaissance}</span> <br />
            <span className="bebas-neue-font">Id IMDB: {realisateur.idIMDB}</span>
        </div>
    );
};

export default RealisateurItem;
