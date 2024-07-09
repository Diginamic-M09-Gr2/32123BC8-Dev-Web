import React from 'react';
import './paginationcontrol.css';

/**
 * Composant pour contrôler la pagination, permettant de naviguer entre les pages.
 *
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {number} props.page - Le numéro de la page actuelle (0-indexée).
 * @param {number} props.totalPages - Le nombre total de pages.
 * @param {Function} props.setPage - Fonction pour mettre à jour la page active.
 * @returns {JSX.Element} Le composant `PaginationControl`.
 */
const PaginationControl = ({ page, totalPages, setPage }) => {
    return (
        <div className="pagination-controls">
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                Précédent
            </button>
            <span>
                Page {page + 1} sur {totalPages}
            </span>
            <button onClick={() => setPage(page + 1)} disabled={page + 1 === totalPages}>
                Suivant
            </button>
        </div>
    );
};

export default PaginationControl;
