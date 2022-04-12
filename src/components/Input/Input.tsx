import React from 'react';
import './Input.scss'

interface InputProps {
    placeholder: string;
    value: string;
    setValue: (value: string) => void;
}

const Input = ({placeholder, value, setValue}: InputProps) => {

    return (
        <div className='input_container'>
            <input
                className='input'
                placeholder={placeholder}
                value={value}
                onChange={(e) =>
                    setValue(e.target.value)}
            />
        </div>
    );
}

export default Input;
