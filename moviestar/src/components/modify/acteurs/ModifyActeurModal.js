// ModifyActeurModal.js
import React, { useState, useEffect } from 'react';
import '../../../styles/ModifyActeurModal.css';

const ModifyActeurModal = ({ isOpen, handleClose, acteur, onSave }) => {
    const [modifiedInfo, setModifiedInfo] = useState({
        nom: '',
        // Add other fields as needed
    });

    useEffect(() => {
        if (acteur) {
            setModifiedInfo({
                nom: acteur.nom || '',
                // Update with other fields as needed
            });
        }
    }, [acteur]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModifiedInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault(); // Prevents the default form submission

        // Basic validation, customize as needed
        if (!modifiedInfo.nom.trim()) {
            alert('Le champ "Nom" est obligatoire.');
            return;
        }

        onSave(modifiedInfo);
        handleClose();
    };

    return (
        <div className={`modify-acteur-modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <button className="modal-close" onClick={handleClose}>
                    Close
                </button>
                <h2>Modifier Acteur</h2>
                <form onSubmit={handleSave}>
                    <label>
                        Nom:
                        <input
                            type="text"
                            name="nom"
                            value={modifiedInfo.nom}
                            onChange={handleInputChange}
                        />
                    </label>
                    {/* Add other input fields for modification */}
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
        </div>
    );
};

export default ModifyActeurModal;