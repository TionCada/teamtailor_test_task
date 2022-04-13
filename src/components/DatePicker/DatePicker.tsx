import React from 'react';
import './DatePicker.scss'

interface DatePickerProps {
    value: string;
    setValue: (value: string) => void;
}

const DatePicker = ({value, setValue}: DatePickerProps) => {

    return (
        <div className='date_picker_container'>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="date" required/>
        </div>
    );
}

export default DatePicker;
