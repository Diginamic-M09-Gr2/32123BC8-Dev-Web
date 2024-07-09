import React, { useState, useEffect } from 'react';
import './modifymodal.css';

/**
 * Composant pour afficher un modal permettant de modifier les informations d'un réalisateur.
 *
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {boolean} props.isOpen - Indique si le modal est ouvert.
 * @param {Function} props.handleClose - Fonction pour fermer le modal.
 * @param {Object} props.realisateur - Les informations du réalisateur à modifier.
 * @param {string} props.realisateur.nom - Le nom du réalisateur.
 * @param {string} props.realisateur.idIMDB - L'identifiant IMDB du réalisateur.
 * @param {string} props.realisateur.dateNaissance - La date de naissance du réalisateur.
 * @param {string} props.realisateur.lieuNaissance - Le lieu de naissance du réalisateur.
 * @param {string} props.realisateur.urlProfile - L'URL du profil du réalisateur.
 * @param {Function} props.onSave - Fonction pour enregistrer les modifications apportées au réalisateur.
 * @returns {JSX.Element} Le composant `ModifyRealisateurModal`.
 */
const ModifyRealisateurModal = ({ isOpen, handleClose, realisateur, onSave }) => {
    const [modifiedInfo, setModifiedInfo] = useState({
        nom: '',
        idIMDB: '',
        dateNaissance: '',
        lieuNaissance: '',
        urlProfile: '',
    });

    useEffect(() => {
        if (realisateur) {
            setModifiedInfo({
                nom: realisateur.nom || '',
                idIMDB: realisateur.idIMDB || '',
                dateNaissance: realisateur.dateNaissance || '',
                lieuNaissance: realisateur.lieuNaissance || '',
                urlProfile: realisateur.urlProfile || '',
            });
        }
    }, [realisateur]);

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
     * @async
     */
    const handleSave = async () => {
        await onSave(modifiedInfo);
        handleClose();
    };

    return (
        <div className={`modify-modal ${isOpen ? 'open' : ''}`}>
            <div className="modify-modal-content">
                <button className="modify-modal-close" onClick={handleClose}>
                    Fermer
                </button>
                <h2>Modifier les informations du réalisateur</h2>
                <form>
                    <label>
                        Nom :
                        <input
                            type="text"
                            name="nom"
                            value={modifiedInfo.nom}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        ID IMDB :
                        <input
                            type="text"
                            name="idIMDB"
                            value={modifiedInfo.idIMDB}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Date de Naissance :
                        <input
                            type="text"
                            name="dateNaissance"
                            value={modifiedInfo.dateNaissance}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Lieu de Naissance :
                        <input
                            type="text"
                            name="lieuNaissance"
                            value={modifiedInfo.lieuNaissance}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        URL de Profil :
                        <input
                            type="text"
                            name="urlProfile"
                            value={modifiedInfo.urlProfile}
                            onChange={handleInputChange}
                        />
                    </label>
                </form>
                <button onClick={handleSave}>Enregistrer</button>
            </div>
        </div>
    );
};

export default ModifyRealisateurModal;
