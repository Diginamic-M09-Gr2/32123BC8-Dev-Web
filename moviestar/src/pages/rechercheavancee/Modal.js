import React from 'react';
import './Modal.css'; // Import the CSS file

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
