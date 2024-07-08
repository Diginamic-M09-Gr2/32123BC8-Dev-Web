import React, { useState, useEffect } from 'react';
import '../../styles/ModifyRealisateurModal.css';

/**
 * Composant ModifyRealisateurModal pour la modification d'un réalisateur.
 * @param {Object} props - Propriétés du composant.
 * @param {boolean} props.isOpen - Indique si la modal est ouverte.
 * @param {Function} props.handleClose - Fonction pour fermer la modal.
 * @param {Object} props.realisateur - Les données du réalisateur à modifier.
 * @param {Function} props.onSave - Fonction appelée lors de l'enregistrement des modifications.
 * @returns {JSX.Element} Élément JSX représentant la modal de modification d'un réalisateur.
 */
const ModifyRealisateurModal = ({ isOpen, handleClose, realisateur, onSave }) => {
    // État local pour les informations modifiées du réalisateur
    const [modifiedInfo, setModifiedInfo] = useState({
        nom: '',
        // Ajoutez d'autres champs au besoin
    });

    // Effet pour mettre à jour les informations modifiées lorsque le réalisateur change
    useEffect(() => {
        if (realisateur) {
            setModifiedInfo({
                nom: realisateur.nom || '',
                // Mettez à jour avec d'autres champs au besoin
            });
        }
    }, [realisateur]);

    // Gère les changements dans les champs de saisie
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModifiedInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    // Gère l'enregistrement des modifications et ferme la modal
    const handleSave = () => {
        onSave(modifiedInfo);
        handleClose();
    };

    return (
        <div className={`modify-realisateur-modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                {/* Bouton pour fermer la modal */}
                <button className="modal-close" onClick={handleClose}>
                    Close
                </button>
                {/* Titre de la modal */}
                <h2>Modifier Réalisateur</h2>
                {/* Formulaire de modification */}
                <form>
                    <label>
                        Nom:
                        <input
                            type="text"
                            name="nom"
                            value={modifiedInfo.nom}
                            onChange={handleInputChange}
                        />
                    </label>
                    {/* Ajoutez d'autres champs d'entrée pour la modification */}
                </form>
                {/* Bouton pour enregistrer les modifications */}
                <button onClick={handleSave}>Enregistrer</button>
            </div>
        </div>
    );
};

export default ModifyRealisateurModal;
