import * as React from 'react';
import { useState } from 'react';

interface CheckboxProps {
  value?: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  onChangeHandler?: (b: boolean) => void | React.Dispatch<boolean>
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  value,
  label,
  checked = false,
  disabled = false,
  name,
  onChangeHandler,
}: CheckboxProps) => {

  const [isChecked, setIsChecked] = onChangeHandler? [checked, onChangeHandler]: useState(checked)



  return (
    <div className='inline-flex items-center' >
      <label className='contents'>
        <input type="checkbox" checked={isChecked} disabled={disabled} name={name} value={value} onChange={() => setIsChecked(!checked)} className={`appearance-none inline-block h-6 w-6 text-center align-middle text-l ${isChecked? 'major-accent-primary ui-ic-checkmark': 'small-primary text-opacity-100'}`} />
        <span className='inline-block text-m ml-2 text-black dark:text-white disabled:text-bosch-gray-80 dark:disabled:text-bosch-gray-30'>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
export type { CheckboxProps };
