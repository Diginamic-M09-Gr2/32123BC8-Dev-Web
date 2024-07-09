// ModifyRealisateurModal.js
import React, { useState, useEffect } from 'react';
import './modifymodal.css';

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModifiedInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        await onSave(modifiedInfo);
        handleClose();
    };

    return (
        <div className={`modify-modal ${isOpen ? 'open' : ''}`}>
            <div className="modify-modal-content">
                <button className="modify-modal-close" onClick={handleClose}>
                    Close
                </button>
                <h2>La mélodie n'est pas toujours harmonieuse, changer les informations erronées ici</h2>
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
                    <label>
                        ID IMDB:
                        <input
                            type="text"
                            name="idIMDB"
                            value={modifiedInfo.idIMDB}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Date de Naissance:
                        <input
                            type="text"
                            name="dateNaissance"
                            value={modifiedInfo.dateNaissance}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Lieu de Naissance:
                        <input
                            type="text"
                            name="lieuNaissance"
                            value={modifiedInfo.lieuNaissance}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        URL de Profil:
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