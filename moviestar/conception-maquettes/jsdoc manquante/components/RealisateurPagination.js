// src/components/RealisateursPagination.js
import React from 'react';

/**
 * Composant de pagination pour la liste des réalisateurs.
 * Affiche des contrôles de pagination pour naviguer entre les pages.
 * @component
 * @param {Object} props - Propriétés du composant.
 * @param {Function} props.onPageChange - Fonction appelée lorsqu'une nouvelle page est sélectionnée.
 * @param {number} props.currentPage - Numéro de la page actuellement sélectionnée.
 * @param {number} props.totalPages - Nombre total de pages disponibles.
 */
const RealisateursPagination = ({ onPageChange, currentPage, totalPages }) => {
    /**
     * Gère le changement de page lorsqu'un bouton de pagination est cliqué.
     * @param {number} page - Numéro de la page à laquelle l'utilisateur souhaite accéder.
     */
    const handlePageChange = (page) => {
        // Appelle la fonction onPageChange passée en prop avec le numéro de la nouvelle page
        onPageChange(page);
    };

    return (
        <div>
            {/* Affiche les boutons de pagination */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    disabled={currentPage === page}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default RealisateursPagination;
