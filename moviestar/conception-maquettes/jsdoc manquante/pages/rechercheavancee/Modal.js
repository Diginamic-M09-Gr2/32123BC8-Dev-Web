import React from 'react';

// Composant FilmInfo
const Modal = ({ title, results, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                {/* En-tête de la modal avec le titre et le bouton de fermeture */}
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={onClose}>&times;</button>
                </div>
                {/* Contenu de la modal avec la liste des résultats ou un message si aucun résultat */}
                <div className="modal-content">
                    {results && results.length > 0 ? (
                        <ul>
                            {results.map((result, index) => (
                                <li key={index}>{result}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No results to display</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
