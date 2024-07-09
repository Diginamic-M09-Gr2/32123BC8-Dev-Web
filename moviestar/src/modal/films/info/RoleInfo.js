import React from 'react';

/**
 * Composant React pour afficher les informations sur les rôles d'un film sélectionné.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {object} props.selectedFilm - Les informations du film sélectionné.
 * @param {string} props.selectedFilm.nom - Le nom du film sélectionné.
 * @param {array} props.selectedFilm.roles - Les rôles associés au film sélectionné.
 * @param {string} props.selectedFilm.roles[].personnage - Le personnage joué (ou 'Unknown' si inconnu).
 * @param {object} props.selectedFilm.roles[].acteur - Les informations sur l'acteur du rôle.
 * @param {string} props.selectedFilm.roles[].acteur.nom - Le nom de l'acteur (ou 'Unknown' si inconnu).
 *
 * @returns {JSX.Element} Composant d'informations sur les rôles d'un film.
 */
const RoleInfo = ({ selectedFilm }) => {
    return (
        <div className="film-info">
            {selectedFilm && (
                <>
                    <h2>Rôles dans {selectedFilm.nom}</h2>
                    {selectedFilm.roles && selectedFilm.roles.length > 0 ? (
                        <ul>
                            {selectedFilm.roles.map((role, index) => (
                                <li key={index}>
                                    Personnage: {role.personnage || 'Inconnu'} - Acteur: {role.acteur ? role.acteur.nom : 'Inconnu'}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Pas de rôles disponibles</p>
                    )}
                </>
            )}
        </div>
    );
};

export default RoleInfo;
