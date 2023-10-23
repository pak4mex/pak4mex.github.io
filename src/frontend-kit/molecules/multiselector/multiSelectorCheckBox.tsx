import { useState } from "react";

interface MultiSelectorCheckboxProps {
    value?: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: () => void;
  }
  
  const MultiSelectorCheckbox: React.FunctionComponent<MultiSelectorCheckboxProps> = ({
    value,
    label,
    checked = false,
    disabled = false,
    name,
    onChange,
  }: MultiSelectorCheckboxProps) => {
  
    const [isChecked, setIsChecked] = useState(checked)
  
    const handleChange = () => {
      setIsChecked(!isChecked)
      onChange && onChange()
    }
  
    return (
      <div className='inline-flex items-center' >
        <label className='contents'>
          <input type="checkbox" checked={isChecked} disabled={disabled} name={name} value={value} onChange={handleChange} className={`appearance-none h-3 w-3 text-center align-middle text-s leading-none ${isChecked? 'major-accent-primary ui-ic-checkmark': 'small-primary text-opacity-100'}`} />
          <span className={`inline-block text-m ml-2 text-black dark:text-white disabled:text-bosch-gray-80 dark:disabled:text-bosch-gray-30 ${isChecked && 'font-bold'}`}>{label}</span>
        </label>
      </div>
    );
  };

  export default MultiSelectorCheckbox