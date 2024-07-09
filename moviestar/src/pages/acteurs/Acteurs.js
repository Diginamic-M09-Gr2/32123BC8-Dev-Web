import React from 'react';
import ActeursSearchBar from '../../components/searchBar/ActeursSearchBar';
import ActeursList from '../../components/list/acteurs/ActeursList';
import ModifyActeurModal from '../../components/modify/ModifyActeurModal';
import { FaCog } from 'react-icons/fa';
import FilmInfo from '../../modal/acteurs/info/FilmInfo';
import useActeurs from '../../components/hooks/useActeurs';
import '../generalpage.css'; // Import the CSS file here
import '../modifybutton.css';
import PaginationControl from "../../components/pagination/paginationControl";

/**
 * Composant React pour la page des acteurs.
 * Affiche une barre de recherche, une liste d'acteurs, un modal de modification,
 * des informations sur les acteurs sélectionnés, et des contrôles de pagination.
 */
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
                <div className="general-list">
                    <ActeursList
                        acteurs={filteredActeurs}
                        handleActeurClick={(acteur) =>
                            handleActeurClick({ ...acteur, id: acteur.acteurId })
                        }
                    />
                </div>
                {selectedActeur && <FilmInfo selectedActeur={selectedActeur} />}
            </div>
            <PaginationControl page={page} totalPages={totalPages} setPage={setPage} />
        </div>
    );
};

export default Acteurs;
