import * as React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { createContext } from 'react';

export const sidebarOpen = createContext(true);

interface SubItem {
  label: string;
  url?: string;
  isDisabled?: boolean;
}

interface MenuItem {
  label: string;
  icon: string;
  url?: string;
  isDisabled?: boolean;
  subItems?: SubItem[];
}

interface SideNavigationProps {
  menuItems: MenuItem[];
  appName: string;
  isOpen: boolean;
  setIsOpen: any;
}

const SideNavigation: React.FunctionComponent<SideNavigationProps> = ({
  appName,
  menuItems,
  isOpen,
  setIsOpen

}) => {

  // const [ isOpen, setIsOpen] = useState(false)
  const [subMenusToggle, setSubMenusToggle] = useState(menuItems.map(() => false))
  const [activeLabel, setActiveLabel] = useState(menuItems[0].label)
  const duration = 'duration-300'

  React.useEffect(() => {
    if (!isOpen) {
      setSubMenusToggle(menuItems.map(() => false))
    }
  }, [isOpen])

  const manipToggles = (index: number, value: boolean) => {
    let copyArr = [...subMenusToggle]
    copyArr[index] = value
    setSubMenusToggle(copyArr)
    setIsOpen(true)
  }

  const manipActLabel = (newLabel: string) => {
    setActiveLabel(newLabel)
  }

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
      setSubMenusToggle(menuItems.map(() => false))
    } else setIsOpen(true)
  }


  return (
    <sidebarOpen.Provider value={isOpen}>
      <div className="">
        {/* {isOpen ? <></> : setSubMenusToggle(menuItems.map( () => false))} */}

        <div className={`${isOpen ? "w-80" : "w-12"} bg-bosch-gray-15 text-white min-h-screen max-h-screen h-full relative custom-scrollbars__content ${duration}`} style={{ cursor: "pointer", userSelect: 'none', bottom: 0, overflow: "auto" }}>

          <header className={`flex flex-row justify-between items-center mb-4 bg-bosch-gray-15 ${isOpen && "w-auto"}`} style={{ position: "absolute", zIndex: "200" }}>

            <p className={`text-l font-semibold relative ${isOpen ? 'ml-4' : '-translate-x-[17rem] w-0'} ${duration}`}>{appName}</p>
            <div className={` ${isOpen ? 'ui-ic-close translate-x-[9.4rem]' : 'ui-ic-menu'} ${duration} flex items-center justify-center text-xl w-12 h-12 hover:bg-bosch-gray-50 active:bg-bosch-gray-30 ${duration}`} onClick={handleClick} />
          </header>

          <div className='' style={{ marginTop: "4rem" }}>
            <ul key='MenuItems'>
              {menuItems.map((item, index) => (
                <MenuComponent key={`MenuComponent-${index}`} setIsOpen={setIsOpen} item={item} duration={duration} isOpen={isOpen} index={index} togglesArr={subMenusToggle} toggleController={manipToggles} actLabel={activeLabel} labelController={manipActLabel} />
              ))}
            </ul>
          </div>

        </div>
      </div>
    </sidebarOpen.Provider>
  );
};

interface MenuComponentProps {
  setIsOpen: any;
  item: MenuItem;
  isOpen: boolean;
  duration: string;
  index: number;
  togglesArr: boolean[];
  toggleController: (i: number, v: boolean) => void
  actLabel: string
  labelController: (label: string) => void
}

const MenuComponent: React.FunctionComponent<MenuComponentProps> = ({
  setIsOpen,
  item,
  isOpen,
  duration,
  index,
  togglesArr,
  toggleController,
  actLabel,
  labelController
}) => {

  const handleClick = (label: string) => {
    labelController(label)
    // setIsOpen(true)
    // console.log("hola")

  }

  if (item.subItems) return <GroupComponent setIsOpen={setIsOpen} item={item} isOpen={isOpen} duration={duration} index={index} togglesArr={togglesArr} toggleController={toggleController} actLabel={actLabel} labelController={labelController} />

  return (
    <Link to={item.url ? item.url : ''} >
      <div className={'hover:text-white'} style={{ cursor: "pointer", userSelect: 'none' }}>
        <li
          key={`MenuItem${index}`}
          className={`flex flex-row h-12 justify-between items-center  hover:bg-bosch-blue-50 active:bg-bosch-gray-50 
          `}
          onClick={() => handleClick(item.label)}
        >
          <div className={`flex items-center justify-center  ${item.icon} text-xl w-12 h-12 bg-inherit z-20`} />
          <div className={` flex flex-col flex-1 items-start  ${isOpen ? 'ml-4 ' : '-translate-x-[17rem] w-0 z-10 '} ${duration}`}>

            <div className={`flex flex-col flex-1 items-start  ${isOpen ? 'ml-0' : '-translate-x-[17rem] w-0 z-10'} ${duration}`}>
              <p>{item.label}</p>
            </div>

          </div>
        </li>
      </div>
    </Link>
  )
}

const GroupComponent: React.FunctionComponent<MenuComponentProps> = ({
  item,
  isOpen,
  duration,
  index,
  togglesArr,
  toggleController,
  actLabel,
  labelController
}) => {

  const handleClick = (index: number) => {
    item.subItems && labelController(item.subItems[index].label)

  }

  return (
    <li key={`GroupMenuItem${index}`} className={`flex flex-col w-full `} style={{ cursor: "pointer", userSelect: 'none' }}>
      <div className='flex flex-row justify-between items-start text-white bg-bosch-gray-15 hover:bg-bosch-blue-50 active:bg-bosch-gray-30' >
        <div className={`flex items-center justify-center ${item.icon} text-xl w-12 h-12 bg-inherit text-white hover:bg-bosch-blue-50 active:bg-bosch-gray-30 z-20`} onClick={() => toggleController(index, !togglesArr[index])} />
        <div className={`flex flex-col flex-1 items-start hover:text-white ${isOpen ? 'ml-4' : '-translate-x-[17rem] w-0 z-10'} ${duration}`}>
          <div className='flex flex-row items-center justify-between w-full h-12 hover:text-white' onClick={() => toggleController(index, !togglesArr[index])}>
            <p className='hover:text-white'>{item.label}</p>
            <div className='flex items-center justify-center ui-ic-down w-12 text-xl' />
          </div>
        </div>
      </div>
      <ul key={'Subitems'} className={`flex flex-col ${!togglesArr[index] && 'hidden'}`}>
        {item.subItems?.map((subItem, index) => (
          <Link to={subItem.url ? subItem.url : ''} key={`SubLink${index}`}>
            <div className={` hover:text-white hover:bg-bosch-blue-50 bg-bosch-gray-30`} style={{ left: 0, paddingLeft: 0 }}>
              <li key={`Subtitem-${index}`} className={`flex items-center h-12 ml-16 pl-4`} onClick={() => handleClick(index)}>
                {subItem.label}
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </li>
  )
}

export default SideNavigation;
export type { SideNavigationProps };
