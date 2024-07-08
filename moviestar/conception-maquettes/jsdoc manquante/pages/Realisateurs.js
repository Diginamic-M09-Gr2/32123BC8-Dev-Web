// Realisateurs.js
import React, { useEffect, useState } from 'react';
import backendServiceRealisateurs from '../services/backendServiceRealisateurs';
import '../styles/styles.css'; // Import styles

const Realisateurs = () => {
    const [realisateurs, setRealisateurs] = useState([]);
    const [selectedRealisateur, setSelectedRealisateur] = useState({ films: [] });
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Number of realisateurs per page
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    useEffect(() => {
        const fetchRealisateurs = async () => {
            try {
                const realisateursData = await backendServiceRealisateurs.fetchRealisateurs(currentPage, pageSize);
                setRealisateurs(realisateursData);
            } catch (error) {
                // Handle error
            }
        };

        fetchRealisateurs();
    }, [currentPage, pageSize]);

    const handleRealisateurClick = async (realisateur, index) => {
        try {
            console.log('Clicked Realisateur:', realisateur);

            // Check if realisateur.idRealisateur is defined
            if (realisateur.idRealisateur !== undefined) {
                console.log('Realisateur ID:', realisateur.idRealisateur); // Log the realisateur ID
                setSelectedRealisateur(realisateur);

                const filmsData = await backendServiceRealisateurs.fetchRealisateurFilms(realisateur.idRealisateur);
                console.log('Films Data:', filmsData); // Log the films data

                // Assuming filmsData is an array of film objects
                setSelectedRealisateur((prevRealisateur) => ({ ...prevRealisateur, films: filmsData }));
                setSelectedItemIndex(index); // Set the selected item index
            } else {
                console.error('Realisateur ID is undefined.');
            }
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    // Additional logs to inspect the state and films data
    useEffect(() => {
        console.log('Selected Realisateur State:', selectedRealisateur);
    }, [selectedRealisateur]);

    return (
        <div className="container">
            <div className="realisateurs-list">
                <h2>Liste de Réalisateurs</h2>
                <ul>
                    {realisateurs.map((realisateur, index) => (
                        <li
                            key={realisateur.id}
                            onClick={() => handleRealisateurClick(realisateur, index)}
                            className={index === selectedItemIndex ? 'selected' : ''}
                        >
                            <strong>{realisateur.nom}</strong> <br></br>
                            Date de naissance:{realisateur.dateNaissance} <br></br>
                            Lieu de naissance: {realisateur.lieuNaissance} <br></br>
                            Id IMDB: {realisateur.idIMDB}
                        </li>
                    ))}
                </ul>

                {/* Pagination controls */}
                <div className="pagination-controls">
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                        Page Précédente
                    </button>
                    <span> Page {currentPage} </span>
                    <button disabled={realisateurs.length < pageSize} onClick={() => setCurrentPage(currentPage + 1)}>
                        Page Suivantes
                    </button>
                </div>
            </div>

            {selectedRealisateur.films && selectedRealisateur.films.length > 0 && (
                <div className="films-section">
                    <h3>Filmographie</h3>
                    <p>Chefs d'Oeuvre de {selectedRealisateur.nom} :</p>
                    <ul>
                        {selectedRealisateur.films.map((film) => (
                            <li key={film.id}>{film.nom}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Add these additional logs */}
            <div>
                <h3>Rendering Information</h3>
                <p>Selected Realisateur ID: {selectedRealisateur.idRealisateur}</p>
                <p>Films Array: {JSON.stringify(selectedRealisateur.films)}</p>
            </div>

        </div>
    );
};

export default Realisateurs;