import * as React from 'react';

class ChipProps {
  name?: string;
  label: string = '';
  disabled?: boolean;
  buttonClose?: boolean;
  image?: string;
  fixedWidth?: number;
  selected?: boolean;
  onClick?: () => void;
}

const Chip: React.FunctionComponent<ChipProps> = ({
  name,
  label,
  disabled,
  buttonClose,
  image,
  fixedWidth,
  selected,
  onClick= () => {},
}: ChipProps) => {

  const style = fixedWidth? {width: fixedWidth}: {}

  return(
    <button disabled={disabled} onClick={onClick} className={`flex items-center h-8 rounded-l-full rounded-r-full ${selected? 'major-accent-primary': 'neutral-primary'}`} style={style}>
      {image && <img src={image} className='h-6 w-6 my-auto mr-4 ml-2 rounded-full ' />}
      <span className={`text-inherit my-auto mx-4 ${image && 'ml-2'} ${buttonClose && 'mr-[0.375rem]'}`}>{label}</span>
      {buttonClose && <i className='text-xl my-auto mr-2 ml-[0.375rem] ui-ic-close-small' />}
    </button>
  )

};

export default Chip
export { ChipProps };
