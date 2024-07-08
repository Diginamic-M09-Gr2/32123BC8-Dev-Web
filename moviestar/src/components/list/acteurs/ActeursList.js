// ActeursList.js
import React, { useRef } from 'react';
import '../../../styles/acteurs.css';
import ActeurItem from './ActeurItem'; // Correction ici : import ActeurItem

const ActeursList = ({ acteurs, handleActeurClick }) => {
    const acteursListRef = useRef();

    return (
        <div className="acteurs-list" ref={acteursListRef}>
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