// Search.js
import React, { useState } from 'react';
import backendServiceSearch from '../services/backendServiceSearch';

const Search = () => {
    const [searchCriteria, setSearchCriteria] = useState({
        startYear: '',
        endYear: '',
        actor1: '',
        actor2: '',
    });
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const results = await backendServiceSearch.advancedSearch(searchCriteria);
            setSearchResults(results);
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div>
            <h2>Advanced Search Page</h2>
            <div>
                <label>Start Year:</label>
                <input
                    type="text"
                    value={searchCriteria.startYear}
                    onChange={(e) =>
                        setSearchCriteria((prevCriteria) => ({ ...prevCriteria, startYear: e.target.value }))
                    }
                />
            </div>

            <div>
                <label>End Year:</label>
                <input
                    type="text"
                    value={searchCriteria.endYear}
                    onChange={(e) =>
                        setSearchCriteria((prevCriteria) => ({ ...prevCriteria, endYear: e.target.value }))
                    }
                />
            </div>

            <div>
                <label>Actor 1:</label>
                <input
                    type="text"
                    value={searchCriteria.actor1}
                    onChange={(e) =>
                        setSearchCriteria((prevCriteria) => ({ ...prevCriteria, actor1: e.target.value }))
                    }
                />
            </div>

            <div>
                <label>Actor 2:</label>
                <input
                    type="text"
                    value={searchCriteria.actor2}
                    onChange={(e) =>
                        setSearchCriteria((prevCriteria) => ({ ...prevCriteria, actor2: e.target.value }))
                    }
                />
            </div>

            <button onClick={handleSearch}>Search</button>

            <div>
                <h3>Search Results</h3>
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.id}>{result.title}</li>
                    ))}
                </ul>
            </div>
            {/* Add more content and functionality as needed */}
        </div>
    );
};

export default Search;