import React, {Dispatch, SetStateAction} from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isModalActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal = ({isModalActive, setIsModalActive, children}: ModalProps) => {
  return (
    <div className={isModalActive ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
         onClick={() => setIsModalActive(false)}>
      <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
