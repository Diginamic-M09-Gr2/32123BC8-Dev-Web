// src/pages/Acteurs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Acteurs = () => {
  const [acteurs, setActeurs] = useState([]);

  useEffect(() => {
    const fetchActeurs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/acteurs/250/films');
        setActeurs(response.data);
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    };

    fetchActeurs();
  }, []);

  return (
    <div>
      <h2>Actors Page</h2>
      <ul>
        {acteurs.map((actorData, index) => (
          <li key={index}>
            <strong>Nom de films:</strong> {actorData[0]}, <strong>Année de sortie:</strong>{actorData[1]}
            {actorData.slice(1).map((film, filmIndex) => (
              <span key={filmIndex}>{film[0]} ({film[1]}){filmIndex !== actorData.length - 2 ? ', ' : ''}</span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Acteurs;