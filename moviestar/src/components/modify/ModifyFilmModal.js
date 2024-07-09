import React, { useState, useEffect } from 'react';
import './modifymodal.css';

/**
 * Composant pour afficher un modal permettant de modifier les détails d'un film.
 *
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {boolean} props.isOpen - Indique si le modal est ouvert.
 * @param {Function} props.handleClose - Fonction pour fermer le modal.
 * @param {Object} props.film - Les informations du film à modifier.
 * @param {string} props.film.nom - Le nom du film.
 * @param {string} props.film.anneeSortie - L'année de sortie du film.
 * @param {string} props.film.lieuTournage - Le lieu de tournage du film.
 * @param {string} props.film.idIMDB - L'identifiant IMDB du film.
 * @param {string} props.film.rating - Le rating du film.
 * @param {string} props.film.urlProfile - L'URL du profil du film.
 * @param {string} props.film.langue - La langue du film.
 * @param {string} props.film.resume - Le résumé du film.
 * @param {string} props.film.pays - Le pays d'origine du film.
 * @param {string} props.film.genres - Les genres du film, séparés par des virgules.
 * @param {Function} props.onSave - Fonction pour enregistrer les modifications apportées au film.
 * @returns {JSX.Element} Le composant `ModifyFilmModal`.
 */
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

    /**
     * Gère les changements dans les champs de formulaire.
     *
     * @param {Object} e - L'événement déclenché par le changement d'entrée.
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModifiedInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    /**
     * Gère la soumission du formulaire pour enregistrer les modifications.
     *
     * @async
     */
    const handleSave = async () => {
        // Diviser les genres par virgule pour les convertir en tableau
        const genresArray = modifiedInfo.genres.split(',').map(genre => genre.trim());
        await onSave({ ...modifiedInfo, genres: genresArray });
        handleClose();
    };

    return (
        <div className={`modify-modal ${isOpen ? 'open' : ''}`}>
            <div className="modify-modal-content">
                <button className="modify-modal-close" onClick={handleClose}>
                    Fermer
                </button>
                <h2>Modifier les détails du film</h2>
                <form>
                    <label>
                        Nom :
                        <input
                            type="text"
                            name="nom"
                            value={modifiedInfo.nom}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Année de Sortie :
                        <input
                            type="text"
                            name="anneeSortie"
                            value={modifiedInfo.anneeSortie}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Lieu de Tournage :
                        <input
                            type="text"
                            name="lieuTournage"
                            value={modifiedInfo.lieuTournage}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        ID IMDB :
                        <input
                            type="text"
                            name="idIMDB"
                            value={modifiedInfo.idIMDB}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Rating :
                        <input
                            type="text"
                            name="rating"
                            value={modifiedInfo.rating}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        URL de Profil :
                        <input
                            type="text"
                            name="urlProfile"
                            value={modifiedInfo.urlProfile}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Langue :
                        <input
                            type="text"
                            name="langue"
                            value={modifiedInfo.langue}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Résumé :
                        <textarea
                            name="resume"
                            value={modifiedInfo.resume}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Pays :
                        <input
                            type="text"
                            name="pays"
                            value={modifiedInfo.pays}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Genres :
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
