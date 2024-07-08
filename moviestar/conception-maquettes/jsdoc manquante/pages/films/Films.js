// src/pages/Films.js
import React, { useEffect, useState } from 'react';
import backendService from '../../services/backendService';

/**
 * Composant pour afficher la liste des films.
 * @component
 */
const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        /**
         * Fonction asynchrone pour récupérer la liste des films depuis le backend.
         */
        const fetchFilms = async () => {
            try {
                const filmsData = await backendService.fetchFilms();
                setFilms(filmsData);
            } catch (error) {
                console.error('Erreur lors de la récupération des films :', error);
                // Gérer l'erreur
            }
        };

        fetchFilms();
    }, []);

    /**
     * Gère le clic sur le bouton "Details" d'un film.
     * @param {number} filmId - L'ID du film.
     */
    const handleFilmDetailsClick = async (filmId) => {
        try {
            const filmDetails = await backendService.fetchFilmDetails(filmId);
            console.log('Détails du film :', filmDetails);
            // Gérer l'affichage des détails du film dans l'interface utilisateur
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du film :', error);
            // Gérer l'erreur
        }
    };

    return (
        <div>
            <h2>Page Films</h2>
            <ul>
                {films.map((film) => (
                    <li key={film.id}>
                        {film.nom} - <button onClick={() => handleFilmDetailsClick(film.id)}>Détails</button>
                    </li>
                ))}
            </ul>
            {/* Ajouter plus de contenu et de fonctionnalités au besoin */}
        </div>
    );
};

export default Films;
