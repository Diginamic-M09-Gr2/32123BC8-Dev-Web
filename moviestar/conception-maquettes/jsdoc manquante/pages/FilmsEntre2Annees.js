// src/pages/FilmsEntre2Annees.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilmsEntre2Annees = () => {
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [films, setFilms] = useState([]);

  const handleStartYearChange = (e) => {
    setStartYear(e.target.value);
  };

  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
  };

  const handleFetchFilms = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/films/released-between-years`, {
            params: {
              startYear: parseInt(startYear),
              endYear: parseInt(endYear),
            },
          });
      console.log(response.data); // For debugging purposes
      setFilms(response.data);
    } catch (error) {
      console.error('Error fetching films:', error);
    }
  };

  return (
    <div>
      <h2>Films by Years</h2>
      <label>
        Start Year:
        <input type="text" value={startYear} onChange={handleStartYearChange} />
      </label>
      <br />
      <label>
        End Year:
        <input type="text" value={endYear} onChange={handleEndYearChange} />
      </label>
      <br />
      <button onClick={handleFetchFilms}>Fetch Films</button>
      <ul>
        {films.map((film, index) => (
          <li key={index}>{film.nom} ({film.anneeSortie})</li>
        ))}
      </ul>
    </div>
  );
};

export default FilmsEntre2Annees;