// RealisateurItem.js
import React from 'react';
import '../pageslist.css';

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