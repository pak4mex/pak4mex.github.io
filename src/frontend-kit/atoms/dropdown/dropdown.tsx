import * as React from 'react';
import { useState } from 'react';

interface OptionProps {
  [name: string]: { action: () => void }
}

interface DropdownProps {
  options: OptionProps;
  disabled?: boolean;
  label?: string;
  fixedWidth?: number;
  defOp?: string;
  handleChange?: (t: string) => void;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  disabled,
  label,
  fixedWidth,
  options,
  defOp,
  handleChange
}) => {

  const style = fixedWidth ? { width: fixedWidth } : {}
  const [current, setCurrent] = handleChange? [defOp, handleChange]:useState(defOp? defOp: 'Arre')
  const [isOpen, setIsOpen] = useState(false);
  const [focusValue, setFocusValue] = useState();

  const handleSelect = (key: string, action: () => void) => {
    setCurrent(key)
    action()
  }

  const handleFocus = (event: any) => {
    const focusValue = event.target.value;
    console.log("Should be focus value", focusValue);
    setFocusValue(focusValue);
  }

  const handleBlur = (event: any) => {
    console.log('event.relatedTarget', event.relatedTarget);
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (isOpen) {
        setIsOpen(false);
      }
    }
    // setIsOpen(false);
  }

  return (
    <div className={`relative h-12 neutral-primary overflow-visible`} style={style} onClick={() => {disabled? null : setIsOpen(!isOpen)}} onBlur={handleBlur} tabIndex={0} >
      <div className='flex flex-row h-full w-full'>
        <div className='flex-1 overflow-hidden' onBlur={(e) => handleBlur(e)} >
          {label && <div className='text-s leading-none mt-1 mr-3 mb-auto ml-4 max-w-full'>{label}</div>}
          <div className={`truncate text-m mr-3 mb-auto ml-4 max-w-full ${label ? 'mt-1' : 'mt-auto'} ${disabled ? 'text-gray-500' : 'text-black'}`} onFocus={handleFocus}
            onBlur={(e) => handleBlur(e)} >{current}</div>
        </div>
        <div className='basis-12 h-full grid place-items-center'><i className='ui-ic-down m-auto' /></div>
      </div>
      <div className={`${!isOpen && 'hidden' || ''} absolute z-30 w-[100%]`}>{
        Object.keys(options).map(option => (
          <div key={option} onClick={() => handleSelect(option, options[option].action)} className='h-12 neutral-primary pl-4 flex items-center'><p>{option}</p></div>
        ))
      }</div>
    </div>
  );
};

export { Dropdown };
export type { DropdownProps, OptionProps };
