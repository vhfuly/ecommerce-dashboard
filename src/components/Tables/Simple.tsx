import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  header: string[];
  data: object[];
}

const SimpleTable: React.FC<Props> = props => (
  <div className='simple-table'>
    <table className='simple'>
      <thead>
        <tr>
          {
            props.header.map((item,index) =>(<th key={index}>{item}</th> ))
          }
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((row, index) =>(
            <tr key={index}>
               {
                  Object.values(row).map((item, indexHeader) => {
                    if (String(item).substr(0,1) === '/') return (
                      <td>
                      <Link to={String(item)}>
                        <button>
                          DETALHES
                        </button>
                      </Link>
                    </td>
                    ) 
                    else return (
                      
                      <td key={indexHeader}>{item|| ''}</td>
                    )
                  })
                }
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

export default SimpleTable;