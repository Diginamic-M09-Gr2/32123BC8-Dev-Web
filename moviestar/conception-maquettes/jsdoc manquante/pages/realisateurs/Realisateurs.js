import React, { useEffect, useState } from 'react';
import RealisateursTitle from './RealisateursTitle';
import SearchBar from '../../components/SearchBar';
import RealisateursList from './RealisateurList';
import ModifyRealisateurModal from './ModifyRealisateurModal';
import backendRealisateurService from '../../services/backendRealisateursService';
import Modal from './Modal'; // Import FilmInfo component

/**
 * Composant Realisateurs pour afficher la liste des réalisateurs.
 * @returns {JSX.Element} Élément JSX représentant la page des réalisateurs.
 */
const Realisateurs = () => {
    const [realisateurs, setRealisateurs] = useState([]);
    const [filteredRealisateurs, setFilteredRealisateurs] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalFilms, setModalFilms] = useState({ data: [], realisateurName: '' });
    const [modifyModalOpen, setModifyModalOpen] = useState(false);
    const [selectedRealisateur, setSelectedRealisateur] = useState(null);

    useEffect(() => {
        // Charger la liste des réalisateurs lors du montage du composant
        backendRealisateurService.getAllRealisateurs().then((response) => {
            setRealisateurs(response.data);
            setFilteredRealisateurs(response.data);
        });
    }, []);

    /**
     * Fonction de recherche pour filtrer les réalisateurs en fonction du terme de recherche.
     * @param {string} searchTerm - Terme de recherche.
     */
    const handleSearch = (searchTerm) => {
        const filteredList = realisateurs.filter((realisateur) =>
            realisateur.nom.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRealisateurs(filteredList);
    };

    /**
     * Gérer le clic sur un réalisateur.
     * @param {Object} realisateur - Réalisateur sélectionné.
     */
    const handleRealisateurClick = async (realisateur) => {
        try {
            console.log('Clicked Realisateur:', realisateur);

            if (realisateur.idRealisateur !== undefined) {
                console.log('Realisateur ID:', realisateur.idRealisateur);

                const filmsData = await backendRealisateurService.fetchRealisateurFilms(
                    realisateur.idRealisateur
                );

                console.log('Films Data:', filmsData);

                if (Array.isArray(filmsData.data)) {
                    setModalFilms({
                        data: filmsData.data,
                        realisateurName: realisateur.nom,
                    });

                    setModalOpen(true);
                    setSelectedRealisateur(realisateur);
                } else {
                    console.error('Invalid or missing films data:', filmsData);
                }
            } else {
                console.error('Realisateur ID is undefined.');
            }
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    /**
     * Gérer la fermeture de la modal.
     */
    const handleModalClose = () => {
        setModalOpen(false);
        setModalFilms({ data: [], realisateurName: '' });
    };

    /**
     * Gérer la modification d'un réalisateur.
     * @param {Object} realisateur - Réalisateur à modifier.
     */
    const handleModifyRealisateur = (realisateur) => {
        setSelectedRealisateur(realisateur);
        setModifyModalOpen(true);
    };

    /**
     * Gérer l'enregistrement d'un réalisateur modifié.
     * @param {Object} modifiedInfo - Informations modifiées du réalisateur.
     */
    const handleSaveModifiedRealisateur = (modifiedInfo) => {
        console.log('Trying to save Modified Realisateur Info:', modifiedInfo);

        setRealisateurs((prevRealisateurs) =>
            prevRealisateurs.map((r) =>
                r && r.id === selectedRealisateur.id ? { ...r, ...modifiedInfo } : r
            )
        );

        setModifyModalOpen(false);
        setSelectedRealisateur(null); // Réinitialiser le réalisateur sélectionné après la modification
    };

    return (
        <div>
            <RealisateursTitle />
            <SearchBar onSearch={handleSearch} />
            <button onClick={handleModifyRealisateur}>
                Modifier Réalisateurs
            </button>
            <RealisateursList
                realisateurs={filteredRealisateurs}
                handleRealisateurClick={handleRealisateurClick}
            />

            {/* Ajouter le composant FilmInfo */}
            <Modal isOpen={isModalOpen} handleClose={handleModalClose} films={modalFilms} />
            {/* Ajouter ModifyRealisateurModal */}
            <ModifyRealisateurModal
                isOpen={modifyModalOpen}
                handleClose={() => setModifyModalOpen(false)}
                realisateur={selectedRealisateur}
                onSave={handleSaveModifiedRealisateur}
            />
        </div>
    );
};

export default Realisateurs;
