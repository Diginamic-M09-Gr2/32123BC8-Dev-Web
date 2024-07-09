import React, { useState } from 'react';
import '../../styles/searchbar.css';

/**
 * Composant pour la barre de recherche des acteurs.
 *
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Function} props.onSearch - Fonction appelée lorsqu'une recherche est soumise avec le terme de recherche en argument.
 * @returns {JSX.Element} Le composant `ActeursSearchBar`.
 */
const ActeursSearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    /**
     * Gère le changement dans le champ de recherche.
     *
     * @param {Object} e - L'événement déclenché par le changement dans le champ de recherche.
     */
    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Rechercher un acteur"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Rechercher</button>
        </div>
    );
};

export default ActeursSearchBar;
