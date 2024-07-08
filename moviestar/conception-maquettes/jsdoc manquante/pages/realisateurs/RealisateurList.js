import React, { useRef } from 'react';
import '../../styles/realisateurs.css';
import RealisateurItem from './RealisateurItem';

/**
 * Composant RealisateursList pour afficher la liste des réalisateurs.
 * @param {Object} props - Propriétés du composant.
 * @param {Array} props.realisateurs - Liste des réalisateurs à afficher.
 * @param {Function} props.handleRealisateurClick - Fonction appelée lors du clic sur un réalisateur.
 * @returns {JSX.Element} Élément JSX représentant la liste des réalisateurs.
 */
const RealisateursList = ({ realisateurs, handleRealisateurClick }) => {
    // Référence pour le conteneur de la liste des réalisateurs
    const realisateursListRef = useRef();

    return (
        <div className="realisateurs-list" ref={realisateursListRef}>
            <ul>
                {realisateurs.map((realisateur) => (
                    <li key={realisateur.id}>
                        {/* Afficher le composant RealisateurItem pour chaque réalisateur */}
                        <RealisateurItem
                            realisateur={realisateur}
                            onClick={() => handleRealisateurClick(realisateur)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RealisateursList;
