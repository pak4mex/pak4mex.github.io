import * as React from 'react';
import { useState } from 'react';
import Button from '../button/button';

/**
 * properties for a box
 */
interface BoxProps {

  className?: string; //tailwind classes container
  children?: React.ReactNode; // the child nodes of the component
  shadowed?: boolean; // Add shadow to box component
  label?: string
  boxBackground?: string
  scheme?: string
  icon?: string
  controller?: {state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>> | ((b: boolean) => void)}
}

const ModalBox: React.FunctionComponent<BoxProps> = ({
  children,
  shadowed = false,
  className='',
  boxBackground = 'bg-primary',
  label = '',
  scheme = 'major-accent-primary',
  icon,
  controller,
}) => {

   const [visible, setVisible] = controller? [controller.state, controller.setState]: useState(false);

  const box: JSX.Element = <>
    <div className={`flex justify-center items-center w-screen h-screen top-0 left-0 fixed inset-0 z-40 bg-bosch-black bg-opacity-25 ${!visible? 'hidden': ''}`}>
      <div onClick={() => setVisible(false)} className={` ${boxBackground} ${className} ${shadowed? 'bosch-shadow z-50': ''}`}>
        {children}
      </div>
    </div>
  </>

  return (
    <>
      {box}
      <Button onClick={() => setVisible(true)} label={label} icon={icon} className={scheme} />
    </>
  );

};



export default ModalBox;
