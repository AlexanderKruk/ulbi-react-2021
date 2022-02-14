import React from 'react';
import { useGetPages } from '../../../hooks/useGetPages';
import styles from './Pagination.module.css'

export const Pagination = ({totalPages, page, setPage}) => {

  const pages = useGetPages(totalPages);

  return (
    <div className={styles.wrapper}>
        {pages.map((item) => (
          <span
            className={page === item ? [styles.page, styles.current].join(' ') : styles.page}
            key={item}
            onClick={() => setPage(item)}
          >
            {item}
          </span>
        ))}
    </div>
  );
};
