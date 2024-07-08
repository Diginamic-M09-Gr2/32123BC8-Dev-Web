import React, { useState } from 'react';
import ActeursCommuns2Films from './ActeursCommuns2Films';
import FilmsCommuns2Acteurs from './FilmsCommuns2Acteurs';
import FilmsEntre2Annees from './FilmsEntre2Annees';
import FilmsEntre2Annees1Acteur from './FilmsEntre2Annees1Acteur';
import Modal from './Modal';
import './RechercheAvancee.css'; // Import the CSS file for RechercheAvancee

const RechercheAvancee = () => {
    const [modalResults, setModalResults] = useState([]);
    const [modalTitle, setModalTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUpdateModalResults = (title, results) => {
        setModalTitle(title);
        setModalResults(results);
        setIsModalOpen(true);
    };

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
