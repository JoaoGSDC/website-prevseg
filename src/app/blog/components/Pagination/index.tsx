import React from 'react';
import styles from './styles.module.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = new Set<number>();

    pages.add(1); // First page
    if (currentPage > 2) pages.add(currentPage - 1); // Previous page
    pages.add(currentPage); // Current page
    if (currentPage < totalPages - 1) pages.add(currentPage + 1); // Next page
    pages.add(totalPages); // Last page

    return Array.from(pages)
      .sort((a, b) => a - b)
      .map((page, index, array) => (
        <React.Fragment key={page}>
          {index > 0 && page !== array[index - 1] + 1 && <span className={styles.ellipsis}>...</span>}
          <button
            className={`${styles.pageButton} ${page === currentPage ? styles.activePage : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        </React.Fragment>
      ));
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        disabled={currentPage === 1}
        className={`${styles.navButton} ${currentPage === 1 ? styles.disabled : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FaArrowLeft />
      </button>

      {renderPageNumbers()}

      <button
        disabled={currentPage === totalPages}
        className={`${styles.navButton} ${currentPage === totalPages ? styles.disabled : ''}`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
