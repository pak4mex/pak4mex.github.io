import * as React from 'react';
import { useState } from 'react';

interface DatePickerProps {
  label?: string;
  date?: Date;
  handleChange?: (d: Date) => void;
  fixedWidth?: string;
}

const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  label,
  date = new Date(),
  fixedWidth,
  handleChange,
}: DatePickerProps) => {

  const [dateSelected, setDateSelected] = handleChange ? [date, handleChange] : useState(new Date())
  const style = fixedWidth ? { width: fixedWidth } : {}

  const generateDate = () => {
    try {
      return dateSelected.toISOString().split('T')[0]
    }catch{
      console.log(`DATE ERROR`)
      return new Date().toISOString().split('T')[0]
    }
  }

  return (
    <div style={style} className={`inline-flex flex-row align-middle h-12 border-b border-bosch-black`}>
      <div className='neutral-primary flex-1 flex flex-col justify-center'>
        {label && <label className={`text-s mt-0.5 mb-0 mx-4`}>{label}</label>}
        <input
          className={` text-m appearance-none bg-inherit border-none outline-none h-6 focus:bg-inherit
          ${label ? 'mb-0.5 mx-4 mt-0' : 'my-3 mx-4'}`}
          type="date"
          value={generateDate()}
          onChange={(e) => { const val = dateSelected; const d = new Date(); console.log(`Value: ${val}, Event: ${e.target.value}`); setDateSelected(e.target.value == '' ? new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0) : new Date(e.target.value)) }}
        />
      </div>
    </div>
  );
};

export default DatePicker;
export type { DatePickerProps };