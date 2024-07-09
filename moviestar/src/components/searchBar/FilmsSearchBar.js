import React, { useState } from 'react';

/**
 * Composant pour la barre de recherche des films.
 *
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Function} props.onSearch - Fonction appelée lorsqu'une recherche est soumise avec le terme de recherche en argument.
 * @returns {JSX.Element} Le composant `FilmsSearchBar`.
 */
const FilmsSearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    /**
     * Gère le changement dans le champ de recherche.
     *
     * @param {Object} event - L'événement déclenché par le changement dans le champ de recherche.
     */
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    /**
     * Gère la soumission de la recherche.
     */
    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Rechercher des films..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Rechercher</button>
        </div>
    );
};

export default FilmsSearchBar;
