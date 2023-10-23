/* eslint-disable max-classes-per-file */
import * as React from 'react';
import Button from '../button/button';

/**
 * a typescript helper function that tells typescript that a TabLink is indeed a TabLink
 */

interface Tab {
  label?: string;
  icon?: string;
  disabled?: boolean;
  action?: ()=> void;
}

const handleSelect = (action: () => void) => {
  action();
}

interface TabNavigationProps {
  tabs: Tab[];
  state?: number;
  setState?: React.Dispatch<React.SetStateAction<number>>
}

const TabNavigation: React.FunctionComponent<TabNavigationProps> = ({
  tabs = [],
  state,
  setState,
}: TabNavigationProps) => {

  const innertabs = tabs.map(element => {
    return {
      label: element.label || '',
      icon: element.icon || '',
      disabled: element.disabled || false,
      action: element.action || new Function()
    }
  })

  const [activeIndex, setActiveIndex] = setState? [state, setState]: React.useState(0)

  const getButtonProps = (tab: Tab, index: number) => {
    let active = state === index? true: false
    return {
      label: tab.label || '',
      icon: tab.icon || '',
      disabled: tab.disabled,
      scheme: active? 'minor-accent-primary':'integrated-primary',
      className: active? 'border-b-2 border-bosch-blue-50':'',
    }
  }

  return (
    <div className='px-4 h-12 flex flex-row'>
      {tabs.map((tab, index) => (
        <Button {...getButtonProps(tab, index)} onClick={() => setActiveIndex(index)}/>
        // <Button {...getButtonProps(tab, index)} onClick={() => {setActiveIndex(index); handleSelect(() => innertabs[index].action())}}
        //   className={`${activeIndex === index ? 'border-b-2 border-bosch-blue-50 text-bosch-blue-50' : ''}`}/>
      ))}
    </div>
  );
};

export default TabNavigation;
