import React from 'react';
import '../../styles/components/pagination.css'

type Props = {
  offset: number;
  total: number;
  limit: number;
  onClick: any;
}

const PaginationSimple: React.FC<Props> = props => {
  const numberOfPages = Math.ceil(props.total/ props.limit);

  return (
    <div className='pagination'>
      {
        [...Array(numberOfPages).keys()].map((number, index) => {
          const currentPage = number * props.limit
          return (
            <div 
                className={`pagination-item ${currentPage === props.offset ? 'pagination-item-active' :''}`}
                onClick={() => props.onClick(currentPage)}
                key={index}>
                { number + 1 }
            </div>
        );
        })
      }
    </div>
  )
}

export default PaginationSimple;