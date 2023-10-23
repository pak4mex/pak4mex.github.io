import * as React from 'react';

interface DividerProps {
  vertical?: boolean;
  margin?: string;
}

const Divider: React.FunctionComponent<DividerProps> = ({vertical = false, margin = ''}) => {

  const style = {
    margin : margin + ' 0px'
  }

  return <div className={`border-bosch-gray-60 border-t ${!vertical ? 'w-full h-0' : 'w-0 h-full mx-3'}`} style={style} />

};

export default Divider;
