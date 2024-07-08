import React from 'react';
import RealisateurItem from './RealisateurItem';
import './ListRealisateurs.css';

const RealisateurList = ({ realisateurs, handleRealisateurClick }) => {
    return (
        <div className="realisateurs-list">
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
