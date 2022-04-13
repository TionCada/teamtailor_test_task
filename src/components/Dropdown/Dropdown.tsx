import React from 'react';
import './Dropdown.scss'
import Arrow from '../../images/dropdown_arrow.png'

interface DropdownProps {
    options: string[];
    value: string;
    setValue: (value: string) => void;
}

const Dropdown = ({options, value, setValue}: DropdownProps) => {

    return (
        <div className='dropdown_container'>
            <select value={value} onChange={(e) =>
                setValue(e.target.value)}>
                {options.map((item, index) =>
                    <option key={item + index} value={item}>{item}</option>
                )}
            </select>
            <img src={Arrow}/>
        </div>
    );
}

export default Dropdown;
