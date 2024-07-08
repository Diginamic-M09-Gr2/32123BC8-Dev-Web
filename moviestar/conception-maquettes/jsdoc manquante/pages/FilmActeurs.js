// src/pages/FilmActeurs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilmActeurs = () => {
  const [acteurId, setActeursId] = useState('');
  const [films, setFilms] = useState([]);

  const handleActeursIdChange = (e) => {
    setActeursId(e.target.value);
  };

  const handleFetchFilms = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/acteurs/${acteurId}/films`);
      setFilms(response.data);
       console.log(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>Movies by Actor</h2>
      <label>
        Actor ID:
        <input type="text" value={acteurId} onChange={handleActeursIdChange} />
      </label>
      <br />
      <button onClick={handleFetchFilms}>Liste de Films</button>
      <ul>
        {films.map((filmData, index) => (
                  <li key={index}>
                    <strong>Titre:</strong> {filmData[0]}, <strong>Année:</strong> {filmData[1]}
                  </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmActeurs;