// RoleInfo.js
import React from 'react';

const RoleInfo = ({ selectedFilm }) => {
    return (
        <div className="film-info">
            {selectedFilm && (
                <>
                    <h2>Roles dans {selectedFilm.nom}</h2>
                    {selectedFilm.roles && selectedFilm.roles.length > 0 ? (
                        <ul>
                            {selectedFilm.roles.map((role, index) => (
                                <li key={index}>
                                    Personnage: {role.personnage || 'Unknown'} - Acteur: {role.acteur ? role.acteur.nom : 'Unknown'}
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
