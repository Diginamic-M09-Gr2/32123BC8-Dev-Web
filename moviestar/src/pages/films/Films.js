import React from 'react';
import FilmsSearchBar from '../../components/searchBar/FilmsSearchBar';
import FilmsList from '../../components/list/films/FilmsList';
import ModifyFilmModal from '../../components/modify/ModifyFilmModal';
import { FaCog } from 'react-icons/fa';
import RoleInfo from '../../modal/films/info/RoleInfo';
import useFilms from '../../components/hooks/useFilms';
import '../../styles/global.css';
import '../generalpage.css';
import PaginationControl from "../../components/pagination/paginationControl";

/**
 * Composant React pour la page des films.
 * Affiche une barre de recherche, une liste de films, un modal de modification,
 * des informations sur les films sélectionnés, et des contrôles de pagination.
 */
const Films = () => {
    const {
        films,
        filteredFilms,
        isModifierButtonClicked,
        modifyModalOpen,
        selectedFilm,
        page,
        totalPages,
        setIsModifierButtonClicked,
        setModifyModalOpen,
        setPage,
        handleSearch,
        handleFilmClick,
        handleSaveModifiedFilm
    } = useFilms();

    return (
        <div className="page-container">
            <FilmsSearchBar onSearch={handleSearch} />
            <div className="modify-button-container">
                <button className="modify-button" onClick={() => setIsModifierButtonClicked(true)}>
                    Modifier Films <FaCog className="modify-button-icon" />
                </button>
            </div>
            {isModifierButtonClicked && (
                <ModifyFilmModal
                    isOpen={modifyModalOpen}
                    handleClose={() => setIsModifierButtonClicked(false)}
                    film={selectedFilm}
                    onSave={(modifiedInfo) => handleSaveModifiedFilm(modifiedInfo, isModifierButtonClicked)}
                />
            )}
            <div className="main-content">
                <div className="general-list">
                    <FilmsList
                        films={filteredFilms}
                        handleFilmClick={(film) => handleFilmClick({ ...film, id: film.filmId })}
                    />
                </div>
                {selectedFilm && <RoleInfo selectedFilm={selectedFilm} />}
            </div>
            <PaginationControl page={page} totalPages={totalPages} setPage={setPage} />
        </div>
    );
};

export default Films;
