// src/pages/ModifyActeurs.js
import React, { useState } from 'react';
import axios from 'axios';

const ModifyActeurs = () => {
  const [acteurId, setActeurId] = useState('');
  const [newName, setNewName] = useState('');

  const handleActeursIdChange = (e) => {
    setActeurId(e.target.value);
  };

  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleModifyActeurs = async () => {
    try {
          // Create a payload with only the fields you want to update
          const payload = { nom: newName }; // Assuming "nom" is the field to update, adjust based on your backend

          await axios.put(`http://localhost:8080/acteurs/${acteurId}`, payload);
          console.log('Actor modified successfully!');
          // You may want to update the state or show a success message
        } catch (error) {
          console.error('Error modifying actor:', error);
          // Handle error: display an error message, rollback changes, etc.
        }
      };

  return (
    <div>
      <h2>Modifier Acteur</h2>
      <label>
        Actor ID:
        <input type="text" value={acteurId} onChange={handleActeursIdChange} />
      </label>
      <br />
      <label>
        New Name:
        <input type="text" value={newName} onChange={handleNewNameChange} />
      </label>
      <br />
      <button onClick={handleModifyActeurs}>Modifier Acteur</button>
    </div>
  );
};

export default ModifyActeurs;