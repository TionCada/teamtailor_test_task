import React from 'react';
import './RadioButtonGroup.scss'

type InitData = 'Excel' | 'CSV';

interface RadioButtonGroupProps {
    initData: InitData[];
    value: InitData;
    setValue: (value: InitData) => void;
}

const RadioButtonGroup = ({initData, value, setValue}: RadioButtonGroupProps) => {

    return (
        <div className='radio_button_group_container'>
            {initData.map((item) =>
                <>
                    <input
                        type='radio'
                        value={item}
                        checked={item === value}
                        onChange={(e) => setValue(e.target.value as InitData)}
                        id={item}
                    />
                    <p>{item}</p>
                </>
            )}
        </div>
    );
}

export default RadioButtonGroup;
