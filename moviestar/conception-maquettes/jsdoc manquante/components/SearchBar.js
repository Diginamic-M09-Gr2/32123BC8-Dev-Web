// RealisateursSearchBar.js
import React, { useState } from 'react';
import '../styles/searchbar.css';

/**
 * Composant de barre de recherche pour les réalisateurs.
 * Permet à l'utilisateur de saisir un terme de recherche et de lancer une recherche.
 * @component
 * @param {Object} props - Propriétés du composant.
 * @param {Function} props.onSearch - Fonction appelée lorsqu'une recherche est lancée.
 */
const SearchBar = ({ onSearch }) => {
    // État local pour stocker le terme de recherche saisi par l'utilisateur
    const [searchTerm, setSearchTerm] = useState('');

    /**
     * Gère la mise à jour du terme de recherche à chaque changement dans l'entrée utilisateur.
     * @param {Object} e - Événement de changement de l'entrée utilisateur.
     */
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    /**
     * Gère le lancement de la recherche lorsqu'un utilisateur clique sur le bouton de recherche.
     */
    const handleSearch = () => {
        // Appelle la fonction onSearch passée en prop avec le terme de recherche actuel
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            {/* Champ de saisie de texte pour le terme de recherche */}
            <input
                type="text"
                placeholder="Rechercher un réalisateur"
                value={searchTerm}
                onChange={handleInputChange}
            />
            {/* Bouton de recherche pour lancer la recherche */}
            <button onClick={handleSearch}>Rechercher</button>
        </div>
    );
};

export default SearchBar;
