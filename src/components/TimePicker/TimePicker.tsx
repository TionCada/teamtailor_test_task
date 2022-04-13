import React from 'react';
import './TimePicker.scss'

interface TimePickerProps {
    value: string;
    setValue: (value: string) => void;
}

const TimePicker = ({value, setValue}: TimePickerProps) => {

    return (
        <div className='time_picker_container'>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="time" required/>
        </div>
    );
}

export default TimePicker;
