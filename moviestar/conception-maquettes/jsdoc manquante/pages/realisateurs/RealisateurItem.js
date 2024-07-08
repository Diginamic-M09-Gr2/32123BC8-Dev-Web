import React from 'react';

/**
 * Composant RealisateurItem pour afficher les détails d'un réalisateur.
 * @param {Object} props - Propriétés du composant.
 * @param {Object} props.realisateur - Les détails du réalisateur à afficher.
 * @param {Function} props.onClick - Fonction appelée lors du clic sur le composant.
 * @param {boolean} props.isSelected - Indique si le réalisateur est sélectionné.
 * @returns {JSX.Element} Élément JSX représentant les détails d'un réalisateur.
 */
const RealisateurItem = ({ realisateur, onClick, isSelected }) => (
    <div onClick={onClick} className={`realisateur-item ${isSelected ? 'selected' : ''}`}>
        {/* Nom du réalisateur */}
        <strong>{realisateur.nom}</strong> <br />
        {/* Date de naissance du réalisateur */}
        Date de naissance: {realisateur.dateNaissance} <br />
        {/* Lieu de naissance du réalisateur */}
        Lieu de naissance: {realisateur.lieuNaissance} <br />
        {/* Id IMDB du réalisateur */}
        Id IMDB: {realisateur.idIMDB}
    </div>
);

export default RealisateurItem;
