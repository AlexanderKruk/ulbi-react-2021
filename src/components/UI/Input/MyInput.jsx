import React, { forwardRef } from 'react';
import styles from './MyInput.module.css'

export const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} className={styles.myInput} {...props} />;
});
