// FilmInfo.js
import React from 'react';
import '../../../styles/filmmodal.css';

const FilmInfo = ({ isOpen, handleClose, films }) => {
    if (!isOpen) return null;

    const { acteurName, data } = films;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={handleClose}>
                    Close
                </button>
                <h2>Filmographie de {acteurName}</h2>
                <ul>
                    {Array.isArray(data) && data.map((film, index) => (
                        <li key={index}>
                            Films: {`${film[0] || 'Unknown'} - Année de Sortie: ${film[1] || 'Unknown'}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FilmInfo;