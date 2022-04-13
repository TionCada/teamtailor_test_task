import React from 'react';
import './Input.scss'
import {text} from "stream/consumers";

interface InputProps {
    placeholder: string;
    value: string;
    setValue: (value: string) => void;
    type: 'text' | 'email';
}

const Input = ({placeholder, value, setValue, type}: InputProps) => {

    return (
        <div className='input_container'>
            <input
                required
                className='input'
                placeholder={placeholder}
                value={value}
                onChange={(e) =>
                    setValue(e.target.value)}
                type={type}
            />
        </div>
    );
}

export default Input;
