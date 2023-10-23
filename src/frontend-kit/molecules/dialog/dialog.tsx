import * as React from 'react';
import { useState } from 'react';

import Button from '../../atoms/button/button';
import Divider from '../../atoms/divider/divider';
import ModalBox from '../../atoms/modalbox/modalbox';

interface DialogProps {
  // title of the dialog window
  title?: string;
  // variant identifier,
  type?: 'info' | 'success' | 'warning' | 'error';
  // if true, show a close button,
  noClose?: boolean;
  // The headline of the dialog box content
  headline?: string;
  optionalButton?: JSX.Element;
  children?: React.ReactNode;
  buttonProps?: {
    label?: string,
    icon?: string,
    scheme?: string
  },
  showBoxState?: boolean,
  handleShowBoxState?: React.Dispatch<React.SetStateAction<boolean>> | ((b: boolean) => void),
  showConfirmButton?: boolean,
  showCancelButton?: boolean,
  onConfirm?: () => void,
  onCancel?: () => void,
  onClose?: () => void,
  width?: string
}

const Dialog: React.FunctionComponent<DialogProps> = ({
  title = '',
  type,
  noClose = false,
  headline = '',
  optionalButton,
  children,
  buttonProps,
  showBoxState = false,
  handleShowBoxState,
  showConfirmButton = false,
  showCancelButton = false,
  onConfirm = () => {},
  onCancel = new Function(),
  onClose = new Function(),
  width = ''
}) => {

  
  const [showBox, setShowBox] = handleShowBoxState? [showBoxState, handleShowBoxState] : useState(false);
  
  const alertBg: string | null = (() => {
    switch(type){
      case 'error': return 'bg-bosch-red-50';
      case 'info': return 'bg-bosch-blue-50'; 
      case 'success': return 'bg-bosch-green-50';
      case 'warning': return 'bg-bosch-yellow-85';
      default: return null;
    }
  })()

  return (<>
  <ModalBox {...buttonProps} className={`overflow-auto max-h-full ${width? width: 'max-w-2xl'}`} controller={{state: showBox, setState: setShowBox}} >
    <div className='w-full h-full flex flex-col' onClick={(e) => e.stopPropagation()}>
      <div className='basis-auto w-full'>
        {type && <hr className={`h-[0.375rem] ${alertBg}`} />}
        <div className='flex flex-row items-center justify-between' >
          <span className='text-m font-bold my-3 mx-8'>{title}</span>
          {!noClose && <i onClick={()=>{onClose(); setShowBox(false)}} className='inline ui-ic-close mx-[0.875rem] text-center hover:text-bosch-blue-40' />}
        </div>
      </div>
      <Divider />
      <div className='basis-auto'>
        <div className='pt-6 pb-8 px-8'>
          <div className='text-xl font-bold mb-4'>{headline}</div>
          <div className='mb-4'>{children}</div>
          <div className='mt-6 flex flex-row gap-4 justify-end'>
            <div className='inline-block basis-full'>{optionalButton && optionalButton}</div>
            {showConfirmButton&&<Button onClick={()=>{onConfirm(); setShowBox(false)}} className='w-36' label='Confirm' />}
            {showCancelButton&&<Button onClick={() =>{onCancel(); setShowBox(false)}} className='w-36 border-bosch-blue-40 border-[1px]' scheme='minor-accent-primary' label='Cancel' />}
          </div>
        </div>
      </div>
    </div>
  </ModalBox>
  </>);
};

export default Dialog;
