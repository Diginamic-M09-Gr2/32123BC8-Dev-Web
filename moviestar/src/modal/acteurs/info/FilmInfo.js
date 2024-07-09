import React from 'react';
import '../../../styles/filmmodal.css';

/**
 * Composant React pour afficher les informations sur les films d'un acteur.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {boolean} props.isOpen - Indique si la modalité est ouverte ou non.
 * @param {function} props.handleClose - Fonction pour fermer la modalité.
 * @param {object} props.films - Les données des films de l'acteur.
 * @param {string} props.films.acteurName - Le nom de l'acteur.
 * @param {array} props.films.data - Tableau des données des films de l'acteur.
 *
 * @returns {JSX.Element | null} Composant de modalité d'informations sur les films.
 */
const FilmInfo = ({ isOpen, handleClose, films }) => {
    if (!isOpen) return null;

    const { acteurName, data } = films;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={handleClose}>
                    Fermer
                </button>
                <h2>Filmographie de {acteurName}</h2>
                <ul>
                    {Array.isArray(data) && data.map((film, index) => (
                        <li key={index}>
                            Films: {`${film[0] || 'Inconnu'} - Année de Sortie: ${film[1] || 'Inconnue'}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FilmInfo;
