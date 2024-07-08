import React from 'react';
import FilmsSearchBar from '../../components/searchBar/films/FilmsSearchBar';
import FilmsList from '../../components/list/films/FilmsList';
import ModifyFilmModal from '../../components/modify/films/ModifyFilmModal';
import { FaCog } from 'react-icons/fa';
import RoleInfo from '../../modal/films/info/RoleInfo';
import useFilms from '../../components/hooks/films/useFilms';
import '../realisateurs/realisateurs.css';
import '../../styles/global.css';

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
                <div className="films-list">
                    <FilmsList
                        films={filteredFilms}
                        handleFilmClick={(film) => handleFilmClick({ ...film, id: film.filmId })}
                    />
                </div>
                {selectedFilm && <RoleInfo selectedFilm={selectedFilm} />}
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

export default Films;
