import React from 'react';
import './Modal.css'; // Import the CSS file

const Modal = ({ title, content, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    {title && <h2>{title}</h2>}
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-content">
                    {content ? (
                        <ul className="modal-list">
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="no-results">No results to display</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
