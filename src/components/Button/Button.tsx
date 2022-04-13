import React, {Dispatch, SetStateAction} from 'react';
import './Button.scss'

interface ButtonProps {
    children: React.ReactNode;
    mode: 'dark' | 'light';
    isDisabled: boolean;
    isSubmitButton: boolean;
    closeModalHandler?: Dispatch<SetStateAction<boolean>>;
}

const Button = ({children, mode, closeModalHandler, isDisabled, isSubmitButton}: ButtonProps) => {

    return (
        <div className='button_container'>
            <button type={isSubmitButton ? 'submit' : 'button'} disabled={isDisabled} className={`${mode}`}
                    onClick={() => closeModalHandler && closeModalHandler(false)}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;
