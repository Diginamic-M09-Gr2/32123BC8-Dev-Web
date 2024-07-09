import React, { useState } from 'react';
import ActeursCommuns2Films from './ActeursCommuns2Films';
import FilmsCommuns2Acteurs from './FilmsCommuns2Acteurs';
import FilmsEntre2Annees from './FilmsEntre2Annees';
import FilmsEntre2Annees1Acteur from './FilmsEntre2Annees1Acteur';
import Modal from './Modal';
import './RechercheAvancee.css';

/**
 * Composant pour la recherche avancée.
 *
 * @component
 */
const RechercheAvancee = () => {
    /**
     * État pour les résultats du modal.
     * @type {[any[], Function]} tableau des résultats et fonction de mise à jour
     */
    const [modalResults, setModalResults] = useState([]);

    /**
     * État pour le titre du modal.
     * @type {[string, Function]} titre du modal et fonction de mise à jour
     */
    const [modalTitle, setModalTitle] = useState('');

    /**
     * État pour indiquer si le modal est ouvert ou fermé.
     * @type {[boolean, Function]} état du modal et fonction de mise à jour
     */
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * Fonction pour mettre à jour les résultats du modal et ouvrir le modal.
     * @param {string} title Titre du modal
     * @param {any[]} results Résultats à afficher dans le modal
     */
    const handleUpdateModalResults = (title, results) => {
        setModalTitle(title);
        setModalResults(results);
        setIsModalOpen(true);
    };

    /**
     * Fonction pour fermer le modal.
     */
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="recherche-avancee-container">
            <h2>Recherche Avancée</h2>
            <div className="components-container">
                <ActeursCommuns2Films onUpdateModalResults={handleUpdateModalResults} />
                <FilmsCommuns2Acteurs onUpdateModalResults={handleUpdateModalResults} />
                <FilmsEntre2Annees onUpdateModalResults={handleUpdateModalResults} />
                <FilmsEntre2Annees1Acteur onUpdateModalResults={handleUpdateModalResults} />
            </div>
            {isModalOpen && (
                <Modal title={modalTitle} results={modalResults} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default RechercheAvancee;
