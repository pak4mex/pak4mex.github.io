import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '../button/button';

interface ValueModificatorProps {
  disabled?: boolean;
  label?: string;
  step?: number;
  min?: number;
  max?: number;
  value?: number;
  setValue?: (n: number) => void | React.Dispatch<React.SetStateAction<number>>;
}

const ValueModificator: React.FunctionComponent<ValueModificatorProps> = ({
  disabled,
  label,
  step = 5,
  min=undefined,
  max=undefined,
  value=0,
  setValue,
}: ValueModificatorProps) => {

  const [integer, setInteger] = setValue ? [value, setValue]: useState(0)
  const [inputState, setInputState] = useState('0')

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => setInputState(e.target.value)
  const handleBlur = () => handleMaxMin(!Number.isNaN(+inputState)? +inputState  : integer)
  const handleClick = (type: number) => handleMaxMin(integer + (type*step))
  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key == 'ArrowDown' && handleClick(-1)
    e.key === 'ArrowUp' && handleClick(1)
  }
  
  const handleMaxMin = (num:number)=>{
    if (typeof max != 'undefined' && num > max)  setVal(max)
    else if (typeof min != 'undefined' && num < min)  setVal(min)
    else setVal(num-(num%step))
  }

  const setVal = (n:number) => {setInteger(n); setInputState(n.toString())}

  return (
    <div className={`flex flex-row max-w-fit h-12 border-b border-bosch-black`}>
      <div className='inline-flex flex-col justify-end neutral-primary h-full py-0.5'>
        {label && <label className='mt-1 mr-3 mb-auto ml-4' >{label}</label>}
        <input 
          value={inputState} 
          onChange={handleInput}
          onBlur={handleBlur}
          onKeyDown={handleOnKeyDown}
          type="text" 
          disabled={disabled} 
          className='text-m my-auto ml-4 mr-3 bg-inherit border-none outline-none w-full' />
      </div>
      <Button onClick={() => handleClick(-1)} disabled={integer <= 0} icon='boschicon-bosch-ic-less-minimize' scheme='neutral-primary' className=' w-12 border-b border-bosch-black' />
      <Button onClick={() => handleClick(1)} icon='boschicon-bosch-ic-add' scheme='neutral-primary' className=' w-12 border-b border-bosch-black' />
    </div>
  );
};


export default ValueModificator;
export type { ValueModificatorProps };
