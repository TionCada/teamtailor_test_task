import React, {useState} from 'react';
import styles from './Input.module.scss'

interface InputProps {
  placeholder: string;
}

const Input = ({placeholder}: InputProps) => {

  const [value, setValue] = useState('')

  return (
    <input className={styles.input} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}>

    </input>
  );
}

export default Input;
