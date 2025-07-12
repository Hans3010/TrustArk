import { useState } from 'react';

export const useNavigation = (initialPage = 'dashboard') => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  return {
    currentPage,
    setCurrentPage,
  };
};

export default useNavigation;
