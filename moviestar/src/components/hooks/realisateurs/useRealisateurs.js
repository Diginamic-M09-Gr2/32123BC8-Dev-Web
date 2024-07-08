import { useEffect, useState } from 'react';
import backendRealisateurService from '../../../services/backendRealisateursService';

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

    const fetchRealisateurs = async () => {
        try {
            const response = await backendRealisateurService.getAllRealisateurs(page, size);
            setRealisateurs(response.data.content);
            setFilteredRealisateurs(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching realisateurs:', error);
        }
    };

    const handleSearch = (searchTerm) => {
        const filteredList = realisateurs.filter((realisateur) =>
            realisateur.nom.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRealisateurs(filteredList);
    };

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
                    console.error('Invalid or missing films data:', filmsData);
                }
            } else {
                console.error('Realisateur ID is undefined.');
            }
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

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
                console.error('Selected realisateur is undefined or Modifier button is not clicked.');
            }
        } catch (error) {
            console.error('Error updating realisateur:', error);
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
