import React from 'react';
import RealisateursSearchBar from '../../components/searchBar/realisateurs/RealisateursSearchBar'
import RealisateurList from '../../components/list/realisateurs/RealisateurList';
import ModifyRealisateurModal from '../../components/modify/realisateurs/ModifyRealisateurModal';
import { FaCog } from 'react-icons/fa';
import FilmInfo from '../../modal/realisateurs/info/FilmInfo';
import useRealisateurs from '../../components/hooks/realisateurs/useRealisateurs';
import './realisateurs.css'; // Import the CSS file here
import '../../styles/boutonmodifier.css'

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
                <div className="realisateurs-list">
                    <RealisateurList
                        realisateurs={filteredRealisateurs}
                        handleRealisateurClick={(realisateur) =>
                            handleRealisateurClick({ ...realisateur, id: realisateur.idRealisateur })
                        }
                    />
                </div>
                {selectedRealisateur && <FilmInfo selectedRealisateur={selectedRealisateur} />}
            </div>
            <div className="pagination-controls">
                <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                    Previous
                </button>
                <span>
                    Page {page + 1} of {totalPages}
                </span>
                <button onClick={() => setPage(page + 1)} disabled={page + 1 === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Realisateurs;
