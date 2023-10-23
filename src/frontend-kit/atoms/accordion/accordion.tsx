import * as React from 'react';
import { useState } from 'react';

class AccordionProps {
  headline: string = '';
  small?: boolean;
  children?: React.ReactNode;
  scheme_background?: string;
}

/**
 * @name        Accordion
 *
 * @param       headline        The headline of the Accordion
 * @param       small           Wether accordion is small or not
 * @param       children        Nested text within accordion
 */

const Accordion: React.FunctionComponent<AccordionProps> = ({
  headline,
  small = false,
  children,
  scheme_background = 'integrated-primary',
  }) => {

  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className={`border-t border-bosch-black ${scheme_background}`}>
      <div onClick={() => setIsOpen(!isOpen)} className='flex flex-row justify-between items-center py-4 px-0 cursor-pointer hover:text-bosch-blue-45'>
        <h2 className={`font-bold mr-3 text-inherit ${small? 'size-m': 'size-xl'}`}>{headline}</h2>
        <i className={`boschicon-bosch-ic-down text-inherit text-2xl font-semibold ${isOpen? 'rotate-180':''} transition-transform duration-100`}/>
      </div>
      <div className={` ${!isOpen? 'hidden': ''}`}>{children}</div>
    </div>
  )
};

export default Accordion
export { AccordionProps };
