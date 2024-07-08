import { useEffect, useState } from 'react';
import backendFilmService from '../../../services/backendFilmService';

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

    const fetchFilms = async () => {
        try {
            const response = await backendFilmService.getAllFilms(page, size);
            setFilms(response.data.content);
            setFilteredFilms(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    const handleSearch = (searchTerm) => {
        const filteredList = films.filter((film) =>
            film.nom.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFilms(filteredList);
    };

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
                    console.error('Invalid or missing roles data:', rolesData);
                }
            } else {
                console.error('Film ID is undefined.');
            }
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

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
                console.error('Selected film is undefined or Modifier button is not clicked.');
            }
        } catch (error) {
            console.error('Error updating film:', error);
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
