import React, {useState} from 'react';
import styles from './TimePicker.module.scss'

const TimePicker = () => {

    const [value, setValue] = useState('')

    return (
        <div className={styles.container}>
            <input type="time" required/>
        </div>
    );
}

export default TimePicker;
