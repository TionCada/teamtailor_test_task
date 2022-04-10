import React, {useState} from 'react';
import styles from './RadioButtonGroup.module.scss';

interface RadioButtonGroupProps {
  radioButtons: {
    value: string;
    name: string;
  }[];
}

const RadioButtonGroup = ({radioButtons}: RadioButtonGroupProps) => {

  return (
    <>
      {radioButtons.map((item) => {
        <div>
          <input
            type='radio'
            name='dynamic-radio'
            value={item.value}
            checked={checkedOptionValue === option.value}
            onChange={this.handleRadioChange}
          />
        </div>
      })}
    </>
  );
}

export default RadioButtonGroup;
