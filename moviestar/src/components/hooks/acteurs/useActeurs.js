import { useState, useEffect } from 'react';
import backendActeursService from '../../../services/backendActeursService';

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

    const fetchActeurs = async () => {
        try {
            const response = await backendActeursService.getAllActeurs(page, size);
            setActeurs(response.data.content);
            setFilteredActeurs(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching acteurs:', error);
        }
    };

    const handleSearch = (searchTerm) => {
        const filteredList = acteurs.filter((acteur) =>
            acteur.nom.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredActeurs(filteredList);
    };

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
                    console.error('Invalid or missing films data:', filmsData);
                }
            } else {
                console.error('Acteur ID is undefined.');
            }
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

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
                console.error('Selected acteur is undefined or Modifier button is not clicked.');
            }
        } catch (error) {
            console.error('Error updating acteur:', error);
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
