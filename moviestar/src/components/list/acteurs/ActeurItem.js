import React from 'react';

/**
 * Composant représentant un élément d'acteur.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {object} props.acteur - Les informations de l'acteur.
 * @param {string} props.acteur.nom - Le nom de l'acteur.
 * @param {string} props.acteur.dateNaissance - La date de naissance de l'acteur.
 * @param {string} props.acteur.lieuNaissance - Le lieu de naissance de l'acteur.
 * @param {string} props.acteur.idIMDB - L'identifiant IMDB de l'acteur.
 * @param {function} props.onClick - La fonction à appeler lors d'un clic sur l'élément.
 * @param {boolean} props.isSelected - Indique si l'élément est sélectionné.
 * @returns {JSX.Element} Un élément représentant un acteur.
 */
const ActeurItem = ({ acteur, onClick, isSelected }) => (
    <div onClick={onClick} className={`pages-listitem-frame ${isSelected ? 'selected' : ''}`}>
        <strong>{acteur.nom}</strong> <br />
        Date de naissance: {acteur.dateNaissance} <br />
        Lieu de naissance: {acteur.lieuNaissance} <br />
        Id IMDB: {acteur.idIMDB}
    </div>
);

export default ActeurItem;
