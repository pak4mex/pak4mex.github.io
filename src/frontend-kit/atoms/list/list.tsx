import * as React from 'react';

class ListProps {
  ordered?: boolean;
  checked?: boolean;
  small?: boolean;
  listItems: string[] = [];
}

const List: React.FunctionComponent<ListProps> = ({
  ordered = false,
  checked = false,
  listItems = [],
  small = false
}: ListProps) => {

  const listStyle = ordered? {
    listStyleType: 'decimal',
  }: checked? {
    listStyle: 'none',
  }: {listStyleType: 'square',}

  const classnames = 'list-inside ' + (small? 'text-s mb-1': 'text-m mb-2')

  const itemsJSX: React.ReactNode = (<React.Fragment>
    {checked? listItems.map((item, index)=> (
      <li className={classnames}>
        <div className='flex flex-row align-middle'>
          <span key={index} className='ui-ic-inline-list-checkmark mr-1 text-xl inline-block' />
          <span className='inline-block'>{item}</span>
        </div>
      </li>
    )) : listItems.map( (item, index) => (
      <li key={index} className={classnames}><span className='inline-block'>{item}</span></li>
    ))}
  </React.Fragment>)

  return (
    ordered? <ol style={listStyle}>{itemsJSX}</ol>: <ul style={listStyle}>{itemsJSX}</ul>
  );
};

export default List;
export { ListProps };
