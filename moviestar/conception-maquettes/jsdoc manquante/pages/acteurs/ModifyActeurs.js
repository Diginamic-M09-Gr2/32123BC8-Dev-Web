// src/pages/ModifyActeurs.js
import React, { useState } from 'react';
import axios from 'axios';

/**
 * Composant pour la modification d'un acteur.
 * @component
 */
const ModifyActeurs = () => {
    const [acteurId, setActeurId] = useState('');
    const [newName, setNewName] = useState('');

    /**
     * Gère le changement de l'ID de l'acteur.
     * @param {Object} e - L'événement de changement.
     */
    const handleActeursIdChange = (e) => {
        setActeurId(e.target.value);
    };

    /**
     * Gère le changement du nouveau nom de l'acteur.
     * @param {Object} e - L'événement de changement.
     */
    const handleNewNameChange = (e) => {
        setNewName(e.target.value);
    };

    /**
     * Gère la modification de l'acteur en utilisant une requête HTTP PUT.
     */
    const handleModifyActeurs = async () => {
        try {
            // Crée une charge utile avec uniquement les champs que vous souhaitez mettre à jour
            const payload = { nom: newName }; // En supposant que "nom" est le champ à mettre à jour, ajustez en fonction de votre backend

            await axios.put(`http://localhost:8080/acteurs/${acteurId}`, payload);
            console.log('Acteur modifié avec succès !');
            // Vous voudrez peut-être mettre à jour l'état ou afficher un message de réussite
        } catch (error) {
            console.error('Erreur lors de la modification de l\'acteur :', error);
            // Gérer l'erreur : afficher un message d'erreur, annuler les modifications, etc.
        }
    };

    return (
        <div>
            <h2>Modifier Acteur</h2>
            <label>
                ID de l'acteur :
                <input type="text" value={acteurId} onChange={handleActeursIdChange} />
            </label>
            <br />
            <label>
                Nouveau Nom :
                <input type="text" value={newName} onChange={handleNewNameChange} />
            </label>
            <br />
            <button onClick={handleModifyActeurs}>Modifier Acteur</button>
        </div>
    );
};

export default ModifyActeurs;
