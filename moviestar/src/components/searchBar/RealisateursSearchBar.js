import React, { useState } from 'react';
import { FaUserTie } from 'react-icons/fa';
import '../../styles/searchbar.css';

/**
 * Composant pour la barre de recherche des réalisateurs.
 *
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Function} props.onSearch - Fonction appelée lorsqu'une recherche est soumise avec le terme de recherche en argument.
 * @returns {JSX.Element} Le composant `RealisateursSearchBar`.
 */
const RealisateursSearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    /**
     * Gère le changement dans le champ de recherche.
     *
     * @param {Object} e - L'événement déclenché par le changement dans le champ de recherche.
     */
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
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
                placeholder="Rechercher un réalisateur"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}><FaUserTie /> {/* Icône de recherche React Icons */}</button>
        </div>
    );
};

export default RealisateursSearchBar;
