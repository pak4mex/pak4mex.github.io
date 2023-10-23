import * as React from 'react';

interface BadgeProps {
  label: string;
  type?: 'warning' | 'error';
}

const Badge: React.FunctionComponent<BadgeProps> = ({ label, type }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div className={`inline-flex items-center rounded-lg text-xs h-4 justify-center min-w-[1rem] px-1 py-1 
    ${type === 'warning'? 'bg-bosch-yellow-75': type === 'error'? 'bg-bosch-red-50 text-bosch-white' : 'bg-bosch-blue-40 text-bosch-white'}`}>
      {label}
    </div>
  );
};

export default Badge;
export type { BadgeProps };
