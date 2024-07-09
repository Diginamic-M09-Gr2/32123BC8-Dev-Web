import React, { useState, useEffect } from 'react';
import './modifymodal.css';

const ModifyFilmModal = ({ isOpen, handleClose, film, onSave }) => {
    const [modifiedInfo, setModifiedInfo] = useState({
        nom: '',
        anneeSortie: '',
        lieuTournage: '',
        idIMDB: '',
        rating: '',
        urlProfile: '',
        langue: '',
        resume: '',
        pays: '',
        genres: '',
    });

    useEffect(() => {
        if (film) {
            setModifiedInfo({
                nom: film.nom || '',
                anneeSortie: film.anneeSortie || '',
                lieuTournage: film.lieuTournage || '',
                idIMDB: film.idIMDB || '',
                rating: film.rating || '',
                urlProfile: film.urlProfile || '',
                langue: film.langue || '',
                resume: film.resume || '',
                pays: film.pays || '',
                genres: film.genres ? film.genres.join(', ') : '',
            });
        }
    }, [film]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModifiedInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        // Split genres by comma to convert back to array
        const genresArray = modifiedInfo.genres.split(',').map(genre => genre.trim());
        await onSave({ ...modifiedInfo, genres: genresArray });
        handleClose();
    };

    return (
        <div className={`modify-modal ${isOpen ? 'open' : ''}`}>
            <div className="modify-modal-content">
                <button className="modify-modal-close" onClick={handleClose}>
                    Close
                </button>
                <h2>Modify Film Details</h2>
                <form>
                    <label>
                        Nom:
                        <input
                            type="text"
                            name="nom"
                            value={modifiedInfo.nom}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Année de Sortie:
                        <input
                            type="text"
                            name="anneeSortie"
                            value={modifiedInfo.anneeSortie}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Lieu de Tournage:
                        <input
                            type="text"
                            name="lieuTournage"
                            value={modifiedInfo.lieuTournage}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        ID IMDB:
                        <input
                            type="text"
                            name="idIMDB"
                            value={modifiedInfo.idIMDB}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Rating:
                        <input
                            type="text"
                            name="rating"
                            value={modifiedInfo.rating}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        URL de Profil:
                        <input
                            type="text"
                            name="urlProfile"
                            value={modifiedInfo.urlProfile}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Langue:
                        <input
                            type="text"
                            name="langue"
                            value={modifiedInfo.langue}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Résumé:
                        <textarea
                            name="resume"
                            value={modifiedInfo.resume}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Pays:
                        <input
                            type="text"
                            name="pays"
                            value={modifiedInfo.pays}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Genres:
                        <input
                            type="text"
                            name="genres"
                            value={modifiedInfo.genres}
                            onChange={handleInputChange}
                        />
                    </label>
                </form>
                <button onClick={handleSave}>Enregistrer</button>
            </div>
        </div>
    );
};

export default ModifyFilmModal;
