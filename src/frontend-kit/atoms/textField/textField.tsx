/* eslint-disable jsx-a11y/tabindex-no-positive */
import * as React from 'react';
import Button from '../button/button';
import { useState } from 'react';

interface TextfieldProps {
  withReset?: boolean;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  type?: 'text' | 'search' | 'password';
  text?: string;
  handleChange?: (t: string) => void;
  action?: () => void;
  fixedWidth?: string;
}


const TextField: React.FunctionComponent<TextfieldProps> = ({
  withReset,
  disabled,
  placeholder,
  label,
  type = 'text',
  text,
  handleChange,
  action,
  fixedWidth,
}: TextfieldProps) => {
  const isSearch = type === 'search';
  const isPassword = type === 'password';

  const [content, setContent] = handleChange ? [text, handleChange] : useState('');

  const style = fixedWidth ? { width: fixedWidth } : {}

  return (
    <div style={style} className={`inline-flex flex-row align-middle h-12 border-b border-bosch-black`}>
      <div className='neutral-primary flex-1 flex flex-col justify-center'>
        {label && <label className={`text-s mt-0.5 mb-0 mx-4`}>{label}</label>}
        <input
          className={` text-m appearance-none bg-inherit border-none outline-none h-6 focus:bg-inherit w-full
          ${label ? 'mb-0.5 mx-4 mt-0' : 'my-3 mx-4'}`}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {isPassword && (
        <Button className={`w-12 h-12 border-b border-bosch-black`} scheme="neutral-primary" icon="ui-ic-watch-on" />
      )}
      {isSearch && (
        <>
          {/* <Button disabled={true} onClick={action} className={`w-12 h-12 border-b-[1px] border-bosch-black`} scheme="neutral-primary" icon="ui-ic-search" /> */}
          {withReset && (
            <Button className={`w-12 h-12 border-b border-bosch-black`} scheme="neutral-primary" icon="ui-ic-close"
              onClick={() => setContent('')} />
          )}
        </>
      )}
    </div>
  );
};

export default TextField;
export type { TextfieldProps };
