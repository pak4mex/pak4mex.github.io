import * as React from 'react';

class ActivityIndicatorProps {
  size?: 'medium' | 'large' | 'small';
}
/**
 * @name    a-activity-indicator
 * @type    atom
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string}  size     given size to the activityindicator
 * @description
 * animation component while loading
 */
const ActivityIndicator: React.FunctionComponent<ActivityIndicatorProps> = ({
  size,
}: ActivityIndicatorProps) => {

  return (
    <div className={`${size === 'small'? 'w-4 h-4' : size === 'large'? 'w-16 h-16': 'w-8 h-8'} relative`}>
      <div className="h-1/3 w-1/3 bg-bosch-red-50 animate-activity-indicator-top-box absolute top-1/3 left-1/3 z-[1]" />
      <div className="h-1/3 w-1/3 bg-bosch-purple-50 animate-activity-indicator-bottom-box absolute top-1/3 left-1/3" />
    </div>
  );
};

export default ActivityIndicator
export { ActivityIndicatorProps };
