import React from 'react';
import RealisateurItem from './RealisateurItem';
import '../pageslist.css';

/**
 * Composant représentant une liste de réalisateurs.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {array} props.realisateurs - La liste des réalisateurs.
 * @param {function} props.handleRealisateurClick - La fonction à appeler lors du clic sur un réalisateur.
 * @returns {JSX.Element} Un élément représentant une liste de réalisateurs.
 */
const RealisateurList = ({ realisateurs, handleRealisateurClick }) => {
    return (
        <div className="pages-list">
            <ul>
                {realisateurs.map((realisateur, index) => (
                    <li key={index}>
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

export default RealisateurList;
