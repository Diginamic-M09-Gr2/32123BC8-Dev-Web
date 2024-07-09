import React, { useRef } from 'react';
import '../pageslist.css';
import ActeurItem from './ActeurItem';

/**
 * Composant représentant une liste d'acteurs.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {array} props.acteurs - La liste des acteurs.
 * @param {function} props.handleActeurClick - La fonction à appeler lors du clic sur un acteur.
 * @returns {JSX.Element} Un élément représentant une liste d'acteurs.
 */
const ActeursList = ({ acteurs, handleActeurClick }) => {
    const acteursListRef = useRef();

    return (
        <div className="pages-list" ref={acteursListRef}>
            <ul>
                {acteurs.map((acteur) => (
                    <li key={acteur.id}>
                        <ActeurItem
                            acteur={acteur}
                            onClick={() => handleActeurClick(acteur)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActeursList;
