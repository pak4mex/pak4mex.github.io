import * as React from 'react';
import { useState } from 'react';
import Divider from '../../atoms/divider/divider';
import Button from './multiSelectorButton';
import  Checkbox from './multiSelectorCheckBox';
import TextField from './multiSelectorTextField';


interface MultiSelectorProps {
  options: string[];
  disabled?: boolean;
  label?: string;
  fixedWidth?: string;
  output?: string[];
  setOutput?: React.Dispatch<React.SetStateAction<string[]>>;
}

const MultiSelector: React.FunctionComponent<MultiSelectorProps> = ({
  disabled,
  label,
  fixedWidth,
  options,
  output=[],
  setOutput
}) => {
  

  const [selected, setSelected] = setOutput? [output, setOutput]: useState([] as string[]);

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('')

  const [sort, setSort] = useState(0)


  const style = fixedWidth? {width: fixedWidth}: {}

  const handleSort = (id: boolean) => {
    id? (
      sort===1? setSort(0): setSort(1)
    ) : (
      sort===2? setSort(0): setSort(2)
    )
  }
  

  const toggleItem = (item: string) => {
    selected.includes(item)? setSelected(selected.filter((option) => option != item)) : setSelected(selected.concat(item))
  }

  const getOptions = (): string[] => {
    return search? options.filter(option => option.includes(search)) : options
  }

  return (
    <div className={`relative h-12 overflow-visible z-30`} style={style} >
      <div className='flex flex-row items-center h-full neutral-primary' onClick={()=>setIsOpen(!isOpen)}>
        <div className='flex-1'>
          {label && <div className='leading-none ml-2'>{label}</div>}
        </div>
        <div className='basis-12 h-full grid place-items-center'><i className='ui-ic-down m-auto' /></div>
      </div>
      <div className={`flex flex-col bg-float items-start bosch-shadow mt-1 h-56 ${!isOpen && 'hidden' || ''}`}>

        <div className='flex flex-row justify-between w-full px-4 py-0.5'>
          <Button icon='ui-ic-up' label='Sort' active={sort===1} onClick={() => handleSort(true)} />
          <Button icon='ui-ic-down' label='Sort' active={sort===2} onClick={() => handleSort(false)} />
        </div>

        <div className='mb-2 w-full'>
          <Divider />
        </div>
        <div className='mx-[1%] w-[98%]'>
          <TextField content={search} setContent={setSearch} />
        </div>
        <div className='overflow-auto flex-1 w-full'>
          {
            getOptions().map( (option, index) => (
              //<div key={option} onClick={() => handleSelect('')} className='h-12 neutral-primary pl-4 flex items-center'><p>{option}</p></div>
              <div key={'Chekbox-'+index} className='p-2'>
                <Checkbox label={option} onChange={() => toggleItem(option)} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MultiSelector;
export type { MultiSelectorProps };