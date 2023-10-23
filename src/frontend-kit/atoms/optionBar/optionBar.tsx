import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createContext } from 'react';

interface Option {
  label: string;
  icon?: string;
  disabled?: boolean;
}

interface OptionBarProps {
  options: Option[];
  actIndex: number;
  setActIndex: (index: number) => void;
}

const OptionBar: React.FunctionComponent<OptionBarProps> = ({
  options = [{
    label: '',
    icon: '',
    disabled: false,
  }],
  actIndex = 0,
  setActIndex = () => { },
}: OptionBarProps) => {

  const getBgClass = (index: number): string => {
    return index === actIndex ? 'major-accent-primary' : 'neutral-primary'
  }

  return (
    <div className='h-12 grid grid-flow-col auto-cols-max'>
      {options.map((option, index) => (
        <button disabled={option.disabled} key={index} onClick={() => setActIndex(index)} className={`inline-flex flex-row align-middle ${getBgClass(index)}`}>
          {option.icon && <i className={`my-auto ${option.label ? 'mr-1 ml-4' : 'mx-[0.875rem]'} ${option.icon}`} />}
          <span className={`my-auto ${option.icon ? 'ml-1 mr-4' : 'mx-4'}`} >{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default OptionBar;
export type { OptionBarProps };
