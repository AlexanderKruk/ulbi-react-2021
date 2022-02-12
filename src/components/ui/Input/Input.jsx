import React, { forwardRef } from 'react';
import styles from './Input.module.css'

export const Input = forwardRef((props, ref) => {
  return <input ref={ref} className={styles.input} {...props} />;
});
