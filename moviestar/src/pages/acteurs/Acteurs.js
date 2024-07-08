import React from 'react';
import ActeursSearchBar from '../../components/searchBar/acteurs/ActeursSearchBar';
import ActeursList from '../../components/list/acteurs/ActeursList';
import ModifyActeurModal from '../../components/modify/acteurs/ModifyActeurModal';
import { FaCog } from 'react-icons/fa';
import FilmInfo from '../../modal/acteurs/info/FilmInfo';
import useActeurs from '../../components/hooks/acteurs/useActeurs';
import '../realisateurs/realisateurs.css'; // Import the CSS file here
import '../../styles/boutonmodifier.css';

const Acteurs = () => {
    const {
        acteurs,
        filteredActeurs,
        isModifyButtonClicked,
        modifyModalOpen,
        selectedActeur,
        page,
        totalPages,
        setIsModifyButtonClicked,
        setModifyModalOpen,
        setPage,
        handleSearch,
        handleActeurClick,
        handleSaveModifiedActeur
    } = useActeurs();

    return (
        <div className="page-container">
            <ActeursSearchBar onSearch={handleSearch} />
            <div className="modify-button-container">
                <button className="modify-button" onClick={() => setIsModifyButtonClicked(true)}>
                    Modifier Acteurs <FaCog className="modify-button-icon" />
                </button>
            </div>
            {isModifyButtonClicked && (
                <ModifyActeurModal
                    isOpen={modifyModalOpen}
                    handleClose={() => setIsModifyButtonClicked(false)}
                    acteur={selectedActeur}
                    onSave={(modifiedInfo) => handleSaveModifiedActeur(modifiedInfo, isModifyButtonClicked)}
                />
            )}
            <div className="main-content">
                <div className="acteurs-list">
                    <ActeursList
                        acteurs={filteredActeurs}
                        handleActeurClick={(acteur) =>
                            handleActeurClick({ ...acteur, id: acteur.acteurId })
                        }
                    />
                </div>
                {selectedActeur && <FilmInfo selectedActeur={selectedActeur} />}
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

export default Acteurs;
