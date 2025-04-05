'use client';

import React, { useState } from 'react';
import Pagination from '../Pagination';

interface PaginationWrapperProps {
  totalPages: number;
  initialPage?: number;
}

const PaginationWrapper: React.FC<PaginationWrapperProps> = ({ totalPages, initialPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      console.log('Página alterada para:', page);
    }
  };

  return <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />;
};

export default PaginationWrapper;
