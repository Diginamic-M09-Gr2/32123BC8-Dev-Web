// src/pages/ModifyGenre.js
import React, { useState } from 'react';
import axios from 'axios';

const ModifierGenres = () => {
  const [genreId, setGenreId] = useState('');
  const [newGenreName, setNewGenreName] = useState('');

  const handleGenreIdChange = (e) => {
    setGenreId(e.target.value);
  };

  const handleNewGenreNameChange = (e) => {
    setNewGenreName(e.target.value);
  };

  const handleModifyGenre = async () => {
    try {
      await axios.put(`http://localhost:8080/genres/${genreId}`, { newGenreName });
      console.log('Genre modified successfully!');
      // You may want to update the state or show a success message
    } catch (error) {
      console.error('Error modifying genre:', error);
      // Handle error: display an error message, rollback changes, etc.
    }
  };

  const handleDeleteGenre = async () => {
    try {
      await axios.delete(`http://localhost:8080/genres/${genreId}`);
      console.log('Genre deleted successfully!');
      // You may want to update the state or show a success message
    } catch (error) {
      console.error('Error deleting genre:', error);
      // Handle error: display an error message, rollback changes, etc.
    }
  };

  return (
    <div>
      <h2>Modify/Delete Genre</h2>
      <label>
        Genre ID:
        <input type="text" value={genreId} onChange={handleGenreIdChange} />
      </label>
      <br />
      <label>
        New Genre Name:
        <input type="text" value={newGenreName} onChange={handleNewGenreNameChange} />
      </label>
      <br />
      <button onClick={handleModifyGenre}>Modify Genre</button>
      <button onClick={handleDeleteGenre}>Delete Genre</button>
    </div>
  );
};

export default ModifierGenres;