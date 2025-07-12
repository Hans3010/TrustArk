import { useState } from 'react';

export const useNavigation = (initialPage = 'home') => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  return {
    currentPage,
    setCurrentPage,
  };
};

export default useNavigation;
