import React, { useState } from 'react';
import ActeursCommuns2Films from './ActeursCommuns2Films';
import FilmsCommuns2Acteurs from './FilmsCommuns2Acteurs';
import FilmsEntre2Annees from './FilmsEntre2Annees';
import FilmsEntre2Annees1Acteur from './FilmsEntre2Annees1Acteur';
import Modal from './Modal';

// Composant RechercheAvancee
const RechercheAvancee = () => {
    // États pour gérer les résultats du modal
    const [modalResults, setModalResults] = useState([]);
    const [modalTitle, setModalTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fonction pour mettre à jour les résultats du modal et l'afficher
    const handleUpdateModalResults = (title, results) => {
        setModalTitle(title);
        setModalResults(results);
        setIsModalOpen(true);
    };

    // Fonction pour fermer le modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h2>Recherche Avancée</h2>
            {/* Composants de recherche avancée avec gestion des résultats du modal */}
            <ActeursCommuns2Films onUpdateModalResults={handleUpdateModalResults} />
            <FilmsCommuns2Acteurs onUpdateModalResults={handleUpdateModalResults} />
            <FilmsEntre2Annees onUpdateModalResults={handleUpdateModalResults} />
            <FilmsEntre2Annees1Acteur onUpdateModalResults={handleUpdateModalResults} />

            {/* Rendre ou mettre à jour le composant FilmInfo en fonction de l'état */}
            {isModalOpen && (
                <Modal title={modalTitle} results={modalResults} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default RechercheAvancee;
