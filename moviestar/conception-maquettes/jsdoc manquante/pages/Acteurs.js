import React, { useEffect, useState } from 'react';
import backendService from '../services/backendService';
import '../styles/styles.css';

/**
 * Composant Acteurs pour afficher la liste des acteurs et leurs filmographies.
 * @returns {JSX.Element} Élément JSX représentant la page des acteurs.
 */
const Acteurs = () => {
    // État local pour stocker la liste des acteurs depuis le backend
    const [acteurs, setActeurs] = useState([]);

    // État local pour stocker l'acteur sélectionné et afficher sa filmographie
    const [selectedActor, setSelectedActor] = useState(null);

    /**
     * Effet secondaire pour récupérer la liste des acteurs depuis le backend lors du montage du composant.
     */
    useEffect(() => {
        const fetchActeurs = async () => {
            try {
                // Appel à la fonction de service pour récupérer les données des acteurs
                const acteursData = await backendService.fetchActeurs();
                setActeurs(acteursData);
            } catch (error) {
                // Gérer l'erreur en cas de problème lors de la récupération des acteurs
                console.error('Error fetching actors:', error);
            }
        };

        // Appeler la fonction fetchActeurs pour récupérer les données lors du montage
        fetchActeurs();
    }, []);

    /**
     * Gérer le clic sur un acteur, met à jour l'état pour afficher la filmographie de l'acteur sélectionné.
     * @param {Array} actor - Les données de l'acteur sélectionné.
     */
    const handleActorClick = (actor) => {
        setSelectedActor(actor);
    };

    // Retourner l'élément JSX représentant la page des acteurs
    return (
        <div className="component-container">
            <h2 className="component-heading">Page Acteur</h2>
            {/* Liste des acteurs */}
            <ul className="list-container">
                {acteurs.map((actorData, index) => (
                    // Utilisation de liens pour chaque acteur, gérant le clic sur l'acteur
                    <li key={index} onClick={() => handleActorClick(actorData)}>
                        <strong>Nom de films:</strong> {actorData[0]}, <strong>Année de sortie:</strong>{' '}
                        {actorData[1]}
                        {/* Afficher les détails des films pour chaque acteur */}
                        {actorData.slice(1).map((film, filmIndex) => (
                            <span key={filmIndex}>
                                {film[0]} ({film[1]})
                                {filmIndex !== actorData.length - 2 ? ', ' : ''}
                            </span>
                        ))}
                    </li>
                ))}
            </ul>
            {/* Afficher la filmographie détaillée de l'acteur sélectionné */}
            {selectedActor && (
                <div>
                    <h3>Filmographie de {selectedActor[0]}:</h3>
                    {/* Liste des films pour l'acteur sélectionné */}
                    <ul>
                        {selectedActor.slice(1).map((film, filmIndex) => (
                            <li key={filmIndex}>
                                <strong>Nom de film:</strong> {film[0]}, <strong>Année de sortie:</strong>{' '}
                                {film[1]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Acteurs;
