import React, {useState} from 'react';
import styles from './Dropdown.module.scss'
import Arrow from '../../images/dropdown_arrow.png'

interface DropdownProps {
    options: string[];
}

const Dropdown = ({options}: DropdownProps) => {

    const [value, setValue] = useState('')

    return (
        <div className={styles.container}>
            <select onChange={(e) =>
                setValue(e.target.value)}>
                {options.map((item) =>
                    <option value={item}>{item}</option>
                )}
            </select>
            <img src={Arrow}/>
        </div>
    );
}

export default Dropdown;
