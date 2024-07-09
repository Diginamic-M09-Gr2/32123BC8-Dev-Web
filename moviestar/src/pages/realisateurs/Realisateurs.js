import React from 'react';
import RealisateursSearchBar from '../../components/searchBar/RealisateursSearchBar'
import RealisateurList from '../../components/list/realisateurs/RealisateurList';
import ModifyRealisateurModal from '../../components/modify/ModifyRealisateurModal';
import { FaCog } from 'react-icons/fa';
import FilmInfo from '../../modal/realisateurs/info/FilmInfo';
import PaginationControl from '../../components/pagination/paginationControl';
import useRealisateurs from '../../components/hooks/useRealisateurs';
import './realisateurs.css'; // Import the CSS file here
import '../generalpage.css';

/**
 * Composant React pour la page des réalisateurs.
 * Affiche une barre de recherche, une liste de réalisateurs, un modal de modification,
 * des informations sur les films des réalisateurs sélectionnés, et des contrôles de pagination.
 */
const Realisateurs = () => {
    const {
        realisateurs,
        filteredRealisateurs,
        isModifierButtonClicked,
        modifyModalOpen,
        selectedRealisateur,
        page,
        totalPages,
        setIsModifierButtonClicked,
        setModifyModalOpen,
        setPage,
        handleSearch,
        handleRealisateurClick,
        handleSaveModifiedRealisateur
    } = useRealisateurs();

    return (
        <div className="page-container">
            <RealisateursSearchBar onSearch={handleSearch} />
            <div className="modify-button-container">
                <button className="modify-button" onClick={() => setIsModifierButtonClicked(true)}>
                    Modifier Realisateurs <FaCog className="modify-button-icon" />
                </button>
            </div>
            {isModifierButtonClicked && (
                <ModifyRealisateurModal
                    isOpen={modifyModalOpen}
                    handleClose={() => setIsModifierButtonClicked(false)}
                    realisateur={selectedRealisateur}
                    onSave={(modifiedInfo) => handleSaveModifiedRealisateur(modifiedInfo, isModifierButtonClicked)}
                />
            )}
            <div className="main-content">
                <div className="general-list">
                    <RealisateurList
                        realisateurs={filteredRealisateurs}
                        handleRealisateurClick={(realisateur) =>
                            handleRealisateurClick({ ...realisateur, id: realisateur.idRealisateur })
                        }
                    />
                </div>
                {selectedRealisateur && <FilmInfo selectedRealisateur={selectedRealisateur} />}
            </div>
            <PaginationControl page={page} totalPages={totalPages} setPage={setPage} />
        </div>
    );
};

export default Realisateurs;
