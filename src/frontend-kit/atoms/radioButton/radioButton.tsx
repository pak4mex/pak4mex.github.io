import * as React from 'react';
import { useState } from 'react';

interface RadioButtonProps {
  label: string[];
  disabled?: boolean;
  checked?: boolean;
  handlerSelect?: (x: number) => void;
  option?: number;
}

const RadioButton: React.FunctionComponent<RadioButtonProps> = ({
  label,
  disabled,
  checked,
  handlerSelect,
  option
}: RadioButtonProps) => {

  const [selected, setSelected] = handlerSelect ? [option, handlerSelect] : useState(0);
  console.log(selected)

  return (
    <div>
      {label.map((label: string, index: number) => {
        return (
          <div key={index} className="a-radio-button">
            <input type="radio" disabled={disabled} 
              checked={index == selected ? true : false} 
              onChange={() => setSelected(index)} />
            <label className="ml-1">{label}</label>
          </div>
        )
      })}
    </div>
  )
};

export default RadioButton;
