// RealisateursSearchBar.js
import React, { useState } from 'react';
import { FaUserTie } from 'react-icons/fa';
import '../../../styles/searchbar.css';

const RealisateursSearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Rechercher un réalisateur"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}><FaUserTie /> {/* React Icons search icon */}</button>
        </div>
    );
};

export default RealisateursSearchBar;
