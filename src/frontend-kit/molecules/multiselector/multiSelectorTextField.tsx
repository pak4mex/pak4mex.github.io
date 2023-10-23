import * as React from "react"
import { useState } from "react";

interface MultiSelectorTextfieldProps {
    content?: string;
    setContent: React.Dispatch<React.SetStateAction<string>>
  }
  
  const MultiSelectorTextField: React.FunctionComponent<MultiSelectorTextfieldProps> = ({
    content,
    setContent,
  }: MultiSelectorTextfieldProps) => {
  
    const [text, setText] = [content, setContent]
  
    return (
      <div className={`inline-flex flex-row align-middle h-8 w-full`}>
        <div className='neutral-primary flex-1'>
          <input
            className={`appearance-none bg-inherit border-none outline-none h-full focus:bg-inherit ml-1 w-full`}
            type='text'
            placeholder='Quick Search'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button className={`w-8 h-8 leading-none neutral-primary ui-ic-search`} disabled/>
        <button className={`w-8 h-8 leading-none neutral-primary ui-ic-close`} onClick={() => setText('')} />
      </div>
    );
  };
  
  export default MultiSelectorTextField