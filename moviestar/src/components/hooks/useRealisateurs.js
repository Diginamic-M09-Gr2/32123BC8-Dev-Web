import { useEffect, useState } from 'react';
import backendRealisateurService from '../../services/backendRealisateursService';

/**
 * Hook personnalisé pour gérer les réalisateurs.
 *
 * @returns {object} Un objet contenant l'état et les fonctions pour gérer les réalisateurs.
 */
const useRealisateurs = () => {
    const [realisateurs, setRealisateurs] = useState([]);
    const [filteredRealisateurs, setFilteredRealisateurs] = useState([]);
    const [isModifierButtonClicked, setIsModifierButtonClicked] = useState(false);
    const [modifyModalOpen, setModifyModalOpen] = useState(false);
    const [selectedRealisateur, setSelectedRealisateur] = useState(null);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchRealisateurs();
    }, [page, size]);

    /**
     * Récupère les réalisateurs depuis le backend.
     */
    const fetchRealisateurs = async () => {
        try {
            const response = await backendRealisateurService.getAllRealisateurs(page, size);
            setRealisateurs(response.data.content);
            setFilteredRealisateurs(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Erreur lors de la récupération des réalisateurs:', error);
        }
    };

    /**
     * Filtre les réalisateurs en fonction du terme de recherche.
     *
     * @param {string} searchTerm - Le terme de recherche pour filtrer les réalisateurs.
     */
    const handleSearch = (searchTerm) => {
        const filteredList = realisateurs.filter((realisateur) =>
            realisateur.nom.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRealisateurs(filteredList);
    };

    /**
     * Gère le clic sur un réalisateur pour afficher ses détails et ses films.
     *
     * @param {object} realisateur - Le réalisateur sélectionné.
     */
    const handleRealisateurClick = async (realisateur) => {
        try {
            if (realisateur.id !== undefined) {
                setSelectedRealisateur(realisateur);
                setModifyModalOpen(true);
                const filmsData = await backendRealisateurService.fetchRealisateurFilms(realisateur.id);
                if (Array.isArray(filmsData.data)) {
                    setSelectedRealisateur({
                        ...realisateur,
                        films: filmsData.data,
                    });
                } else {
                    console.error('Données de films invalides ou manquantes:', filmsData);
                }
            } else {
                console.error('L\'ID du réalisateur est indéfini.');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des films:', error);
        }
    };

    /**
     * Enregistre les modifications apportées à un réalisateur.
     *
     * @param {object} modifiedInfo - Les informations modifiées du réalisateur.
     * @param {boolean} isModifierButtonClicked - Indique si le bouton de modification a été cliqué.
     */
    const handleSaveModifiedRealisateur = async (modifiedInfo, isModifierButtonClicked) => {
        try {
            if (selectedRealisateur && isModifierButtonClicked) {
                await backendRealisateurService.updateRealisateur(selectedRealisateur.idRealisateur, modifiedInfo);
                setRealisateurs((prevRealisateurs) =>
                    prevRealisateurs.map((r) => (r && r.id === selectedRealisateur.id ? { ...r, ...modifiedInfo } : r))
                );
                setModifyModalOpen(false);
                setSelectedRealisateur(null);
            } else {
                console.error('Le réalisateur sélectionné est indéfini ou le bouton Modifier n\'a pas été cliqué.');
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour du réalisateur:', error);
        }
    };

    return {
        realisateurs,
        filteredRealisateurs,
        isModifierButtonClicked,
        modifyModalOpen,
        selectedRealisateur,
        page,
        size,
        totalPages,
        setIsModifierButtonClicked,
        setModifyModalOpen,
        setPage,
        setSize,
        handleSearch,
        handleRealisateurClick,
        handleSaveModifiedRealisateur
    };
};

export default useRealisateurs;
