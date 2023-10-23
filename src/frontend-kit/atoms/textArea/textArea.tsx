import * as React from 'react';
import { useState } from 'react';

interface TextAreaProps {
  disabled?: boolean;
  id: string;
  placeholder?: string;
  dynamicHeight?: boolean;
  label?: string;
  text?: string;
  handleChange?: () => void;
}

/**
 * @name        a-text-area
 * @type        atom
 * @author      Experience One AG
 * @copyright   Robert Bosch GmbH
 *
 * @param       disabled      Wether or not the text area is disabled
 * @param       id              Unique ID for the text area
 * @param       placeholder     Placeholder of text area
 * @param       dynamicHeight    Wether or not the text area has a dynamic height
 * @param       label           Label of text area
 *
 * @description
 * representation of text area
 */

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  disabled,
  id,
  placeholder,
  dynamicHeight,
  label,
  text,
  handleChange,
}: TextAreaProps) => {
  // const inputClass = classNames('a-text-area', {
  //   [`a-text-area--dynamic-height`]: dynamicHeight,
  // });

  const [content, setContent] = handleChange ? [text, handleChange] : useState('');
  
  return (
    <div className={`inline-flex flex-row align-middle min-h-12`}>

      <div className='neutral-primary border-b border-bosch-black'>
        {label && <label className={`mt-1 mb-4 mx-auto`}>{label}</label>}
        <textarea id={id} disabled={disabled} placeholder={placeholder}
          className={`appearance-none bg-inherit border-none outline-none focus:bg-inherit mt-5 mb-4 mx-3`} 
          value={content}
          onChange={(e) => setContent(e.target.value)}/>
      </div>

    </div>
  );
};

export default TextArea;
export type { TextAreaProps };
