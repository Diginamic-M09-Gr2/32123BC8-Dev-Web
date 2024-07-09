import { useState, useEffect } from 'react';
import backendActeursService from '../../services/backendActeursService';

/**
 * Hook personnalisé pour gérer les acteurs.
 *
 * @returns {object} Un objet contenant l'état et les fonctions pour gérer les acteurs.
 */
const useActeurs = () => {
    const [acteurs, setActeurs] = useState([]);
    const [filteredActeurs, setFilteredActeurs] = useState([]);
    const [isModifyButtonClicked, setIsModifyButtonClicked] = useState(false);
    const [modifyModalOpen, setModifyModalOpen] = useState(false);
    const [selectedActeur, setSelectedActeur] = useState(null);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchActeurs();
    }, [page, size]);

    /**
     * Récupère les acteurs depuis le backend.
     */
    const fetchActeurs = async () => {
        try {
            const response = await backendActeursService.getAllActeurs(page, size);
            setActeurs(response.data.content);
            setFilteredActeurs(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Erreur lors de la récupération des acteurs:', error);
        }
    };

    /**
     * Filtre les acteurs en fonction du terme de recherche.
     *
     * @param {string} searchTerm - Le terme de recherche pour filtrer les acteurs.
     */
    const handleSearch = (searchTerm) => {
        const filteredList = acteurs.filter((acteur) =>
            acteur.nom.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredActeurs(filteredList);
    };

    /**
     * Gère le clic sur un acteur pour afficher ses détails et ses films.
     *
     * @param {object} acteur - L'acteur sélectionné.
     */
    const handleActeurClick = async (acteur) => {
        try {
            if (acteur.acteurId !== undefined) {
                setSelectedActeur(acteur);
                setModifyModalOpen(true);
                const filmsData = await backendActeursService.fetchActeurFilms(acteur.acteurId);
                if (Array.isArray(filmsData.data)) {
                    setSelectedActeur({
                        ...acteur,
                        films: filmsData.data,
                    });
                } else {
                    console.error('Données de films invalides ou manquantes:', filmsData);
                }
            } else {
                console.error('L\'ID de l\'acteur est indéfini.');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des films:', error);
        }
    };

    /**
     * Enregistre les modifications apportées à un acteur.
     *
     * @param {object} modifiedInfo - Les informations modifiées de l'acteur.
     * @param {boolean} isModifyButtonClicked - Indique si le bouton de modification a été cliqué.
     */
    const handleSaveModifiedActeur = async (modifiedInfo, isModifyButtonClicked) => {
        try {
            if (selectedActeur && isModifyButtonClicked) {
                await backendActeursService.updateActeur(selectedActeur.acteurId, modifiedInfo);
                setActeurs((prevActeurs) =>
                    prevActeurs.map((r) => (r && r.id === selectedActeur.id ? { ...r, ...modifiedInfo } : r))
                );
                setModifyModalOpen(false);
                setSelectedActeur(null);
            } else {
                console.error('L\'acteur sélectionné est indéfini ou le bouton Modifier n\'a pas été cliqué.');
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'acteur:', error);
        }
    };

    return {
        acteurs,
        filteredActeurs,
        isModifyButtonClicked,
        modifyModalOpen,
        selectedActeur,
        page,
        size,
        totalPages,
        setIsModifyButtonClicked,
        setModifyModalOpen,
        setPage,
        setSize,
        handleSearch,
        handleActeurClick,
        handleSaveModifiedActeur
    };
};

export default useActeurs;
