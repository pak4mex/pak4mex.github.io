interface ButtonProps {
    disabled?: boolean;
    icon?: string;
    onClick?: () => void;
    label?: string;
    active: boolean;
  }
  
  const Button: React.FunctionComponent<ButtonProps> = ({
    disabled,
    label,
    icon,
    onClick = () => {},
    active
  }) => {

    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type='button'
        className={`flex flex-row items-center gap-2 justify-between h-8 px-4 ${active? 'major-accent-primary': 'minor-accent-primary'}`}
        disabled={disabled}
        onClick={onClick}
      >
        {icon && <i className={` text-sm inline-block ${icon}`} />}
        {label && <span className='text-m my-auto'>{label}</span>}
      </button>
    );
  };
  
  export default Button;

  