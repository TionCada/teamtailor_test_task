import React, {Dispatch, SetStateAction} from 'react';
import './RadioButtonGroup.scss'
import {FormatValue} from '../../App'
import {ScheduleValue} from '../../App'

interface RadioButtonGroupProps {
    initData: FormatValue[] | ScheduleValue[];
    value: FormatValue | ScheduleValue;
    setValue: Dispatch<SetStateAction<FormatValue>> |
        Dispatch<SetStateAction<ScheduleValue>>;
}

const RadioButtonGroup = ({initData, value, setValue}: RadioButtonGroupProps) => {

    return (
        <div className='radio_button_group_container'>
            {initData.map((item, index) =>
                <div key={item + index} className='radio_button_group'>
                    <input
                        type='radio'
                        value={item}
                        checked={item === value}
                        onChange={(e) => setValue(e.target.value as
                            SetStateAction<FormatValue> & SetStateAction<ScheduleValue>)}
                        id={item}
                    />
                    <p>{item}</p>
                </div>
            )}
        </div>
    );
}

export default RadioButtonGroup;
