import * as React from 'react';

interface TableProps {
  // boolean to decide if static highlighted row is needed
  highlightRow?: (row: (JSX.Element | number | string)[], index: number) => boolean;
  // optional caption
  caption?: string;
  table: (JSX.Element | number | string)[][]}

const Table: React.FunctionComponent<TableProps> = ({
  highlightRow = (row, index) => false,
  caption,
  table
}: TableProps) => {
  console.log('Logging Table')
  console.log(table)
  return (
    <table className='w-full text-center'>
      <thead>
        <tr className='h-12 border-b-2'>{
          table[0].map((header, index) => (
            <th key={`header-${index}`} className='text-center my-3 mx-4' >{header}</th>
          ))
        }</tr>
      </thead>
      <tbody className=''>
        {table.slice(1, table.length).map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`} className={`h-12 border-b-2`}> 
          {/* ${highlightRow(row, rowIndex) ? 'bg-bosch-gray-50' : 'bg-bosch-white'}`} > */}
            {row.map((item, itemIndex) => (
              <td key={`row-${rowIndex}-item-${itemIndex}`} className='my-3 mx-4 text-center max-w-sm whitespace-normal'>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
export type { TableProps };
