import * as React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  scheme?: string;
  disabled?: boolean;
  icon?: string;
  tabIndex?: number;
  onClick?: () => void;
  label?: string;
  className?: string;
  height?: string;
}

/**
 * @name    a-button
 * @type    atom
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} type                 Type of Attribute (button, submit, reset)
 * @param   {string} label                Label to Display
 * @param   {boolean} disabled          Disable or not the Button
 * @param   {string} icon                 Icon to Display
 * @param   {isUiIcon}  boolean           whether or not it's an icon from the UI font or not
 * @param   {boolean} fixedWidth          Fixed or not fixed width
 * @param   {string} action               Name of the action this button should be used for
 * @param   {string[]} additionalClasses  Additional css classes
 * @param   {string} ariaHaspopup         Accessibility role. Used for popup context menu or sub-level menu.
 * @param   {string} ariaExpanded         Accessibility expanded. Used for toggle button.
 * @param   {string} ariaLabel            Accessibility label. Used if label doesn't exist
 * @param   {string} ariaLabelledBy       Accessibility label. Used if label does exist.
 * @param   {number} tabIndex             Index of sequential keyboard navigation
 *
 * @description
 * representation of buttons
 */

const Button: React.FunctionComponent<ButtonProps> = ({
  type = 'button',
  scheme = 'major-accent-primary',
  disabled,
  label,
  icon,
  onClick = () => {},
  className = '',
  tabIndex = 0,
  height
}) => {

  const style = height? {height: height}: {}

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`flex flex-row items-center ${className} h-12 ${scheme}`}
      disabled={disabled}
      tabIndex={tabIndex}
      onClick={onClick}
      style={style}
    >
      {icon && <i className={` text-sm inline-block ${icon} ${label? 'mr-2 ml-2': 'mx-3 my-3'}`} />}
      {label && <span className={`text-m my-auto ${icon? 'mr-2': 'mx-2'}`}>{label}</span>}
    </button>
  );
};

export default Button;
export type { ButtonProps };
