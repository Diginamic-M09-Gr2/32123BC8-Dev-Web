import React, { useState, useEffect } from 'react';
import './modifymodal.css';

/**
 * Composant pour afficher un modal permettant de modifier les informations d'un acteur.
 *
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {boolean} props.isOpen - Indique si le modal est ouvert.
 * @param {Function} props.handleClose - Fonction pour fermer le modal.
 * @param {Object} props.acteur - Les informations de l'acteur à modifier.
 * @param {string} props.acteur.nom - Le nom de l'acteur.
 * @param {Function} props.onSave - Fonction pour enregistrer les modifications apportées à l'acteur.
 * @returns {JSX.Element} Le composant `ModifyActeurModal`.
 */
const ModifyActeurModal = ({ isOpen, handleClose, acteur, onSave }) => {
    const [modifiedInfo, setModifiedInfo] = useState({
        nom: '',
        // Ajouter d'autres champs
    });

    useEffect(() => {
        if (acteur) {
            setModifiedInfo({
                nom: acteur.nom || '',
                // Mettre à jour avec d'autres champs si nécessaire
            });
        }
    }, [acteur]);

    /**
     * Gère les changements dans les champs de formulaire.
     *
     * @param {Object} e - L'événement déclenché par le changement d'entrée.
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModifiedInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    /**
     * Gère la soumission du formulaire pour enregistrer les modifications.
     *
     * @param {Object} e - L'événement déclenché par la soumission du formulaire.
     */
    const handleSave = (e) => {
        e.preventDefault(); // Empêche la soumission par défaut du formulaire

        // Validation de base, à personnaliser selon les besoins
        if (!modifiedInfo.nom.trim()) {
            alert('Le champ "Nom" est obligatoire.');
            return;
        }

        onSave(modifiedInfo);
        handleClose();
    };

    return (
        <div className={`modify-modal ${isOpen ? 'open' : ''}`}>
            <div className="modify-modal-content">
                <button className="modify-modal-close" onClick={handleClose}>
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
                    {/* Ajouter d'autres champs de saisie pour la modification */}
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
        </div>
    );
};

export default ModifyActeurModal;
