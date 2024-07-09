import { useEffect, useState } from 'react';
import backendFilmService from '../../services/backendFilmService';

/**
 * Hook personnalisé pour gérer les films.
 *
 * @returns {object} Un objet contenant l'état et les fonctions pour gérer les films.
 */
const useFilms = () => {
    const [films, setFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);
    const [isModifierButtonClicked, setIsModifierButtonClicked] = useState(false);
    const [modifyModalOpen, setModifyModalOpen] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchFilms();
    }, [page, size]);

    /**
     * Récupère les films depuis le backend.
     */
    const fetchFilms = async () => {
        try {
            const response = await backendFilmService.getAllFilms(page, size);
            setFilms(response.data.content);
            setFilteredFilms(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Erreur lors de la récupération des films:', error);
        }
    };

    /**
     * Filtre les films en fonction du terme de recherche.
     *
     * @param {string} searchTerm - Le terme de recherche pour filtrer les films.
     */
    const handleSearch = (searchTerm) => {
        const filteredList = films.filter((film) =>
            film.nom.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFilms(filteredList);
    };

    /**
     * Gère le clic sur un film pour afficher ses détails et ses rôles.
     *
     * @param {object} film - Le film sélectionné.
     */
    const handleFilmClick = async (film) => {
        try {
            if (film.id !== undefined) {
                setSelectedFilm(film);
                setModifyModalOpen(true);
                const rolesData = await backendFilmService.getActorsAndCharactersByFilmId(film.id);
                if (Array.isArray(rolesData.data)) {
                    setSelectedFilm({
                        ...film,
                        roles: rolesData.data.map(role => ({
                            acteur: { nom: role[0] },
                            personnage: role[1],
                        })),
                    });
                } else {
                    console.error('Données de rôles invalides ou manquantes:', rolesData);
                }
            } else {
                console.error('L\'ID du film est indéfini.');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des rôles:', error);
        }
    };

    /**
     * Enregistre les modifications apportées à un film.
     *
     * @param {object} modifiedInfo - Les informations modifiées du film.
     * @param {boolean} isModifierButtonClicked - Indique si le bouton de modification a été cliqué.
     */
    const handleSaveModifiedFilm = async (modifiedInfo, isModifierButtonClicked) => {
        try {
            if (selectedFilm && isModifierButtonClicked) {
                await backendFilmService.updateFilm(selectedFilm.filmId, modifiedInfo);
                setFilms((prevFilms) =>
                    prevFilms.map((f) => (f && f.id === selectedFilm.id ? { ...f, ...modifiedInfo } : f))
                );
                setModifyModalOpen(false);
                setSelectedFilm(null);
            } else {
                console.error('Le film sélectionné est indéfini ou le bouton Modifier n\'a pas été cliqué.');
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour du film:', error);
        }
    };

    return {
        films,
        filteredFilms,
        isModifierButtonClicked,
        modifyModalOpen,
        selectedFilm,
        page,
        size,
        totalPages,
        setIsModifierButtonClicked,
        setModifyModalOpen,
        setPage,
        setSize,
        handleSearch,
        handleFilmClick,
        handleSaveModifiedFilm
    };
};

export default useFilms;
