// ActeurItem.js
import React from 'react';

const ActeurItem = ({ acteur, onClick, isSelected }) => (
    <div onClick={onClick} className={`listitem-frame ${isSelected ? 'selected' : ''}`}>

        <strong>{acteur.nom}</strong> <br />
        Date de naissance: {acteur.dateNaissance} <br />
        Lieu de naissance: {acteur.lieuNaissance} <br />
        Id IMDB: {acteur.idIMDB}
    </div>
);

export default ActeurItem;