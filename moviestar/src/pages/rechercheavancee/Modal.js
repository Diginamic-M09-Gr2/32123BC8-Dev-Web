import React from 'react';
import './Modal.css';

/**
 * Composant React pour un modal générique avec un titre et un contenu.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre du modal (optionnel).
 * @param {Array<string>} props.content - Le contenu à afficher dans le modal sous forme de tableau de chaînes (optionnel).
 * @param {Function} props.onClose - Fonction de rappel pour fermer le modal (optionnel).
 * @returns {JSX.Element} Composant Modal.
 */
const Modal = ({ title, content, onClose }) => {
    return (
        <div className="recherche-modal-overlay">
            <div className="recherche-modal">
                <div className="recherche-modal-header">
                    {title && <h2>{title}</h2>}
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="recherche-modal-content">
                    {Array.isArray(content) && content.length > 0 && (
                        <ul className="recherche-modal-list">
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
