// src/components/pagination/Pagination.js

import React from 'react';
import './paginationcontrol.css';

const PaginationControl = ({ page, totalPages, setPage }) => {
    return (
        <div className="pagination-controls">
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                Previous
            </button>
            <span>
                Page {page + 1} of {totalPages}
            </span>
            <button onClick={() => setPage(page + 1)} disabled={page + 1 === totalPages}>
                Next
            </button>
        </div>
    );
};

export default PaginationControl;
