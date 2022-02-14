import { useMemo } from "react";

export const useGetPages = (totalPages) => {
  const createdPages = useMemo(() => {
    const pages = [];
    if (totalPages !== 0) {
      for (let i = 0; i < totalPages; i++) {
        pages[i] = i + 1;
      }
    }
    return pages;
  }, [totalPages]);
  return createdPages;
};
