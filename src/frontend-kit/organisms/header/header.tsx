import * as React from 'react';
import Button from '../../atoms/button/button';
import Logo from './parts/logo';
import Divider from '../../atoms/divider/divider'
import BoschSuperGraphic from './parts/Bosch-Supergraphic_RGB.svg'

export interface HeaderProps {
  title: string;
  username: string;

}

/**
 * @name o-header
 * @type organism
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param {NavigationEntry[]} navigation    Navigation container to display.
 */

const Header: React.FunctionComponent<HeaderProps> = ({
  title = '',
  username = '',
}) => (
  <div className='sticky-header'>
    <div className="max-w-[100%]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 max-h-5"><img className=' w-full h-2 object-cover' src={BoschSuperGraphic} /></div>
        <div className="col-span-4 flex items-center pl-8">
          <h5><b>{title}</b></h5>
        </div>
        <div className="col-start-11 col-span-1">
          <Button scheme="integrated-primary" type="button" label={username} icon="a-icon boschicon-bosch-ic-user" />
        </div>
        <div className="col-start-12 col-span-1 p-3 pr-5">
          <Logo />
        </div>
      </div>
      <Divider />
    </div>
  </div>
);

export default Header;
