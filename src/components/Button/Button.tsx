import React from 'react';
import './Button.scss'

interface ButtonProps {
  children: React.ReactNode;
  mode: 'dark' | 'light';
}

const Button = ({children, mode}: ButtonProps) => {

  return (
      <div className='button_container'>
        <button className={`${mode}`}>
          {children}
        </button>
      </div>
  );
}

export default Button;
