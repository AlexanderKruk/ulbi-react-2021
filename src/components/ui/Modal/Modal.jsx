import React from 'react';
import styles from './Modal.module.css'

export const Modal = ({children, visible, setVisible}) => {

  const rootClass = [styles.modal]

  if(visible) {
    rootClass.push(styles.active)
  }

  return (
    <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
    );
};
