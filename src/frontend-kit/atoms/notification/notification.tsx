import * as React from 'react';

interface NotificationProps {
  type: 'neutral' | 'success' | 'warning' | 'error';
  children?: React.ReactNode;
  className?: string
}

const Notification: React.FunctionComponent<NotificationProps> = ({
  type,
  children,
  className = '',
}) => {

  const [classNames, icon] = ((): [string, string] => {

    let classNames, icon: string;

    switch(type){
      case 'error': 
        classNames = 'bg-bosch-red-90'
        icon = 'ui-ic-alert-error'
        break;
      case 'warning':
        classNames = 'bg-bosch-yellow-90'
        icon = 'ui-ic-alert-warning'
        break;
      case 'neutral':
        classNames = 'bg-bosch-blue-90'
        icon = ''
        break;
      case 'success':
        classNames = 'bg-bosch-green-90'
        icon = 'ui-ic-alert-success'
        break;
      default: 
        classNames = ''
        icon = ''
    }

    return [classNames, icon]
  })()

  return (
    <div className={`flex flex-row p-2 ${classNames} ${className}`}><i className={`mr-2 ${icon}`} />{children}</div>
  );
};

export default Notification;
export type { NotificationProps };
