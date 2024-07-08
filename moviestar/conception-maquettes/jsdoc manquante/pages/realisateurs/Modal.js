import React from 'react';
import '../../styles/modal.css';

/**
 * Composant FilmInfo qui affiche la filmographie d'un réalisateur.
 * @param {Object} props - Propriétés du composant.
 * @param {boolean} props.isOpen - Indique si la modal est ouverte.
 * @param {Function} props.handleClose - Fonction pour fermer la modal.
 * @param {Object} props.films - Les données des films du réalisateur.
 * @param {string} props.films.realisateurName - Le nom du réalisateur.
 * @param {Array} props.films.data - Les données des films.
 * @returns {JSX.Element} Élément JSX représentant la modal.
 */
const Modal = ({ isOpen, handleClose, films }) => {
    // Si la modal n'est pas ouverte, ne rien afficher
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {/* Bouton pour fermer la modal */}
                <button className="modal-close" onClick={handleClose}>
                    Close
                </button>
                {/* Titre de la modal avec le nom du réalisateur */}
                <h2>Filmographie de {films.realisateurName}</h2>
                {/* Liste des films du réalisateur */}
                <ul>
                    {films.data.map((film, index) => (
                        // Affiche chaque film avec son nom et son année de sortie
                        <li key={index}>Films: {`${film[0] || 'Unknown'} - Année de Sortie: ${film[1] || 'Unknown'}`}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Modal;
