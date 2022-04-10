import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  mode: 'dark' | 'light';
}

const Button = ({children, mode}: ButtonProps) => {

  return (
    <button className={`${styles.button} ${mode}`}>
      {children}
    </button>
  );
}

export default Button;
